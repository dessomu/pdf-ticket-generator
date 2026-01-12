import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TEMPLATE_REGISTRY } from "../templates"; // We need to fix this import path if TEMPLATE_REGISTRY isn't exported centrally yet
import FlightDetailsForm from "../components/FlightDetailsForm";
import PassengerDetailsForm from "../components/PassengerDetailsForm";
import { mapIndigoData, mapMMTData, mapMoveData } from "../templates/mappers";

// Utils
import { generatePdf } from "../utils/pdf";
import { buildBarcodeText } from "../utils/barcodeBuilder";
import { generatePDF417 } from "../utils/barcode";
import { splitName } from "../utils/name";

export default function TicketFormPage() {
  const { family, count } = useParams();
  const navigate = useNavigate();
  const paxCount = parseInt(count) || 1;

  const suffix = paxCount === 1 ? 'single' : paxCount === 2 ? 'double' : 'triple';
  const templateId = `${family}_${suffix}`;
  
  const template = TEMPLATE_REGISTRY[templateId] || TEMPLATE_REGISTRY["indigo_th_single"]; // Fallback for safety/testing

  const [loading, setLoading] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  // Common Flight Details
  const [flightForm, setFlightForm] = useState({
    bookingDate: "",
    bookingTime: "",
    pnr: "",
    pdfName: "",
    
    departureBoardingDate: "",
    departureLandingDate: "",
    departureFlightNo: "",
    
    returnBoardingDate: "",
    returnLandingDate: "",
    returnFlightNo: "",
    
    barcodeExtra: "",
    
    // MMT specific
    bookingId: "",
  });

  // Passengers Array
  const [passengers, setPassengers] = useState(
    Array(paxCount).fill(null).map(() => ({ passengerName: "" }))
  );

  // Re-initialize passengers if count changes (rare, but good practice)
  useEffect(() => {
    if (passengers.length !== paxCount) {
        setPassengers(Array(paxCount).fill(null).map((_, i) => passengers[i] || { passengerName: "" }));
    }
  }, [paxCount]);

  // Apply template-specific defaults when template changes
  useEffect(() => {
    const defaults = template?.config?.defaults;
    if (defaults) {
      setFlightForm(prev => ({
        ...prev,
        departureFlightNo: defaults.departureFlightNo || prev.departureFlightNo,
        returnFlightNo: defaults.returnFlightNo || prev.returnFlightNo,
        barcodeExtra: defaults.barcodeExtra || prev.barcodeExtra,
      }));
    }
  }, [templateId]);


  const handleFlightChange = (e) => {
    setFlightForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePassengerChange = (index, field, value) => {
    const newPax = [...passengers];
    newPax[index] = { ...newPax[index], [field]: value };
    setPassengers(newPax);
  };
  
  // Helper formats moved to src/utils/date.js and used in mappers


  const handleGenerate = async () => {
    try {
        setLoading(true);
        console.log("Generating for template:", templateId);
        
        const firstPax = passengers[0];

        // Select Mapper based on template family
        let pdfFields = {};
        if (templateId.includes('mmt')) {
            pdfFields = mapMMTData(flightForm, passengers, templateId);
        } else if (templateId.includes('move_thailand') || templateId.includes('move_malaysia')) {
            pdfFields = mapMoveData(flightForm, passengers, templateId);
        } else {
            // Default to Indigo
            pdfFields = mapIndigoData(flightForm, passengers, templateId);
        }

        
        // Barcodes
        // We'll generate a dictionary of { key: imageData }
        const barcodeImages = {};

        if (template?.config?.barcode?.enabled) {
            // Helper to generate and store
            const addBarcode = (suffix, paxName) => {
                 const { surname: s, firstName: f } = splitName(paxName);
                 
                 const depText = buildBarcodeText({
                    surname: s,
                    name: f,
                    pnr: flightForm.pnr,
                    source: template.config.barcode.legs.return.destination, // using existing logic
                    destination: template.config.barcode.legs.departure.destination,
                    flightNo: flightForm.departureFlightNo,
                    suffix: flightForm.barcodeExtra,
                });
                const retText = buildBarcodeText({
                    surname: s,
                    name: f,
                    pnr: flightForm.pnr,
                    source: template.config.barcode.legs.departure.destination,
                    destination: template.config.barcode.legs.return.destination,
                    flightNo: flightForm.returnFlightNo,
                    suffix: flightForm.barcodeExtra,
                });
                
                // suffix is like "" (for 1st pax), "_2", "_3"
                // mapping keys: departure, return, departure_2, return_2
                const keyDep = `departure${suffix}`;
                const keyRet = `return${suffix}`;
                
                barcodeImages[keyDep] = generatePDF417(depText);
                barcodeImages[keyRet] = generatePDF417(retText);
            };

            // Generate for Pax 1 (suffix "")
            addBarcode("", firstPax.passengerName);
            
            // Generate for other passengers
             passengers.forEach((pax, i) => {
                if (i === 0) return; 
                // suffix: _2, _3
                addBarcode(`_${i + 1}`, pax.passengerName);
            });
        }

        // Generate
        const pdfBytes = await generatePdf({
            templatePdf: template.pdf,
            mapping: template.mapping,
            fields: pdfFields,
            barcodes: barcodeImages,
            debug: showGrid,
            pdfName: flightForm.pdfName,
        });

        // Download
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${flightForm.pdfName}.pdf`;
        a.click();
        URL.revokeObjectURL(url);

        // Reset Form
        setFlightForm({
            bookingDate: "",
            bookingTime: "",
            pnr: "",
            pdfName: "",
            departureBoardingDate: "",
            departureLandingDate: "",
            departureFlightNo: "",
            returnBoardingDate: "",
            returnLandingDate: "",
            returnFlightNo: "",
            barcodeExtra: "",
            bookingId: "",
        });
        setPassengers(Array(paxCount).fill(null).map(() => ({ passengerName: "" })));

    } catch (err) {
        console.error(err);
        alert("Failed to generate PDF. See console.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", fontFamily: "sans-serif" }}>
        <button onClick={() => navigate('/')} style={{ marginBottom: 20, cursor: 'pointer' }}>&larr; Back to Home</button>
        
        <h2>{family.toUpperCase()} - {paxCount} Passenger{paxCount > 1 ? 's' : ''}</h2>
        
        {/* Flight Details (Shared) */}
        <FlightDetailsForm 
            form={flightForm} 
            handleChange={handleFlightChange} 
            templateConfig={template?.config}
        />
        
        <div style={{ margin: '10px 0' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                <input 
                    type="checkbox" 
                    checked={showGrid} 
                    onChange={e => setShowGrid(e.target.checked)} 
                />
                Show Debug Grid in PDF (for aligning coordinates)
            </label>
        </div>

        {/* Passenger Details (Repeated) */}
        {passengers.map((pax, i) => (
            <PassengerDetailsForm 
                key={i} 
                index={i} 
                passenger={pax} 
                handleChange={handlePassengerChange} 
                showETicket={templateId.includes('mmt')}
            />
        ))}

        <button 
            onClick={handleGenerate} 
            disabled={loading}
            style={{
                width: '100%',
                padding: 15,
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                fontSize: 18,
                cursor: 'pointer'
            }}
        >
            {loading ? "Generating..." : "Generate PDF"}
        </button>
    </div>
  );
}
