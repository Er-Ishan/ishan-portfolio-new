// utils/chatbotResponses.js

const responses = {
  // Greetings
  hello: "Hi there! 👋 How can I help you today?",
  hi: "Hey! 👋 I'm Ishan's portfolio assistant. What would you like to know?",
  hey: "Hello! 😊 Ask me about Ishan’s skills, projects, or contact details.",

  // About / Intro
  who: "I’m Ishan Ahirrao’s chatbot assistant 🤖. I can tell you about his skills, projects, and ways to contact him!",
  about: "Ishan is a passionate Full-Stack Developer skilled in React, Next.js, Spring Boot, and MySQL. He also explores AI & Web Development 🚀.",

  // Skills / Technologies
  skills: "Ishan’s skills include React.js, Next.js, TailwindCSS, Spring Boot, Hibernate, MySQL, REST APIs, ASP.NET 🔥.",
  tech: "He works with Java, JavaScript, React.js, Next.js, Spring Boot, Hibernate, MySQL.",
  technologies: "Ishan uses React, Next.js, Node.js, Spring Boot, MySQL, ASP.NET 🚀.",

  // Projects
  projects: "Ishan has built projects like: 🔹 Secure Bidding Platform 🔹 Netflix Clone ",
  work: "Some of his work includes Secure Bidding Platform, an E-commerce Website, and AI-powered apps.",
  portfolio: "Check out Ishan’s projects in the Projects section of this portfolio 🚀.",

  // Specific Project
  securebid: "SecureBid is a secure online bidding platform built with React (frontend) and Java/.NET (backend). It ensures safe, transparent, and real-time auctions.",

  // Education
  education: "Ishan has studied programming deeply, learning Java, Spring, React, and full-stack development 📚.",

  // Contact
  contact: "📧 Email: yourmail@example.com | 🔗 GitHub: github.com/yourid | 🔗 LinkedIn: linkedin.com/in/yourid",
  email: "You can email Ishan at 📧 yourmail@example.com",
  github: "Check out his GitHub: 🔗 github.com/yourid",
  linkedin: "Connect on LinkedIn: 🔗 linkedin.com/in/yourid",

  // Closing
  thanks: "You're welcome! Happy to help 😊",
  bye: "Goodbye! 👋 Have a great day!",
};

// Smart matcher function
export function getBotResponse(userMessage) {
  if (!userMessage) return "Sorry, I didn’t understand that.";

  const msg = userMessage.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey"))
    return responses.hello;

  if (msg.includes("who") || msg.includes("you"))
    return responses.who;

  if (msg.includes("about"))
    return responses.about;

  if (msg.includes("skill") || msg.includes("tech") || msg.includes("technology"))
    return responses.skills;

  if (msg.includes("project") || msg.includes("work") || msg.includes("portfolio"))
    return responses.projects;

  if (msg.includes("secure") || msg.includes("bid"))
    return responses.securebid;

  if (msg.includes("education") || msg.includes("study"))
    return responses.education;

  if (msg.includes("contact"))
    return responses.contact;

  if (msg.includes("email"))
    return responses.email;

  if (msg.includes("github"))
    return responses.github;

  if (msg.includes("linkedin"))
    return responses.linkedin;

  if (msg.includes("thank"))
    return responses.thanks;

  if (msg.includes("bye") || msg.includes("goodbye"))
    return responses.bye;

  // If no match, fallback to AI (handled in ChatbotPage.js)
  return null;
}
