import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Golden Harvest Cashews Ltd.
          </h3>
          <p>Sunyani, Bono Region, Ghana</p>
          <p>Phone: +233 24 567 8901</p>
          <p>Email: info@goldenharvestcashews.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#products">Products</Link>
            </li>
            <li>
              <Link href="#about">About Us</Link>
            </li>
            <li>
              <Link href="#gallery">Gallery</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-purple-400 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-purple-200 mb-4 sm:mb-0">
          © 2024 Your Company Name. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-purple-200 hover:text-white transition-colors duration-200"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="text-purple-200 hover:text-white transition-colors duration-200"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="text-purple-200 hover:text-white transition-colors duration-200"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="text-purple-200 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
