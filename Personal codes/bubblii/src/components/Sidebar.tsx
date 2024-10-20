import React from 'react';
import { Home, Search, Users, Settings, PlusCircle } from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  setActiveView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setActiveView }) => {
  const menuItems = [
    { icon: Home, label: 'Home', view: 'feed' },
    { icon: Search, label: 'Explore', view: 'explore' },
    { icon: Users, label: 'Following', view: 'following' },
    { icon: PlusCircle, label: 'New Post', view: 'newPost' },
  ];

  return (
    <nav className={`bg-[#4a4158] bg-opacity-50 backdrop-filter backdrop-blur-lg text-purple-300 transition-all duration-300 ease-in-out ${collapsed ? 'w-16' : 'w-64'} flex flex-col justify-between`}>
      <ul className="mt-8">
        {menuItems.map((item, index) => (
          <li key={index} className="mb-4">
            <button
              onClick={() => setActiveView(item.view)}
              className="w-full flex items-center p-4 hover:bg-purple-800 hover:bg-opacity-50 transition-colors duration-200"
            >
              <item.icon className={`h-6 w-6 text-purple-400 flex-shrink-0 ${collapsed ? 'mx-auto' : 'mr-4'}`} />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-auto mb-8">
        <button
          onClick={() => setActiveView('settings')}
          className="w-full flex items-center p-4 hover:bg-purple-800 hover:bg-opacity-50 transition-colors duration-200"
        >
          <Settings className={`h-6 w-6 text-purple-400 flex-shrink-0 ${collapsed ? 'mx-auto' : 'mr-4'}`} />
          <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
            Settings
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;