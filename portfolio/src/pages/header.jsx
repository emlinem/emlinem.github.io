// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(window.scrollY);

  // Hide/show on scroll direction
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // if scrolling down && scrolled past 100px → hide
      if (y > lastY && y > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  // Show again if mouse moves into top 50px
  useEffect(() => {
    const onMouseMove = (e) => {
      if (e.clientY < 50) setHidden(false);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <header className={`header ${hidden ? "header--hidden" : ""}`}>
      <div className="logo">
        <a href="#top">Emily Nilsson</a>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="#resume">resume</a></li>
          <li><a href="#projects">ux/ui design</a></li>
          <li><a href="#graphics">graphic design</a></li>
          <li><a href="#about">about me</a></li>
          <li><a href="#contact">socials</a></li>
        </ul>
      </nav>
    </header>
  );
}
