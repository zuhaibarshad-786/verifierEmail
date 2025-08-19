import React from 'react';

const DocumentDuplicateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>
);


const MultipleEmailForm = () => {
    return (
        <div className="max-w-2xl mx-auto bg-[#2A3A5A] p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-blue-500 p-3 rounded-lg">
                    <DocumentDuplicateIcon />
                </div>
                <h2 className="text-xl font-semibold text-white">Verify Multiple Emails</h2>
            </div>

            <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="emails" className="block text-sm font-medium text-gray-400">
                        Email Addresses (one per line)
                    </label>
                    <div className="mt-2">
                        <textarea
                            name="emails"
                            id="emails"
                            rows={5}
                            className="block w-full rounded-lg border-0 bg-[#1E293B] py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition"
                            placeholder="user1@example.com&#10;user2@example.com&#10;user3@example.com"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex px-10 justify-center rounded-lg bg-gradient-to-r from-[#E97574] to-[#8C51C7] py-3 text-base font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C51C7] transition-opacity"
                    >
                        Verify Email
                    </button>

                </div>
            </form>
        </div>
    );
};

export default MultipleEmailForm;