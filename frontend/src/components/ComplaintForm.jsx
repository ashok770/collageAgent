import { useState } from "react";

export default function ComplaintForm({ onAnalyze }) {
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!complaint.trim()) return;

    onAnalyze(complaint);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-8 mt-8"
    >
      <h2 className="text-3xl font-bold text-slate-800">
        📝 Describe Your Complaint
      </h2>

      <p className="text-slate-600 mt-3 leading-7">
        Enter your banking fraud complaint below. Our AI agents can understand
        complaints written in English, Hindi, Tamil, Telugu, and other Indian
        languages.
      </p>

      <textarea
        rows={7}
        placeholder={`Example:

Yesterday I lost ₹5000 from my SBI account through Google Pay.
I never approved the transaction.`}
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        className="
          w-full
          mt-6
          p-4
          rounded-xl
          border
          border-slate-300
          resize-none
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          text-slate-700
          placeholder:text-slate-400
        "
      />

      <button
        type="submit"
        className="
          w-full
          mt-6
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          py-4
          rounded-xl
          transition-all
          duration-200
          shadow-md
          hover:shadow-lg
        "
      >
        🚀 Analyze Complaint
      </button>
    </form>
  );
}
