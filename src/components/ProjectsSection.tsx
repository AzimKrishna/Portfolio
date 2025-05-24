import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Code,
  Shield,
  Calendar,
  Users,
  FileSearch,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".project-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const projects = [
    {
      title: "Tickit - WhatsApp CRM SaaS",
      description:
        "Currently developing a comprehensive WhatsApp CRM SaaS leveraging the WhatsApp Cloud API with drag-and-drop bot builders, multi-agent support, and advanced automation tools. Built with microservice architecture for high scalability.",
      image: "https://i.ibb.co/3YG4j9TG/tickit.jpg",
      tech: [
        "Vue.js",
        "Laravel",
        "Express.js",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
      ],
      github: null,
      live: null,
      status: "In Development",
      icon: Users,
    },
    {
      title: "Shopify External Checkout",
      description:
        "Building a modern third-party checkout solution inspired by Shopflo, GoKwik, and Razorpay Magic Checkout. Designed for Shopify and custom D2C stores with a focus on speed, intelligent autofill, RTO risk reduction, and conversion-optimized design.",
      image:
        "https://gempages.net/cdn/shop/articles/Shopify_checkout_customization_2560x.webp?v=1706251598", // Replace with your image
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis", "JWT"],
      github: "https://github.com/AzimKrishna/Shopify-Checkout",
      live: null,
      status: "In Development",
      icon: ShoppingCart,
    },
    {
      title: "Custom WhatsApp CRM",
      description:
        "Developed and shipped a custom whatsapp CRM solutiom for SkyJumper Trampoline Park leveraging Whatsapp Cloud API, with multi-agent support, inbox, branch management, and chatbot integrated with booking system which produced 10Lakh INR in sales on autopilot within 7 months.",
      image: "https://i.ibb.co/FbNtf9Hr/Screenshot-1.png",
      tech: [
        "Vue.js",
        "Laravel",
        "Inertia.js",
        "MySQL",
        "Pusher",
        "AWS Lightsail",
      ],
      github: null,
      live: null,
      status: "Production",
      icon: Users,
    },
    {
      title: "MyCMO Dashboard",
      description:
        "An AIO dashboard application integrating Shopify, WooCommerce, Google Ads, and Meta Ads platforms. Enables CEOs to analyze marketing budgets and sales insights with AI-driven strategies. Cheif Marketing Officer at their fingertips!",
      image: "https://i.ibb.co/Gv9PjyXS/myCMO.jpg",
      tech: ["Laravel", "jQuery", "MySQL", "API Integration"],
      github: null,
      live: null,
      status: "Completed",
      icon: Calendar,
    },
    {
      title: "AUTHENTIX - Blockchain Identity Verification",
      description:
        "Blockchain-based identity authentication platform to combat identity theft. Published in Sirjana Publications and secured copyright from Government of India.",
      image: "https://i.ibb.co/TBSFFFKq/authentix.jpg",
      tech: ["Blockchain", "Node.js", "PHP", "Solidity", "Ethereum"],
      github: null,
      live: null,
      research:
        "https://sirjana.in/wp-content/uploads/2024/04/46.SRJ23A390.pdf",
      certificate:
        "https://drive.google.com/file/d/1ew8Auwwz7AlhwVDx-z3vh2lslzui7UHF/view",
      status: "Published",
      icon: Shield,
    },
    {
      title: "Celesta Campus - Tuition Management System",
      description:
        "The Tuition Management System optimizes online tutoring with automated session scheduling, billing, and report card generation. It simplifies tasks for tutors, offering a user-friendly dashboard and efficient modules for student management, billing, and scheduling.",
      image:
        "https://github.com/AzimKrishna/Tuition-Management-System/blob/master/screenshots/Screenshot_3.png?raw=true",
      tech: ["PHP", "MySQL", "JavaScript", "PDF Generation"],
      github: "https://github.com/AzimKrishna/Tuition-Management-System",
      live: null,
      status: "Production",
      icon: GraduationCap,
    },
    {
      title: "Celesta Campus Landing Page Website",
      description:
        "Landing page built using the VILT stack for Celesta Campus. This landing page is used for collecting leads and enquries.",
      image: "https://i.ibb.co/9kg0h0r9/cc.png",
      tech: ["Vue.js", "Inertia.js", "Laravel", "Tailwind CSS"],
      github: null,
      live: "https://celestacampus.com/",
      status: "Production",
      icon: Calendar,
    },
    {
      title: "Serenity Industrial Website",
      description:
        "Dynamic industrial website built for MR SERENITY, UAE to showcase services and project inquiries. Design inspiration from ThemeForest theme.",
      image: "https://i.ibb.co/9mgxsFFL/indus.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: null,
      live: "https://abkrishna.me/Industrial-website/",
      status: "Completed",
      icon: ShoppingCart,
    },
    {
      title: "PublicLens - Missing Persons Platform",
      description:
        "A public reporting system for missing persons featuring real-time news sync, email automation, and admin verification workflows. Designed to assist families and law enforcement in faster tracking and communication.",
      image:
        "https://github.com/AzimKrishna/PublicLens/blob/master/screenshots/Screenshot_8.png?raw=true",
      tech: ["PHP", "MySQL", "JavaScript", "Email Integration"],
      github: "https://github.com/AzimKrishna/PublicLens",
      live: null,
      status: "Completed",
      icon: FileSearch,
    },
    {
      title: "Online Assessment System",
      description:
        "A robust online examination platform with real-time exam timer, student dashboards, auto-evaluation, and result generation modules. Built for academic institutions to conduct assessments remotely and efficiently.",
      image:
        "https://raw.githubusercontent.com/AzimKrishna/Online-assessment-system/master/screenshots/Screenshot_6.png",
      tech: ["PHP", "MySQL", "JavaScript", "Timer System"],
      github: "https://github.com/AzimKrishna/Online-assessment-system",
      live: null,
      status: "Completed",
      icon: GraduationCap,
    },
    {
      title: "To-Do List App",
      description:
        "An intuitive task manager inspired from Microsoft To Do with clean UI/UX and persistent task state management. Built to help users track daily, weekly, and monthly goals with seamless CRUD operations..",
      image:
        "https://raw.githubusercontent.com/AzimKrishna/To-Do-List/main/screenshots/Screenshot_3.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AzimKrishna/To-Do-List",
      live: "https://abkrishna.me/To-Do-List/",
      status: "Completed",
      icon: FileSearch,
    },
    {
      title: "SkyJumper Theme Clone",
      description:
        "A responsive clone website of SkyJumper Trampoline Park. Developed as a part of assignment few years back.",
      image: "https://i.ibb.co/svpTW7Pw/sjclone.png",
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
      github: "https://github.com/AzimKrishna/SkyJumper-Clone",
      live: "https://abkrishna.me/SkyJumper-Clone/",
      status: "Completed",
      icon: ShoppingCart,
    },
    {
      title: "Login & OTP System",
      description:
        "A secure user authentication system with OTP verification built using PHP, MySQL, and AJAX. Designed for applications requiring otp-based registration to prevent spam.",
      image:
        "https://raw.githubusercontent.com/AzimKrishna/Login-Registration-OTP-Page/main/screenshots/Screenshot_1.png",
      tech: ["PHP", "JavaScript", "Tailwind CSS", "MySQL"],
      github: "https://github.com/AzimKrishna/Login-Registration-OTP-Page",
      live: null,
      status: "Completed",
      icon: Shield,
    },
    {
      title: "Timer & Stopwatch App",
      description:
        "Web app providing stopwatch and countdown timer functionalities.",
      image:
        "https://raw.githubusercontent.com/AzimKrishna/Timer-and-Stopwatch/main/screenshots/Screenshot_2.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AzimKrishna/Timer-and-Stopwatch",
      live: "https://abkrishna.me/Timer-and-Stopwatch/",
      status: "Completed",
      icon: Calendar,
    },
    {
      title: "Techsphere Event Design",
      description:
        "Crafted a responsive website for Techsphere as a part of assignment few years back.",
      image: "https://i.ibb.co/fgrdM94/tc.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AzimKrishna/Techsphere-design",
      live: "https://abkrishna.me/Techsphere-design/",
      status: "Completed",
      icon: Calendar,
    },
  ];

  const getRepoName = (url) => {
    if (!url) return null;
    const parts = url.split("/");
    return `${parts[3]}/${parts[4]}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "In Development":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Production":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Published":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Completed":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            Showcasing my technical expertise and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="project-card group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <project.icon
                    className="text-white/80 group-hover:text-white"
                    size={24}
                  />
                </div>
                <div className="absolute bottom-4 right-4 transform group-hover:scale-105 transition-transform duration-300">
                  <span
                    className={`px-3 py-1 rounded-full text-xs border font-mono ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                {project.github && (
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <img
                      alt="stars"
                      src={`https://img.shields.io/github/stars/${getRepoName(
                        project.github
                      )}?style=social`}
                    />
                    <img
                      alt="forks"
                      src={`https://img.shields.io/github/forks/${getRepoName(
                        project.github
                      )}?style=social`}
                    />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30 font-mono hover:bg-blue-500/30 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300"
                    >
                      <Code size={16} />
                      <span className="text-sm font-mono">Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-mono">Live Demo</span>
                    </a>
                  )}
                  {project.research && (
                    <a
                      href={project.research}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-mono">Research</span>
                    </a>
                  )}
                  {project.certificate && (
                    <a
                      href={project.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-mono">Copyright</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl font-mono"
            >
              View All Projects
            </button>
          ) : (
            <a
              href="https://github.com/AzimKrishna?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl font-mono"
            >
              View GitHub Repos
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
