import FadeIn from "./FadeIn";
import { PROJECTS, GITHUB } from "../data";

const GitHubIcon = ({ size = 13, fill = "#9999bb" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div className="section-label">What I've built</div>
          <h2 className="section-title">Projects</h2>
          <div className="divider" />
          <p style={{ color: "#8888aa", fontSize: "0.9rem", marginTop: 8 }}>
            Click any project to view on GitHub →
          </p>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 28,
            marginTop: 48,
          }}
        >
          {PROJECTS.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", display: "block", height: "100%" }}
              >
                <div
                  className="project-card"
                  style={{ height: "100%", position: "relative", overflow: "hidden" }}
                >
                  {/* Top accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
                      opacity: 0.6,
                    }}
                  />

                  {/* Header row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: `${p.color}15`,
                        border: `1.5px solid ${p.color}33`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "1.2rem" }}>{p.icon}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#6666aa" }}>
                        {p.year}
                      </span>
                      <div
                        style={{
                          background: "#1a1a2e",
                          border: "1px solid #2a2a4a",
                          borderRadius: 6,
                          padding: "4px 10px",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <GitHubIcon />
                        <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#9999bb" }}>
                          GitHub
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "Playfair Display,serif",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "#fff",
                      marginBottom: 12,
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: `${p.color}11`,
                          border: `1px solid ${p.color}33`,
                          color: p.color,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          padding: "2px 8px",
                          borderRadius: 4,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bullet points */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {p.points.map((pt, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: 10,
                          fontSize: "0.86rem",
                          color: "#8888aa",
                          lineHeight: 1.65,
                        }}
                      >
                        <span style={{ color: p.color, marginTop: 3, flexShrink: 0 }}>›</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* View all button */}
        <FadeIn delay={0.2}>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="cta-btn"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <GitHubIcon size={16} fill="currentColor" />
              View All on GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
