import { useState } from "react";

export default function DragDrop() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-black border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {file ? (
          <div className="flex flex-col items-center">
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-lg"
            />
            <p className="text-sm text-gray-700 mt-2">{file.name}</p>
            <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-black">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-black">PNG (MAX. 800x400px)</p>
          </div>
        )}
        <input
          id="dropzone-file"
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/gif, image/svg+xml, image/webp, image/apng, image/avif, image/tiff, image/bmp, image/x-icon, image/vnd.microsoft.icon, image/vnd.wap.wbmp, image/heic, image/heif, image/heif-sequence, image/heic-sequence"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}