// src/components/FeaturesSection.jsx
const features = [
  {
    title: "📊 Live Polling",
    desc: "Create instant multiple choice questions and see audience responses live with beautiful charts.",
  },
  {
    title: "☁️ Word Clouds",
    desc: "Let users submit words or phrases — watch as popular answers grow bigger in real-time.",
  },
  {
    title: "💬 Text Responses",
    desc: "Collect open-ended feedback, ideas, or opinions anonymously or with names.",
  },
  {
    title: "🔗 Join via Code",
    desc: "No login needed for participants — they just enter a room code and start interacting.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-20 px-6 border-b-4 border-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Powerful Features, Simple Interface
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Qroom helps you engage your audience through meaningful, real-time interaction – all from your browser.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border-[2px] animate-fade-in border-black rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold text-teal-700 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
