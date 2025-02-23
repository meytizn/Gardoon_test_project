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
      <form  className='form flex flex-col md:flex-row justify-start text-center gap-5 my-4' onSubmit={handleSubmit}>
        <input
          type="text"
          className='form-input w-[100%] h-[50px] md:w-[30%] md:text-center text-right px-3 md:px-0'
          id="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان درخواست..."
        />
        <br />
        <input
          type="text"
          className='form-input w-[100%] h-[50px] md:w-[30%] md:text-center text-right px-3 md:px-0'
          id="email"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="موضوع در خواست ..."
        />
        <br />
        <button className=' text-[#00ACC1] w-[100%] h-[50px] md:w-[30%] text-center' type='submit'>ارسال در خواست</button>
      </form>
    </>
  );
}