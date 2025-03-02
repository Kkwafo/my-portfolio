"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import github from "../../public/icons/github.png";
import LinkedinIcon from "../../public/icons/linkedin.png";

const ContactMe: React.FC = () => {
  const [ message, setMessage ] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null); // Usamos useRef para manejar el formulario

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return; // Si el formulario no está disponible, no hacer nada

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
        <h5 className="text-2xl font-bold text-white my-4">Let&apos;s Connect</h5>
        <p className="text-gray-300 mb-4 max-w-md text-justify">
          I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
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
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-gray-800 border border-gray-600 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="bg-gray-800 border border-gray-600 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Subject"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="bg-gray-800 border border-gray-600 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>

          {message && <p className="text-green-500 text-center text-lg mt-4 font-bold">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
