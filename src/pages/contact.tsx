import React from "react";

const ContactMe: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-900 p-10 text-center rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="text-lg mb-4">Feel free to reach out to me!</p>

      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left font-semibold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-left font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-left font-semibold mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
