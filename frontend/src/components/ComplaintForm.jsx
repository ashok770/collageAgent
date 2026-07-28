import { useState } from "react";

export default function ComplaintForm({ onAnalyze }) {
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!complaint.trim()) return;

    onAnalyze(complaint);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Digital Governance Complaint</h2>

      <textarea
        rows="8"
        placeholder="Describe your complaint..."
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">Analyze Complaint</button>
    </form>
  );
}
