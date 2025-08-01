// components/layouts/Footer.tsx
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Splash App</h3>
          <p className="text-gray-400 mb-4">
            Your one-stop platform for all your needs. Connecting people, creating opportunities.
          </p>
          <p className="text-gray-400">© 2024 Splash App. All rights reserved.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul>
            <li className="mb-2"><a href="/about" className="hover:text-white text-gray-400">About Us</a></li>
            <li className="mb-2"><a href="/services" className="hover:text-white text-gray-400">Services</a></li>
            <li className="mb-2"><a href="/contact" className="hover:text-white text-gray-400">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white text-gray-400"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white text-gray-400"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white text-gray-400"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
