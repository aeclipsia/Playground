import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Feed from './components/Feed';
import DirectMessage from './components/DirectMessage';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-100 flex">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex-1 flex flex-col">
        <Header
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          sidebarCollapsed={sidebarCollapsed}
        />
        <main className="flex-1 overflow-y-auto p-8">
          <Feed />
        </main>
      </div>
      <DirectMessage />
    </div>
  );
}

export default App;