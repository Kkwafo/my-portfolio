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

    setMessage("✅ Message sent successfully!");
    formRef.current.reset(); // Reseteamos el formulario de manera segura
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-4 gap-4 relative" id="contact">
      {/* Left Side - Contact Info */}
      <div>
        <h5 className="text-2xl font-bold text-white my-4">{t("contactTitle")}</h5>
        <p className="text-gray-300 mb-4 max-w-md text-justify">
          {t("contactDescription")}
        </p>

        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/Kkwafo" target="_blank">
            <Image src={github} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/kofi-kwafo-awua/" target="_blank">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" width={40} height={40} />
          </Link>
        </div>
      </div>

      {/* Right Side - Form */}
      <div>
        <form
          ref={formRef} // Asignamos la referencia al formulario
          className="flex flex-col mt-6 bg-gray-900 p-6 rounded-lg shadow-lg"
          action="https://formspree.io/f/xayrezyr"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              {t("emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-gray-800 border border-gray-600 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t("emailPlaceholder")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              {t("subjectLabel")}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="bg-gray-800 border border-gray-600 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t("subjectPlaceholder")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              {t("messageLabel")}
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="bg-gray-800 border border-gray-600 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t("messagePlaceholder")}

            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {t("sendButton")}
          </button>

          {message && <p className="text-green-500 text-center text-lg mt-4 font-bold">{t("successMessage")}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
