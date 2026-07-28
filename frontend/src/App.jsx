import { useState } from "react";

import ComplaintForm from "./components/ComplaintForm";
import ProgressTracker from "./components/ProgressTracker";
import IntakeCard from "./components/IntakeCard";
import ClassificationCard from "./components/ClassificationCard";
import DuplicateCard from "./components/DuplicateCard";
import EvidenceCard from "./components/EvidenceCard";
import RiskCard from "./components/RiskCard";
import WorkflowCard from "./components/WorkflowCard";

import { analyzeComplaint } from "./services/api";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [statuses, setStatuses] = useState({
    intake: "waiting",
    classification: "waiting",
    duplicate: "waiting",
    evidence: "waiting",
    risk: "waiting",
    workflow: "waiting",
  });

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const runPipeline = async () => {
    const agents = [
      "intake",
      "classification",
      "duplicate",
      "evidence",
      "risk",
      "workflow",
    ];

    for (const agent of agents) {
      setStatuses((prev) => ({
        ...prev,
        [agent]: "running",
      }));

      await delay(700);

      setStatuses((prev) => ({
        ...prev,
        [agent]: "completed",
      }));
    }
  };

  const handleAnalyze = async (complaint) => {
    try {
      setLoading(true);

      // Reset everything
      setResult(null);

      setStatuses({
        intake: "waiting",
        classification: "waiting",
        duplicate: "waiting",
        evidence: "waiting",
        risk: "waiting",
        workflow: "waiting",
      });

      const data = await analyzeComplaint(complaint);

      await runPipeline();

      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Backend connection failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center">AgentVerse</h1>

        <p className="text-center text-gray-600 mt-2">
          AI Multi-Agent Banking Fraud Grievance System
        </p>

        <ComplaintForm onAnalyze={handleAnalyze} loading={loading} />

        <ProgressTracker statuses={statuses} />

        {result && (
          <>
            <IntakeCard data={result} />

            <ClassificationCard data={result} />
            <DuplicateCard data={result} />
            <EvidenceCard data={result} />
            <RiskCard data={result} />

            <WorkflowCard data={result} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
