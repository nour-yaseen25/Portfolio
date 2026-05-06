document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("modeSwitch");
  const toastEl = document.getElementById("welcomeToast");
  const yearEl = document.getElementById("currentYear");
  const navCollapseEl = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");

  const applyTheme = (theme) => {
    root.setAttribute("data-bs-theme", theme);

    if (!themeToggle) {
      return;
    }

    const icon = themeToggle.querySelector("i");
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  };

  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = root.getAttribute("data-bs-theme") || "light";
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      localStorage.setItem("theme", nextTheme);
    });
  }

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (toastEl && !localStorage.getItem("portfolio-visited")) {
    const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2800 });
    toast.show();
    localStorage.setItem("portfolio-visited", "true");
  }

  if (navCollapseEl) {
    const collapseInstance = bootstrap.Collapse.getOrCreateInstance(navCollapseEl, { toggle: false });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992 && navCollapseEl.classList.contains("show")) {
          collapseInstance.hide();
        }
      });
    });
  }

  if (sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          navLinks.forEach((link) => {
            const target = document.querySelector(link.getAttribute("href"));
            const isActive = target === entry.target;
            link.classList.toggle("active", isActive);
            if (isActive) {
              link.setAttribute("aria-current", "page");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }
});

function smartMail(event) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (!isMobile) {
    event.preventDefault();
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=nooryaseen510@gmail.com&su=Hello%20Nour!&body=I%20would%20like%20to%20connect%20with%20you.",
      "_blank",
      "noopener,noreferrer"
    );
  }
}

