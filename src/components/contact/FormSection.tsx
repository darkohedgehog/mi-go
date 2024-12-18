"use client";
import React, { useRef, useState } from "react";
import { Grid } from "./Grid";
import emailjs from "@emailjs/browser";
import { FaLocationArrow } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const staticPattern = [
  [7, 1],
  [8, 2],
  [9, 3],
  [7, 4],
  [8, 5],
];

const FormSection: React.FC = () => {
  const t = useTranslations("FormSection");

  // Ref sa odgovarajućim tipom za HTMLDivElement
  const formRef = useRef<HTMLFormElement>(null);

  // State za formu
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Funkcija za praćenje promena u inputima
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Funkcija za submit forme
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert(`${t('required')}`)
      return;
    }
    
    setLoading(true);

    // Validacija i osiguranje vrednosti iz env fajla
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Mi-Go Kombucha",
          from_email: form.email,
          company: form.company || "N/A",
          to_email: "migo.kombucha@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert(t("message1"));

          setForm({
            name: "",
            email: "",
            company: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(t("error"));
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-secondary to-accentGreen p-4 sm:p-10"
    >
      <Grid pattern={staticPattern} size={20} />
      <div className="relative z-20 mb-4 w-full">
        <label
          className="mb-2 inline-block text-sm font-medium text-accent"
          htmlFor="name"
        >
          {t("name")}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={t("placeholder1")}
          className="h-10 w-full rounded-md border border-accent pl-4 text-sm text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none bg-accentGreen"
        />
      </div>
      <div className="relative z-20 mb-4 w-full">
        <label
          className="mb-2 inline-block text-sm font-medium text-accent"
          htmlFor="email"
        >
          {t("email")}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={t("placeholder2")}
          className="h-10 w-full rounded-md border border-accent bg-accentGreen pl-4 text-sm text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none"
        />
      </div>
      <div className="relative z-20 mb-4 w-full">
        <label
          className="mb-2 inline-block text-sm font-medium text-accent"
          htmlFor="company"
        >
          {t("company")}
        </label>
        <input
          id="company"
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder={t("placeholder3")}
          className="h-10 w-full rounded-md border border-accent bg-accentGreen pl-4 text-sm text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none"
        />
      </div>
      <div className="relative z-20 mb-4 w-full">
        <label
          className="mb-2 inline-block text-sm font-medium text-accent"
          htmlFor="message"
        >
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder={t("placeholder4")}
          className="w-full rounded-md border border-accent bg-accentGreen pl-4 pt-4 text-sm text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none"
        />
      </div>
      <button
        type="submit"
        className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-accent px-4 py-2 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-secondary md:text-sm gap-2"
      >
        {loading ? t("sending") : t("send")}
        <FaLocationArrow />
      </button>
    </form>
  );
};

export default FormSection;
