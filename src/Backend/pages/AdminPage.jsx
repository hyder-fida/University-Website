import React, { useState } from 'react';

function AdminPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState('');
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateContent, setUpdateContent] = useState('');

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    // Replace with your API endpoint
    const response = await fetch('https://api.example.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      alert('Post created successfully!');
      setTitle('');
      setContent('');
    } else {
      alert('Failed to create post');
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    // Replace with your API endpoint
    const response = await fetch(`https://api.example.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: updateTitle, content: updateContent }),
    });

    if (response.ok) {
      alert('Post updated successfully!');
      setId('');
      setUpdateTitle('');
      setUpdateContent('');
    } else {
      alert('Failed to update post');
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      
      <section>
        <h2>Create New Post</h2>
        <form onSubmit={handlePostSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Create Post</button>
        </form>
      </section>

      <section>
        <h2>Update Post</h2>
        <form onSubmit={handleUpdateSubmit}>
          <div>
            <label>Post ID:</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={updateTitle}
              onChange={(e) => setUpdateTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              value={updateContent}
              onChange={(e) => setUpdateContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Update Post</button>
        </form>
      </section>
    </div>
  );
}

export default AdminPage;
