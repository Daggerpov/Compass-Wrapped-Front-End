import React, { useState } from 'react';
import { Header, Footer, Background, FileDropzone } from '../components/HomePage';
import CSVInstructions from '../components/CSVInstructions';

const HomePage: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedContent, setUploadedContent] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center relative">
      <Background />
      
      <main className="flex-1 w-full flex flex-col items-center justify-center py-12 px-4">
        <div className="width-container flex-col-center gap-8">
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
