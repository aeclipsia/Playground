import React from 'react';
import { X } from 'lucide-react';

interface NotificationsProps {
  onClose: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({ onClose }) => {
  const notifications = [
    { id: 1, user: '@citylover', action: 'popped your post', time: '2m ago' },
    { id: 2, user: '@nightowl', action: 'chimed on your post', time: '15m ago' },
    { id: 3, user: '@travelbug', action: 'started following you', time: '1h ago' },
    { id: 4, user: '@foodie', action: 'floated your post', time: '3h ago' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50">
      <div className="bg-[#4a4158] rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-purple-200">Notifications</h2>
          <button onClick={onClose} className="text-purple-300 hover:text-purple-100">
            <X />
          </button>
        </div>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center p-2 hover:bg-[#3f364d] rounded-lg transition-colors duration-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-purple-100">
                  <span className="font-semibold">{notification.user}</span> {notification.action}
                </p>
                <p className="text-sm text-purple-300">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;