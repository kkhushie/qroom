// src/components/TestimonialsSection.jsx
const testimonials = [
    {
      name: "Neha M.",
      rating: "⭐ 4.8",
      text: "Qroom helped make my online class super engaging. The students loved it!",
    },
    {
      name: "Aditya K.",
      rating: "⭐ 5.0",
      text: "I hosted a webinar and Qroom kept my audience active throughout. Loved it!",
    },
    {
      name: "Priya S.",
      rating: "⭐ 4.9",
      text: "The word cloud feature made our team meeting super fun and insightful.",
    },
  ];
  
  const TestimonialsSection = () => {
    return (
      <section className=" py-16 px-6 border-b-4 border-black">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">💬 What Users Say</h2>
  
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border-[3px] border-black p-6 rounded-xl shadow-md">
              <div className="text-lg font-semibold text-pink-700 mb-2">{t.name}</div>
              <div className="text-yellow-600 text-sm mb-2">{t.rating}</div>
              <p className="text-gray-700 text-sm">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  