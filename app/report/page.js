"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { Roboto, Inter } from "next/font/google";
import { useState } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["500", "600"] });

const tabs = [
  { id: "executive", label: "Executive Summary" },
  { id: "technical", label: "Technical Report" },
];

function TabButton({ id, isActive, label, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className={`px-4 py-1.5 text-xs sm:text-sm rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus-visible:ring-offset-white whitespace-nowrap ${
        isActive
          ? "bg-black text-white border-black shadow-sm"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
      }`}
      role="tab"
      aria-selected={isActive}
    >
      {label}
    </button>
  );
}

function StatCard({ label, value, helper, accentClass }) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl shadow-sm border border-gray-100 p-5 min-h-[110px]">
      <p className="text-xs font-semibold tracking-wide text-gray-700 mb-2">
        {label}
      </p>
      <div className="flex items-end justify-between gap-3">
        <div>
          <p
            className={`${inter.className} text-2xl font-semibold ${accentClass}`}
          >
            {value}
          </p>
          {helper && <p className={`mt-1 text-xs ${accentClass}`}>{helper}</p>}
        </div>
        <div
          aria-hidden="true"
          className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 ${accentClass}`}
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-3">
      {children}
    </h2>
  );
}

function Badge({ children, tone = "neutral" }) {
  const tones = {
    neutral: "bg-gray-100 text-gray-800",
    success: "bg-emerald-100 text-emerald-800",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function ExecutiveSummary() {
  return (
    <section aria-labelledby="executive-summary-heading" className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs text-gray-600">
            Customer Churn Prediction Model - Q1 2024
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <div className="inline-flex items-center gap-2">
              <Image
                src="/assets/calendar-icon.svg"
                alt="Calendar icon"
                width={16}
                height={16}
              />
              <span>Generated on January 15, 2024</span>
            </div>
            <Badge tone="success">Final Report</Badge>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            <span className="sr-only sm:not-sr-only">Share</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M15 8a3 3 0 10-2.83-4H9a1 1 0 000 2h3.17A3.001 3.001 0 0015 8zM6 10a3 3 0 102.83 4H11a1 1 0 000-2H8.83A3.001 3.001 0 006 10zm8.707 1.293a1 1 0 00-1.414-1.414l-8 8a1 1 0 001.414 1.414l8-8z" />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            <span className="sr-only sm:not-sr-only">Export PDF</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h8.5a1.5 1.5 0 001.06-.44l2.5-2.5A1.5 1.5 0 0017.5 13H16V5a2 2 0 00-2-2H4zm8 9a1 1 0 011 1v3.586L15.586 13H13z" />
            </svg>
          </button>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Current Accuracy"
          value="94%"
          helper="Production model accuracy"
          accentClass="text-emerald-600"
        />
        <StatCard
          label="Churn Reduction"
          value="15%"
          helper="vs. previous quarter"
          accentClass="text-emerald-600"
        />
        <StatCard
          label="Estimated Annual Savings"
          value="$2.4M"
          helper="Retention impact"
          accentClass="text-orange-600"
        />
      </div>

      <section aria-label="Executive summary narrative" className="space-y-4">
        <SectionTitle>Executive Summary</SectionTitle>
        <p className="text-sm leading-relaxed text-gray-700">
          Our customer churn prediction model has achieved exceptional
          performance with
          <span className="font-semibold"> 94% accuracy</span> in identifying
          customers at risk of churning. The model was trained on historical
          customer data spanning 24 months, incorporating behavioral patterns,
          transaction history, and engagement metrics.
        </p>
        <p className="text-sm leading-relaxed text-gray-700">
          Key findings indicate that purchase frequency, account age, and recent
          activity are the strongest predictors of churn. The model has been
          deployed to production and is actively monitoring more than 15,000
          customer accounts in real time.
        </p>
      </section>

      <section aria-label="Business impact" className="space-y-3">
        <SectionTitle>Business Impact</SectionTitle>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-4 w-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <span className="text-[10px] font-bold">✓</span>
            </span>
            <p>
              <span className="font-semibold">Revenue Protection:</span> Early
              identification of at-risk customers enables proactive retention
              efforts, potentially saving $2.4M annually.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-4 w-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <span className="text-[10px] font-bold">✓</span>
            </span>
            <p>
              <span className="font-semibold">Operational Efficiency:</span>{" "}
              Risk scores are integrated into CRM workflows, allowing retention
              teams to prioritize outreach.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-4 w-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <span className="text-[10px] font-bold">✓</span>
            </span>
            <p>
              <span className="font-semibold">Customer Experience:</span>{" "}
              Targeted offers and interventions improve satisfaction and reduce
              voluntary churn.
            </p>
          </li>
        </ul>
      </section>

      <section aria-label="Recommendations" className="space-y-3">
        <SectionTitle>Recommendations</SectionTitle>
        <ol className="list-decimal pl-5 space-y-1.5 text-sm text-gray-700">
          <li>
            Implement automated intervention workflows for high-risk customers
            identified by the model.
          </li>
          <li>
            Schedule quarterly model performance reviews and retraining as new
            customer behavior patterns emerge.
          </li>
          <li>
            Expand feature set with product usage and support interaction data
            to further improve predictive power.
          </li>
        </ol>
      </section>
    </section>
  );
}

function TechnicalReport() {
  const architectureItems = [
    "Algorithm: Extreme Gradient Boosting (XGBoost)",
    "Number of estimators: 200",
    "Max depth: 6",
    "Learning rate: 0.1",
    "Subsample: 0.8",
  ];

  const trainingData = [
    { label: "Dataset", value: "customer_data.csv" },
    { label: "Total Samples", value: "15,420" },
    { label: "Features", value: "8 numerical, 2 categorical" },
    { label: "Training Split", value: "70% train, 15% validation, 15% test" },
    { label: "Class Distribution", value: "72% No Churn, 28% Churn" },
  ];

  const performanceMetrics = [
    { label: "Accuracy", value: "0.9400" },
    { label: "Recall", value: "0.9400" },
    { label: "F1 Score", value: "0.8400" },
    { label: "ROC AUC", value: "0.9400" },
    { label: "Precision", value: "0.9400" },
  ];

  return (
    <section aria-labelledby="technical-report-heading" className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs text-gray-600">Full Technical Report</p>
          <p className="text-sm text-gray-700">
            Model architecture, training data, and performance metrics for the
            deployed churn prediction model.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            <span className="sr-only sm:not-sr-only">Share</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M15 8a3 3 0 10-2.83-4H9a1 1 0 000 2h3.17A3.001 3.001 0 0015 8zM6 10a3 3 0 102.83 4H11a1 1 0 000-2H8.83A3.001 3.001 0 006 10zm8.707 1.293a1 1 0 00-1.414-1.414l-8 8a1 1 0 001.414 1.414l8-8z" />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            <span className="sr-only sm:not-sr-only">Export PDF</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h8.5a1.5 1.5 0 001.06-.44l2.5-2.5A1.5 1.5 0 0017.5 13H16V5a2 2 0 00-2-2H4zm8 9a1 1 0 011 1v3.586L15.586 13H13z" />
            </svg>
          </button>
        </div>
      </header>

      <section aria-label="Model architecture" className="space-y-3">
        <SectionTitle>Model Architecture</SectionTitle>
        <p className="text-sm text-gray-700">
          The final model employs an XGBoost classifier with the following
          specifications:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
          {architectureItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-label="Training data" className="space-y-4">
        <SectionTitle>Training Data</SectionTitle>
        <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 overflow-hidden">
          {trainingData.map((row) => (
            <dl
              key={row.label}
              className="grid grid-cols-2 gap-3 bg-white px-4 py-3 text-xs sm:text-sm"
            >
              <dt className="text-gray-500">{row.label}</dt>
              <dd className="text-right font-medium text-gray-900">
                {row.value}
              </dd>
            </dl>
          ))}
        </div>
      </section>

      <section aria-label="Performance metrics" className="space-y-4">
        <SectionTitle>Performance Metrics</SectionTitle>
        <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 overflow-hidden">
          {performanceMetrics.map((row) => (
            <dl
              key={row.label}
              className="grid grid-cols-2 gap-3 bg-white px-4 py-3 text-xs sm:text-sm"
            >
              <dt className="text-gray-500">{row.label}</dt>
              <dd className="text-right font-medium text-gray-900">
                {row.value}
              </dd>
            </dl>
          ))}
        </div>
      </section>
    </section>
  );
}

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("executive");

  return (
    <main className={`${roboto.className} min-h-screen bg-gray-50`}>
      <Header
        pageName="Dashboard"
        sectionName="Model Monitoring & drift Detection"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-7 py-6 sm:py-8">
        <header className="mb-6">
          <p className="text-xs text-gray-500 mb-1">
            Dashboard / Model Monitoring & drift Detection
          </p>
          <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900">
            Reports &amp; Documentation
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-gray-600">
            AI-generated summaries and technical documentation.
          </p>
        </header>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
          <div
            className="inline-flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Report views"
          >
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                id={tab.id}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={setActiveTab}
              />
            ))}
          </div>
          <button
            type="button"
            className={`${inter.className} inline-flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2`}
          >
            Generate New Report
          </button>
        </div>

        <section
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8"
          aria-label="Report content"
        >
          {activeTab === "executive" ? (
            <ExecutiveSummary />
          ) : (
            <TechnicalReport />
          )}
        </section>
      </div>
    </main>
  );
}
