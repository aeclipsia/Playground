import React, { useState } from 'react';
import { MessageCircle, X, ChevronUp, ChevronDown, Phone, Video, Paperclip, Mic, Send } from 'lucide-react';

const DirectMessage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [message, setMessage] = useState('');

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  const conversations = [
    { id: 1, name: '@citylover', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', lastMessage: 'Hey, how are you?' },
    { id: 2, name: '@nightowl', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', lastMessage: 'Did you see the latest post?' },
  ];

  return (
    <div className={`fixed bottom-0 right-4 w-80 bg-[#4a4158] text-purple-100 rounded-t-lg shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'h-96' : 'h-12'} ${isCollapsed ? 'translate-y-[calc(100%-3rem)]' : ''}`}>
      <div className="flex items-center justify-between p-3 bg-[#3f364d] rounded-t-lg cursor-pointer" onClick={toggleOpen}>
        <div className="flex items-center">
          <MessageCircle className="h-5 w-5 mr-2 text-purple-300" />
          <span className="font-semibold">Messages</span>
        </div>
        <div className="flex items-center">
          {isOpen && (
            <button onClick={(e) => { e.stopPropagation(); toggleCollapsed(); }} className="mr-2 text-purple-300 hover:text-purple-100">
              {isCollapsed ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          )}
          <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="text-purple-300 hover:text-purple-100">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="p-4 h-full flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4">
            {conversations.map((conv) => (
              <div key={conv.id} className="flex items-center mb-4 p-2 hover:bg-[#3f364d] rounded-lg cursor-pointer">
                <img src={conv.avatar} alt={conv.name} className="w-10 h-10 rounded-full mr-3" />
                <div className="flex-1">
                  <h3 className="font-semibold text-purple-200">{conv.name}</h3>
                  <p className="text-sm text-purple-300 truncate">{conv.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mb-2">
            <button className="text-purple-300 hover:text-purple-100">
              <Phone className="h-5 w-5" />
            </button>
            <button className="text-purple-300 hover:text-purple-100">
              <Video className="h-5 w-5" />
            </button>
            <button className="text-purple-300 hover:text-purple-100">
              <Paperclip className="h-5 w-5" />
            </button>
            <button className="text-purple-300 hover:text-purple-100">
              <Mic className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center bg-[#3f364d] rounded-full p-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-purple-100 placeholder-purple-300 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="ml-2 text-purple-300 hover:text-purple-100">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectMessage;