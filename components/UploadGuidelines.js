export default function UploadGuidelines() {
  return (
    <div className="rounded-xl border border-[#e3e4e6] p-6 bg-white">
      <h3 className="text-base font-medium mb-4">Upload Guideline</h3>

      <div className="mb-5">
        <div className="text-sm font-medium mb-2">Supported Formats</div>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "CSV" },
            { label: "Excel" },
            { label: "JSON" },
          ].map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-[#e3e4e6] px-3 py-1 text-xs text-foreground/80"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2 text-sm text-foreground/80">
        <div className="font-medium">File Requirements</div>
        <ul className="list-disc pl-5 space-y-1">
          <li>Max file size: 20 MB</li>
          <li>Include clear header row for columns</li>
          <li>UTF-8 encoding recommended</li>
          <li>No merged cells in Excel files</li>
        </ul>
      </div>
    </div>
  );
}
