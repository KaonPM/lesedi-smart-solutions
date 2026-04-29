"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setStatus("Thank you. Your message has been sent.");
      form.reset();
    } else {
      setStatus("Sorry, the message could not be sent.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formRow">
        <input name="name" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your email" required />
      </div>

      <textarea
        name="message"
        placeholder="How can we help?"
        rows={4}
        required
      />

      <button type="submit">Send Enquiry</button>

      {status && <span>{status}</span>}
    </form>
  );
}