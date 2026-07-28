const agents = [
  {
    id: "Intake",
    icon: "📝",
  },
  {
    id: "Classification",
    icon: "🏷️",
  },
  {
    id: "Duplicate",
    icon: "🔍",
  },
  {
    id: "Evidence",
    icon: "📄",
  },
  {
    id: "Risk",
    icon: "⚠️",
  },
  {
    id: "Workflow",
    icon: "🚦",
  },
];

export default function ProgressTracker({
  loading,
  currentAgent,
  completedAgents,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold mb-2">🧠 AI Investigation Pipeline</h2>

      <p className="text-gray-600 mb-8">
        Complaint is processed through six specialized AI agents.
      </p>

      <div className="space-y-6">
        {agents.map((agent) => {
          const completed = completedAgents.includes(agent.id);

          const processing = loading && currentAgent === agent.id && !completed;

          return (
            <div key={agent.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl
                  ${
                    completed
                      ? "bg-green-100"
                      : processing
                        ? "bg-yellow-100"
                        : "bg-slate-100"
                  }`}
                >
                  {agent.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{agent.id} Agent</h3>

                  {completed ? (
                    <p className="text-green-600 text-sm font-medium">
                      ✅ Completed
                    </p>
                  ) : processing ? (
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 border-2 border-yellow-500
                                   border-t-transparent rounded-full animate-spin"
                      />

                      <span className="text-yellow-600 text-sm font-medium">
                        Processing...
                      </span>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">Waiting...</p>
                  )}
                </div>
              </div>

              <div>
                {completed ? (
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                ) : processing ? (
                  <div className="w-4 h-4 rounded-full bg-yellow-400 animate-pulse" />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-gray-300" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
