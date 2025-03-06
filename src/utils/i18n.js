import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      //Index
      nameIs:"Hello, my name is",
      frontEnd: "Frontend Technologies",
      backEnd: "Backend Technologies",
      professionalExperience: "Professional Experience",
      professionalDescription: "Experienced in <b>software architecture, backend optimization</b>, and building scalable applications. Specializing in <b>microservices, high-performance computing, and agile methodologies (Scrum, Kanban)</b>.",
      roleFullstack: "Fullstack Web Developer",
      roleProfessor: "Technology Education Professor",
      roleCheerful: "A cheerful person, even if I look serious",
      roleChef: "A master in the kitchen",
      //Contact
      contactTitle: "Let's Connect",
      contactDescription: "I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Subject",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      sendButton: "Send Message",
      successMessage: "✅ Message sent successfully!",
      //Header
      welcome: "Welcome to my Portfolio",
      description: "Showcasing my projects and skills.",
      about: "About Me",
      contact: "Contact Me",
      projects: "My Projects",
      skills: "Skills",
      portfolio: "My Portfolio",
      // Footer
      rightsReserved: "All rights reserved.",
      //About
      educationConventional: "Education & Conventional Technology",
      educationDigital: "Education & Digital Technology",
      environmentHobbies: "Environment & Hobbies",    
      educationConventionalDescription: "I am a passionate and driven individual, always eager to grow and innovate. While my true calling lies in developing web applications, I have also pursued a path in education, understanding that knowledge is one of the most powerful tools for change.",
      educationConventionalDescription2: "Although I am not currently practicing as a teacher, my passion for technology extends beyond coding. I firmly believe in empowering others to explore new technologies, helping them navigate the ever-evolving digital landscape. My goal is not just to teach programming but to foster a mindset of problem-solving, creatives skills, critical thinking, and innovation.",
      educationConventionalDescription3: '"Technology is not just about writing code; it is about building a sustainable future. I am deeply committed to spreading awareness of renewable energy, environmental sustainability, and fostering a culture of respect and collaboration. The world progresses when we work together, supporting each other as we navigate challenges, much like a team rowing against the tide, seeking the right currents to move forward."',
      educationDigitalTitle: "The Role of AI in Technology",
      educationDigitalDescription: "In the realm of Information and Communication Technologies (ICTs), we recognize the importance of various branches that shape our world. Artificial Intelligence (AI) has been evolving rapidly in recent years, but its origins trace back to 1956 when pioneers like John McCarthy, Marvin Minsky, and Arthur Samuel laid the groundwork for machine learning and cognitive computing.",
      educationDigitalDescription2: "Today, AI is revolutionizing industries, and it is crucial to integrate computational logic and programming into education. By understanding how computers process information, we empower future generations to think critically, solve complex problems, and innovate in ways that extend beyond traditional software development.",    
      environmentHobbies: "Passions Beyond Tech",
      environmentHobbiesDescription: "While one of my greatest passions is the culinary arts—cooking for my loved ones and sharing moments through flavors—I also have a deep appreciation for nature. There is an undeniable magic in the ever-changing landscapes, the golden glow of a sunset, or the quiet hum of a forest at dawn.",
      environmentHobbiesDescription2: "As an amateur photographer, I find joy in capturing these fleeting moments, knowing that each sunrise, each ripple in the water, each dance of the wind through the trees is unique and will never exist the same way again. Photography allows me to hold onto the ephemeral, preserving the beauty of nature in a way that transcends time.",
      environmentHobbiesDescription3: "Yet, admiration alone is not enough; we must also protect what inspires us. I believe human progress and environmental preservation must go hand in hand. Reducing our carbon footprint, embracing sustainability, and advocating for renewable energy are not just responsibilities but essential commitments to the future. True progress isn’t just about innovation—it’s about ensuring that the beauty we capture today remains for generations to come.",
      skills: "My Skills"
    }
  },
  es: {
    translation: {
      //Index
      nameIs:"Hola, soy",
      frontEnd: "Tecnologias de Frontend",
      backEnd: "Tecnologias de Backend",
      professionalExperience: "Experiencia Profesional",
      professionalDescription: "Con experiencia en <b>arquitectura de software, optimización de backend</b> y desarrollo de aplicaciones escalables. Especializado en <b>microservicios, computación de alto rendimiento y metodologías ágiles (Scrum, Kanban)</b>.",
      roleFullstack: "Desarrollador Web Fullstack",
      roleProfessor: "Profesor de Educación Tecnológica",
      roleCheerful: "Una persona alegre, aunque parezca seria",
      roleChef: "Un maestro en la cocina",
      //Contact
      contactTitle: "Conectemos",
      contactDescription: "Actualmente estoy abierto a nuevas oportunidades. Si tienes una pregunta o simplemente quieres saludar, no dudes en contactarme.",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "tu@email.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "Asunto",
      messageLabel: "Mensaje",
      messagePlaceholder: "Tu mensaje...",
      sendButton: "Enviar Mensaje",
      successMessage: "✅ ¡Mensaje enviado con éxito!",
      //Header
      welcome: "Bienvenido a mi Portafolio",
      description: "Mostrando mis proyectos y habilidades.",
      about: "Sobre Mí",
      contact: "Contáctame",
      projects: "Mis Proyectos",
      skills: "Habilidades",
      portfolio: "Mi Portafolio",
      // Footer
      rightsReserved: "Todos los derechos reservados.",
      //About
      educationConventional: "Educación y Tecnología Convencional",
      educationDigital: "Educación y Tecnología Digital",
      environmentHobbies: "Medio Ambiente y Pasatiempos",    
      educationConventionalDescription: "Soy una persona apasionada y motivada, siempre con ganas de crecer e innovar. Si bien mi verdadera vocación es el desarrollo de aplicaciones web, también he seguido un camino en la educación, comprendiendo que el conocimiento es una de las herramientas más poderosas para el cambio.",
      educationConventionalDescription2: "Aunque actualmente no ejerzo como docente, mi pasión por la tecnología va más allá de la programación. Creo firmemente en empoderar a otros para que exploren nuevas tecnologías, ayudándolos a navegar por el siempre cambiante panorama digital. Mi objetivo no es solo enseñar programación, sino fomentar una mentalidad de resolución de problemas, habilidades creativas, pensamiento crítico e innovación.",
      educationConventionalDescription3: '"La programación no se trata solo de escribir código; se trata de construir un futuro sostenible. Estoy profundamente comprometido con la concientizacion sobre las energías renovables, la sostenibilidad ambiental y el fomento de una cultura de respeto y colaboración. El mundo avanza cuando trabajamos juntos, apoyándonos mutuamente mientras enfrentamos desafíos, como un equipo que rema contra la corriente en buscando de la dirección correcta para seguir adelante."',
      educationDigitalTitle: "El Papel de la IA en la Tecnología",
      educationDigitalDescription: "En el ámbito de las Tecnologías de la Información y la Comunicación (TIC), reconocemos la importancia de diversas ramas que dan forma a nuestro mundo. La Inteligencia Artificial (IA) ha evolucionado rápidamente en los últimos años, pero sus orígenes se remontan a 1956, cuando pioneros como John McCarthy, Marvin Minsky y Arthur Samuel sentaron las bases del aprendizaje automático y la computación cognitiva.",
      educationDigitalDescription2: "Hoy en día, la IA está revolucionando las industrias, y es crucial integrar la lógica computacional y la programación en la educación. Al comprender cómo procesan la información las computadoras, empoderamos a las futuras generaciones para que piensen de manera crítica, resuelvan problemas complejos e innoven en formas que van más allá del desarrollo de software tradicional.",    
      environmentHobbies: "Pasiones Más Allá de la Tecnología",
      environmentHobbiesDescription: "Una de mis mayores pasiones es la cocina, preparar recetas propias creativas para mis seres queridos y compartir momentos a través de los sabores. Pero también siento una profunda admiración por la naturaleza. Hay una magia innegable en los paisajes en constante cambio, el resplandor dorado de un atardecer o el susurro tranquilo de un bosque al amanecer.",
      environmentHobbiesDescription2: "Como fotógrafo aficionado, encuentro alegría en capturar estos momentos fugaces, sabiendo que cada amanecer, cada ondulación en el agua, cada danza del viento entre los árboles es única y nunca existirá de la misma manera nuevamente. La fotografía me permite aferrarme a lo efímero, preservando la belleza de la naturaleza de una manera que trasciende el tiempo.",
      environmentHobbiesDescription3: "Sin embargo, la admiración por la naturaleza no es suficiente; también debemos proteger lo que nos inspira. Creo que el progreso humano y la preservación del medio ambiente deben ir de la mano. Reducir nuestra huella de carbono, adoptar la sostenibilidad y abogar por la energía renovable no son solo responsabilidades, sino compromisos esenciales con el futuro. El verdadero progreso no es solo innovar, sino garantizar que la belleza que capturamos hoy permanezca para las generaciones futuras.",
    // Skills
    skills: "Mis Habilidades"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
