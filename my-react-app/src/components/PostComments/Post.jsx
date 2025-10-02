import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function searchPosts() {
      const response = await axios.get("https://dummyjson.com/posts");
      const data = response.data;
      setPosts(data);
    }
    searchPosts();
  });

  return <div>
      <h2>{posts.title}</h2>
      <p>{posts.body}</p>
    
  </div>;
}
