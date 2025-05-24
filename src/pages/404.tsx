import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link href="/" legacyBehavior>
          <a className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors duration-200">
            Return to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;