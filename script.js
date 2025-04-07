// script.js

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");
  const popup = document.querySelector(".blob-popup");
  const popupTitle = popup.querySelector("h3");
  const popupDesc = popup.querySelector("p");
  const closeBtn = popup.querySelector(".blob-close");

  // Demo content for each project (you can customize this per card)
  const projectDetails = [
    {
      title: "Malware Detection System",
      description:
        "A machine learning-based system to identify and classify malware files using signature and behavioral analysis. Hosted with AWS Lambda and integrated with a user-friendly dashboard.",
    },
    {
      title: "Cloud File Storage Platform",
      description:
        "Mini Google Drive clone using AWS S3 for storage, Cognito for auth, and React for frontend. Supports secure uploads, sharing, and real-time notifications.",
    },
    {
      title: "Personal Portfolio",
      description:
        "Netflix-style responsive profile website featuring horizontal scrollable project sections, animated hero banner, and contact form. Deployed with GitHub Pages.",
    },
    {
      title: "E-commerce App",
      description:
        "Full-stack online store built with MERN stack, Stripe integration, and real-time order tracking.",
    },
  ];

  // Handle click on any project
  projectCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      popupTitle.textContent = projectDetails[index].title;
      popupDesc.textContent = projectDetails[index].description;
      popup.classList.add("active");
    });
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  // Optional: Close popup when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });
});
