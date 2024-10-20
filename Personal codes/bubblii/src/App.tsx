import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Messages from './components/Messages';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState('feed');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  return (
    <div className="min-h-screen bg-[#3f364d] text-purple-100 flex relative">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
      <Sidebar collapsed={sidebarCollapsed} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col">
        <Header
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          sidebarCollapsed={sidebarCollapsed}
          onNotificationsClick={() => setShowNotifications(!showNotifications)}
          onMessagesClick={() => setShowMessages(!showMessages)}
        />
        <main className="flex-1 overflow-y-auto p-8 relative">
          {activeView === 'feed' && <Feed />}
          {activeView === 'profile' && <Profile />}
          {showNotifications && <Notifications onClose={() => setShowNotifications(false)} />}
          {showMessages && <Messages onClose={() => setShowMessages(false)} />}
        </main>
      </div>
    </div>
  );
}

export default App;