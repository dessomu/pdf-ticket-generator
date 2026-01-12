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
            <option value="move_thailand">Move Thailand</option>
            <option value="indigo_th">Thailand Indigo (Legacy)</option>
            <option value="move_malaysia">Move Malaysia</option>
            <option value="cleartrip">Cleartrip</option>
            <option value="indigo_indo">Indigo (Indo)</option>
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
