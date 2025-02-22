"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'


export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`
        );
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(Math.ceil(totalCount / postsPerPage));
      } catch (err) {
        setError(err);
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, postsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          style={{ color: currentPage === i ? 'red' : 'black' }} // Apply red color
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }
    return <div>{pageNumbers}</div>;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      
      <ul>
      
        {posts.map((post) => (
      <Link href={`/${post.id}`}>
      <li key={post.id}>
            {post.id} - {post.title}
          </li></Link>
        ))}
      </ul>
      {renderPagination()}
    </div>
  );
}