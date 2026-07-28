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

const AGENTS = [
  "Intake",
  "Classification",
  "Duplicate",
  "Evidence",
  "Risk",
  "Workflow",
];

function App() {
  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [completedAgents, setCompletedAgents] = useState([]);

  const [currentAgent, setCurrentAgent] = useState("");

  const [visibleCards, setVisibleCards] = useState([]);

  const handleAnalyze = async (complaint) => {
    setLoading(true);

    setResult(null);

    setCompletedAgents([]);

    setVisibleCards([]);

    setCurrentAgent("Intake");

    try {
      const data = await analyzeComplaint(complaint);

      for (let i = 0; i < AGENTS.length; i++) {
        setCurrentAgent(AGENTS[i]);

        await new Promise((resolve) => setTimeout(resolve, 500));

        setCompletedAgents((prev) => [...prev, AGENTS[i]]);

        setVisibleCards((prev) => [...prev, AGENTS[i]]);
      }

      setCurrentAgent("");

      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center">AgentVerse</h1>

        <p className="text-center text-gray-600 mt-2 mb-10">
          AI Multi-Agent Banking Fraud Grievance System
        </p>

        <ComplaintForm onAnalyze={handleAnalyze} loading={loading} />

        <ProgressTracker
          loading={loading}
          currentAgent={currentAgent}
          completedAgents={completedAgents}
        />

        {result && visibleCards.includes("Intake") && (
          <IntakeCard data={result} />
        )}

        {result && visibleCards.includes("Classification") && (
          <ClassificationCard data={result} />
        )}

        {result && visibleCards.includes("Duplicate") && (
          <DuplicateCard data={result} />
        )}

        {result && visibleCards.includes("Evidence") && (
          <EvidenceCard data={result} />
        )}

        {result && visibleCards.includes("Risk") && <RiskCard data={result} />}

        {result && visibleCards.includes("Workflow") && (
          <WorkflowCard data={result} />
        )}
      </div>
    </div>
  );
}

export default App;
