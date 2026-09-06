"use client";

import { useState } from "react";
import Link from "next/link";

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
        <label className="srOnly" htmlFor="name">Your name</label>
        <input id="name" name="name" placeholder="Your name" required />
        <label className="srOnly" htmlFor="email">Your email</label>
        <input id="email" name="email" type="email" placeholder="Your email" required />
      </div>

      <label className="srOnly" htmlFor="message">How can we help?</label>
      <textarea
        id="message"
        name="message"
        placeholder="How can we help?"
        rows={4}
        required
      />

      <button type="submit">Send Enquiry</button>

      <p className="formPrivacy">By submitting, you agree that we may use your details to respond to your enquiry, as described in our <Link href="/legal/privacy-policy">Privacy Policy</Link>.</p>

      {status && <span>{status}</span>}
    </form>
  );
}
