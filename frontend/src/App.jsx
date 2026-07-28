import { useState } from "react";

import ComplaintForm from "./components/ComplaintForm";
import IntakeCard from "./components/IntakeCard";
import ClassificationCard from "./components/ClassificationCard";

import { analyzeComplaint } from "./services/api";

function App() {
  const [result, setResult] = useState(null);

  const handleAnalyze = async (complaint) => {
    try {
      const data = await analyzeComplaint(complaint);

      setResult(data);
    } catch (error) {
      console.error(error);

      alert("Backend connection failed.");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <ComplaintForm onAnalyze={handleAnalyze} />

      <hr />

      <IntakeCard data={result} />

      <hr />

      <ClassificationCard data={result} />
    </div>
  );
}

export default App;
