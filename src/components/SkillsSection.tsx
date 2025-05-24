
import React from 'react';
import { 
  Code, FileJson, Laptop, Database, Package, 
  Server, Workflow, FileCode, ArrowUpCircle, Braces, 
  Terminal, GitBranch, Globe, Shield, Cloud, Zap,
  Settings, Box, Network, Search, MessageSquare, ShoppingCart
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const languages = [
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Solidity', logo: 'https://docs.soliditylang.org/en/latest/_static/img/logo.svg' },
  ];
  

  const backendSkills = [
    { name: 'Laravel', logo: 'https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'RabbitMQ', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rabbitmq/rabbitmq-original.svg' }, // fallback image, may require hosting
  ];
  

  const frontendSkills = [
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'jQuery', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
  ];
  

  const cloudAndInfra = [
    { name: 'AWS Lightsail', logo: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Apache', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
    { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Kong API Gateway', logo: 'https://avatars.githubusercontent.com/u/962416?v=4' }, // community logo
  ];
  

  const specializations = [
    { name: 'Ether.js', logo: 'https://avatars.githubusercontent.com/u/6250754?s=200&v=4' }, // ethers.js GitHub org avatar
    { name: 'IPFS', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png' },
  ];
  

  const integrations = [
    { name: 'Google Ads API', logo: 'https://www.gstatic.com/images/branding/product/1x/adwords_64dp.png' },
    { name: 'Meta Ads API', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtdzKPDmF4BYfI0WCuTY416jnhZiJeAK-rg&s' },
    { name: 'WhatsApp Cloud API', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
    { name: 'WooCommerce API', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoU4kqUqXyloX3CGZUvXM4dJ_uz2eXRxp2A&s' },
    { name: 'Inertia.js', logo: 'https://avatars.githubusercontent.com/u/47703742?s=200&v=4' }, // community logo
    { name: 'Shopify', logo: 'https://cdn.shopify.com/assets/images/logos/shopify-bag.png' },
    { name: 'Pusher', logo: 'https://avatars.githubusercontent.com/u/739550?s=200&v=4' }, // pusher GitHub org
  ];
  

  const developerTools = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1CLK7ijKDV1QiPsBsAKkaSkKx0QWAec8Tg&s' },
    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];
  

  // Card component for each skill with enhanced animations
  const SkillCard = ({ skill }) => (
    <Card className={`${skill.color} border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group animate-fade-in`}>
      <CardContent className="p-4">
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-12 h-12 rounded-md bg-slate-800/40 flex items-center justify-center mb-2 group-hover:bg-slate-800/70 group-hover:rotate-12 transition-all duration-500">
            {/* <skill.icon size={28} className="text-white group-hover:scale-110 transition-transform duration-300" /> */}
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          <span className="font-mono font-medium text-white text-sm group-hover:text-lg transition-all duration-300">{skill.name}</span>
        </div>
      </CardContent>
    </Card>
  );

  const skillSections = [
    { title: 'Programming Languages', skills: languages, color: 'border-blue-500' },
    { title: 'Backend & Database', skills: backendSkills, color: 'border-purple-500' },
    { title: 'Frontend', skills: frontendSkills, color: 'border-green-500' },
    { title: 'Cloud & Infrastructure', skills: cloudAndInfra, color: 'border-orange-500' },
    { title: 'Blockchain & Web3', skills: specializations, color: 'border-indigo-500' },
    { title: 'APIs & Integrations', skills: integrations, color: 'border-cyan-500' },
    { title: 'Developer Tools', skills: developerTools, color: 'border-red-500' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              TECH STACK
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            Technologies I use to build robust, scalable applications
          </p>
        </div>

        {skillSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20 animate-fade-in" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
            <h3 className={`text-3xl font-bold text-white mb-10 pl-2 border-l-4 ${section.color} font-mono hover:pl-4 transition-all duration-300`}>
              {section.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.skills.map((skill, index) => (
                <div key={index} style={{ animationDelay: `${(sectionIndex * 0.1) + (index * 0.05)}s` }}>
                  <SkillCard skill={skill} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
