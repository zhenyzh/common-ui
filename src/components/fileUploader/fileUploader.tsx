import { clsx } from "clsx";
import { type ChangeEvent, type DragEvent, useRef, useState } from "react";
import { FileIcon } from "../../icons";
import { IconButton } from "../iconButton";
import { Typography } from "../typography";
import s from "./fileUploader.module.css";

export type FileUploaderProps = {
  onFileSelect: (file: File) => void;
  onRemoveFile?: (file: File | null) => void;
  className?: string;
  placeholder?: string;
  acceptedFormats?: string[];
  maxSizeInMB?: number;
  multiple?: boolean;
};

const DEFAULT_ACCEPTED_FORMATS = [
  ".pdf",
  ".txt",
  ".zip",
  ".json",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
];

export const FileUploader = ({
  className,
  onFileSelect,
  onRemoveFile,
  placeholder = "Upload file",
  acceptedFormats = DEFAULT_ACCEPTED_FORMATS,
  maxSizeInMB = 10,
  multiple = false,
}: FileUploaderProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (acceptedFormats.length && !acceptedFormats.includes(file.type)) {
      return `Allowed formats: ${acceptedFormats.join(", ")}`;
    }

    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    if (file.size > maxSizeInBytes) {
      return `File must be smaller than ${maxSizeInMB}MB`;
    }

    return null;
  };

  const handleFile = (file: File) => {
    const validationError = validateFile(file);

    if (validationError) {
      setError(validationError);
      setFile(null);
      return;
    }

    setError(null);
    setFile(file);
    onFileSelect(file);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles?.length) return;

    handleFile(selectedFiles[0]);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (!droppedFiles.length) return;

    handleFile(droppedFiles[0]);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setFile(null);
    setError(null);
    onRemoveFile?.(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={clsx(s.container, className)}>
      <label
        className={clsx(
          s.dropZone,
          isDragOver && s.dragOver,
          file && s.hasFile,
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedFormats.join(",")}
          multiple={multiple}
          onChange={handleChange}
          className={s.hiddenInput}
        />

        {file ? (
          <div className={s.fileInfo}>
            <FileIcon width={20} height={20} />
            <Typography variant="body2" className={s.fileName}>
              {file.name}
            </Typography>

            <IconButton
              className={s.removeButton}
              onClick={handleRemove}
              aria-label="Remove file"
              type="button"
            >
              ✕
            </IconButton>
          </div>
        ) : (
          <div className={s.uploadContent}>
            <div className={s.uploadIcon}>
              <FileIcon width={24} height={24} />
            </div>
            <Typography variant="body2" className={s.uploadText}>
              {placeholder}
            </Typography>
          </div>
        )}
      </label>

      {error && (
        <Typography variant="error" className={s.errorMessage}>
          {error}
        </Typography>
      )}
    </div>
  );
};
