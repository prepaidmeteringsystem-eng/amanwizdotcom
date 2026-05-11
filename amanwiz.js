const leadForm = document.getElementById("leadForm");
const toast = document.getElementById("toast");

let toastTimer;

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {

    toast.classList.remove("show");

  }, 3600);

}

leadForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const data = new FormData(leadForm);

  const name = String(data.get("name") || "").trim();

  const area = String(data.get("area") || "").trim();

  const mobile = String(data.get("mobile") || "").trim();

  showToast(
    `Thanks ${name}. Amanwiz Infotech will contact you shortly. For urgent support call 8090224490.`
  );

  const whatsappText = encodeURIComponent(
`New enquiry

Name: ${name}
Service: ${area}
Mobile: ${mobile}`
  );

  window.open(
    `https://wa.me/918090224490?text=${whatsappText}`,
    "_blank",
    "noopener,noreferrer"
  );

  leadForm.reset();

});



/* SMOOTH HEADER SHADOW */

const siteHeader = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 12) {

    siteHeader.style.boxShadow =
      "0 10px 28px rgba(0,0,0,0.08)";

  } else {

    siteHeader.style.boxShadow = "none";

  }

});



/* HERO BUTTON HOVER EFFECT */

const primaryButtons = document.querySelectorAll(".primary-btn");

primaryButtons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translate(-2px,-2px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translate(0,0)";

  });

});



/* SIMPLE SCROLL REVEAL */

const revealItems = document.querySelectorAll(
  ".plan-card, .service-card, .testimonial-grid article, .power-band article"
);

const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },

  {
    threshold: 0.12
  }

);

revealItems.forEach((item) => {

  item.classList.add("reveal-item");

  revealObserver.observe(item);

});



/* ACTIVE NAV LINK */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".site-nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 140;

    if (window.scrollY >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {

      link.classList.add("active");

    }

  });

});



/* CTA BUTTON MICRO INTERACTION */

const secondaryButtons = document.querySelectorAll(".secondary-btn");

secondaryButtons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translate(-2px,-2px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translate(0,0)";

  });

});



/* MOBILE SAFE FORM SCROLL */

const mobileInputs = document.querySelectorAll(
  "input, select"
);

mobileInputs.forEach((field) => {

  field.addEventListener("focus", () => {

    setTimeout(() => {

      field.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }, 250);

  });

});



/* IMAGE PRELOAD */

const preloadImages = [

  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",

  "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1100&q=82"

];

preloadImages.forEach((src) => {

  const image = new Image();

  image.src = src;

});



/* PERFORMANCE SAFE RESIZE */

let resizeTimer;

window.addEventListener("resize", () => {

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {

    document.body.classList.add("resized");

  }, 120);

});