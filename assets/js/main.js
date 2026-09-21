(() => {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = stored || (prefersDark ? "dark" : "light");

  const themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", root.dataset.theme);
    });
  }

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  const headings = [...document.querySelectorAll(".prose h2, .prose h3")];
  const toc = document.querySelector(".toc");
  const tocList = document.querySelector(".toc__list");
  if (toc && tocList && headings.length) {
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = heading.textContent
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-") || `section-${index}`;
      }
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      item.append(link);
      tocList.append(item);
    });
    toc.hidden = false;
  }

  const filter = document.querySelector("#note-filter");
  if (filter) {
    filter.addEventListener("input", () => {
      const q = filter.value.toLowerCase().trim();
      document.querySelectorAll(".note-list li").forEach((item) => {
        const hay = item.dataset.filter || item.textContent.toLowerCase();
        item.hidden = q.length > 0 && !hay.includes(q);
      });
    });
  }
})();
