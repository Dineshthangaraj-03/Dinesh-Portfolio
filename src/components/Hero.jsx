import { useTypewriter } from "../hooks/useTypewriter";
import FadeIn from "./FadeIn";

const TITLES = ["Full Stack Developer", "Java Engineer", "React Developer"];

export default function Hero({ onScrollTo }) {
  const typed = useTypewriter(TITLES);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "120px 40px 80px",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            background: "#00e5ff",
            borderRadius: "50%",
            filter: "blur(80px)",
            opacity: 0.12,
            top: -100,
            right: -150,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            background: "#7c4dff",
            borderRadius: "50%",
            filter: "blur(80px)",
            opacity: 0.12,
            bottom: 0,
            left: -100,
          }}
        />
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div>
          <FadeIn>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <div className="glow-dot" />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#9999bb",
                }}
              >
                Available for opportunities
              </span>
            </div>

            <h1
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 900,
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                lineHeight: 1.05,
                color: "#fff",
                marginBottom: 16,
              }}
            >
              Dinesh <span style={{ color: "#00e5ff" }}>T</span>
            </h1>

            <div
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.7rem)",
                fontWeight: 300,
                color: "#9999bb",
                marginBottom: 32,
                minHeight: "2em",
              }}
            >
              <span style={{ color: "#fff", fontWeight: 600 }}>{typed}</span>
              <span style={{ borderRight: "2px solid #00e5ff", marginLeft: 2 }}>|</span>
            </div>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#8888aa",
                maxWidth: 560,
                marginBottom: 40,
              }}
            >
              MCA graduate with a strong foundation in Java and web technologies. Passionate about
              building scalable full-stack applications with Spring Boot, React.js, and RESTful APIs.
              Currently based in Bangalore, Karnataka.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="cta-btn solid" onClick={() => onScrollTo("Projects")}>
                View Projects
              </button>
              <button className="cta-btn" onClick={() => onScrollTo("Contact")}>
                Contact Me
              </button>
            </div>

            <div style={{ display: "flex", gap: 28, marginTop: 48 }}>
              {[
                // { label: "Projects", value: "4+" },
                // { label: "Technologies", value: "10+" },
                // { label: "Experience", value: "1yr" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "Playfair Display,serif",
                      fontWeight: 900,
                      fontSize: "2rem",
                      color: "#00e5ff",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#6666aa",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      
      </div>
    </section>
  );
}
