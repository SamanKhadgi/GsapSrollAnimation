"use client";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);
export default function Home() {
  ScrollTrigger.refresh();
  return (
    <div className="font-sans min-h-screen">
      <Hero />
      <div className="h-screen"></div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
