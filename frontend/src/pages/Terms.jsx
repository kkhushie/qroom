// src/pages/Terms.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using Qroom, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to these terms, please 
              do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use License</h2>
            <p className="text-gray-600 leading-relaxed">
              Permission is granted to temporarily use Qroom for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              As a user of Qroom, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 ml-4">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your password and account</li>
              <li>Use the service in compliance with all applicable laws</li>
              <li>Not engage in harassment, spam, or abusive behavior</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Service Modifications</h2>
            <p className="text-gray-600 leading-relaxed">
              Qroom reserves the right to modify or discontinue, temporarily or permanently, 
              the service with or without notice. We shall not be liable to you or any third 
              party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              Questions about the Terms of Service should be sent to us at:
            </p>
            <p className="text-blue-600 mt-2">legal@qroom.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
