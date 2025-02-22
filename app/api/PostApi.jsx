"use client"

import React, { useState } from 'react';
import axios from "axios";

export default function PostApi() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("title:", title, "body:", body);

    // Example of making a POST request (replace with your API endpoint):
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body });
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type="text"
          className='form-input'
          id="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <br />
        <input
          type="text"
          className='form-input'
          id="email"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="body"
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}