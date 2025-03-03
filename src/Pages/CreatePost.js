import React, { useState } from 'react';
import '../App.css';
import './CreatePost.css';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handlePostCreation = () => {
    if (title && content && image && caption) {
      // Logic for creating a post (e.g., sending data to a server)
      console.log('Post created:', { title, content, image, caption });
      alert('Post created successfully!');
      setTitle('');
      setContent('');
      setImage(null);
      setCaption('');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="create-post-container">
      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button onClick={handlePostCreation}>Create Post</button>
    </div>
  );
}

export default CreatePost;
