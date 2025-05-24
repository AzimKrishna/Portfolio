import Head from 'next/head';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Azim Baji Krishna - Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Azim Baji Krishna, a full-stack developer specializing in Laravel, Vue.js, Node.js, and blockchain technologies." />
        <meta property="og:title" content="Azim Baji Krishna - Full-Stack Developer" />
        <meta property="og:description" content="Portfolio of Azim Baji Krishna, a full-stack developer." />
      </Head>
      <div className="min-h-screen bg-background text-foreground"> {/* Use theme variables */}
        <Header />
        <main> {/* Added main tag for semantic HTML */}
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          {/* <BlogSection /> */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;