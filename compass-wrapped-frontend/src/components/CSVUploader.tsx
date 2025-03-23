import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useData } from '../hooks/useData';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useToast } from './ui/use-toast';

interface CSVUploaderProps {
  onUploadStart?: () => void;
  onUploadComplete?: () => void;
}

export function CSVUploader({ onUploadStart, onUploadComplete }: CSVUploaderProps) {
  const { uploadCSV } = useData();
  const { toast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) {
      toast({
        title: "Error",
        description: "Please select a valid CSV file.",
        variant: "destructive",
      });
      return;
    }

    const file = acceptedFiles[0];
    if (!file.name.toLowerCase().endsWith(".csv")) {
      toast({
        title: "Error",
        description: "Please select a valid CSV file.",
        variant: "destructive",
      });
      return;
    }

    try {
      onUploadStart?.();
      await uploadCSV(file);
      onUploadComplete?.();
      toast({
        title: "Success",
        description: "Your CSV file has been uploaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to upload CSV file.",
        variant: "destructive",
      });
    }
  }, [uploadCSV, onUploadStart, onUploadComplete, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    maxFiles: 1,
  });

  return (
    <Card
      {...getRootProps()}
      className={`relative flex h-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
        isDragActive ? "border-indigo-600" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      <div className="space-y-4">
        <div className="text-4xl text-gray-400">📄</div>
        <div className="text-sm text-gray-600">
          {isDragActive ? (
            "Drop your Compass Card CSV file here"
          ) : (
            <>
              <Button
                type="button"
                variant="outline"
                className="mb-2"
              >
                Choose a file
              </Button>
              <p>or drag and drop your Compass Card CSV file</p>
            </>
          )}
        </div>
        <p className="text-xs text-gray-500">Only CSV files are accepted</p>
      </div>
    </Card>
  );
} 