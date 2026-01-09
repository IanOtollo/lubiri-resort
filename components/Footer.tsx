import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-white">Lubiri</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600"> Resort</span>
            </h3>
            <p className="text-sm mb-6 leading-relaxed text-gray-400">
              Experience extraordinary comfort and unparalleled hospitality in the heart of Busia, Kenya.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/rooms" className="hover:text-amber-400 transition-colors text-sm">Rooms & Suites</Link></li>
              <li><Link href="/dining" className="hover:text-amber-400 transition-colors text-sm">Dining</Link></li>
              <li><Link href="/amenities" className="hover:text-amber-400 transition-colors text-sm">Amenities</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-400 transition-colors text-sm">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Swimming Pool
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Restaurant & Bar
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Free Wi-Fi
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                24/7 Front Desk
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Free Parking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Conference Facilities
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-amber-500" />
                <span className="text-sm text-gray-400">Kisumu - Busia Road, Lubiri Plot<br />Busia County, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-amber-500" />
                <a href="tel:+254733510377" className="hover:text-amber-400 text-sm transition-colors">+254 733 510377</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-amber-500" />
                <a href="mailto:info@lubiriresort.co.ke" className="hover:text-amber-400 text-sm transition-colors">info@lubiriresort.co.ke</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} <span className="text-amber-500">Lubiri Resort</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
