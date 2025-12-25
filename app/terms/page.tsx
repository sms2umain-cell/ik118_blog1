import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-blue-100 mb-8">
                Please read these terms carefully before using our services
              </p>
              <p className="text-sm text-blue-200">Last Updated: January 1, 2025</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Agreement to Terms</h2>
              <p className="text-gray-700 text-lg mb-4">
                By accessing or using IK118, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily access the materials on IK118 for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software on IK118</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Age Restriction</h2>
              <p className="text-gray-700 text-lg mb-4">
                You must be at least 18 years old to use this website. By using IK118, you represent and warrant that you are of legal age to form a binding contract and meet all eligibility requirements.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
                <p className="text-amber-800 font-semibold">
                  <i className="ri-alert-line mr-2"></i>
                  18+ Only - Gambling can be addictive. Please play responsibly.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The materials on IK118 are provided on an 'as is' basis. IK118 makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property or other violation of rights</li>
                <li>Accuracy, reliability, or completeness of information</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Limitations</h2>
              <p className="text-gray-700 mb-4">
                In no event shall IK118 or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on IK118.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                IK118 may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p className="text-gray-700">
                You acknowledge and agree that IK118 shall not be responsible or liable for any damage or loss caused by your use of any third-party content, goods, or services.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Responsible Gaming</h2>
              <p className="text-gray-700 mb-4">
                IK118 promotes responsible gaming. We encourage all users to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Set deposit and time limits</li>
                <li>Never chase losses</li>
                <li>Only gamble with money you can afford to lose</li>
                <li>Seek help if gambling becomes a problem</li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-6 mt-4">
                <p className="text-gray-700 mb-2"><strong>Need Help?</strong></p>
                <p className="text-gray-700">Gambling Help Online: 1800 858 858</p>
                <p className="text-gray-700">Website: www.gamblinghelponline.org.au</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Modifications</h2>
              <p className="text-gray-700 mb-4">
                IK118 may revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the current version of these Terms of Service.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@ik118.net</p>
                <p className="text-gray-700"><strong>Website:</strong> www.ik118.net</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}