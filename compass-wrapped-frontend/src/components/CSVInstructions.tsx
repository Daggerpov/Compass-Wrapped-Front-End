import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface CSVInstructionsProps {
  uploading: boolean;
  setUploading: (value: boolean) => void;
  uploadedContent: string;
}

const CSVInstructions: React.FC<CSVInstructionsProps> = ({ uploading, uploadedContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="bg-white/95 rounded-lg shadow-sm p-5 sm:p-6 w-full max-w-lg mx-auto text-center">
      <CardContent className="p-0">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full"
        >
          <div className="flex-center w-full mb-5">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 mx-auto">
                {isOpen ? 'Hide' : 'View'} CSV Instructions
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="space-y-4 text-center data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all">
            {uploading ? (
              <div className="flex-col-center gap-4">
                <p>Uploading...</p>
              </div>
            ) : uploadedContent ? (
              <div className="flex-col-center gap-4">
                <p>CSV file uploaded successfully!</p>
              </div>
            ) : (
              <div className="space-y-4 flex flex-col items-center">
                <p className="text-gray-600 mx-auto">To get your CSV file from TransLink please follow these steps:</p>
                <ol className="list-decimal space-y-2 text-gray-600 text-left max-w-md mx-auto">
                  <li>Go to <a href="https://compasscard.ca" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">compasscard.ca</a> and log in to your account.</li>
                  <li>Navigate to the "History" tab in your account.</li>
                  <li>Select the date range you want to analyze.</li>
                  <li>Click on "Download CSV" to download your transit history.</li>
                  <li>Upload the CSV file here to see your transit insights!</li>
                </ol>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default CSVInstructions; 