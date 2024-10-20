import React from 'react';
import { Settings, MessageCircle, Phone, Video } from 'lucide-react';

const Profile: React.FC = () => {
  const user = {
    username: '@urbanexplorer',
    name: 'Alex Wanderer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    banner: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    bio: 'Exploring urban landscapes and sharing the beauty of city life. 🏙️ #UrbanPhotography',
    posts: 142,
    followers: 15700,
    following: 523,
  };

  const posts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 4, image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 5, image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 6, image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <img src={user.banner} alt="Profile banner" className="w-full h-64 object-cover rounded-t-lg" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#3f364d] to-transparent"></div>
      </div>
      <div className="bg-[#4a4158] bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-b-lg shadow-lg p-6">
        <div className="flex justify-between items-end mb-6">
          <div className="flex items-end">
            <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full border-4 border-[#4a4158] -mt-16" />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-purple-100">{user.name}</h1>
              <p className="text-purple-300">{user.username}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors duration-200 flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Message
            </button>
            <button className="bg-[#3f364d] text-purple-300 p-2 rounded-full hover:bg-[#4a4158] transition-colors duration-200">
              <Phone className="h-5 w-5" />
            </button>
            <button className="bg-[#3f364d] text-purple-300 p-2 rounded-full hover:bg-[#4a4158] transition-colors duration-200">
              <Video className="h-5 w-5" />
            </button>
            <button className="bg-[#3f364d] text-purple-300 p-2 rounded-full hover:bg-[#4a4158] transition-colors duration-200">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
        <p className="text-purple-200 mb-4">{user.bio}</p>
        <div className="flex space-x-4 mb-6">
          <div className="text-center">
            <span className="text-xl font-bold text-purple-100">{user.posts}</span>
            <p className="text-purple-300">Posts</p>
          </div>
          <div className="text-center">
            <span className="text-xl font-bold text-purple-100">{user.followers.toLocaleString()}</span>
            <p className="text-purple-300">Followers</p>
          </div>
          <div className="text-center">
            <span className="text-xl font-bold text-purple-100">{user.following.toLocaleString()}</span>
            <p className="text-purple-300">Following</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="aspect-w-1 aspect-h-1">
              <img src={post.image} alt={`Post ${post.id}`} className="object-cover w-full h-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;