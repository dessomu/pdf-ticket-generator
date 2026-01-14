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
  const handleProceed = () => {
    let templateId = selectedTemplate;
    navigate(`/form/${selectedTemplate}/${paxCount}`);
  };

  return (
    <div className="container text-center">
      <h1 className="mb-4">PDF Ticket Generator</h1>
      
      <div className="card text-center">
        <h3>Select Ticket Type</h3>
        <select 
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="w-full mb-4"
        >
            <option value="mmt_malaysia">Make My Trip</option>
            <option value="move_thailand">Move (Thai)</option>
            <option value="indigo_th">Indigo (Thai)</option>
            <option value="move_malaysia">Move (Malay)</option>
            <option value="cleartrip">Cleartrip</option>
            <option value="indigo_indo">Indigo (Indo)</option>
            <option value="trip_iata">Trip (IATA)</option>
            <option value="goibibo">Goibibo</option>
        </select>

        <h3>Number of Passengers</h3>
        <div className="btn-group">
            {[1, 2, 3].map(num => (
                <button 
                    key={num}
                    onClick={() => setPaxCount(num)}
                    className={paxCount === num ? "secondary" : "outline"}
                >
                    {num} Passenger{num > 1 ? 's' : ''}
                </button>
            ))}
        </div>
      </div>

      <button 
        onClick={handleProceed}
        className="primary mt-4"
        style={{ fontSize: '1.2em', padding: '15px 30px' }}
      >
        Proceed to Data Entry
      </button>
    </div>
  );
}
