export default function PagePlaceholder({ title, description }) {
  return (
    <section className="page-placeholder">
      <div className="page-placeholder__panel">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
