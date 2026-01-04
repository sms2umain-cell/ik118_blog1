export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 mb-8">
              Your privacy is important to us. Learn how we protect your information
            </p>
            <p className="text-sm text-blue-200">Last Updated: January 1, 2025</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Introduction</h2>
            <p className="text-gray-700 text-lg mb-4">
              At IK118, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-gray-700 text-lg">
              By using our website, you consent to the data practices described in this policy.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-2">We may collect personal information that you voluntarily provide to us, including:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Name and email address</li>
                  <li>Contact information</li>
                  <li>Account credentials</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-2">When you visit our website, we automatically collect certain information:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Send you newsletters and promotional materials (with your consent)</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Analyze website usage and trends</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Information Sharing</h2>
            <p className="text-gray-700 mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Service providers who assist in operating our website</li>
              <li>Analytics partners to understand website usage</li>
              <li>Law enforcement when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve our services</li>
              <li>Deliver relevant content and advertisements</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You can control cookies through your browser settings, but disabling them may affect website functionality.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@ik118.net</p>
              <p className="text-gray-700"><strong>Website:</strong> www.ik118.net</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}