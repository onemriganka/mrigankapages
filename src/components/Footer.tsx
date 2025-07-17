import { useState } from "react";
import PrivacyDialog from "./Privacy";
import TermsDialog from "./Terms";

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState<boolean>(false);
  const [termsOpen, setTermsOpen] = useState<boolean>(false);

  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 mb-4 md:mb-0">
          &copy; 2025 Mriganka Barman. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <button
            onClick={() => setPrivacyOpen(true)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setTermsOpen(true)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms of Service
          </button>
        </div>
      </div>

      <PrivacyDialog isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)}>
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

      <TermsDialog isOpen={termsOpen} onClose={() => setTermsOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
        <p>
          By using this application, you agree to our terms and conditions. These terms govern your use of our services and products.
        </p>
        <p>
          <strong>Usage:</strong> Do not misuse the service, interfere with functionality, or attempt unauthorized access.
        </p>
        <p>
          <strong>Liability:</strong> We are not responsible for any loss or damage resulting from use of the application.
        </p>
        <p>
          <strong>Modifications:</strong> Terms may be updated periodically. Continued use implies acceptance of those changes.
        </p>
      </TermsDialog>
    </footer>
  );
};

export default Footer;
