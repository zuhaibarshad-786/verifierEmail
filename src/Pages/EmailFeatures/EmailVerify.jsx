import React, { useState } from 'react';
import SingleEmailForm from './Components/SingleEmailForm';
import MultipleEmailForm from './Components/MultipleEmailForm';
import BulkUploadForm from './Components/BulkUploadForm';
import Header from './Components/Header';

const EmailVerify = () => {
  const [activeTab, setActiveTab] = useState('single');

  const renderContent = () => {
    switch (activeTab) {
      case 'single':
        return <SingleEmailForm />;
      case 'multiple':
        return <MultipleEmailForm />;
      case 'bulk':
        return <BulkUploadForm />;
      default:
        return <SingleEmailForm />;
    }
  };

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`relative py-3 px-6 text-lg font-medium transition-colors duration-300
        ${activeTab === id ? 'text-blue-400' : 'text-white-400 hover:text-white cursor-pointer'}`}
    >
      {label}
      {activeTab === id && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400" />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#16213E] font-sans text-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-3 pt-3">
        <Header />
      </div>
      <main className="max-w-5xl mx-auto pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Email Verification
          </h1>
          <p className="mt-4 text-lg text-white-400 max-w-2xl mx-auto">
            Verify email addresses instantly with our powerful verification engine. Choose your preferred input method below.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex justify-center border-b border-gray-700/50">
          <TabButton id="single" label="Single Email" />
          <TabButton id="multiple" label="Multiple Email" />
          <TabButton id="bulk" label="Bulk Upload" />
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default EmailVerify;