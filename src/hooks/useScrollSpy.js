import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

export function useScrollSpy() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const secs = NAV_LINKS.map((n) =>
        document.getElementById(n.toLowerCase())
      );
      for (let i = secs.length - 1; i >= 0; i--) {
        if (secs[i] && window.scrollY + 120 >= secs[i].offsetTop) {
          setActive(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { active, scrolled };
}
