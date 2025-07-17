import  { useState } from "react";
import PrivacyDialog from "./Privacy";


const Footer = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 mb-4 md:mb-0">
          &copy; 2025 Mriganka Barman. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <button
            onClick={() => setOpen(true)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </button>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>

      <PrivacyDialog isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
        <p>
          We are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application. We do not share your data with third parties without consent.
        </p>
        <p>
          <strong>Data We Collect:</strong> Name, email, and usage data.
        </p>
        <p>
          <strong>How We Use It:</strong> To provide and improve services, send updates, and ensure security.
        </p>
        <p>
          <strong>Your Rights:</strong> You can request data access, correction, or deletion anytime by contacting us.
        </p>
      </PrivacyDialog>
    </footer>
  );
};

export default Footer;
