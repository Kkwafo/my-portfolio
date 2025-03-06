"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { useTheme } from "@/context/ThemeContext";

const ContactMe: React.FC = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  const [ message, setMessage ] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  // Seleccionamos el ícono de GitHub según el modo oscuro o claro
  const githubIcon = darkMode ? "/icons/github-whiteIcon.svg" : "/icons/github.png";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    const response = await fetch("https://formspree.io/f/mldgqpjn", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    const result = await response.json();
    if (!response.ok) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setMessage(result.errors.map((error: any) => error.message).join(", "));
      return;
    }

    setMessage(t("successMessage"));
    formRef.current.reset();
  };

  return (
    <section className={`p-6 sm:p-8 md:p-12 rounded-lg shadow-xl max-w-4xl mx-auto mt-2 transition-all 
      ${darkMode ? "bg-gray-950 text-gray-300" : "bg-gray-100 text-gray-900"}`}>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Contact Info */}
        <div>
          <h5 className="text-2xl font-bold text-blue-400 my-4">{t("contactTitle")}</h5>
          <p className={`mb-6 max-w-md text-justify leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
            {t("contactDescription")}
          </p>

          <div className="flex flex-row gap-6">
            <Link href="https://github.com/Kkwafo" target="_blank">
              <Image
                src={githubIcon}
                alt="GitHub Icon"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform hover:opacity-80"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/kofi-kwafo-awua/" target="_blank">
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn Icon"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform hover:opacity-80"
              />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form
            ref={formRef}
            className={`flex flex-col p-6 rounded-xl shadow-lg transition-all 
              ${darkMode ? "bg-gray-900" : "bg-gray-200"}`}
            action="https://formspree.io/f/xayrezyr"
            method="POST"
            onSubmit={handleSubmit}
          >
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-semibold">
                {t("emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`border focus:ring-2 text-sm rounded-lg block w-full p-3 transition
                  ${darkMode ? "bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 text-gray-300"
                    : "bg-white border-gray-400 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-600 text-gray-900"}`}
                placeholder={t("emailPlaceholder")}
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 text-sm font-semibold">
                {t("subjectLabel")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className={`border focus:ring-2 text-sm rounded-lg block w-full p-3 transition
                  ${darkMode ? "bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 text-gray-300"
                    : "bg-white border-gray-400 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-600 text-gray-900"}`}
                placeholder={t("subjectPlaceholder")}
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm mb-2 font-semibold">
                {t("messageLabel")}
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className={`border focus:ring-2 text-sm rounded-lg block w-full p-3 transition
                  ${darkMode ? "bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 text-gray-300"
                    : "bg-white border-gray-400 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-600 text-gray-900"}`}
                placeholder={t("messagePlaceholder")}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg w-full transition transform hover:scale-105"
            >
              {t("sendButton")}
            </button>

            {message && (
              <p role="alert" className="text-green-400 text-center text-lg mt-4 font-bold">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
