import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false); // State to track if component is mounted
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When the component mounts on the client, set mounted to true
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render the theme-dependent part until mounted
  if (!mounted) {
    // You can return a placeholder or null here to avoid mismatch
    // Returning a button with a generic icon or no icon is also an option
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        disabled // Disabled until mounted and theme is known
        className="text-gray-600 dark:text-gray-300"
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" /> {/* Or a generic loading icon */}
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-300"
    >
      {currentTheme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;