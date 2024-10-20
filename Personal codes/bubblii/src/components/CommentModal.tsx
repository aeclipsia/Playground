import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CommentModalProps {
  postId: number;
  onClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ postId, onClose }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the comment to your backend
    console.log(`Submitted comment for post ${postId}: ${comment}`);
    setComment('');
  };

  const existingComments = [
    { id: 1, user: '@citylover', text: 'Amazing shot! 😍', time: '2h ago' },
    { id: 2, user: '@travelbug', text: 'Where is this? I need to visit!', time: '1h ago' },
    { id: 3, user: '@photogeek', text: 'Great composition!', time: '30m ago' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#4a4158] rounded-lg p-6 w-full max-w-lg max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-purple-200">Chimes</h2>
          <button onClick={onClose} className="text-purple-300 hover:text-purple-100">
            <X />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto mb-4">
          {existingComments.map((comment) => (
            <div key={comment.id} className="mb-4">
              <p className="text-purple-100">
                <span className="font-semibold text-purple-300">{comment.user}</span> {comment.text}
              </p>
              <p className="text-xs text-purple-400">{comment.time}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-auto">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add your chime..."
            className="w-full p-2 mb-4 bg-[#3f364d] text-purple-100 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows={3}
          />
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200"
          >
            Chime In
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;