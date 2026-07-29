import {
  ArrowRight,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  UserPlus,
} from "lucide-react";

const trustIndicators = [
  "Explainable AI",
  "Human Decision Control",
  "Secure Investigation",
  "Audit Ready",
];

const cases = [
  { id: "CP-2048", title: "Unauthorized transfer report", risk: "High", active: true },
  { id: "CP-2041", title: "Account takeover review", risk: "Medium" },
  { id: "CP-2037", title: "Card transaction dispute", risk: "Low" },
];

const evidence = ["Bank transaction record", "Customer statement", "Device activity review"];

function RiskLabel({ children, tone = "high" }) {
  const toneClasses = {
    high: "border-red-200 bg-red-50 text-red-700",
    medium: "border-amber-200 bg-amber-50 text-amber-700",
    low: "border-emerald-200 bg-emerald-50 text-emerald-700",
  };

  return <span className={`inline-flex items-center rounded-md border px-1.5 py-0.5 text-[9px] font-semibold ${toneClasses[tone]}`}>{children}</span>;
}

function OfficerWorkspacePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[720px] rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:-translate-y-0.5 sm:p-2">
      <section aria-label="CasePilot officer workspace preview" className="overflow-hidden rounded-[9px] border border-slate-200 bg-slate-50">
        <header className="flex h-11 items-center justify-between border-b border-slate-200 bg-white px-3 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="flex size-5 items-center justify-center rounded bg-[#163A5F] text-white"><ShieldCheck size={12} aria-hidden="true" /></span>
            <span className="text-[10px] font-semibold tracking-[-0.01em] text-slate-900 sm:text-xs">Officer Workspace</span>
          </div>
          <span className="hidden text-[9px] font-medium text-slate-500 sm:inline">Investigation queue · East Region</span>
          <span className="flex size-6 items-center justify-center rounded-full bg-slate-100 text-[9px] font-semibold text-slate-600">AS</span>
        </header>

        <div className="grid min-h-[372px] grid-cols-[116px_minmax(0,1fr)] sm:min-h-[412px] sm:grid-cols-[150px_minmax(0,1fr)]">
          <aside className="border-r border-slate-200 bg-white py-3">
            <div className="flex items-center justify-between px-2.5 sm:px-3">
              <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-500">Case queue</span>
              <span className="rounded bg-slate-100 px-1 py-0.5 text-[8px] font-semibold text-slate-600">12</span>
            </div>
            <div className="mt-2 space-y-1 px-1.5 sm:px-2">
              {cases.map((caseItem) => (
                <div key={caseItem.id} className={`rounded-md border px-2 py-2 transition-colors duration-150 ${caseItem.active ? "border-blue-200 bg-blue-50" : "border-transparent hover:bg-slate-50"}`}>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[9px] font-semibold text-slate-700">{caseItem.id}</span>
                    <RiskLabel tone={caseItem.risk.toLowerCase()}>{caseItem.risk}</RiskLabel>
                  </div>
                  <p className="mt-1 hidden text-[8px] leading-3 text-slate-500 sm:block">{caseItem.title}</p>
                </div>
              ))}
            </div>
          </aside>

          <main className="min-w-0 p-3 sm:p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-medium text-slate-500">Case #CP-2048</span>
                  <RiskLabel>High risk</RiskLabel>
                </div>
                <h2 className="mt-1 text-xs font-semibold tracking-[-0.015em] text-slate-900 sm:text-sm">Unauthorized transfer report</h2>
                <p className="mt-1 text-[9px] text-slate-500">Financial fraud · Received today, 09:42</p>
              </div>
              <button type="button" className="inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1.5 text-[9px] font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163A5F] focus-visible:ring-offset-1 sm:px-2.5">
                <UserPlus size={11} aria-hidden="true" />
                <span className="hidden sm:inline">Assign officer</span>
                <span className="sm:hidden">Assign</span>
              </button>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              <div className="rounded-md border border-slate-200 bg-white p-2 transition-shadow duration-200 hover:shadow-sm">
                <p className="text-[8px] font-medium uppercase tracking-[0.07em] text-slate-500">Risk score</p>
                <div className="mt-1 flex items-end gap-1"><strong className="text-base leading-none text-red-700">87</strong><span className="text-[8px] text-slate-500">/ 100</span></div>
              </div>
              <div className="rounded-md border border-slate-200 bg-white p-2 transition-shadow duration-200 hover:shadow-sm">
                <p className="text-[8px] font-medium uppercase tracking-[0.07em] text-slate-500">Status</p>
                <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-slate-700"><ClipboardCheck size={11} className="text-blue-700" aria-hidden="true" /> In review</p>
              </div>
              <div className="col-span-2 rounded-md border border-slate-200 bg-white p-2 transition-shadow duration-200 hover:shadow-sm sm:col-span-1">
                <p className="text-[8px] font-medium uppercase tracking-[0.07em] text-slate-500">Fraud category</p>
                <p className="mt-1 text-[10px] font-semibold text-slate-700">Account takeover</p>
              </div>
            </div>

            <div className="mt-3 grid gap-2 lg:grid-cols-[1.05fr_.95fr]">
              <section className="rounded-md border border-slate-200 bg-white p-2.5 transition-shadow duration-200 hover:shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[10px] font-semibold text-slate-800">Evidence checklist</h3>
                  <span className="inline-flex items-center gap-1 text-[8px] font-semibold text-emerald-700"><CheckCircle2 size={10} aria-hidden="true" /> Complete</span>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {evidence.map((item) => <li key={item} className="flex items-center gap-1.5 text-[9px] text-slate-600"><Check size={11} className="shrink-0 text-emerald-600" aria-hidden="true" />{item}</li>)}
                </ul>
              </section>

              <section className="rounded-md border border-blue-200 bg-blue-50/70 p-2.5 transition-shadow duration-200 hover:shadow-sm">
                <div className="flex items-center gap-1.5"><BrainCircuit size={12} className="text-blue-700" aria-hidden="true" /><h3 className="text-[10px] font-semibold text-slate-800">AI recommendation</h3></div>
                <p className="mt-1.5 text-[9px] leading-4 text-slate-600">Escalate for identity review. Device activity differs from the account baseline.</p>
                <div className="mt-2 flex items-center justify-between"><span className="text-[8px] font-medium text-blue-800">Confidence: High</span><button type="button" className="inline-flex items-center gap-0.5 text-[8px] font-semibold text-blue-800 hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163A5F]">Review evidence <ChevronRight size={10} aria-hidden="true" /></button></div>
              </section>
            </div>

            <section className="mt-3 rounded-md border border-slate-200 bg-white p-2.5">
              <div className="flex items-center justify-between"><h3 className="text-[10px] font-semibold text-slate-800">Timeline</h3><span className="text-[8px] text-slate-500">Today</span></div>
              <ol className="mt-2 flex items-start gap-1.5 sm:gap-2">
                {["Complaint received", "Risk assessment complete", "Review assigned"].map((item, index) => (
                  <li key={item} className="flex min-w-0 flex-1 items-start gap-1"><span className={`mt-0.5 flex size-3 shrink-0 items-center justify-center rounded-full text-[7px] ${index === 2 ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"}`}>{index === 2 ? "3" : <Check size={8} aria-hidden="true" />}</span><span className="hidden text-[8px] leading-3 text-slate-600 sm:block">{item}</span></li>
                ))}
              </ol>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}

export default function CasePilotHero() {
  return (
    <section aria-labelledby="hero-heading" className="flex min-h-[calc(100vh-76px)] items-center py-10 sm:py-14 lg:py-16">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-12 xl:gap-16">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#163A5F] transition-colors duration-200 hover:border-blue-300 hover:bg-blue-100">
            <ShieldCheck size={15} aria-hidden="true" />
            AI-Powered Investigation Platform
          </div>
          <h1 id="hero-heading" className="mt-5 max-w-[15ch] text-4xl font-bold tracking-[-0.045em] text-slate-900 sm:text-5xl sm:leading-[1.08] lg:text-[3.25rem] xl:text-6xl">
            AI-Powered Investigation Platform for Financial Fraud Cases
          </h1>
          <p className="mt-5 max-w-[60ch] text-base leading-7 text-slate-600 sm:text-[17px]">
            CasePilot helps fraud investigation teams analyze complaints, prioritize high-risk cases, review evidence, and accelerate investigations using explainable AI while keeping officers in control of every decision.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#163A5F] px-5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#102E4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163A5F] focus-visible:ring-offset-2">Explore Platform <ArrowRight size={17} aria-hidden="true" /></button>
            <button type="button" className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163A5F] focus-visible:ring-offset-2">View Investigation Workflow <ChevronRight size={17} aria-hidden="true" /></button>
          </div>
          <ul aria-label="Platform assurances" className="mt-8 flex flex-wrap gap-2">
            {trustIndicators.map((indicator) => <li key={indicator} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50"><CheckCircle2 size={14} className="text-emerald-700" aria-hidden="true" />{indicator}</li>)}
          </ul>
        </div>

        <div className="relative lg:pl-2">
          <div aria-hidden="true" className="absolute -inset-5 -z-10 rounded-3xl bg-slate-100/70" />
          <OfficerWorkspacePreview />
          <div className="absolute -bottom-4 -left-3 hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-md lg:flex"><span className="flex size-6 items-center justify-center rounded-md bg-emerald-50 text-emerald-700"><FileCheck2 size={14} aria-hidden="true" /></span><span><span className="block text-[10px] font-semibold text-slate-800">Evidence verified</span><span className="block text-[9px] text-slate-500">Audit trail updated</span></span></div>
          <div className="absolute -right-3 top-8 hidden items-center gap-1.5 rounded-lg border border-blue-200 bg-white px-2.5 py-2 shadow-md xl:flex"><Sparkles size={13} className="text-blue-700" aria-hidden="true" /><span className="text-[10px] font-semibold text-slate-700">Explainable AI</span></div>
        </div>
      </div>
    </section>
  );
}
