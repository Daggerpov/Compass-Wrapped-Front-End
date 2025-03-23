import React, { useState } from 'react';
import { Header, Footer, FileDropzone } from '@/components/HomePage';
import CSVInstructions from '@/components/CSVInstructions';

const HomePage: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const uploadedContent = '';

  return (
    <div className="width-container">
      <div 
        className={`border-2 border-dashed rounded-xl p-6 flex-col-center`}>
      <main className="flex-1 w-full flex flex-col items-center justify-center py-8 px-4 text-center">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-12">
          <div className="w-full flex flex-col items-center">
            <Header />
          </div>
          
          <div className="w-full flex flex-col items-center">
            <FileDropzone />
          </div>
          
          <div className="w-full flex flex-col items-center">
            <CSVInstructions 
              uploading={uploading} 
              setUploading={setUploading} 
              uploadedContent={uploadedContent} 
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
    </div>
  );
};

export default HomePage;
