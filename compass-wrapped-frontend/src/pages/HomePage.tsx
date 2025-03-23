import React, { useState } from 'react';
import { Header, Footer, Background, FileDropzone } from '../components/HomePage';
import CSVInstructions from '../components/CSVInstructions';

const HomePage: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const uploadedContent = '';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <Background />
      
      <main className="flex-1 w-full flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="width-container flex-col-center gap-10 mx-auto max-w-3xl">
          <Header />
          
          <FileDropzone />
          
          <CSVInstructions 
            uploading={uploading} 
            setUploading={setUploading} 
            uploadedContent={uploadedContent} 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
