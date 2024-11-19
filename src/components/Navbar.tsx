import React from 'react';
import { Link } from 'react-router-dom';
import { Coins, Users, MessageCircleQuestion, Send, BookOpen } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Logo />
              <span className="text-xl font-bold text-gray-900">BorderBucks</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Coins className="w-4 h-4" />} text="About" />
            <NavLink to="/blog" icon={<BookOpen className="w-4 h-4" />} text="Blog" />
            <NavLink to="/" icon={<Users className="w-4 h-4" />} text="Community" />
            <NavLink to="/" icon={<MessageCircleQuestion className="w-4 h-4" />} text="FAQ" />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Donate</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link 
      to={to} 
      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}