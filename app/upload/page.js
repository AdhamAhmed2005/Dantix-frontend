"use client";

import { useState } from "react";
import { Inter, Roboto, DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["500"] });

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [url, setUrl] = useState("");
  const [selectedColumns, setSelectedColumns] = useState({
    sales: true,
    customerName: true,
    region: true,
    profit: true,
    ordersCount: true,
  });

  const columns = [
    { id: "sales", label: "Sales" },
    { id: "customerName", label: "Customer Name" },
    { id: "region", label: "Region" },
    { id: "profit", label: "Profit" },
    { id: "ordersCount", label: "Orders Count" },
  ];

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const toggleColumn = (columnId) => {
    setSelectedColumns((prev) => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
  };

  return (
    <main className={`${roboto.className} min-h-screen bg-gray-50`}>
      {/* Top Nav */}
      <header className="bg-white border-b border-gray-200 px-7 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <span className={`${roboto.className} text-gray-500`}>Dashboard</span>
            <span className="text-black">/</span>
            <span className={`${roboto.className} text-black text-xs`}>Upload Dataset</span>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 bg-gray-200 bg-opacity-50 rounded-full px-5 py-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm w-24" />
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:bg-gray-100 p-1 rounded-full">
                <svg className="w-7.5 h-7.5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                </svg>
              </button>
              <button className="hover:bg-gray-100 p-1 rounded-full">
                <svg className="w-7.5 h-7.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="p-8 flex gap-6">
          {/* Upload Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-8 flex flex-col gap-8 max-w-3xl flex-1">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <h1 className={`${inter.className} text-xl font-semibold text-black`}>Upload Your Dataset</h1>
                <p className={`${inter.className} text-base text-gray-500`}>Select and upload your data file for analysis</p>
              </div>
              <button className="w-6 h-6 text-black hover:bg-gray-100 rounded-full">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-400 rounded-2xl p-8 flex flex-col items-center gap-6 bg-white">
              <div className="w-15 h-15 text-gray-700">
                <svg viewBox="0 0 60 60" fill="currentColor">
                  <path d="M30 10v30m0 0l-8-8m8 8l8-8M10 45h40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col gap-3 items-center text-center">
                <h3 className={`${inter.className} text-lg font-medium text-black`}>
                  Drag and drop your file here
                </h3>
                <p className={`${inter.className} text-sm text-gray-500`}>or browse to choose a file</p>
              </div>
              <label className={`${dmSans.className} bg-black text-white px-4 py-2.5 rounded-lg text-base font-medium cursor-pointer hover:bg-gray-800 transition-colors`}>
                Browse Files
                <input type="file" className="hidden" onChange={handleFileSelect} accept=".csv,.xlsx,.json" />
              </label>
            </div>

            {/* URL Input */}
            <div className="flex flex-col gap-1.5">
              <label className={`${inter.className} text-base text-black`}>Or import from URL</label>
              <div className="flex items-center gap-2.5 bg-white border border-gray-300 rounded-lg px-4 py-2.5">
                <input 
                  type="text" 
                  placeholder="Enter URL" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className={`${inter.className} flex-1 outline-none text-base text-gray-400`}
                />
                <button className={`${inter.className} bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800`}>
                  Import
                </button>
              </div>
            </div>

            {/* Uploaded Files */}
            {selectedFile && (
              <div className="flex flex-col gap-3">
                <h3 className={`${inter.className} text-lg font-medium text-black`}>Uploaded Files</h3>
                
                <div className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <svg className="w-7.5 h-7.5 text-gray-700 shrink-0" viewBox="0 0 30 30" fill="currentColor">
                      <path d="M8 4h14l4 4v14a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                    <div className="flex flex-col gap-0.5">
                      <span className={`${inter.className} text-base font-medium text-black`}>{selectedFile.name}</span>
                      <div className="flex items-center gap-1.5 text-sm text-gray-400">
                        <span>{(selectedFile.size / 1024).toFixed(1)} KB</span>
                        <div className="w-px h-3 bg-gray-300"></div>
                        <span>{selectedFile.type || 'CSV'}</span>
                        {uploadProgress === 100 ? (
                          <>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                            <span className="text-green-600">Upload Complete</span>
                          </>
                        ) : (
                          <>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                            <span>Uploading...</span>
                            <svg className="w-5 h-5 text-green-600 animate-spin" viewBox="0 0 20 20" fill="currentColor">
                              <circle cx="10" cy="10" r="2" opacity="0.4"/>
                            </svg>
                            <span>{uploadProgress}%</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-6">
              <button className={`${inter.className} flex-1 border border-gray-300 bg-white text-gray-800 px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-50 shadow-sm`}>
                Cancel
              </button>
              <button className={`${inter.className} flex-1 bg-black text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-800`}>
                Continue
              </button>
            </div>
          </div>

          {/* Sidebar Cards */}
          <div className="flex flex-col gap-6 w-84">
            {/* Upload Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col gap-4.5">
              <h3 className={`${roboto.className} text-base text-black`}>Upload Guideline</h3>
              
              <div className="flex flex-col gap-1">
                <span className={`${roboto.className} text-xs text-black`}>Supported Formats</span>
                <div className="flex gap-4 mt-2">
                  <span className="bg-black bg-opacity-10 px-2.5 py-1.5 rounded-full text-xs">CSV</span>
                  <span className="bg-black bg-opacity-10 px-2.5 py-1.5 rounded-full text-xs">Excel</span>
                  <span className="bg-black bg-opacity-10 px-2.5 py-1.5 rounded-full text-xs">JSON</span>
                </div>
              </div>

              <h4 className={`${roboto.className} text-sm text-black`}>File Requirements</h4>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 text-green-700" fill="none" viewBox="0 0 14.54 14.54">
                    <circle cx="7.27" cy="7.27" r="6.64" stroke="currentColor" strokeWidth="1.26"/>
                    <path d="M4.85 7.27l1.82 1.82 3.64-3.64" stroke="currentColor" strokeWidth="1.26" fill="none" strokeLinecap="round"/>
                  </svg>
                  <span className={`${roboto.className} text-xs text-black`}>Max file size: 20 MB</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 text-red-700" fill="none" viewBox="0 0 14.54 14.54">
                    <path d="M4.85 4.85l4.84 4.84m0-4.84l-4.84 4.84" stroke="currentColor" strokeWidth="1.26" strokeLinecap="round"/>
                    <path d="M7.27 1.63a5.64 5.64 0 100 11.28 5.64 5.64 0 000-11.28z" stroke="currentColor" strokeWidth="1.26"/>
                  </svg>
                  <span className={`${roboto.className} text-xs text-black`}>Column headers required</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 text-green-700" fill="none" viewBox="0 0 14.54 14.54">
                    <circle cx="7.27" cy="7.27" r="6.64" stroke="currentColor" strokeWidth="1.26"/>
                    <path d="M4.85 7.27l1.82 1.82 3.64-3.64" stroke="currentColor" strokeWidth="1.26" fill="none" strokeLinecap="round"/>
                  </svg>
                  <span className={`${roboto.className} text-xs text-black`}>No empty columns</span>
                </div>
              </div>

              <h4 className={`${roboto.className} text-base text-black mt-2`}>System Will:</h4>
              
              <div className="flex flex-col gap-2">
                <span className={`${roboto.className} text-xs text-gray-500`}>• Remove duplicate rows</span>
                <span className={`${roboto.className} text-xs text-gray-500`}>• Check for missing values</span>
                <span className={`${roboto.className} text-xs text-gray-500`}>• Validate date formats</span>
              </div>

              <p className={`${roboto.className} text-xs text-black leading-relaxed`}>
                Our system will automatically detect and clean common data issues
              </p>
            </div>

            {/* Column Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col gap-6">
              <h3 className={`${roboto.className} text-base text-black`}>Select Columns to Analyze</h3>
              
              <div className="flex flex-col gap-5">
                {columns.map((column) => (
                  <button
                    key={column.id}
                    onClick={() => toggleColumn(column.id)}
                    className="flex items-center gap-5 text-left"
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                      selectedColumns[column.id] ? 'bg-purple-200' : 'bg-purple-100'
                    }`}>
                      {selectedColumns[column.id] && (
                        <svg className="w-3 h-3 text-purple-800" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                        </svg>
                      )}
                    </div>
                    <span className={`${roboto.className} text-base text-black`}>{column.label}</span>
                  </button>
                ))}
              </div>

              <button className={`${dmSans.className} bg-black text-white px-2.5 py-2.5 rounded-lg text-base font-medium self-start hover:bg-gray-800`}>
                Apply
              </button>
            </div>
          </div>
        </div>
    </main>
  );
}
