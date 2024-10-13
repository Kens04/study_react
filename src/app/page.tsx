"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/main";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="home" />
      <Footer />
    </div>
  );
}
