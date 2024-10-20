import React, { useState } from 'react';
import { MessageCircle, Share2, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import CommentModal from './CommentModal';

const BubbleIcon: React.FC<{ popped?: boolean }> = ({ popped = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    {popped ? (
      <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
    ) : (
      <circle cx="12" cy="12" r="10" />
    )}
  </svg>
);

const Feed: React.FC = () => {
  const [poppedPosts, setPoppedPosts] = useState<Set<number>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<number>>(new Set());
  const [currentMediaIndex, setCurrentMediaIndex] = useState<{ [key: number]: number }>({});
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [activePost, setActivePost] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      user: '@sunsetlover',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
      ],
      caption: 'Beautiful sunset at the beach! 🌅 #BeachVibes',
      pops: 120,
      comments: 15,
    },
    {
      id: 2,
      user: '@urbanexplorer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      media: [
        { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4' },
      ],
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

  const handleSave = (postId: number) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleMediaNav = (postId: number, direction: 'prev' | 'next') => {
    setCurrentMediaIndex(prev => {
      const currentIndex = prev[postId] || 0;
      const post = posts.find(p => p.id === postId);
      if (!post) return prev;

      let newIndex;
      if (direction === 'prev') {
        newIndex = (currentIndex - 1 + post.media.length) % post.media.length;
      } else {
        newIndex = (currentIndex + 1) % post.media.length;
      }

      return { ...prev, [postId]: newIndex };
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-[#4a4158] bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400">
              <img src={post.avatar} alt={post.user} className="w-full h-full object-cover" />
            </div>
            <span className="ml-3 font-semibold text-purple-200">{post.user}</span>
          </div>
          <div className="relative">
            {post.media[0].type === 'video' ? (
              <video src={post.media[0].url} controls className="w-full aspect-[1.91/1] object-cover" />
            ) : (
              <div className="relative aspect-[4/5]">
                <img 
                  src={post.media[currentMediaIndex[post.id] || 0].url} 
                  alt={`Post ${currentMediaIndex[post.id] || 0 + 1}`} 
                  className="w-full h-full object-cover"
                />
                {post.media.length > 1 && (
                  <>
                    <button 
                      onClick={() => handleMediaNav(post.id, 'prev')}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1"
                    >
                      <ChevronLeft className="text-white" />
                    </button>
                    <button 
                      onClick={() => handleMediaNav(post.id, 'next')}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1"
                    >
                      <ChevronRight className="text-white" />
                    </button>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      {post.media.map((_, index) => (
                        <div 
                          key={index} 
                          className={`w-2 h-2 rounded-full ${index === (currentMediaIndex[post.id] || 0) ? 'bg-white' : 'bg-gray-400'}`}
                        ></div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="p-4">
            <p className="text-sm mb-4 text-purple-100">
              {post.caption}
            </p>
            <div className="flex items-center justify-between mb-4">
              <button
                className={`flex items-center space-x-2 ${poppedPosts.has(post.id) ? 'text-purple-400' : 'text-purple-300'} hover:text-purple-400 transition-colors duration-200`}
                onClick={() => handlePop(post.id)}
              >
                <span className={`${poppedPosts.has(post.id) ? 'animate-pop' : ''}`}>
                  <BubbleIcon popped={poppedPosts.has(post.id)} />
                </span>
                <span>Pop</span>
              </button>
              <button 
                className="flex items-center space-x-2 text-purple-300 hover:text-purple-400 transition-colors duration-200"
                onClick={() => {
                  setActivePost(post.id);
                  setShowCommentModal(true);
                }}
              >
                <MessageCircle className="h-6 w-6" />
                <span>Chime</span>
              </button>
              <button className="flex items-center space-x-2 text-purple-300 hover:text-purple-400 transition-colors duration-200">
                <Share2 className="h-6 w-6" />
                <span>Float</span>
              </button>
              <button
                className={`flex items-center space-x-2 ${savedPosts.has(post.id) ? 'text-purple-400' : 'text-purple-300'} hover:text-purple-400 transition-colors duration-200`}
                onClick={() => handleSave(post.id)}
              >
                <Bookmark className="h-6 w-6" fill={savedPosts.has(post.id) ? 'currentColor' : 'none'} />
                <span>Keep</span>
              </button>
            </div>
            <p className="text-sm text-purple-200">{post.pops} pops · {post.comments} chimes</p>
          </div>
        </div>
      ))}
      {showCommentModal && activePost !== null && (
        <CommentModal 
          postId={activePost} 
          onClose={() => {
            setShowCommentModal(false);
            setActivePost(null);
          }} 
        />
      )}
    </div>
  );
};

export default Feed;