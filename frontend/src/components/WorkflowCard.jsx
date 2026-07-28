export default function WorkflowCard({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-6 mb-10">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        🚦 Workflow & Resolution Agent
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-500">Workflow Status</p>

          <p className="font-semibold">{data.workflow_status}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">SLA</p>

          <p className="font-semibold">{data.sla}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Next Action</p>

          <p className="font-semibold">{data.next_action}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Closure Status</p>

          <p className="font-semibold">{data.closure_status}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-slate-800 mb-2">AI Reasoning</h3>

        <p className="text-slate-600 leading-7">{data.reasoning?.workflow}</p>
      </div>
    </div>
  );
}
