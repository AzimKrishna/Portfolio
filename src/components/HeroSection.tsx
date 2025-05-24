import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        delay: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      gsap.from(".hero-email", {
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-600/20 dark:to-purple-600/20"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 font-mono">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AZIM BAJI KRISHNA
            </span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-mono">
            Full-Stack Software Engineer crafting scalable SaaS products and
            solving real-world problems with clean architecture
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-buttons">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl font-mono"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1YPL76U8VMyPS65dPfvIQFiNZkcGoo5Ac/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-400 text-blue-500 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-200 font-mono"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex justify-center space-x-6 text-gray-600 dark:text-gray-400 hero-email">
            <a
              href="mailto:azimbaji19@gmail.com"
              className="hover:text-blue-400 transition-colors font-mono"
            >
              azimbaji19@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-500 dark:text-gray-400" size={24} />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
