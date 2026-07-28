export default function RiskCard({ data }) {
  if (!data) return null;

  const riskColor =
    data.priority === "Critical"
      ? "text-red-600"
      : data.priority === "High"
        ? "text-orange-500"
        : data.priority === "Medium"
          ? "text-yellow-500"
          : "text-green-600";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        ⚠️ Risk & Fraud Prioritization Agent
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-500">Risk Score</p>

          <p className="font-semibold text-xl">{data.risk_score}/100</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Priority</p>

          <p className={`font-semibold ${riskColor}`}>{data.priority}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-slate-800 mb-2">
          Recommended Action
        </h3>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-slate-700">{data.recommended_action}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-slate-800 mb-2">AI Reasoning</h3>

        <p className="text-slate-600 leading-7">{data.reasoning?.risk}</p>
      </div>
    </div>
  );
}
