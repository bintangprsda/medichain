"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll and update state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md " : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand Name */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-1">
                {/* Logo */}
                <img
                  src="/logoM.png"
                  alt="MediChain Logo"
                  className="w-10 h-10" // Adjust size as needed
                />
                {/* Brand Name */}
                <span
                  className={`text-xl font-bold flex items-center ${
                    scrolled ? "text-muted-foreground" : "text-white"
                  }`}
                >
                  Medi<span className="font-normal">Chain</span>
                  <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-green-500 rounded-md">
                    labs
                  </span>
                </span>
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    scrolled
                      ? "text-muted-foreground hover:text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className={`${
                  scrolled
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-black"
                }`}
              >
                White Paper
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className={`${
                  scrolled ? "text-muted-foreground" : "text-white"
                }`}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block text-sm transition-colors ${
                    scrolled
                      ? "text-muted-foreground hover:text-primary"
                      : "text-white hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full">White Paper</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)} // Close menu when clicking outside
        ></div>
      )}
    </>
  );
}
