import React from "react";
import Post from "./Post";
import Comment from "./Comment";

export default function Container() {
  return (
    <div>
      <Post></Post>
      <Comment></Comment>

      <span>글 번호</span>
      <input type="number" className="border-1 m-1" />
      <button className="bg-blue-500 text-white p-1 m-1">검색</button>
    </div>
  );
}
