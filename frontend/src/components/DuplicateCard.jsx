export default function DuplicateCard({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        🔍 Duplicate Detection Agent
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-500">Duplicate Case</p>

          <p className="font-semibold">{data.is_duplicate ? "Yes" : "No"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Similar Case ID</p>

          <p className="font-semibold">{data.similar_case || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Similarity Score</p>

          <p className="font-semibold">
            {Math.round((data.duplicate_score || 0) * 100)}%
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-slate-800 mb-2">AI Reasoning</h3>

        <p className="text-slate-600 leading-7">{data.reasoning?.duplicate}</p>
      </div>
    </div>
  );
}
