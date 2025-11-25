"use client";

import { useState } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export default function UploadPage() {
  const [url, setUrl] = useState("");
  const [files, setFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleBrowse = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = ".csv,.json,.xlsx,.xls";
    input.onchange = (e) => {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    };
    input.click();
  };

  const removeFile = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  return (
    <main className={`${roboto.className} min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8`}>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 w-full max-w-5xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">File Upload</h1>
            <p className="text-xs sm:text-sm text-gray-600">Choose a file and upload securely to proceed.</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>

        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-8 sm:p-12 text-center mb-6 transition-all ${
            dragOver ? "border-blue-500 bg-blue-50 scale-[1.02]" : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <div className="mb-4">
            <svg className="mx-auto w-14 h-14 sm:w-16 sm:h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"/>
            </svg>
          </div>
          <p className="text-sm sm:text-base text-gray-700 mb-3 font-medium">
            Drag and drop your files <br />
            or click to browse your files
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mb-5">Supports: CSV, Excel, JSON (Max 20MB)</p>
          <button
            onClick={handleBrowse}
            className="inline-flex items-center gap-2 bg-[#2e3037] text-white rounded-lg px-6 py-2.5 hover:bg-gray-900 transition-all font-medium shadow-md hover:shadow-lg"
          >
            Browse Files
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">or upload from URL</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="url"
              placeholder="Add file URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <button className="bg-blue-600 text-white rounded-lg px-6 py-2.5 hover:bg-blue-700 font-medium transition-colors shadow-sm whitespace-nowrap">Upload</button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Field Information here</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Uploaded Files</label>
          {files.length === 0 ? (
            <p className="text-sm text-gray-500 py-4 text-center bg-gray-50 rounded-lg border border-dashed border-gray-300">No files uploaded yet</p>
          ) : (
            <div className="space-y-2">
              {files.map((file, idx) => (
                <div key={idx} className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors">
                  <span className="text-sm text-gray-700 truncate">{file.name}</span>
                  <button onClick={() => removeFile(idx)} className="text-red-500 hover:text-red-700 text-sm font-medium ml-4">Remove</button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 font-medium transition-colors">Cancel</button>
          <button className="flex-1 bg-blue-600 text-white rounded-lg py-2.5 hover:bg-blue-700 font-semibold transition-all shadow-md hover:shadow-lg">Attach File</button>
        </div>
      </div>

      {/* Guidelines sidebar */}
      <div className="hidden lg:block ml-6 xl:ml-8 w-80 space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Upload Guideline</h3>
          <div className="mb-5">
            <div className="text-xs font-semibold text-gray-700 mb-2">Supported Formats</div>
            <div className="flex gap-2 flex-wrap">
              {["CSV", "Excel", "JSON"].map((fmt) => (
                <span key={fmt} className="text-xs border border-gray-300 bg-gray-50 rounded-full px-3 py-1.5 font-medium text-gray-700">{fmt}</span>
              ))}
            </div>
          </div>
          <div className="text-xs space-y-2.5">
            <div className="font-semibold text-gray-700 mb-2">File Requirements</div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-600">Max file size: 20 MB</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-bold">⚠</span>
              <span className="text-gray-600">Column headers required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-600">No empty columns</span>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-gray-200 text-xs">
            <div className="font-semibold text-gray-700 mb-2">System Will:</div>
            <ul className="list-disc pl-4 space-y-1.5 text-gray-600">
              <li>Remove duplicate rows</li>
              <li>Check for missing values</li>
              <li>Validate date formats</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
