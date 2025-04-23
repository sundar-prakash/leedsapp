import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        By downloading or using the LeedsApp, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages or make derivative versions. The app itself and all the trademarks, copyright, database rights, and other intellectual property rights related to it still belong to Leedsapp.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Modifications and Charges</h2>
      <p className="mb-4">
        Leedsapp is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Data and Security</h2>
      <p className="mb-4">
        The LeedsApp stores and processes personal data that you have provided to us, to provide our service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which could compromise security and affect app functionality.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Third-party Services</h2>
      <p className="mb-4">
        The app does use third-party services that declare their Terms and Conditions:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Google Play Services</li>
        <li>Google Analytics for Firebase</li>
        <li>Firebase Crashlytics</li>
        <li>Facebook</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Internet Connection and Usage</h2>
      <p className="mb-4">
        Leedsapp cannot take responsibility for the app not working properly if you do not have an active internet connection. Additionally, using the app outside your home region may incur data charges based on your mobile provider&apos;s terms.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Updates and Termination</h2>
      <p className="mb-4">
        Leedsapp may update the app over time and reserves the right to discontinue the service without prior notice. You agree to accept updates when offered to ensure continued functionality.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to Terms</h2>
      <p className="mb-4">
        We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page. These terms and conditions are effective as of 2023-03-11.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at <a href="mailto:support@leedsapp.com" className="text-blue-600">support@leedsapp.com</a>.
      </p>
    </div>
  );
};

export default TermsOfService;
