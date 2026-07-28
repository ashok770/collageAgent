import { useState } from "react";

export default function ComplaintForm({ onAnalyze, loading }) {
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!complaint.trim() || loading) return;

    onAnalyze(complaint);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-8 mb-8"
    >
      <h2 className="text-4xl font-bold text-slate-900 mb-3">
        📝 Describe Your Complaint
      </h2>

      <p className="text-gray-600 mb-6">
        Enter your banking fraud complaint below. Our AI agents can understand
        complaints written in English, Hindi, Tamil, Telugu and other Indian
        languages.
      </p>

      <textarea
        rows="6"
        disabled={loading}
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        placeholder={`Example:

Yesterday I lost ₹5000 from my SBI account through Google Pay.
I never approved the transaction.`}
        className="w-full rounded-xl border border-slate-300 p-4 resize-none
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   disabled:bg-slate-100"
      />

      <button
        type="submit"
        disabled={loading}
        className={`mt-6 w-full rounded-xl py-4 text-lg font-semibold transition-all
        ${
          loading
            ? "bg-slate-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white flex items-center justify-center gap-3`}
      >
        {loading ? (
          <>
            <div
              className="w-5 h-5 border-2 border-white border-t-transparent
                         rounded-full animate-spin"
            />
            Analyzing Complaint...
          </>
        ) : (
          <>🚀 Analyze Complaint</>
        )}
      </button>
    </form>
  );
}
