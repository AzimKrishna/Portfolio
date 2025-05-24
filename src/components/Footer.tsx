
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/AzimKrishna", icon: Github },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/azimkrishna",
      icon: Linkedin,
    },
    { name: "Twitter", url: "https://x.com/crypto_hades_", icon: Twitter },
    { name: "Email", url: "mailto:azimbaji19@gmail.com", icon: Mail },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              ABK
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Software Development Engineer specializing in building scalable,
              high-performance web applications and system architectures using
              modern frameworks and best practices.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Blog", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                  title={name}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Open to new opportunities and collaborations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
