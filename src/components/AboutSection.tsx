import React, { useEffect, useRef } from "react";
import Image from "next/image"; // Import next/image
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Code, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".about-paragraph", {
        scrollTrigger: {
          trigger: ".about-paragraph",
          start: "top 85%",
        },
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      });

      gsap.from(".about-photo", {
        scrollTrigger: {
          trigger: ".about-photo",
          start: "top 90%",
        },
        x: 40,
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".about-feature", {
        scrollTrigger: {
          trigger: ".about-feature",
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="about-title text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="about-title text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            Full-Stack Software Developer focused on building scalable SaaS
            products, API-driven platforms, and real-time automation with
            Laravel, Node.js, and Vue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="about-paragraph text-gray-300 text-lg leading-relaxed">
              I’m Azim, a full-stack software developer passionate about
              building scalable and efficient systems. At Quantastic Marketing
              Pvt Ltd, I’ve engineered CRMs, real-time automation tools, and
              e-commerce integrations that have driven revenue and saved
              hundreds of hours annually for clients.
            </p>
            <p className="about-paragraph text-gray-300 text-lg leading-relaxed">
              My journey blends deep technical skills—Laravel, Node.js, Vue,
              Docker, RabbitMQ, Redis—with a B.Tech in Computer Engineering
              (CGPA: 9.64) and a specialization in Cybersecurity. Currently, I’m
              building <strong>Tickit</strong>, a WhatsApp CRM SaaS platform
              designed with microservices to revolutionize chatbot-based ticket
              bookings on WhatsApp.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="about-feature text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="text-white" size={28} />
                </div>
                <h3 className="text-white font-semibold font-mono">
                  Full-Stack
                </h3>
                <p className="text-gray-400 text-sm">
                  Laravel, Node.js, Vue, PostgreSQL, Mongo, Docker
                </p>
              </div>

              <div className="about-feature text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="text-white font-semibold font-mono">Security</h3>
                <p className="text-gray-400 text-sm">
                  Cybersecurity and blockchain solutions
                </p>
              </div>

              <div className="about-feature text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="text-white" size={28} />
                </div>
                <h3 className="text-white font-semibold font-mono">
                  Innovation
                </h3>
                <p className="text-gray-400 text-sm">
                  WhatsApp CRM & chatbot booking systems
                </p>
              </div>
            </div>
          </div>

          <div className="about-photo relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                <Image
                  src="https://i.ibb.co/qLQtvj0T/pfp.jpg" // Typo in original was qLQtvj0T
                  alt="Azim Baji Krishna"
                  className="w-full h-full object-cover"
                  width={288} // w-72 is 288px
                  height={288} // h-72 is 288px
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/50 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
