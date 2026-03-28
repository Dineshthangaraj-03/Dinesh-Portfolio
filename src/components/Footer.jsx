import { GITHUB } from "../data";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px 40px",
        borderTop: "1px solid #ffffff08",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div
        style={{
          fontFamily: "Playfair Display,serif",
          fontWeight: 900,
          fontSize: "1.1rem",
          color: "#fff",
        }}
      >
       
      </div>

      <p style={{ fontSize: "0.78rem", color: "#6666aa" }}>
        © 2025 Dinesh T · Full Stack Developer · Bangalore
      </p>

      <div style={{ display: "flex", gap: 20 }}>
        <a
          href="mailto:dineshmathan03@gmail.com"
          style={{ color: "#6666aa", fontSize: "0.78rem", textDecoration: "none" }}
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/dinesh03d/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#6666aa", fontSize: "0.78rem", textDecoration: "none" }}
        >
          LinkedIn
        </a>
        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#6666aa", fontSize: "0.78rem", textDecoration: "none" }}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
