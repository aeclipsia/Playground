import React, { useState } from 'react';
import { MessageCircle, X, ChevronUp, ChevronDown } from 'lucide-react';

const DirectMessage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`fixed bottom-0 right-4 w-80 bg-zinc-900 text-white rounded-t-lg shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'h-96' : 'h-12'} ${isCollapsed ? 'tranzinc-y-[calc(100%-3rem)]' : ''}`}>
      <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-t-lg cursor-pointer" onClick={toggleOpen}>
        <div className="flex items-center">
          <MessageCircle className="h-5 w-5 mr-2" />
          <span className="font-semibold">Messages</span>
        </div>
        <div className="flex items-center">
          {isOpen && (
            <button onClick={(e) => { e.stopPropagation(); toggleCollapsed(); }} className="mr-2">
              {isCollapsed ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          )}
          <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="p-4">
          <p className="text-zinc-300">Your messages will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default DirectMessage;