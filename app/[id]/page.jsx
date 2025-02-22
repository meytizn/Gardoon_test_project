"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Detailview({ params }) {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching user:", err);
      }
    };

    getUser();
  }, [id]); // Add 'id' as a dependency to useEffect

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!post) {
    return <div className='w-[100%] text-center'>...Loading Data</div>; // Or a loading spinner
  }

  return (
    <div>
       {post.title}
      <p>{post.body}</p>
    </div>
  );
}