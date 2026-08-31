"use client";

import { type TurnstileInstance } from "@marsidev/react-turnstile";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { PillArrowIcon } from "@/components/PillArrowIcon";
import { TurnstileField } from "@/components/TurnstileField";
import { CONTACT_HONEYPOT_FIELD } from "@/lib/contactHoneypot";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const fieldLabelClassName =
  "text-base font-semibold leading-[1.2] text-text md:text-2xl";
const fieldControlClassName =
  "w-full rounded border border-overlay bg-background text-xs leading-[1.5] text-text outline-none focus-visible:ring-2 focus-visible:ring-accent md:text-base";

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className }: ContactFormProps) {
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function resetTurnstile() {
    setTurnstileToken(null);
    turnstileRef.current?.reset();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (turnstileSiteKey && !turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the verification check.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          [CONTACT_HONEYPOT_FIELD]: website,
          turnstileToken,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again.",
        );
        resetTurnstile();
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
      setStatus("success");
      resetTurnstile();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      resetTurnstile();
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex w-full flex-col items-end gap-6 md:gap-8 xl:items-start ${className ?? ""}`}
    >
      <div
        className="absolute h-px w-px overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name={CONTACT_HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="contact-name" className={fieldLabelClassName}>
            Name<span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={isSubmitting}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={`${fieldControlClassName} h-[34px] px-2 md:h-[37px] disabled:opacity-50`}
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="contact-email" className={fieldLabelClassName}>
            Email Address<span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={isSubmitting}
            placeholder="example@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`${fieldControlClassName} h-[34px] px-2 placeholder:text-overlay md:h-[37px] disabled:opacity-50`}
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="contact-message" className={fieldLabelClassName}>
            Message<span aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            disabled={isSubmitting}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`${fieldControlClassName} h-[106px] resize-none px-2 py-2 md:h-[136px] disabled:opacity-50`}
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-end gap-2 xl:items-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex cursor-pointer items-center gap-1.5 rounded-[22px] bg-accent px-3 py-0.5 text-lg font-semibold italic leading-[1.5] text-background disabled:cursor-not-allowed disabled:opacity-50 md:px-4 md:py-1 md:text-2xl"
        >
          {isSubmitting ? "Sending…" : "Submit"}
          <PillArrowIcon className="h-[18px] w-[27px] transition-transform duration-500 ease-in-out group-hover:translate-x-1 md:h-6 md:w-9" />
        </button>

        {status === "success" ? (
          <p
            className="text-xs leading-[1.5] text-text"
            role="status"
          >
            Thank you. Your message has been sent.
          </p>
        ) : null}
        {status === "error" ? (
          <p
            className="text-xs leading-[1.5] text-text"
            role="alert"
          >
            {errorMessage}
          </p>
        ) : null}

        {turnstileSiteKey ? (
          <TurnstileField
            ref={turnstileRef}
            siteKey={turnstileSiteKey}
            onSuccess={setTurnstileToken}
            onExpire={() => setTurnstileToken(null)}
            onError={() => {
              setTurnstileToken(null);
              setErrorMessage("Verification failed. Please try again.");
              setStatus("error");
            }}
          />
        ) : null}
      </div>
    </form>
  );
}
