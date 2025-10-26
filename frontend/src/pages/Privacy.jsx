// src/pages/Privacy.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information you provide directly to us when you use Qroom, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 ml-4">
              <li>Account information (name, email address)</li>
              <li>Qroom content and questions you create</li>
              <li>Responses and participation data</li>
              <li>Technical information about your device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 ml-4">
              <li>Provide and maintain the Qroom service</li>
              <li>Process your transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational security measures 
              designed to protect your personal information. However, no method of 
              transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-blue-600 mt-2">privacy@qroom.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
