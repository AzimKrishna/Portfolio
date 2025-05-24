// my-app/src/pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const siteName = "Azim Baji Krishna - Full-Stack Developer";
  const siteDescription =
    "Portfolio of Azim Baji Krishna, a full-stack software developer specializing in Laravel, Node.js, Vue, Cybersecurity, and Blockchain technologies. Building scalable SaaS products and real-time automation.";
  const siteUrl = "https://abkrishna.me"; // REPLACE with your actual domain
  const authorName = "Azim Baji Krishna";
  const siteImage = `${siteUrl}/placeholder.svg`; // Or a more specific OG image if you have one
  // const twitterHandle = "@crypto_hades_"; // Uncomment if you want to use your Twitter handle

  return (
    <Html lang="en" className="dark">
      {" "}
      {/* Apply dark class by default if forced */}
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* SEO Meta Tags - These are general fallbacks, more specific ones should be in pages */}
        <meta name="author" content={authorName} />
        <meta
          name="keywords"
          content="Full-Stack Developer, Software Engineer, Laravel, Node.js, Vue.js, React, PHP, JavaScript, Cybersecurity, Blockchain, SaaS, API, Automation, Portfolio, Azim Baji Krishna, Web Developer, Tickit, WhatsApp CRM"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:image:width" content="1200" />{" "}
        {/* Dimensions of placeholder.svg */}
        <meta property="og:image:height" content="1200" />
        {/* og:title and og:description are better set per page or in _app.js */}
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        {/* {twitterHandle && <meta name="twitter:site" content={twitterHandle} />} */}
        <meta name="twitter:creator" content={authorName} />
        <meta name="twitter:image" content={siteImage} />
        {/* twitter:title and twitter:description are better set per page or in _app.js */}
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />{" "}
        {/* Create this image (e.g., 180x180) */}
        <link rel="manifest" href="/site.webmanifest" />{" "}
        {/* Create this file */}
        {/* Theme Color */}
        <meta name="theme-color" content="#6366f1" />{" "}
        {/* Example purple, adjust to your primary dark theme color */}
        {/* Structured Data (JSON-LD) - Very Important for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: authorName,
              url: siteUrl,
              sameAs: [
                "https://www.linkedin.com/in/azimkrishna/",
                "https://github.com/AzimKrishna",
                "https://x.com/crypto_hades_",
              ],
              jobTitle: "Full-Stack Software Developer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Pillai College of Engineering (Autonomous)",
              },
              knowsAbout: [
                "Full-Stack Development",
                "Software Engineering",
                "SaaS",
                "API Development",
                "Real-time Automation",
                "Laravel",
                "Node.js",
                "Vue.js",
                "React.js",
                "PHP",
                "JavaScript",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "Cybersecurity",
                "Blockchain Technology",
                "WhatsApp Cloud API",
                "Microservices",
              ],
              image: siteImage,
              description: siteDescription,
              email: "mailto:azimbaji19@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Thane",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </Head>
      <body className="antialiased text-foreground bg-background">
        {" "}
        {/* Ensure body also uses theme variables */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
