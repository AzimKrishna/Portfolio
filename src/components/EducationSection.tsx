import React, { useEffect, useRef } from "react";
import { Book, Award, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-title", {
        scrollTrigger: {
          trigger: ".edu-title",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.utils.toArray(".edu-block").forEach((block, i) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: "top 90%",
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
        });
      });

      gsap.utils.toArray(".leadership-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          opacity: 0,
          x: -30,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
        });
      });

      gsap.from(".cert-block", {
        scrollTrigger: {
          trigger: ".cert-block",
          start: "top 90%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Engineering",
      institution: "Pillai College of Engineering (Autonomous)",
      location: "Maharashtra, IN",
      period: "2020 - 2024",
      cgpa: "CGPA: 9.64/10",
      specialization: "Cybersecurity",
      honors: "Blockchain Technology",
      ilc: "Business and Entrepreneurship",
      description:
        "Graduated with distinction, specializing in Cybersecurity with honors in Blockchain Technology. Completed an Industry Linked Course in Business and Entrepreneurship.",
      achievements: [
        "Top 5% of the class",
        "Cybersecurity Specialization",
        "Blockchain Technology Honors",
        "Published research on Authentix – Blockchain-based identity system",
        "Received Copyright from Government of India",
      ],
    },
  ];

  const certifications = [
    {
      name: "HTML5 – Infosys Springboard",
      url: "https://drive.google.com/file/d/1cFg7ougLWDmlMZFbXvhfZofjzY7htf6B/view",
    },
    {
      name: "JavaScript – Infosys Springboard",
      url: "https://drive.google.com/file/d/1x2I_v0uVnAH7oaS_47cC43S6lklftW01/view?usp=sharing",
    },
    {
      name: "Programming Using C++ – Infosys Springboard",
      url: "https://drive.google.com/file/d/1L-VsAOsk62ep-j11iyLvDqW7byGVbC_T/view",
    },
    {
      name: "Meta Introduction to Front-End Development – Coursera",
      url: "https://www.coursera.org/account/accomplishments/certificate/GEJK6K5TA5KR",
    },
  ];

  const leadership = [
    {
      title: "Cybersecurity Awareness Sessions",
      description:
        "Delivered cybersecurity awareness sessions to over 150+ first-year students at Pillai College of Engineering.",
      icon: Users,
    },
    {
      title: "Kerala Elections Technical Support",
      description:
        "Provided technical support during the 2020 Kerala local body elections, assisting with live feed and public interaction via Akshaya E-Center amid COVID.",
      icon: Award,
    },
    {
      title: "Cultural Fest Technical Operations",
      description:
        "Co-led technical operations during an interschool cultural fest in 12th grade, ensuring smooth execution.",
      icon: Users,
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 edu-title">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            Academic background and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* EDU BLOCK */}
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="edu-block bg-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* ...unchanged content inside */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Book className="text-white" size={20} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-xl font-bold text-white font-mono">
                          {edu.degree}
                        </h3>
                        <span className="text-gray-400 text-sm mt-1 sm:mt-0 font-mono">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-blue-400 font-semibold mb-1 font-mono">
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 text-sm mb-2 font-mono">
                        {edu.location}
                      </p>
                      <p className="text-green-400 font-semibold mb-3 font-mono">
                        {edu.cgpa}
                      </p>
                      <div className="mb-4">
                        <p className="text-gray-300 text-sm mb-2">
                          <strong>Specialization:</strong> {edu.specialization}
                        </p>
                        <p className="text-gray-300 text-sm mb-2">
                          <strong>Honors:</strong> {edu.honors}
                        </p>
                        <p className="text-gray-300 text-sm mb-4">
                          <strong>ILC:</strong> {edu.ilc}
                        </p>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-400 font-mono">
                          Key Achievements:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement) => (
                            <span
                              key={achievement}
                              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 font-mono"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Leadership Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-6 font-mono">
                Leadership & Responsibilities
              </h3>
              <div className="space-y-4">
                {leadership.map((role, index) => (
                  <div
                    key={index}
                    className="leadership-card bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <role.icon className="text-white" size={16} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-2 font-mono">
                          {role.title}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="cert-block bg-slate-900/50 rounded-xl p-8 border border-slate-700 h-fit">
            <h3 className="text-xl font-bold text-white mb-6 font-mono">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text no-underline items-center space-x-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm hover:text-blue-400">
                    {cert.name}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <h4 className="text-lg font-semibold text-blue-400 mb-2 font-mono">
                Languages
              </h4>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">
                  <strong>English:</strong> Full professional proficiency
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Malayalam:</strong> Native or bilingual proficiency
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Hindi:</strong> Full professional proficiency
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Tamil:</strong> Elementary proficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
