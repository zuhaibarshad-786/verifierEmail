import React from 'react';

const ArrowUpTrayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
    </svg>
);

const BulkUploadForm = () => {
    return (
        <div className="max-w-2xl mx-auto bg-[#2A3A5A] p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-blue-500 p-3 rounded-lg">
                    <ArrowUpTrayIcon />
                </div>
                <h2 className="text-xl font-semibold text-white">Bulk Upload (.csv, .txt)</h2>
            </div>

            <div className="mt-8">
                <div className="flex justify-center rounded-lg border-2 border-dashed border-gray-600 px-6 py-10">
                    <div className="text-center">
                        <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-gray-500" />
                        <div className="mt-4 flex text-sm leading-6 text-gray-400">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md font-semibold text-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-blue-300"
                            >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-500">CSV, TXT up to 10MB</p>
                    </div>
                </div>
                <button
                        type="submit"
                        className="flex mt-5 px-10 justify-center rounded-lg bg-gradient-to-r from-[#E97574] to-[#8C51C7] py-3 text-base font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C51C7] transition-opacity"
                    >
                        Start Verification
                    </button>

            </div>
        </div>
    );
};

export default BulkUploadForm;