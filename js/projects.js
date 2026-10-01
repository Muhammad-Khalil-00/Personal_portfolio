/* ==========================================================================
   MUHAMMAD KHALIL - REAL PROJECTS DATA & MODAL HANDLER
   ========================================================================== */

const portfolioProjects = [
  {
    id: "bedvibe-app",
    title: "BedVibe – AI Morning Habit Tracker",
    category: "mobile",
    categoryName: "AI Mobile App & Habit Tracker",
    featuredBadge: "Featured AI App (5.0 ★)",
    displayType: "mobile",
    icon: "🛏️",
    accentColor: "rgba(255, 107, 74, 0.25)",
    posterUrl: "assets/images/bedvibe/bedvibe_showcase_poster.png",
    images: [
      {
        url: "assets/images/bedvibe/06_vibe_score.png",
        caption: "Screen 1/9: Google Gemini Vision AI – Real-Time Bed Photo Verification & 92 Vibe Score"
      },
      {
        url: "assets/images/bedvibe/04_home_ritual.png",
        caption: "Screen 2/9: Daily Morning Ritual Hub – Camera Bed Snap, Consistency Streaks & Sleep Stories"
      },
      {
        url: "assets/images/bedvibe/07_premium_paywall.png",
        caption: "Screen 3/9: RevenueCat Custom Paywall – In-App Monthly Subscriptions ($3.99/mo) & Feature Gating"
      },
      {
        url: "assets/images/bedvibe/05_leaderboard.png",
        caption: "Screen 4/9: Worldwide Supabase Leaderboard – Realtime Global Rankings & Top Podium"
      },
      {
        url: "assets/images/bedvibe/01_splash_ritual.png",
        caption: "Screen 5/9: Onboarding & App Launch – Daily Morning Ritual & Streak Motivation"
      },
      {
        url: "assets/images/bedvibe/08_profile.png",
        caption: "Screen 6/9: User Profile & Dynamic App Theme Selector (Linen, Midnight Gold)"
      },
      {
        url: "assets/images/bedvibe/09_reminders_settings.png",
        caption: "Screen 7/9: Smart Morning Alarms, Zen Meditation Bell & Accountability Lock Mode"
      },
      {
        url: "assets/images/bedvibe/03_signup.png",
        caption: "Screen 8/9: Create Account & Streak Onboarding"
      },
      {
        url: "assets/images/bedvibe/02_signin.png",
        caption: "Screen 9/9: Supabase Authentication – Welcome Back & Account Cloud Sync"
      }
    ],
    tags: ["Flutter", "Dart", "Provider", "Supabase", "Gemini Vision AI", "RevenueCat", "In-App Purchases"],
    shortDesc: "Gamified cross-platform mobile application powered by Google Gemini Vision AI to verify bed photos in real-time, built with Flutter, Provider, Supabase, and RevenueCat in-app subscriptions.",
    fullDesc: "BedVibe is a cutting-edge cross-platform habit tracking application engineered with Flutter, Provider, and Supabase. Designed to transform morning routines into engaging daily habits, it integrates Google Gemini Vision AI to analyze bed photos in real time—verifying neatness, straight sheet edges, and pillow symmetry while detecting fake uploads. Features RevenueCat subscriptions with custom paywalls ($3.99/month), worldwide Supabase leaderboards, smart morning alarms, accountability lock mode, and sleep soundscapes.",
    features: [
      "Built a cross-platform mobile app using Flutter, Provider, and Supabase to help users track daily morning bed-making habits through gamification.",
      "Integrated Google Gemini Vision AI to verify bed photos in real time, detecting fake uploads and rating neatness, edges, and symmetry.",
      "Implemented RevenueCat subscriptions with custom paywalls to gate premium app themes, sleep stories, and detailed streak analytics.",
      "Designed interactive features including smart morning alarms, accountability lock mode, and branded share cards for social media.",
      "Delivered the complete end-to-end solution for a Ghana-based client on Fiverr, meeting all delivery and quality requirements."
    ],
    client: "Client in Ghana (via Fiverr)",
    timeline: "Delivered & Client Verified (5.0 ★)",
    githubUrl: "https://github.com/Muhammad-Khalil-00"
  },
  {
    id: "autobike-app",
    title: "AutoBike – Showroom Sales & Inventory App",
    category: "enterprise",
    categoryName: "Real Production App",
    featuredBadge: "Verified Flutter App",
    displayType: "mobile",
    icon: "🏍️",
    accentColor: "rgba(2, 215, 242, 0.2)",
    images: [
      {
        url: "assets/images/autobike/dashboard.png",
        caption: "Screen 1/5: Showroom Executive Dashboard & Financial Overview (Rs23.1L Sales)"
      },
      {
        url: "assets/images/autobike/sales.png",
        caption: "Screen 2/5: Real-Time Sales Pipeline, Customer Installments & Dues Tracking"
      },
      {
        url: "assets/images/autobike/history.png",
        caption: "Screen 3/5: Customer Purchase History, CD 70 Selling Rates & Profit Breakdown"
      },
      {
        url: "assets/images/autobike/payments.png",
        caption: "Screen 4/5: Payment Ledger with Initial Cash & Installment Receipts"
      },
      {
        url: "assets/images/autobike/profile.png",
        caption: "Screen 5/5: Showroom Manager Profile & Supabase Cloud Integration"
      }
    ],
    tags: ["Flutter", "Dart", "Provider", "Supabase Cloud", "PostgreSQL", "Realtime Sync"],
    shortDesc: "Comprehensive cross-platform mobile application built for motorcycle showroom owners to track daily vehicle sales, customer installment payments, inventory stock, and net profit margins.",
    fullDesc: "AutoBike is a production mobile solution engineered with Flutter and Supabase Cloud. It replaces manual paper bookkeeping for bike dealership owners with real-time financial tracking (Sales, Received Cash, Remaining Dues, Profit Margins), customer purchase ledgers, and inventory counts.",
    features: [
      "Executive Dashboard: Live overview of Total Sales, Received Amount, Remaining Dues, and Net Profits",
      "Sales & Customer Pipeline: Real-time customer search with percentage paid progress indicators",
      "Purchase History & Details: Multi-bike purchase tracking (e.g. CD 70, CD Darem) with selling rate, purchase cost, and profit margins",
      "Payment Scheduling: Cash receipts logging for Initial Payments, Additional Payments, and remaining due balances",
      "Supabase Cloud Sync: Realtime database synchronization with authenticated Showroom Manager roles"
    ],
    client: "Motorcycle Dealerships & Showrooms",
    timeline: "Production Deployed (v1.0.0)",
    githubUrl: "https://github.com/Muhammad-Khalil-00"
  },
  {
    id: "music-app",
    title: "ROO – Wellness & Meditation Music App",
    category: "mobile",
    categoryName: "Real Production App",
    featuredBadge: "Verified Client Project (5.0 ★)",
    displayType: "mobile",
    icon: "🎵",
    accentColor: "rgba(46, 200, 150, 0.2)",
    images: [
      {
        url: "assets/images/music/login.png",
        caption: "Screen 1/5: Onboarding & Authentication – Welcome Back & One-Tap Google Sign-In"
      },
      {
        url: "assets/images/music/home.png",
        caption: "Screen 2/5: Categories Hub & Home – Mind, Body, Brain Booster & Healing Frequencies"
      },
      {
        url: "assets/images/music/player-focus.png",
        caption: "Screen 3/5: High-Fidelity Audio Player – Study & Deep Focus Mode"
      },
      {
        url: "assets/images/music/player-healing.png",
        caption: "Screen 4/5: Frequency Audio Player – Hair Fall Control & DNA Repair Frequencies"
      },
      {
        url: "assets/images/music/profile.png",
        caption: "Screen 5/5: User Account & Profile – Account Management & Session Settings"
      }
    ],
    tags: ["Flutter", "Dart", "Provider", "Audio Service", "Google Sign-In", "REST APIs"],
    shortDesc: "Calming meditation and wellness audio streaming mobile application engineered with Flutter, featuring background audio playback, frequency tracks, Google Auth, and offline caching.",
    fullDesc: "Engineered and delivered for an international client, ROO Wellness Music delivers a peaceful, high-fidelity sound streaming experience on Android & iOS. Built with custom audio service background playback, notification shade controls, Google Authentication, and curated wellness soundscapes for deep focus, meditation, and stress relief.",
    features: [
      "Custom Background Audio Player: Smooth playback with background service, volume controls, loop, and notification controls",
      "Categorized Wellness Tracks: Dedicated frequencies for Study & Deep Focus, Brain Booster, Anxiety Relief, and Physical Healing",
      "Seamless Google Authentication: One-tap sign-in and cloud session state management",
      "Calming Zen Aesthetic: Soft pastel and teal glassmorphism UI engineered with Flutter widgets",
      "Delivered on time with 5-star client rating meeting all deployment requirements"
    ],
    client: "International Client",
    timeline: "Delivered & Client Verified (5.0 ★)",
    githubUrl: "https://github.com/Muhammad-Khalil-00"
  },
  {
    id: "hospital-system",
    title: "Indus Medicare – Hospital Desktop POS & Management System",
    category: "enterprise",
    categoryName: "Hospital Desktop POS & System",
    featuredBadge: "On-Site Hospital Deployment",
    displayType: "desktop",
    icon: "🏥",
    accentColor: "rgba(16, 185, 129, 0.2)",
    images: [
      {
        url: "assets/images/hospital/login.png",
        caption: "Screen 1/5: Administrator & Medical Staff Authentication – Role-Based Access Control"
      },
      {
        url: "assets/images/hospital/reception.png",
        caption: "Screen 2/5: Doctor Reception, Shift Scheduling & Dual-Mode Printer Setup (Thermal / Normal)"
      },
      {
        url: "assets/images/hospital/opd-slip.png",
        caption: "Screen 3/5: Computerized Patient OPD Slip & Token #1 with Scannable Barcode Integration"
      },
      {
        url: "assets/images/hospital/emergency.png",
        caption: "Screen 4/5: Emergency Room (ER) Patient Triage, Attending Physician & Immediate Care"
      },
      {
        url: "assets/images/hospital/reports.png",
        caption: "Screen 5/5: Daily Income Audit & Departmental Revenue Analytics (OPD, ER, Lab, Ultrasound)"
      }
    ],
    tags: ["Flutter Desktop", "Dart", "Provider", "SQLite", "Direct Thermal Printing", "Barcode Integration", "Windows OS"],
    shortDesc: "Complete on-site hospital & clinic desktop management system with computerized patient registration, barcode OPD token slips, ER triage, and direct thermal printing.",
    fullDesc: "Successfully engineered and deployed on-site for Indus Medicare Center in Kandhkot. This desktop software solution streamlines high-volume hospital operations across multiple departments including Doctor Reception, computerized OPD tokens with barcode generation, emergency triage, diagnostic labs, and radiology. Built with local SQLite for lightning-fast hospital intranet performance and direct thermal slip printer integration without any cloud latency.",
    features: [
      "Digital OPD Token Generation: Instant token #1 printing with patient demographics and scannable barcode",
      "Doctor Reception & Scheduling: Real-time shift tracking, fee assignment, and appointment queues",
      "Direct Thermal & Normal Printing: Dual-mode slip printing configured for 80mm/58mm POS thermal printers",
      "Emergency Room (ER) Triage: Fast-track patient intake with vital signs, attending doctor, and immediate care notes",
      "Financial Auditing & Daily Reports: Executive breakdown of shift collections, departmental revenue, and patient counts",
      "Robust Local SQLite Architecture: 100% offline-first reliability designed specifically for medical clinic continuity"
    ],
    client: "Indus Medicare Center, Kandhkot",
    timeline: "Active On-Site Hospital Deployment",
    githubUrl: "https://github.com/Muhammad-Khalil-00"
  },
  {
    id: "twitter-clone",
    title: "Twitter / X – Realtime Social App",
    category: "mobile",
    categoryName: "Social Network",
    featuredBadge: "Realtime Mobile App",
    displayType: "mobile",
    icon: "🐦",
    accentColor: "rgba(2, 215, 242, 0.2)",
    images: [
      {
        url: "assets/images/twitter/feed.jpg",
        caption: "Screen 1/3: Real-Time Dark Mode Feed – Interactive Posts, Code Snippets & Impeller UI"
      },
      {
        url: "assets/images/twitter/profile.jpg",
        caption: "Screen 2/3: Developer Profile & Portfolio – Muhammad Khalil (@khalil_flutter), Stats & Posts"
      },
      {
        url: "assets/images/twitter/compose.jpg",
        caption: "Screen 3/3: New Post & Code Snippet Composer – Media Attachments & Character Counter"
      }
    ],
    tags: ["Flutter", "Dart", "Provider", "Supabase Auth", "PostgreSQL", "Realtime WebSockets"],
    shortDesc: "Real-time microblogging social mobile app built with Flutter and Supabase, featuring dark mode feed, verified profile, live reactions, and tweet composer.",
    fullDesc: "A high-performance Twitter / X mobile client engineered with Flutter and Supabase. The app features a responsive dark-themed feed with rich media previews, code snippet highlighting, verified user profiles, interactive tweet composing with character limit counters, and real-time state management.",
    features: [
      "Real-time tweet stream with Supabase WebSocket subscriptions and chronological sorting",
      "Verified user profiles with follower analytics, bio details, and categorized post tabs",
      "Rich tweet composer with dynamic character limit progress ring and image attachments",
      "Interactive engagement: instant likes, reposts, bookmarks, and thread view",
      "Optimized Impeller Flutter rendering pipeline for 60fps scrolling performance"
    ],
    client: "Open-Source / Community Project",
    timeline: "Completed & Maintained",
    githubUrl: "https://github.com/Muhammad-Khalil-00"
  }
];

// Active gallery state for modal
let currentModalProject = null;
let currentImageIndex = 0;

// Render Projects Grid
function renderProjects(filter = "all") {
  const gridContainer = document.getElementById("projects-grid");
  if (!gridContainer) return;

  const filtered = filter === "all" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === filter);

  gridContainer.innerHTML = filtered.map(project => {
    const hasScreenshots = project.images && project.images.length > 0;

    let mediaHeaderHtml = "";
    if (hasScreenshots) {
      if (project.displayType === "desktop") {
        mediaHeaderHtml = `
          <div class="project-image-container project-mobile-preview-box">
            <span class="project-category-badge">${project.categoryName}</span>
            <div class="screenshot-pill-badge" style="background: rgba(16, 185, 129, 0.2); border-color: rgba(16, 185, 129, 0.4); color: #34d399;">
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm2 0v8h10V5H5z" clip-rule="evenodd"/>
              </svg>
              <span>${project.images.length} Desktop Screens</span>
            </div>
            <div class="project-desktop-frame">
              <div class="window-topbar">
                <span class="window-topbar-dot red"></span>
                <span class="window-topbar-dot yellow"></span>
                <span class="window-topbar-dot green"></span>
                <span class="window-topbar-title">Indus Medicare System</span>
              </div>
              <img src="${project.images[0].url}" alt="${project.title}" class="project-thumbnail" loading="lazy" />
            </div>
            <div class="project-overlay">
              <button class="btn btn-sm btn-primary" onclick="openProjectModal('${project.id}')">
                View Desktop Screens (${project.images.length})
              </button>
            </div>
          </div>
        `;
      } else {
        mediaHeaderHtml = `
          <div class="project-image-container project-mobile-preview-box">
            <span class="project-category-badge">${project.categoryName}</span>
            <div class="screenshot-pill-badge">
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
              </svg>
              <span>${project.images.length} App Screens</span>
            </div>
            <div class="project-mobile-frame">
              <img src="${project.images[0].url}" alt="${project.title}" class="project-thumbnail" loading="lazy" />
            </div>
            <div class="project-overlay">
              <button class="btn btn-sm btn-primary" onclick="openProjectModal('${project.id}')">
                View Screenshots (${project.images.length})
              </button>
            </div>
          </div>
        `;
      }
    } else {
      mediaHeaderHtml = `
        <div class="project-tech-header" style="background: linear-gradient(135deg, ${project.accentColor || 'rgba(255,255,255,0.05)'} 0%, rgba(13, 16, 26, 0.95) 100%);">
          <span class="project-category-badge">${project.categoryName}</span>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 24px;">
            <div class="tech-header-icon">${project.icon || '📱'}</div>
            <span class="tech-header-badge">${project.featuredBadge || 'Production Code'}</span>
          </div>
          <div class="project-overlay">
            <button class="btn btn-sm btn-primary" onclick="openProjectModal('${project.id}')">
              Read Case Study
            </button>
          </div>
        </div>
      `;
    }

    return `
      <div class="project-card reveal ${hasScreenshots ? 'has-screenshot' : 'no-screenshot'}" data-category="${project.category}">
        ${mediaHeaderHtml}
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.shortDesc}</p>
          <div class="project-tech-tags">
            ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            <button class="project-link-btn" onclick="openProjectModal('${project.id}')">
              ${hasScreenshots ? 'Explore Screens' : 'Read Case Study'} <span>&rarr;</span>
            </button>
            <a href="#contact" class="btn btn-sm btn-outline">Hire for Similar</a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.initScrollReveal) {
    window.initScrollReveal();
  }
}

// Open Project Detail Modal
function openProjectModal(projectId) {
  const project = portfolioProjects.find(p => p.id === projectId);
  if (!project) return;

  currentModalProject = project;
  currentImageIndex = 0;

  const modal = document.getElementById("project-modal");
  const modalCategory = document.getElementById("modal-project-category");
  const modalTitle = document.getElementById("modal-project-title");
  const modalDesc = document.getElementById("modal-project-desc");
  const modalTags = document.getElementById("modal-project-tags");
  const modalFeatures = document.getElementById("modal-project-features");
  const modalClient = document.getElementById("modal-project-client");
  const modalTimeline = document.getElementById("modal-project-timeline");
  const modalMediaWrap = document.getElementById("modal-media-wrapper");

  if (!modal) return;

  modalCategory.textContent = project.categoryName;
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.fullDesc;
  modalClient.textContent = project.client;
  modalTimeline.textContent = project.timeline;

  modalTags.innerHTML = project.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
  modalFeatures.innerHTML = project.features.map(f => `
    <li>
      <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>${f}</span>
    </li>
  `).join('');

  // Handle Gallery Media vs Tech Header
  if (modalMediaWrap) {
    if (project.images && project.images.length > 0) {
      const isDesktop = project.displayType === "desktop";
      const frameHtml = isDesktop ? `
        <div class="modal-desktop-mockup">
          <div class="window-topbar">
            <span class="window-topbar-dot red"></span>
            <span class="window-topbar-dot yellow"></span>
            <span class="window-topbar-dot green"></span>
            <span class="window-topbar-title">Indus Medicare - Hospital Management System</span>
          </div>
          <img id="active-gallery-image" src="${project.images[0].url}" alt="${project.images[0].caption}" />
        </div>
      ` : `
        <div class="modal-mobile-mockup">
          <img id="active-gallery-image" src="${project.images[0].url}" alt="${project.images[0].caption}" />
        </div>
      `;

      modalMediaWrap.innerHTML = `
        <div class="modal-gallery-container">
          <div class="modal-screen-display">
            <button class="gallery-nav-arrow gallery-nav-prev" onclick="prevModalImage()" aria-label="Previous screenshot">‹</button>
            ${frameHtml}
            <button class="gallery-nav-arrow gallery-nav-next" onclick="nextModalImage()" aria-label="Next screenshot">›</button>
          </div>
          <div class="modal-gallery-caption" id="active-gallery-caption">
            ${project.images[0].caption}
          </div>
          <div class="modal-thumbnails-strip">
            ${project.images.map((img, idx) => `
              <button class="modal-thumb-btn ${isDesktop ? 'thumb-desktop' : ''} ${idx === 0 ? 'active' : ''}" onclick="selectModalImage(${idx})">
                <img src="${img.url}" alt="Thumbnail ${idx + 1}" />
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      modalMediaWrap.innerHTML = `
        <div class="modal-tech-banner" style="background: linear-gradient(135deg, ${project.accentColor || 'rgba(255,255,255,0.05)'} 0%, rgba(10, 13, 22, 0.98) 100%);">
          <div class="tech-banner-icon">${project.icon || '📱'}</div>
          <div>
            <span class="tech-header-badge">${project.featuredBadge || 'Verified Production Code'}</span>
            <h3 style="font-size: 1.4rem; color: #fff; margin-top: 6px;">${project.title}</h3>
          </div>
        </div>
      `;
    }
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Modal Gallery Navigation
window.selectModalImage = function(index) {
  if (!currentModalProject || !currentModalProject.images) return;
  currentImageIndex = index;
  updateModalGalleryDisplay();
};

window.nextModalImage = function() {
  if (!currentModalProject || !currentModalProject.images) return;
  currentImageIndex = (currentImageIndex + 1) % currentModalProject.images.length;
  updateModalGalleryDisplay();
};

window.prevModalImage = function() {
  if (!currentModalProject || !currentModalProject.images) return;
  currentImageIndex = (currentImageIndex - 1 + currentModalProject.images.length) % currentModalProject.images.length;
  updateModalGalleryDisplay();
};

function updateModalGalleryDisplay() {
  const activeImg = document.getElementById("active-gallery-image");
  const captionEl = document.getElementById("active-gallery-caption");
  const thumbBtns = document.querySelectorAll(".modal-thumb-btn");

  if (!currentModalProject || !currentModalProject.images[currentImageIndex]) return;
  const currentImgObj = currentModalProject.images[currentImageIndex];

  if (activeImg) {
    activeImg.style.opacity = "0.3";
    setTimeout(() => {
      activeImg.src = currentImgObj.url;
      activeImg.alt = currentImgObj.caption;
      activeImg.style.opacity = "1";
    }, 150);
  }

  if (captionEl) {
    captionEl.textContent = currentImgObj.caption;
  }

  thumbBtns.forEach((btn, idx) => {
    if (idx === currentImageIndex) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Close Modal
function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Category Filter Click Handler
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });

  // Modal close handlers
  const modalBackdrop = document.getElementById("project-modal");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
    }
    if (e.key === "ArrowRight") {
      nextModalImage();
    }
    if (e.key === "ArrowLeft") {
      prevModalImage();
    }
  });
});
