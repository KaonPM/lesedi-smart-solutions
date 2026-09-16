"use client";

import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

type PanelId = "about" | "contact" | "message";

export default function BottomInfoPanels() {
  const [openPanel, setOpenPanel] = useState<PanelId | null>(null);

  useEffect(() => {
    const openPanelFromHash = () => {
      const panelId = window.location.hash.slice(1);

      if (panelId === "about" || panelId === "contact") {
        setOpenPanel(panelId);
        requestAnimationFrame(() => {
          document.getElementById(panelId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    };

    openPanelFromHash();
    window.addEventListener("hashchange", openPanelFromHash);

    return () => window.removeEventListener("hashchange", openPanelFromHash);
  }, []);

  const togglePanel = (panelId: PanelId) => {
    setOpenPanel((currentPanel) =>
      currentPanel === panelId ? null : panelId
    );
  };

  return (
    <section className="bottomGrid">
      <div
        id="about"
        className={`panel collapsiblePanel ${openPanel === "about" ? "isOpen" : ""}`}
      >
        <button
          type="button"
          className="collapsibleTrigger"
          aria-expanded={openPanel === "about"}
          onClick={() => togglePanel("about")}
        >
          <span>About Us</span>
          <span aria-hidden="true">{openPanel === "about" ? "−" : "+"}</span>
        </button>

        {openPanel === "about" && (
          <div className="collapsibleContent">
            <p>
              Lesedi Smart Solutions is a South African digital solutions company
              focused on building simple, useful and affordable technology.
            </p>

            <p>
              Our solutions are designed for real people and real organisations
              that need better ways to manage daily work.
            </p>
          </div>
        )}
      </div>

      <div
        id="contact"
        className={`panel collapsiblePanel ${openPanel === "contact" ? "isOpen" : ""}`}
      >
        <button
          type="button"
          className="collapsibleTrigger"
          aria-expanded={openPanel === "contact"}
          onClick={() => togglePanel("contact")}
        >
          <span>Get in Touch</span>
          <span aria-hidden="true">{openPanel === "contact" ? "−" : "+"}</span>
        </button>

        {openPanel === "contact" && (
          <div className="collapsibleContent">
          <div className="contactItem">
            <span>✉️</span>

            <div>
              <strong>Email</strong>
              <p><a href="mailto:info@lesedismartsolutions.co.za">info@lesedismartsolutions.co.za</a></p>
            </div>
          </div>

          <div className="contactItem">
            <span>📞</span>

            <div>
              <strong>Phone</strong>
              <p><a href="tel:+27763616044">076 361 6044</a></p>
            </div>
          </div>

          <div className="contactItem">
            <span>💬</span>

            <div>
              <strong>WhatsApp</strong>
              <p><a href="https://wa.me/27763616044" target="_blank" rel="noopener noreferrer">076 361 6044</a></p>
            </div>
          </div>
          </div>
        )}
      </div>

      <div
        id="message"
        className={`panel collapsiblePanel ${openPanel === "message" ? "isOpen" : ""}`}
      >
        <button
          type="button"
          className="collapsibleTrigger"
          aria-expanded={openPanel === "message"}
          onClick={() => togglePanel("message")}
        >
          <span>Send us a Message</span>
          <span aria-hidden="true">{openPanel === "message" ? "−" : "+"}</span>
        </button>

        {openPanel === "message" && (
          <div className="collapsibleContent">
            <ContactForm />
          </div>
        )}
      </div>
    </section>
  );
}
