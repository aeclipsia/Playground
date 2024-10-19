import React, { useState } from 'react';
import { MessageCircle, Share2 } from 'lucide-react';

const BubbleIcon: React.FC<{ filled?: boolean }> = ({ filled = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const Feed: React.FC = () => {
  const [poppedPosts, setPoppedPosts] = useState<Set<number>>(new Set());

  const posts = [
    {
      id: 1,
      user: 'Jane Doe',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      image: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      caption: 'Beautiful sunset at the beach! 🌅 #BeachVibes',
      pops: 120,
      comments: 15,
    },
    {
      id: 2,
      user: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      image: 'https://images.unsplash.com/photo-1682685796014-2f342188a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      caption: 'Exploring the city streets 🏙️ #UrbanAdventure',
      pops: 85,
      comments: 8,
    },
  ];

  const handlePop = (postId: number) => {
    setPoppedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-zinc-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg overflow-hidden">
          <div className="p-4 flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-zinc-400">
              <img src={post.avatar} alt={post.user} className="w-full h-full object-cover" />
            </div>
            <span className="ml-4 font-semibold text-zinc-300">{post.user}</span>
          </div>
          <div className="p-4">
            <p className="text-sm mb-4">
              <span className="font-semibold mr-2 text-zinc-300">{post.user}</span>
              {post.caption}
            </p>
          </div>
          <img src={post.image} alt="Post" className="w-full" />
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <button
                className={`flex items-center space-x-2 ${poppedPosts.has(post.id) ? 'text-zinc-400' : 'text-zinc-300'} hover:text-zinc-400 transition-colors duration-200`}
                onClick={() => handlePop(post.id)}
              >
                <span className={`${poppedPosts.has(post.id) ? 'animate-pop' : ''}`}>
                  <BubbleIcon filled={poppedPosts.has(post.id)} />
                </span>
                <span>Pop</span>
              </button>
              <button className="flex items-center space-x-2 text-zinc-300 hover:text-zinc-400 transition-colors duration-200">
                <MessageCircle className="h-6 w-6" />
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 text-zinc-300 hover:text-zinc-400 transition-colors duration-200">
                <Share2 className="h-6 w-6" />
                <span>Share</span>
              </button>
            </div>
            <p className="text-sm text-zinc-200">{post.pops} pops · {post.comments} comments</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;