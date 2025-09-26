import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <div>
      <h1 className="text-red-500">Hello World</h1>
      <Header></Header>
      <Footer></Footer>
      <Main></Main>
    </div>
  );
}
