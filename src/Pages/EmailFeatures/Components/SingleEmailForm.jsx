import React from 'react';

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const SingleEmailForm = () => {
    return (
        <div className="max-w-2xl mx-auto bg-[#2A3A5A] p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-blue-500 p-3 rounded-lg">
                    <MailIcon />
                </div>
                <h2 className="text-xl font-semibold text-white">Verify Single Email</h2>
            </div>

            <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                        Email Address
                    </label>
                    <div className="mt-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-lg border-0 bg-[#1E293B] py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition"
                            placeholder="name@domain.com"
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

export default SingleEmailForm;