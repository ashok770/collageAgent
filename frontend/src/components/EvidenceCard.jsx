export default function EvidenceCard({ data }) {
  if (!data) return null;

  const isSufficient = data.evidence_status === "Sufficient";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        📄 Evidence Completeness Agent
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-500">Evidence Status</p>

          <p
            className={`font-semibold ${
              isSufficient ? "text-green-600" : "text-red-600"
            }`}
          >
            {data.evidence_status}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Missing Items</p>

          <p className="font-semibold">{data.missing_items?.length || 0}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-slate-800 mb-2">Missing Documents</h3>

        {data.missing_items?.length ? (
          <ul className="list-disc ml-6 text-slate-600 space-y-1">
            {data.missing_items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-green-600">No missing evidence.</p>
        )}
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-slate-800 mb-2">AI Reasoning</h3>

        <p className="text-slate-600 leading-7">{data.reasoning?.evidence}</p>
      </div>
    </div>
  );
}
