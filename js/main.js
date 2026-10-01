/* ==========================================================================
   MUHAMMAD KHALIL - MAIN INTERACTIONS & ANIMATION ENGINE
   ========================================================================== */

// Global toast alert helper
window.showToast = function(message) {
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" style="color: var(--accent-cyan);">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 50);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 4000);
};

document.addEventListener("DOMContentLoaded", () => {
  /* ------------------------------------------------------------------------
     1. CUSTOM CURSOR SPOTLIGHT FOLLOWER
     ------------------------------------------------------------------------ */
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorFollower = document.querySelector(".cursor-follower");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  if (cursorDot && cursorFollower) {
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animateFollower);
    };
    requestAnimationFrame(animateFollower);

    // Spotlight size on interactive elements
    const interactiveEls = document.querySelectorAll("a, button, input, select, textarea, .filter-btn, .project-card, .pricing-card");
    interactiveEls.forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursorFollower.style.width = "54px";
        cursorFollower.style.height = "54px";
        cursorFollower.style.borderColor = "var(--accent-cyan)";
        cursorFollower.style.backgroundColor = "rgba(2, 215, 242, 0.08)";
      });
      el.addEventListener("mouseleave", () => {
        cursorFollower.style.width = "38px";
        cursorFollower.style.height = "38px";
        cursorFollower.style.borderColor = "rgba(2, 215, 242, 0.45)";
        cursorFollower.style.backgroundColor = "transparent";
      });
    });
  }

  /* ------------------------------------------------------------------------
     2. AMBIENT PARTICLE & CONSTELLATION CANVAS
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById("ambient-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 22), 60);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? "rgba(2, 215, 242," : "rgba(139, 92, 246,",
        alpha: Math.random() * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    function renderCanvas() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(2, 215, 242, ${0.1 * (1 - dist / 125)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(renderCanvas);
    }
    renderCanvas();
  }

  /* ------------------------------------------------------------------------
     3. DYNAMIC TYPEWRITER EFFECT
     ------------------------------------------------------------------------ */
  const typewriterTarget = document.getElementById("typewriter-text");
  if (typewriterTarget) {
    const roles = [
      "Flutter Mobile App Engineer",
      "CTO & Co-Founder @ Qodex Software",
      "Cross-Platform iOS & Android Developer",
      "Firebase & Supabase Architect",
      "Provider & Clean Architecture Specialist"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 95;

    function typeWriterLoop() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typewriterTarget.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        typewriterTarget.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 105;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400;
      }

      setTimeout(typeWriterLoop, typingSpeed);
    }
    typeWriterLoop();
  }

  /* ------------------------------------------------------------------------
     4. CARD 3D TILT EFFECT ON HOVER
     ------------------------------------------------------------------------ */
  const tiltCards = document.querySelectorAll(".project-card, .hero-image-wrapper, .review-card, .contact-card-item");
  tiltCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });

  /* ------------------------------------------------------------------------
     5. NAVBAR SCROLL & ACTIVE LINK SPY
     ------------------------------------------------------------------------ */
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }

    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });

  /* ------------------------------------------------------------------------
     6. MOBILE MENU TOGGLE
     ------------------------------------------------------------------------ */
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const isOpen = navMenu.classList.contains("active");
      mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. SCROLL REVEAL OBSERVER
     ------------------------------------------------------------------------ */
  window.initScrollReveal = function() {
    const reveals = document.querySelectorAll(".reveal:not(.active)");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    reveals.forEach(el => observer.observe(el));
  };
  window.initScrollReveal();

  /* ------------------------------------------------------------------------
     8. ONE-CLICK EMAIL COPY & QUICK ACTIONS
     ------------------------------------------------------------------------ */
  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const email = copyEmailBtn.getAttribute("data-email") || "mkmalik0003@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        window.showToast("Email mkmalik0003@gmail.com copied to clipboard!");
      }).catch(() => {
        window.showToast("Email: " + email);
      });
    });
  }

  /* ------------------------------------------------------------------------
     9. REQUEST UPDATED CV HANDLER (No file download)
     ------------------------------------------------------------------------ */
  const cvBtn = document.getElementById("hero-cta-cv");
  if (cvBtn) {
    cvBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const contactSec = document.getElementById("contact");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      }
      const serviceSelect = document.getElementById("contact-service");
      if (serviceSelect) {
        serviceSelect.value = "custom-consultation";
      }
      const messageField = document.getElementById("contact-message");
      if (messageField) {
        messageField.value = "Hi Muhammad Khalil, I would like to request your latest updated CV / resume for a project inquiry.";
        setTimeout(() => messageField.focus(), 600);
      }
      window.showToast("For Muhammad Khalil's latest updated CV, please send a message below or contact on WhatsApp!");
    });
  }

  /* ------------------------------------------------------------------------
     10. CONTACT FORM SUBMISSION (Guaranteed On-Page Delivery to mkmalik0003@gmail.com)
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById("contact-form");
  const formStatusAlert = document.getElementById("form-status-alert");
  // Active Web3Forms Access Key for mkmalik0003@gmail.com
  const WEB3FORMS_ACCESS_KEY = "311ac1d1-3504-43f2-bd3f-b4ae05725f0f";

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const service = document.getElementById("contact-service").value;
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !message) {
        window.showToast("Please fill in all required fields.");
        return;
      }

      const submitBtn = document.getElementById("contact-submit-btn") || contactForm.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn.innerHTML;

      // Animated Loading State
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="btn-spinner"></span>
        <span class="btn-text">Sending Message...</span>
      `;

      if (formStatusAlert) {
        formStatusAlert.style.display = "none";
        formStatusAlert.className = "form-status-alert";
      }

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: name,
            email: email,
            service: service,
            message: message,
            from_name: `${name} (Portfolio Inquiry)`,
            subject: `New Portfolio Message from ${name} (${service})`,
            replyto: email
          })
        });

        const data = await response.json();

        if (data.success) {
          // Reset form fields
          contactForm.reset();

          // Trigger On-Screen Success Popup Modal!
          window.showSuccessPopup(name);
          window.showToast("Message sent successfully! I will contact you very soon.");
        } else {
          console.error("Submission failed:", data);
          window.showToast(data.message || "Failed to send message. Please check access key.");
          if (formStatusAlert) {
            formStatusAlert.style.display = "block";
            formStatusAlert.className = "form-status-alert error";
            formStatusAlert.textContent = data.message || "Error sending message. Please try again.";
          }
        }
      } catch (err) {
        console.error("Network error:", err);
        window.showToast("Network error. Please try again or message directly via WhatsApp.");
        if (formStatusAlert) {
          formStatusAlert.style.display = "block";
          formStatusAlert.className = "form-status-alert error";
          formStatusAlert.textContent = "Network error. Please check your internet connection or reach out on WhatsApp.";
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     11. SUCCESS POPUP MODAL HANDLERS
     ------------------------------------------------------------------------ */
  window.showSuccessPopup = function(name) {
    const modal = document.getElementById("success-popup-modal");
    const nameEl = document.getElementById("popup-client-name");
    if (nameEl && name) {
      nameEl.textContent = name;
    }
    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  };

  window.closeSuccessPopup = function() {
    const modal = document.getElementById("success-popup-modal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  };

  const successModalBackdrop = document.getElementById("success-popup-modal");
  if (successModalBackdrop) {
    successModalBackdrop.addEventListener("click", (e) => {
      if (e.target === successModalBackdrop) {
        window.closeSuccessPopup();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closeSuccessPopup();
    }
  });
});
