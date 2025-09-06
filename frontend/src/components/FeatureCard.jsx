// src/components/FeatureCard.jsx
const FeatureCard = ({ title, desc, icon }) => {
    return (
      <div className="bg-white border-[3px] border-black p-6 rounded-xl shadow-lg text-left">
        <h3 className="text-xl font-bold mb-2 text-gray-900 flex items-center gap-2">
          {icon} {title}
        </h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    );
  };
  
  export default FeatureCard;
  