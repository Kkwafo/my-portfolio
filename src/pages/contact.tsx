"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import github from "../../public/icons/github.png";
import LinkedinIcon from "../../public/icons/linkedin.png";
import { useTranslation } from 'react-i18next';

const ContactMe: React.FC = () => {
  const { t } = useTranslation();
  const [ message, setMessage ] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

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
    <section className="bg-gray-900 text-white p-6 sm:p-8 md:p-12 rounded-lg shadow-xl max-w-4xl mx-auto mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contact Info */}
        <div >
          <h5 className="text-2xl font-bold text-blue-400 my-4">{t("contactTitle")}</h5>
          <p className="text-gray-300 mb-6 max-w-md text-justify leading-relaxed">{t("contactDescription")}</p>
          <div className="flex flex-row gap-6">
            <Link href="https://github.com/Kkwafo" target="_blank">
              <Image src={github} alt="Github Icon" width={40} height={40} className="hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.linkedin.com/in/kofi-kwafo-awua/" target="_blank">
              <Image src={LinkedinIcon} alt="LinkedIn Icon" width={40} height={40} className="hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form
            ref={formRef}
            className="flex flex-col bg-gray-800 p-6 rounded-xl shadow-lg"
            action="https://formspree.io/f/xayrezyr"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-semibold">
                {t("emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 transition"
                placeholder={t("emailPlaceholder")}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="text-white block mb-2 text-sm font-semibold">
                {t("subjectLabel")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 transition"
                placeholder={t("subjectPlaceholder")}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-semibold">
                {t("messageLabel")}
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 transition"
                placeholder={t("messagePlaceholder")}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg w-full transition transform hover:scale-105"
            >
              {t("sendButton")}
            </button>

            {message && <p className="text-green-400 text-center text-lg mt-4 font-bold">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
