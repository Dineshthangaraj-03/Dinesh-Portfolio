import FadeIn from "./FadeIn";
import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div className="section-label">What I work with</div>
          <h2 className="section-title">Technical Skills</h2>
          <div className="divider" />
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
            marginTop: 48,
          }}
        >
          {Object.entries(SKILLS).map(([cat, items], i) => (
            <FadeIn key={cat} delay={i * 0.08}>
              <div
                style={{
                  background: "#10101e",
                  border: "1px solid #22223a",
                  borderRadius: 16,
                  padding: "28px 28px 24px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#00e5ff",
                    marginBottom: 16,
                  }}
                >
                  {cat}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map((s) => (
                    <span key={s} className="skill-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
