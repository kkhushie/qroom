// frontend/src/pages/QroomParticipant.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const QroomParticipant = () => {
  const { code } = useParams();
  
  // Dummy data - no API calls, no sockets
  const [qroom] = useState({
    title: "Weekly Team Meeting",
    code: code,
    participantCount: 12
  });

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Simulate receiving a question after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentQuestion({
        _id: "1",
        text: "How satisfied are you with today's meeting?",
        type: "mcq",
        description: "Rate your satisfaction level",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied", "Very Unsatisfied"]
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmitResponse = (response) => {
    console.log('Submitted:', response);
    setHasSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {qroom.title}
              </h1>
              <p className="text-gray-600">Qroom Code: <span className="font-mono font-bold">{code}</span></p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <i className="fas fa-users"></i>
                <span>{qroom.participantCount} participants</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {!currentQuestion ? (
          // Waiting for question state
          <div className="text-center py-16">
            <div className="text-6xl text-gray-400 mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Waiting for Questions
            </h2>
            <p className="text-gray-500">
              The host will start a question soon...
            </p>
          </div>
        ) : (
          // Active question state
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border-2 border-black p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentQuestion.type.toUpperCase()}
                </span>
                <span className="text-gray-500 text-sm">
                  Question 1
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {currentQuestion.text}
              </h2>

              {currentQuestion.description && (
                <p className="text-gray-600 mb-6">
                  {currentQuestion.description}
                </p>
              )}

              {/* MCQ Options */}
              {currentQuestion.type === 'mcq' && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleSubmitResponse(option)}
                      disabled={hasSubmitted}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        hasSubmitted 
                          ? 'border-gray-200 bg-gray-100 cursor-not-allowed' 
                          : 'border-gray-200 bg-white hover:border-blue-500 hover:bg-blue-50 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        </div>
                        <span className="font-medium">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Text Input */}
              {currentQuestion.type === 'text' && (
                <div className="space-y-4">
                  <textarea
                    placeholder="Type your answer here..."
                    disabled={hasSubmitted}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  {!hasSubmitted && (
                    <button
                      onClick={() => handleSubmitResponse("Sample text response")}
                      className="w-full bg-black text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-800"
                    >
                      Submit Response
                    </button>
                  )}
                </div>
              )}

              {/* Word Cloud Input */}
              {currentQuestion.type === 'wordcloud' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter a word or short phrase..."
                    disabled={hasSubmitted}
                    className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {!hasSubmitted && (
                    <button
                      onClick={() => handleSubmitResponse("Sample word")}
                      className="w-full bg-black text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-800"
                    >
                      Add to Word Cloud
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Submission Status */}
            {hasSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <i className="fas fa-check-circle"></i>
                  <span className="font-semibold">Response submitted!</span>
                </div>
                <p className="text-green-600 text-sm mt-1">
                  Waiting for other participants...
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QroomParticipant;