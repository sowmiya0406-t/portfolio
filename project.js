document.addEventListener("DOMContentLoaded", function () {
  // Typed.js Effect
  if (document.querySelector(".typing-text")) {
      new Typed(".typing-text", {
          strings: ["Web Developer", "Graphic Designer", "Freelancer"],
          typeSpeed: 80,
          backSpeed: 50,
          backDelay: 1000,
          loop: true
      });
  }

  // Scroll Reveal Animation
  const sr = ScrollReveal({
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      reset: true,
  });

  sr.reveal(".about-img", { origin: "top", delay: 100 });
  sr.reveal(".about-content", { origin: "right", delay: 200 });
  sr.reveal(".skills", { origin: "bottom", delay: 300 });

  // Smooth Scrolling for Navbar Links
  document.querySelectorAll("nav a").forEach(anchor => {
      anchor.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
          }
      });
  });

  // Back to Top Button
  const backToTop = document.createElement("button");
  backToTop.innerText = "↑";
  backToTop.classList.add("back-to-top");
  document.body.appendChild(backToTop);

  backToTop.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      font-size: 24px;
      border: none;
      border-radius: 50%;
      background: #0ef;
      color: #fff;
      cursor: pointer;
      display: none;
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 4px 10px rgba(0, 238, 255, 0.5);
  `;

  backToTop.addEventListener("mouseenter", () => {
      backToTop.style.background = "#08c";
  });

  backToTop.addEventListener("mouseleave", () => {
      backToTop.style.background = "#0ef";
  });

  window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Resume Download with Confirmation
  const resumeButton = document.getElementById("download-resume");
  if (resumeButton) {
      resumeButton.addEventListener("click", function (event) {
          event.preventDefault();
          if (confirm("Do you want to download your resume?")) {
              const resumeUrl = "D:\Project\portfolio\SowmiyaResume2.pdf"; // Change to actual resume file path
              const a = document.createElement("a");
              a.href = resumeUrl;
              a.download = "Sowmiya_Resume.pdf"; // Change to desired filename
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
          }
      });
  }

  // Social Media Links
  document.querySelectorAll(".social-link").forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          window.open(this.getAttribute("href"), "_blank");
      });
  });
});
