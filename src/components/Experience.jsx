import FadeIn from "./FadeIn";
import { EXPERIENCE, EDUCATION } from "../data";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 40px", background: "#0d0d18" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div className="section-label">My journey</div>
          <h2 className="section-title">Experience & Training</h2>
          <div className="divider" />
        </FadeIn>

        {/* Experience Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 24,
            marginTop: 48,
          }}
        >
          {EXPERIENCE.map((e, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="exp-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 8,
                  }}
                >
                  <span className="tag">{e.type === "work" ? "Internship" : "Training"}</span>
                  <span style={{ fontSize: "0.78rem", color: "#6666aa", fontWeight: 600 }}>
                    {e.period}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "Playfair Display,serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#fff",
                    margin: "12px 0 4px",
                  }}
                >
                  {e.role}
                </h3>
                <div
                  style={{ fontSize: "0.85rem", color: "#00e5ff", fontWeight: 600, marginBottom: 16 }}
                >
                  {e.org}
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {e.points.map((p, j) => (
                    <li
                      key={j}
                      style={{ display: "flex", gap: 10, fontSize: "0.87rem", color: "#8888aa", lineHeight: 1.6 }}
                    >
                      <span style={{ color: "#00e5ff", marginTop: 3, flexShrink: 0 }}>›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education */}
        <FadeIn delay={0.2}>
          <div style={{ marginTop: 64 }}>
            <div className="section-label" style={{ marginBottom: 8 }}>
              Academic background
            </div>
            <h3 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
              Education
            </h3>
            <div className="divider" />
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
            marginTop: 32,
          }}
        >
          {EDUCATION.map((e, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="edu-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#ff6b6b",
                    }}
                  >
                    {e.period}
                  </span>
                  <span
                    style={{
                      fontFamily: "Playfair Display,serif",
                      fontWeight: 900,
                      fontSize: "1.4rem",
                      color: "#ff6b6b",
                    }}
                  >
                    {e.score}
                  </span>
                </div>
                <h4
                  style={{
                    fontFamily: "Playfair Display,serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#fff",
                    marginBottom: 4,
                  }}
                >
                  {e.degree}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#8888aa" }}>{e.school}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
