import React from "react";
import { Mailbox, CheckCircle2, Settings } from "lucide-react";


const EmailToolsSection = () => {
  return (
    <>
    <div
      className="text-white py-8 px-4"
      style={{
        background:
          "radial-gradient(32.14% 49.96% at 60.13% 50.04%, #19132E 0%, #110D23 34.92%, #0F0E1A 100%)",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-4">
          Powerful Email Tools
        </h1>
        <div className="">
        <p className=" text-xs sm:text-sm  md:text-xl text-[#FFFFFF] max-w-3xl mx-auto mb-18 leading-6">
          Everything you need to discover, verify, and manage emails at
          scale—delivering unmatched accuracy, speed, and reliability for your
          outreach.
        </p>
        </div>  

     <div className="mb-8 w-[90%] border border-[#302F3C] mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#FFFFFF]">
          {/* Email Finder Card */}
          <div className="p-6 text-left">
            <div className="flex items-center mb-4">
              <Mailbox size={32} className="text-white mr-3" />
              <h3 className="text-xs sm:text-sm md:text-base font-semibold">
                Email Finder
              </h3>
            </div>
            <p>
              Grow your sales systems agency by discovering emails with 97%+
              accuracy.
            </p>
          </div>

          {/* Email Verifier Card */}
          <div className="p-6 text-left">
            <div className="flex items-center mb-4">
              <CheckCircle2 size={32} className="text-white mr-3" />
              <h3 className="text-xs sm:text-sm  md:text-base font-semibold">
                Email Verifier
              </h3>
            </div>
            <p>
              Never land in spam again using our auto-scaling technology. We run
              every email through SMTP, DNS, and inbox checks.
            </p>
          </div>

          {/* Bulk Processing Card */}
          <div className="p-6 text-left">
            <div className="flex items-center mb-4">
              <Settings size={32} className="text-white mr-3" />
              <h3 className="text-xs sm:text-sm  md:text-base font-semibold">
                Bulk Processing
              </h3>
            </div>
            <p>
              Verify thousands of emails in seconds with our powerful API
              designed for high volume processing.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EmailToolsSection;
