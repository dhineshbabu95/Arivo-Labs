"use client";

import { useState } from "react";
import { contact, site } from "@/content";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

const inputStyles =
  "mt-2 block min-h-12 w-full rounded-lg border border-border/70 bg-card/80 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 hover:border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:min-h-0 sm:text-sm";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section className="pt-24 sm:pt-32 lg:pt-36">
      <div className="mx-auto w-full max-w-xl min-w-0">
        <p className="site-eyebrow">Contact</p>
        <h1 className="site-section-title mt-3 sm:mt-5">{contact.title}</h1>
        <p className="site-body mt-6 sm:mt-8">{contact.intro}</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5 sm:mt-14 sm:space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground"
            >
              {contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputStyles}
              placeholder="Full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              {contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputStyles}
              placeholder="Work email"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-foreground"
            >
              {contact.form.company}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className={inputStyles}
              placeholder="Company (optional)"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground"
            >
              {contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={inputStyles}
              placeholder="A few lines is enough"
            />
          </div>

          {status === "success" && (
            <p className="text-sm font-medium text-success">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-destructive">
              Something went wrong. Please try again or reach out via email.
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={status === "loading"}
            className="w-full min-h-12 sm:w-auto"
          >
            {status === "loading" ? "Sending..." : contact.form.submit}
          </Button>
        </form>

        <div className="mt-12 space-y-6 rounded-lg border border-border/70 bg-card/80 p-6 shadow-sm sm:mt-16 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/85 dark:text-primary/75">
              {contact.addressLabel}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {site.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/85 dark:text-primary/75">
              {contact.phoneLabel}
            </p>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${site.phone.au.tel}`}
                className="text-primary transition-colors hover:text-primary/80"
              >
                {site.phone.au.display} <span className="text-muted-foreground">(AU)</span>
              </a>
              <a
                href={`tel:${site.phone.in.tel}`}
                className="text-primary transition-colors hover:text-primary/80"
              >
                {site.phone.in.display} <span className="text-muted-foreground">(IN)</span>
              </a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{contact.responseTime}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={site.linkedin}
              variant="secondary"
              external
              className="w-full sm:w-auto"
            >
              {contact.linkedinLabel}
            </Button>
            <Button
              href={`mailto:${site.email}`}
              variant="secondary"
              external
              className="w-full sm:w-auto"
            >
              {contact.emailLabel}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
