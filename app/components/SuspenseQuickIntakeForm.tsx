"use client";

import { Suspense } from 'react';
import QuickIntakeForm from './QuickIntakeForm';

// Loading component for Suspense fallback
function QuickFormLoading() {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-5 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default function SuspenseQuickIntakeForm() {
  return (
    <Suspense fallback={<QuickFormLoading />}>
      <QuickIntakeForm />
    </Suspense>
  );
} 