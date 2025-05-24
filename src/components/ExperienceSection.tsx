import React, { useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  const experiences = [
    {
      title: "Full-Stack Web App Developer",
      company: "Quantastic Marketing Pvt Ltd.",
      location: "Thane, Maharashtra, IN",
      period: "08/03/2024 – Present",
      description:
        'Currently building "Tickit", a scalable SaaS WhatsApp CRM with microservice architecture and real-time automation tools aimed to simplify chatbot-based tickit bookings for businesses.',
      achievements: [
        "Built WhatsApp CRM with chatbot generating INR 10 Lakhs revenue on autopilot within 7 months from 32,450 leads",
        "Engineered modular WhatsApp bot with automated booking workflows, generating INR 40K/week",
        "Improved SoulFlower mobile PageSpeed score from 4 to 48 (1100% improvement), reduced LCP from 17s to 6s and FCP from 4.1s to 2s",
        "Boosted WelexCare sales from INR 7.69 Lakhs to INR 12.6 Lakhs (+63.7%) via frontend optimizations",
        "Replaced costly tools like Zapier with custom scripts, saving INR 3.5 Lakhs annually",
      ],
      skills: [
        "Laravel",
        "Vue.js",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "WhatsApp Cloud API",
        "Microservices",
      ],
    },
    {
      title: "Full-Stack Web Developer Intern",
      company: "Quantastic Marketing Pvt Ltd.",
      location: "Thane, Maharashtra, IN",
      period: "08/12/2023 – 08/03/2024",
      description:
        "Started as an intern and quickly progressed to handling complex projects. Focused on e-commerce optimization and custom automation solutions.",
      achievements: [
        "Implemented cybersecurity measures restoring sales from INR 43K to INR 1.2 Lakhs",
        "Automated payment workflows for SkyJumper, saving 500+ hours/year and reducing manual effort by 90%",
        "Implemented dynamic pricing calendar for 20 centers, reducing content update time by 75%",
        "Built MyCMO Dashboard integrating Shopify, WooCommerce, Google Ads, and Meta Ads for centralized marketing analytics",
      ],
      skills: [
        "Shopify",
        "Performance Optimization",
        "Cybersecurity",
        "Website Development",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-title", {
        scrollTrigger: {
          trigger: ".experience-title",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.utils.toArray(".experience-card").forEach((card, i) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: "top 90%",
          },
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power2.out",
          delay: i * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 experience-title">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            My professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card relative flex items-start space-x-8"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={24} />
                </div>

                <div className="flex-grow bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-blue-500/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 font-mono">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-semibold font-mono">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm font-mono">
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0 font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 font-mono">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm flex items-start"
                        >
                          <span className="text-blue-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
