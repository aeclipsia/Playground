import React from 'react';
import { Bell, MessageCircle, Menu, Search } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
  onNotificationsClick: () => void;
  onMessagesClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, sidebarCollapsed, onNotificationsClick, onMessagesClick }) => {
  return (
    <header className="bg-[#4a4158] bg-opacity-50 backdrop-filter backdrop-blur-lg text-purple-100 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={onToggleSidebar}
          className="text-purple-400 hover:text-purple-300 mr-4 focus:outline-none"
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold text-purple-400">Bubblii</h1>
      </div>
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Bubblii"
            className="w-full bg-[#3f364d] bg-opacity-50 text-purple-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-purple-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onNotificationsClick}
          className="text-purple-400 hover:text-purple-300 relative transform hover:scale-110 transition-transform duration-200"
        >
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button
          onClick={onMessagesClick}
          className="text-purple-400 hover:text-purple-300 transform hover:scale-110 transition-transform duration-200"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
            className="h-10 w-10 rounded-full border-2 border-purple-400 transform hover:scale-110 transition-transform duration-200"
          />
          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-[#4a4158]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;