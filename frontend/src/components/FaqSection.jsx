// src/components/FaqSection.jsx
import { useState } from "react";

const faqs = [
  {
    question: "Is Qroom free to use?",
    answer: "Yes! Qroom is completely free during the MVP phase. You can create unlimited rooms and add questions without paying anything.",
  },
  {
    question: "Do participants need to register?",
    answer: "No. Participants can simply enter the room code shared by the host and start answering questions — no login required.",
  },
  {
    question: "What types of questions are supported?",
    answer: "You can create multiple choice (MCQ), open text, and word cloud questions. More formats will be added soon!",
  },
  {
    question: "Can I see live results?",
    answer: "Yes! Hosts get real-time visual feedback through charts and lists as responses come in.",
  },
  {
    question: "Is my data safe?",
    answer: "We use secure backend systems with JWT-based authentication and MongoDB to protect your data.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-24 px-6 border-b-4 border-black">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        ❓ Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-2 border-black rounded-lg bg-white shadow-md"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 font-semibold text-lg text-gray-900 flex justify-between items-center"
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
