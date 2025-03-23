import React, { useState } from 'react';
import Header from '../components/HomePage/Header';
import Footer from '../components/HomePage/Footer';
import Background from '../components/HomePage/Background';
import FileDropzone from '../components/HomePage/FileDropzone';
import CSVInstructions from '../components/CSVInstructions';

const HomePage: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const uploadedContent = '';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <Background />
      
      <main className="flex-1 w-full flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-10">
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
