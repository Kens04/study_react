"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/main";
import { useEffect } from "react";

export default function Home() {
  // const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault();
  //   alert(123);
  // }, []);

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
      {/* <a href="/about" onClick={handleClick}>
        ボタン
      </a> */}
      <Main page="home" />
      <Footer />
    </div>
  );
}
