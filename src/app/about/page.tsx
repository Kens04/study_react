import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/main";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
