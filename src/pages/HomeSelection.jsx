import { useState } from "react";
// We don't have the real registry imported yet in this snippet, but we will in the final code.
// Assuming we pass it as a prop or import it.
import { TEMPLATE_REGISTRY } from "../templates";
import { useNavigate } from "react-router-dom";

export default function HomeSelection() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState("mmt_malaysia");
  const [paxCount, setPaxCount] = useState(1);

  // Helper to extract passenger counts from template IDs if needed, 
  // or just hardcode selection if templates are specific (e.g. mmt_malayasia_single vs double)
  // For this specific request, the user wants "single", "double", "triple" templates.
  // We can let the user pick "MMT Malaysia" and "Passenger Count", then map that to the specific template ID.
  
  // Actually, the plan says: "Lists available templates... Allow user to select Number of Passengers"
  // And the templates are named `mmt_malayasia_single`, `mmt_malayasia_double`, etc.
  
  const handleProceed = () => {
    // Construct the template ID based on selection? 
    // Or just pass the logic to the next page?
    // Let's assume the user selects "MMT Malaysia" generally, and the count determines the specific template file?
    // OR, we just select the specific template directly.
    
    // Simplest approach: "Select Template Family" + "Passenger Count" -> derive template ID.
    // But since the IDs are explicit (mmt_malayasia_single), let's map it.
    
    // Let's assume for now we just navigate to the form and let the form handle loading the right template logic 
    // OR we pick the ID right here.
    
    let templateId = selectedTemplate;
    
    // If we want to support dynamic switching based on count:
    // This is a bit rigid if we hardcode "mmt_malayasia_single".
    // Let's simplify: User picks "MMT Malaysia", and "2 Pax".
    // We navigate to /form/mmt_malayasia/2
    // And the TicketFormPage figures out it needs `mmt_malayasia_double` config.
    
    // However, the registry keys will be unique.
    // Let's navigate to /form/:family/:count
    // Family = mmt_malayasia
    
    navigate(`/form/${selectedTemplate}/${paxCount}`);
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>PDF Ticket Generator</h1>
      
      <div style={{ margin: "20px 0", border: '1px solid #ccc', padding: 20, borderRadius: 8 }}>
        <h3>Select Ticket Type</h3>
        <select 
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            style={{ padding: 10, fontSize: 16, width: "100%", marginBottom: 20 }}
        >
            <option value="mmt_malaysia">MMT Malaysia</option>
            {/* Add more template families here as they come */}
            <option value="indigo_th">Thailand Indigo (Legacy)</option>
        </select>

        <h3>Number of Passengers</h3>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            {[1, 2, 3].map(num => (
                <button 
                    key={num}
                    onClick={() => setPaxCount(num)}
                    style={{
                        padding: "10px 20px",
                        fontSize: 16,
                        backgroundColor: paxCount === num ? "#007bff" : "#f0f0f0",
                        color: paxCount === num ? "white" : "black",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer"
                    }}
                >
                    {num} Passenger{num > 1 ? 's' : ''}
                </button>
            ))}
        </div>
      </div>

      <button 
        onClick={handleProceed}
        style={{
            marginTop: 20,
            padding: "15px 30px",
            fontSize: 18,
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer"
        }}
      >
        Proceed to Data Entry
      </button>
    </div>
  );
}
