import Quote from "./Quote";
import axios from "axios";
import { useState } from "react";

export default function QuoteContainer() {
  const [quotes, setQuotes] = useState([
    { id: 1, quote: "견본 인용문", author: "견본 인용자" },
  ]);

  async function handleFetchQuotes() {
    // 랜덤 인용문 가져오기 로직
    // API : <https://dummyjson.com/docs/quotes#quotes-random>
    const response = await axios.get("https://dummyjson.com/quotes/random");
    const data = response.data;
    console.log(data);
    setQuotes([...quotes, data]);
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <button
        className="bg-blue-500 text-white px-4 py-2 cursor-pointer mb-6"
        onClick={() => {
          handleFetchQuotes();
        }}
      >
        인용문 가져오기
      </button>
      <div className="space-y-4">
        {quotes.map((quote) => {
          return <Quote key={quote.id} quote={quote} />;
        })}
      </div>
    </div>
  );
}
