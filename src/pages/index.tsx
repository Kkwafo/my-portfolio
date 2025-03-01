import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="Greetings text-center py-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to my Portfolio</h1>
      <p className="text-lg text-gray-600">
        Here you can find some of my projects and personal information!
      </p>

      <h4 className="text-xl font-semibold mt-6">I&apos;m a Fullstack Web Developer.</h4>

      <p className="mt-4">On the Frontend, I focus on JavaScript and React technologies.</p>
      <p>And in the Backend, I use Node.js, Express.js, EJS, Motoko, C#, .NET.</p>

      {/* Imagen optimizada con next/image */}
      <div className="flex justify-center mt-6">
        <Image
          src="https://kkwafo.github.io/My-css-personal-site/images/cvphoto.png"
          alt="Cv"
          width={150}
          height={150}
          className="rounded-full shadow-md"
        />
      </div>

      <p className="pG mt-4 text-lg">My name is Kofi Kwafo Awua. It&apos;s a pleasure!</p>

      <h4 className="text-xl font-semibold mt-6">
        Also, I&apos;m the founder of {" "}
        <a
          href="https://www.instagram.com/drylivingfood.cba/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Drylivingfood
        </a>.
      </h4>

      <p className="mt-4 text-lg font-semibold">What is DrylivingFood?</p>
      <p className="text-gray-600">
        Drylivingfood is my business that I started during the pandemic in early 2020.
        We are dedicated to health, nutrition, and environmental awareness. Our focus is
        on producing dehydrated fruit snacks while maintaining the natural properties of the food.
      </p>

      <p className="mt-6 text-lg">But we are here to showcase my web development projects!</p>
    </div>
  );
}
