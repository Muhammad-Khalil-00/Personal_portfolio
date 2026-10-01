/* ==========================================================================
   MUHAMMAD KHALIL - MOBILE APP COST & TIMELINE ESTIMATOR
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const projectTypeRadios = document.querySelectorAll('input[name="app-type"]');
  const featureCheckboxes = document.querySelectorAll('input[name="calc-feature"]');
  const speedRadios = document.querySelectorAll('input[name="calc-speed"]');
  const totalDisplay = document.getElementById("calc-total-value");
  const deliveryDisplay = document.getElementById("calc-delivery-value");
  const applyQuoteBtn = document.getElementById("calc-apply-quote-btn");

  let currentTotal = 0;

  function calculateEstimate() {
    let basePrice = 250;
    let baseDays = 10;
    let selectedTypeName = "Flutter MVP Mobile App";

    // 1. App Type
    projectTypeRadios.forEach(radio => {
      const parentLabel = radio.closest(".calc-radio-label");
      if (radio.checked) {
        basePrice = parseInt(radio.value, 10);
        baseDays = parseInt(radio.dataset.days, 10);
        selectedTypeName = radio.dataset.name;
        if (parentLabel) parentLabel.classList.add("selected");
      } else {
        if (parentLabel) parentLabel.classList.remove("selected");
      }
    });

    // 2. Extra Features
    let featuresTotal = 0;
    const selectedFeatures = [];
    featureCheckboxes.forEach(cb => {
      const parentLabel = cb.closest(".calc-checkbox-label");
      if (cb.checked) {
        featuresTotal += parseInt(cb.value, 10);
        selectedFeatures.push(cb.dataset.name);
        if (parentLabel) parentLabel.classList.add("selected");
      } else {
        if (parentLabel) parentLabel.classList.remove("selected");
      }
    });

    // 3. Delivery Speed Multiplier
    let speedMultiplier = 1;
    let speedLabel = "Standard Development";
    let calculatedDays = baseDays;

    speedRadios.forEach(radio => {
      const parentLabel = radio.closest(".calc-radio-label");
      if (radio.checked) {
        speedMultiplier = parseFloat(radio.value);
        speedLabel = radio.dataset.name;
        calculatedDays = Math.ceil(baseDays * parseFloat(radio.dataset.timefactor || 1));
        if (parentLabel) parentLabel.classList.add("selected");
      } else {
        if (parentLabel) parentLabel.classList.remove("selected");
      }
    });

    const finalEstimate = Math.round((basePrice + featuresTotal) * speedMultiplier);

    // Animate price update
    animateValue(totalDisplay, currentTotal, finalEstimate, 350);
    currentTotal = finalEstimate;

    // Delivery text update
    if (deliveryDisplay) {
      deliveryDisplay.textContent = `Estimated timeline: ~${calculatedDays} Days (${speedLabel})`;
    }

    return {
      type: selectedTypeName,
      features: selectedFeatures,
      speed: speedLabel,
      total: finalEstimate,
      days: calculatedDays
    };
  }

  // Smooth number counter animation
  function animateValue(obj, start, end, duration) {
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const val = Math.floor(progress * (end - start) + start);
      obj.innerHTML = `<span>$</span>${val}`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Attach event listeners
  [...projectTypeRadios, ...featureCheckboxes, ...speedRadios].forEach(input => {
    input.addEventListener("change", calculateEstimate);
  });

  // Calculate initial quote on load
  calculateEstimate();

  // Prefill quote to contact form
  if (applyQuoteBtn) {
    applyQuoteBtn.addEventListener("click", () => {
      const quote = calculateEstimate();
      const messageField = document.getElementById("contact-message");
      const serviceSelect = document.getElementById("contact-service");

      if (serviceSelect) {
        serviceSelect.value = "custom-quote";
      }

      if (messageField) {
        messageField.value = `Hi Muhammad Khalil! I configured a mobile app project estimate via your website calculator:
• App Scope: ${quote.type}
• Features: ${quote.features.length > 0 ? quote.features.join(", ") : "Core MVP Features"}
• Timeline: ${quote.speed} (~${quote.days} days)
• Estimated Budget: $${quote.total}

I would like to discuss building this project on Fiverr or direct contract.`;
      }

      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        if (messageField) {
          setTimeout(() => messageField.focus(), 600);
        }
      }

      if (window.showToast) {
        window.showToast("Quote applied to contact message! Please enter your details below.");
      }
    });
  }
});
