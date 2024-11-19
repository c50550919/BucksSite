import React from 'react';
import { MessagesSquare } from 'lucide-react';

// Custom X (Twitter) icon
function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z" fill="currentColor"/>
    </svg>
  );
}

// Custom Telegram icon
function TelegramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="currentColor"/>
    </svg>
  );
}

// Custom Discord icon
function DiscordIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4.19 14.76 4.46 14.67 4.68C13.09 4.44 11.52 4.44 9.95 4.68C9.85 4.46 9.72 4.19 9.61 4C8.11 4.26 6.67 4.71 5.34 5.33C2.68 9.41 1.89 13.37 2.28 17.27C4.07 18.64 5.81 19.46 7.52 20C7.84 19.54 8.13 19.06 8.37 18.55C7.80 18.35 7.25 18.09 6.73 17.79C6.83 17.72 6.93 17.64 7.02 17.57C10.89 19.33 15.14 19.33 18.97 17.57C19.07 17.64 19.17 17.72 19.27 17.79C18.74 18.09 18.19 18.35 17.62 18.55C17.87 19.06 18.15 19.54 18.47 20C20.19 19.46 21.93 18.64 23.72 17.27C24.17 12.73 22.93 8.81 20.72 5.33H19.27ZM8.02 14.89C7.03 14.89 6.21 13.97 6.21 12.86C6.21 11.74 7.01 10.83 8.02 10.83C9.04 10.83 9.84 11.74 9.82 12.86C9.83 13.97 9.04 14.89 8.02 14.89ZM15.97 14.89C14.98 14.89 14.16 13.97 14.16 12.86C14.16 11.74 14.96 10.83 15.97 10.83C16.99 10.83 17.79 11.74 17.77 12.86C17.77 13.97 16.99 14.89 15.97 14.89Z" fill="currentColor"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-8 mb-8">
            <SocialLink href="https://x.com" icon={<XIcon />} label="Follow on X" />
            <SocialLink href="https://t.me" icon={<TelegramIcon />} label="Join Telegram" />
            <SocialLink href="https://discord.gg" icon={<DiscordIcon />} label="Join Discord" />
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BorderBucks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/10"
      aria-label={label}
    >
      {icon}
    </a>
  );
}