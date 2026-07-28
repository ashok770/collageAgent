export default function IntakeCard({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2>🤖 Intake Agent</h2>

      <p>
        <strong>Amount:</strong> {data.amount}
      </p>

      <p>
        <strong>Bank:</strong> {data.bank_name}
      </p>

      <p>
        <strong>Fraud Type:</strong> {data.fraud_type}
      </p>

      <p>
        <strong>Channel:</strong> {data.transaction_channel}
      </p>

      <p>
        <strong>Date:</strong> {data.transaction_date}
      </p>

      <p>
        <strong>Reasoning:</strong>
      </p>

      <p>{data.reasoning?.intake}</p>
    </div>
  );
}
