"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'
import TableData from '../components/TableData';


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
    return <div className='w-[90%] text-center py-10'>بارگذاری اطلاعات...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='w-[90%] m-auto text-left'>
      <h1 className='bg-blue-200 text-center'>fake api in used </h1>
      
      
      
        {posts.map((post) => (
         
      <Link href={`/${post.id}`}>
      <div key={post.id} className='flex flex-row justify-center items-center text-center'>
       {post.title} 
          </div></Link>

          

        ))}
      
      {renderPagination()}
    </div>
  );
}