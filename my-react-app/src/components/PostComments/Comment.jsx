import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

export default function Comment() {
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      const response = await axios.get("https://dummyjson.com/comments/post");
      const data = response.data;
      setPosts(data.body);
    }
    getComments();
  });

  return (
    <div></div>
  )
}
