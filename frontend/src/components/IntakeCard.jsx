export default function IntakeCard({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        🤖 Intake Agent
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-500">Amount</p>
          <p className="font-semibold">{data.amount}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Bank</p>
          <p className="font-semibold">{data.bank_name}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Fraud Type</p>
          <p className="font-semibold">{data.fraud_type}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Channel</p>
          <p className="font-semibold">{data.transaction_channel}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Transaction Date</p>
          <p className="font-semibold">{data.transaction_date}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-slate-800 mb-2">AI Reasoning</h3>

        <p className="text-slate-600 leading-7">{data.reasoning?.intake}</p>
      </div>
    </div>
  );
}
