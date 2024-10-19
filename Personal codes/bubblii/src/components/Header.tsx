import React from 'react';
import { Bell, MessageCircle, Menu, Search } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, sidebarCollapsed }) => {
  return (
    <header className="bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-lg text-zinc-100 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={onToggleSidebar}
          className="text-zinc-400 hover:text-zinc-300 mr-4 focus:outline-none"
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold text-zinc-400">Bubblii</h1>
      </div>
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Bubblii"
            className="w-full bg-zinc-700 bg-opacity-50 text-zinc-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-zinc-400 hover:text-zinc-300 relative transform hover:scale-110 transition-transform duration-200">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="text-zinc-400 hover:text-zinc-300 transform hover:scale-110 transition-transform duration-200">
          <MessageCircle className="h-6 w-6" />
        </button>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
            className="h-10 w-10 rounded-full border-2 border-zinc-400 transform hover:scale-110 transition-transform duration-200"
          />
          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-zinc-800"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;