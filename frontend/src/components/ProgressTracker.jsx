const agents = [
  {
    key: "intake",
    icon: "📝",
    title: "Intake Agent",
  },
  {
    key: "classification",
    icon: "🏷️",
    title: "Classification Agent",
  },
  {
    key: "duplicate",
    icon: "🔍",
    title: "Duplicate Agent",
  },
  {
    key: "evidence",
    icon: "📄",
    title: "Evidence Agent",
  },
  {
    key: "risk",
    icon: "⚠️",
    title: "Risk Agent",
  },
  {
    key: "workflow",
    icon: "🚦",
    title: "Workflow Agent",
  },
];

export default function ProgressTracker({ statuses }) {
  const getStatus = (status) => {
    switch (status) {
      case "completed":
        return {
          color: "bg-green-500",
          text: "Completed",
          textColor: "text-green-600",
          icon: "✅",
        };

      case "running":
        return {
          color: "bg-yellow-400 animate-pulse",
          text: "Processing...",
          textColor: "text-yellow-600",
          icon: "⏳",
        };

      default:
        return {
          color: "bg-gray-300",
          text: "Waiting...",
          textColor: "text-gray-500",
          icon: "⚪",
        };
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-2">🧠 AI Investigation Pipeline</h2>

      <p className="text-gray-500 mb-8">
        Complaint is being processed through six AI agents.
      </p>

      <div className="space-y-6">
        {agents.map((agent) => {
          const state = getStatus(statuses?.[agent.key]);

          return (
            <div key={agent.key} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-3xl">{agent.icon}</div>

                <div>
                  <h3 className="font-semibold">{agent.title}</h3>

                  <p className={`text-sm ${state.textColor}`}>
                    {state.icon} {state.text}
                  </p>
                </div>
              </div>

              <div className={`w-4 h-4 rounded-full ${state.color}`}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
