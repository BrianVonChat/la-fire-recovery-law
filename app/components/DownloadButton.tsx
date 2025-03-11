'use client';

import { useState } from 'react';
import { storage } from '../utils/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { FaDownload } from 'react-icons/fa';

interface DownloadButtonProps {
  storagePath: string;
  displayName: string;
  fileName: string;
  className?: string;
}

export default function DownloadButton({
  storagePath,
  displayName,
  fileName,
  className = "inline-flex items-center text-fire-700 font-medium hover:text-fire-800 transition-colors"
}: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      console.log(`Attempting to download file from path: ${storagePath}`);
      
      // Create a reference to the file in Firebase Storage
      const fileRef = ref(storage, storagePath);
      
      // Get the download URL
      const url = await getDownloadURL(fileRef);
      
      console.log(`Successfully got download URL: ${url}`);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      
      // Click the link to start the download
      link.click();
      
      // Clean up the link element
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
      
      if (error instanceof Error) {
        console.error(`Error details: ${error.message}`);
        
        if (error.message.includes('storage/object-not-found')) {
          setError('File not found. Please check that it exists in Firebase Storage.');
        } else if (error.message.includes('storage/unauthorized')) {
          setError('Permission denied. Please check Firebase Storage rules.');
        } else {
          setError(`Failed to download file: ${error.message}`);
        }
      } else {
        setError('Failed to download file. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={handleDownload}
        className={className}
        disabled={isLoading}
      >
        <FaDownload className="mr-2 h-4 w-4" />
        <span>{isLoading ? 'Downloading...' : displayName}</span>
      </button>
      
      {error && (
        <div className="text-xs text-red-600 mt-1">
          {error}
        </div>
      )}
    </div>
  );
} 