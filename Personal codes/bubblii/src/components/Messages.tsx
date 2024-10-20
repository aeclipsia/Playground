import React, { useState } from 'react';
import { X, Phone, Video, Paperclip, Mic, Send } from 'lucide-react';

interface MessagesProps {
  onClose: () => void;
}

const Messages: React.FC<MessagesProps> = ({ onClose }) => {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const conversations = [
    { id: 1, name: '@citylover', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', lastMessage: 'Hey, how are you?' },
    { id: 2, name: '@nightowl', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', lastMessage: 'Did you see the latest post?' },
  ];

  const chatMessages = [
    { id: 1, sender: 'user', content: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, sender: 'other', content: "I'm good, thanks! How about you?", time: '10:32 AM' },
    { id: 3, sender: 'user', content: 'Doing well! Did you see the new urban exploration spot I found?', time: '10:35 AM' },
    { id: 4, sender: 'other', content: "No, I haven't! Where is it?", time: '10:36 AM' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#4a4158] rounded-lg w-full max-w-4xl h-[80vh] flex">
        <div className="w-1/3 border-r border-purple-700">
          <div className="p-4 border-b border-purple-700">
            <h2 className="text-xl font-semibold text-purple-200">Messages</h2>
          </div>
          <div className="overflow-y-auto h-[calc(80vh-60px)]">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`flex items-center p-4 hover:bg-[#3f364d] cursor-pointer ${activeChat === conv.id ? 'bg-[#3f364d]' : ''}`}
                onClick={() => setActiveChat(conv.id)}
              >
                <img src={conv.avatar} alt={conv.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold text-purple-200">{conv.name}</h3>
                  <p className="text-sm text-purple-300 truncate">{conv.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="p-4 border-b border-purple-700 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-purple-200">
              {activeChat ? conversations.find(c => c.id === activeChat)?.name : 'Select a conversation'}
            </h2>
            <div className="flex space-x-2">
              <button className="text-purple-300 hover:text-purple-100">
                <Phone className="h-5 w-5" />
              </button>
              <button className="text-purple-300 hover:text-purple-100">
                <Video className="h-5 w-5" />
              </button>
              <button onClick={onClose} className="text-purple-300 hover:text-purple-100">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {activeChat && chatMessages.map((msg) => (
              <div key={msg.id} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-[#3f364d] text-purple-200'}`}>
                  {msg.content}
                </div>
                <p className="text-xs text-purple-400 mt-1">{msg.time}</p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-purple-700">
            <div className="flex items-center bg-[#3f364d] rounded-full p-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-transparent text-purple-100 placeholder-purple-300 focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="mx-2 text-purple-300 hover:text-purple-100">
                <Paperclip className="h-5 w-5" />
              </button>
              <button className="mr-2 text-purple-300 hover:text-purple-100">
                <Mic className="h-5 w-5" />
              </button>
              <button className="text-purple-300 hover:text-purple-100">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;