export default function ClassificationCard({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2>🤖 Classification Agent</h2>

      <p>
        <strong>Category:</strong> {data.category}
      </p>

      <p>
        <strong>Department:</strong> {data.assigned_department}
      </p>

      <p>
        <strong>Confidence:</strong> {data.classification_confidence}
      </p>

      <p>
        <strong>Reasoning:</strong>
      </p>

      <p>{data.reasoning?.classification}</p>
    </div>
  );
}
