import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-red-600" />
              <span className="font-black text-lg text-gray-800 dark:text-white">
                Jarurat Care
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Community-driven healthcare support powered by volunteers and AI.
              Built to respond when it matters the most.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="hover:text-red-600 cursor-pointer"
              ><a href="/" className="block">Home</a></li>
              <li className="hover:text-red-600 cursor-pointer"><a href="/" className="block">Volunteer</a></li>
              <li className="hover:text-red-600 cursor-pointer"><a href="/" className="block">AI Support</a></li>
              <li className="hover:text-red-600 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-4">
              Emergency
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:108"
                className="flex items-center gap-2 text-red-600 font-bold"
              >
                <Phone size={16} /> Call 108
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                For medical emergencies, always contact local emergency services
                first.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@jaruratcare.org
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> India
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-4 mt-4">
              <Facebook className="hover:text-blue-600 cursor-pointer" />
              <Twitter className="hover:text-sky-500 cursor-pointer" />
              <Instagram className="hover:text-pink-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t dark:border-gray-800 mt-10 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Jarurat Care · Built with ❤️ for Human Need
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
