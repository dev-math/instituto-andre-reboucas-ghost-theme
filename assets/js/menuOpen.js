export default function menuOpen() {
  const primaryNav = document.querySelector("#mobile-menu-2");
  const navToggle = document.querySelector("#mobile-nav-toggle");
  const closeIcon = document.querySelector("#menu-close-icon");
  const openIcon = document.querySelector("#menu-open-icon");

  navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
      primaryNav.classList.remove("hidden");
      closeIcon.classList.remove("hidden");
      openIcon.classList.add("hidden");
    } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
      primaryNav.classList.add("hidden");
      closeIcon.classList.add("hidden");
      openIcon.classList.remove("hidden");
    }
  });
}
