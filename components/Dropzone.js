"use client";

import { useCallback, useRef, useState } from "react";

const ACCEPTED = [
  "text/csv",
  "application/json",
  // Some browsers use these for Excel
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
];

const EXTENSIONS = [".csv", ".json", ".xlsx", ".xls"];
const MAX_BYTES = 20 * 1024 * 1024; // 20 MB

export default function Dropzone({ onFile }) {
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");
  const [fileInfo, setFileInfo] = useState(null);
  const inputRef = useRef(null);

  const validate = (file) => {
    if (!file) return "No file selected";
    if (file.size > MAX_BYTES) return "File exceeds 20 MB limit";
    const typeOk = ACCEPTED.includes(file.type) || EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext));
    if (!typeOk) return "Unsupported format (CSV / JSON / Excel only)";
    return "";
  };

  const handleFiles = useCallback(
    async (files) => {
      const file = files?.[0];
      const err = validate(file);
      setError(err);
      if (err) {
        setFileInfo(null);
        return;
      }
      const info = { name: file.name, size: file.size };
      setFileInfo(info);
      onFile?.(file);
    },
    [onFile]
  );

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const onBrowse = () => inputRef.current?.click();

  return (
    <div className="w-full">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        className={[
          "rounded-xl border-2 border-dashed p-8 text-center transition-colors",
          dragOver ? "border-[#2fbc2f] bg-[#efebfa]" : "border-[#e3e4e6]",
        ].join(" ")}
      >
        <input
          ref={inputRef}
          type="file"
          accept={EXTENSIONS.join(",")}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        <div className="flex flex-col items-center gap-3">
          <div className="text-foreground/70 text-sm">Drag & drop your dataset</div>
          <button
            type="button"
            onClick={onBrowse}
            className="px-4 py-2 rounded-lg bg-[#2e3037] text-white hover:bg-black transition-colors"
          >
            Browse Files
          </button>
          <div className="text-xs text-foreground/60">CSV • Excel • JSON • Max 20MB</div>
        </div>
      </div>

      {fileInfo && (
        <div className="mt-3 text-sm text-foreground/80">
          Selected: <span className="font-medium">{fileInfo.name}</span> ({(fileInfo.size / (1024 * 1024)).toFixed(2)} MB)
        </div>
      )}
      {error && (
        <div className="mt-3 text-sm text-[#b00020]">{error}</div>
      )}
    </div>
  );
}
