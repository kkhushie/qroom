// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-black text-white py-6 px-6 border-t-4 border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">© 2025 Qroom. Built with ❤️ in India.</p>
          <div className="space-x-4 text-sm">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">GitHub</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  