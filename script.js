// ======= DOM Elements =======
const header = document.querySelector(".site-header");
const navToggleBtn = document.querySelector(".nav-toggle-button");

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

const faqQuestions = document.querySelectorAll(".faq-question");

const form = document.querySelector(".cta-form");
const emailInput = document.querySelector(".input-email");
const errorMessage = document.querySelector(".input-error-message");
const submitBtn = document.querySelector(".btn-submit");

// ======= Regex for Email Validation =======
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// ======= Mobile Navigation Toggle =======
navToggleBtn.addEventListener("click", () => {
  navToggleBtn.classList.toggle("open");
  header.classList.toggle("nav-open");
  document.body.classList.toggle("over-hide"); // Lock scroll when nav is open
});

// ======= Tabs Logic =======
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentIndex = btn.dataset.index;

    // Update active button
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Show matching panel, hide others
    tabPanels.forEach((panel) => {
      const panelIndex = panel.dataset.tab;

      if (panelIndex === currentIndex) {
        panel.classList.add("active");

        // Scroll into view on small screens
        if (window.innerWidth < 768) {
          panel.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      } else {
        panel.classList.remove("active");
      }
    });
  });
});

// ======= FAQ Accordion =======
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    // Close all FAQ items
    faqQuestions.forEach((q) =>
      q.closest(".faq-item").classList.remove("open")
    );
    // Open the clicked one
    question.closest(".faq-item").classList.add("open");
  });
});

// ======= Form Validation on Submit =======
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (emailRegex.test(email)) {
    // Email is valid → proceed with submission
    window.location.href = ""; // Replace with real redirect or logic
    submitBtn.disabled = false;
  } else {
    // Show error message and style
    form.classList.add("error");
    errorMessage.textContent = "Please enter a valid email";
    submitBtn.disabled = true;
  }
});

// ======= Live Email Input Validation =======
emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();

  if (email) {
    // Clear error state when user starts typing valid input
    form.classList.remove("error");
    errorMessage.textContent = "";
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
