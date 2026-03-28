import { useState } from "react";
import { NAV_LINKS, GITHUB } from "../data";

export default function Navbar({ active, scrolled, onScrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    onScrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "#0a0a0fcc" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #ffffff0a" : "none",
          transition: "all 0.4s",
        }}
      >


{/* Logo */}
<div
  style={{
    fontFamily: "Playfair Display, serif",
    fontWeight: 900,
    fontSize: "1.3rem",
    color: "#fff",
    letterSpacing: "-0.01em",
    cursor: "pointer",
  }}
  onClick={() => handleNav("About")}
>
  <span style={{ color: "#00e5ff" }}>Dinesh </span>
<span style={{ color: "#fff" }}>Portfolio</span>

</div>

        {/* Logo */}
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 900,
            fontSize: "1.3rem",
            color: "#fff",
            letterSpacing: "-0.01em",
            cursor: "pointer",
          }}
          onClick={() => handleNav("About")}
        >
          <span style={{ color: "#00e5ff" }}></span>
        </div>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ display: "flex", gap: 36 }}>
          {NAV_LINKS.map((n) => (
            <span
              key={n}
              className={`nav-link${active === n ? " active" : ""}`}
              onClick={() => handleNav(n)}
            >
              {n}
            </span>
          ))}
        </div>

        

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          className="show-mobile"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: 24,
              right: 32,
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          {NAV_LINKS.map((n) => (
            <span
              key={n}
              onClick={() => handleNav(n)}
              style={{
                fontSize: "1.6rem",
                fontFamily: "Playfair Display,serif",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {n}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
