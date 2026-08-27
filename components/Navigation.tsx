"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "/#about" },
    { label: "WORK", href: "/#work" },
    { label: "AI", href: "/#ai" },
    { label: "SKILLS", href: "/#skills" },
    { label: "PROJECTS", href: "/#project" },
    { label: "CONTACT", href: "/#contact" },
  ];

  if (pathname === "/tina-wedding-colours") {
    return null; // Hide navigation on the tina-wedding-colours page
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-3 lg:px-0 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-display font-800 text-lg tracking-tight"
            >
              DEV<span className="text-primary">.</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-mono text-xs text-muted-foreground hover:text-foreground link-underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-40 bg-background pt-20 md:hidden px-3 lg:px-0"
        >
          <div className="container py-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-display font-800 hover:text-primary transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
