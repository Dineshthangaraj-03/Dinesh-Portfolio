import React, { useRef } from "react"; 
import emailjs from "@emailjs/browser"; 
import FadeIn from "./FadeIn";
import { CONTACT_LINKS } from "../data";

export default function Contact() {
  const form = useRef(); 

 const sendEmail = (e) => {
    e.preventDefault();

    
    const templateParams = {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      message: e.target.message.value,
    };

    emailjs.send(
      'service_ak9tdkg', 
      'template_nndiqnz', 
      templateParams, 
      '4rzypmlzOxBuOkrz5'
    )
    .then((result) => {
        alert("Message sent successfully! 👍");
        e.target.reset();
    }, (error) => {
        alert("Oops! Something went wrong.");
        console.log("Error Details:", error); 
    });
  };

  return (
    <section id="contact" style={{ padding: "100px 40px", background: "#0d0d18" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div className="section-label">Let's connect</div>
          <h2 className="section-title">Get In Touch</h2>
          <div className="divider" style={{ margin: "16px auto" }} />
          <p style={{ color: "#8888aa", fontSize: "1rem", lineHeight: 1.8, marginBottom: 48 }}>
            I'm actively looking for full-stack development opportunities.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          

          <div style={{ background: "#424248", border: "1px solid #051326", borderRadius: 16, padding: 40, textAlign: "left", maxWidth: 550, margin: "0 auto", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: "1.7rem", fontWeight: 700, textAlign: "center", marginBottom: 32, color: "#d9dade" }}>
              Send a Message
            </h3>

            
            <form ref={form} onSubmit={sendEmail}>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#f5f8fd", marginBottom: 8 }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name" 
                  required
                  placeholder="Enter your name..."
                  style={{ width: "100%", padding: "12px 16px", border: "1px solid #f9f9f9", borderRadius: 8, background: "#060607" }}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#ffffff", marginBottom: 8 }}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email" 
                  required
                  placeholder="Enter your email"
                  style={{ width: "100%", padding: "12px 16px", border: "1px solid #dde0e6", borderRadius: 8, background: "#000000" }}
                />
              </div>

              <div style={{ marginBottom: 32 }}>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#fcf7f7", marginBottom: 8 }}>
                  Your Message
                </label>
                <textarea
                  name="message" 
                  required
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                 style={{ width: "100%", padding: "12px 16px", border: "1px solid #f3f5f7", borderRadius: 8, background: "#252525", resize: "vertical" }}
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  style={{ background: "#7c3aed", color: "white", padding: "14px 28px", border: "none", borderRadius: 12, fontSize: "1.1rem", fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 12 }}
                >
                  Send Message
                  <span style={{ fontSize: "1.3rem" }}>&#10148;</span>
                </button>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
