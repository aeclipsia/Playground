import React from 'react';
import { Home, Search, Users, User, Settings, PlusCircle } from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Search, label: 'Explore' },
    { icon: Users, label: 'Bubbles' },
    { icon: User, label: 'Profile' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className={`bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-lg text-zinc-300 transition-all duration-300 ease-in-out ${collapsed ? 'w-20' : 'w-64'} flex flex-col justify-between`}>
      <div>
        <div className="p-4">
          <h1 className={`text-2xl font-bold text-zinc-400 ${collapsed ? 'text-center' : ''}`}>
            {collapsed ? 'B' : 'Bubblii'}
          </h1>
        </div>
        <ul className="mt-8">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-4">
              <a href="#" className="flex items-center p-4 hover:bg-zinc-500 hover:bg-opacity-20 transition-colors duration-200">
                <item.icon className={`h-6 w-6 text-zinc-400 flex-shrink-0 ${collapsed ? 'mx-auto' : ''}`} />
                <span className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <button className={`w-full bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 transition-colors duration-200 flex items-center justify-center ${collapsed ? 'p-2' : ''}`}>
          <PlusCircle className={`h-6 w-6 ${collapsed ? '' : 'mr-2'}`} />
          {!collapsed && <span>New Post</span>}
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;