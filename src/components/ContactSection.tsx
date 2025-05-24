
import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Toaster, toast } from "react-hot-toast";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {

  const [state, handleSubmit] = useForm("xwpodpqq");

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".contact-header", {
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
      });

      // Animate EACH contact card individually
      gsap.utils.toArray(".contact-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          opacity: 0,
          x: -30,
          duration: 0.6,
          delay: i * 0.15,
          ease: "power2.out",
        });
      });

      // Animate EACH social icon individually
      gsap.utils.toArray(".social-icon").forEach((icon, i) => {
        gsap.from(icon, {
          scrollTrigger: {
            trigger: icon,
            start: "top 95%",
          },
          opacity: 0,
          scale: 0.7,
          duration: 0.5,
          delay: i * 0.1,
          ease: "back.out(1.7)",
        });
      });

      // Form animation
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
        },
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSuccess = () => toast.success("Message sent successfully!");
  const handleError = () => toast.error("Failed to send message. Try again.");

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'azimbaji19@gmail.com',
      link: 'mailto:azimbaji19@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Thane, Maharashtra, IN',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/azimkrishna/",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/AzimKrishna",
    },
    {
      icon: Twitter,
      label: "Twitter",
      link: "https://x.com/crypto_hades_", // Replace with your actual Twitter handle
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 contact-header">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 font-mono">
              Let's work together
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm passionate about building innovative software solutions,
              blockchain applications, and automation systems. Whether you need
              a full-stack developer for your team or want to discuss a project,
              I'd love to hear from you.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="contact-card flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-mono">
                      {info.label}
                    </p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200 font-mono">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="social-icon w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                >
                  <social.icon
                    className="text-gray-400 group-hover:text-blue-400 transition-colors duration-200"
                    size={20}
                  />
                </a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <h4 className="text-lg font-semibold text-blue-400 mb-3 font-mono">
                Quick Response
              </h4>
              <p className="text-gray-300 text-sm">
                I typically respond to emails within 24 hours. For urgent
                matters or direct discussion about opportunities, feel free to
                give me a call.
              </p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="contact-form bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            {state.succeeded ? (
              <p className="text-green-400 text-center font-mono text-lg">
                Thanks! I’ll be in touch soon.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  handleSubmit(e)
                    .then((result) => {
                      if (result.response.status === 200) {
                        handleSuccess();
                      } else {
                        handleError();
                      }
                    })
                    .catch(handleError);
                }}
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Portfolio Contact Form"
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 text-sm mb-2 font-mono"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 text-sm mb-2 font-mono"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono"
                      placeholder="your@email.com"
                    />
                    <ValidationError
                      field="email"
                      prefix="Email"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 text-sm mb-2 font-mono"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono"
                    placeholder="Project inquiry / Job opportunity"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 text-sm mb-2 font-mono"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  <ValidationError
                    field="message"
                    prefix="Message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition-transform duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-mono ${
                    state.submitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-105"
                  }`}
                >
                  <Send size={20} />
                  <span>
                    {state.submitting ? "Sending..." : "Send Message"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
