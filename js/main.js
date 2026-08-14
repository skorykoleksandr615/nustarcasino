const OFFER_URL = "https://dominatus830.online/YcfyZnVG?sub_id_1=nustarcasino.casino";
document.addEventListener("DOMContentLoaded", () => { bindOfferLinks(); setupNav(); setupFilters(); });
function bindOfferLinks() {
  document.querySelectorAll(".js-offer").forEach((el) => {
    if (el.tagName === "A") { el.setAttribute("href", OFFER_URL); el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener noreferrer sponsored"); return; }
    el.addEventListener("click", (e) => { e.preventDefault(); window.location.href = OFFER_URL; });
  });
}
function setupNav() {
  const toggle = document.querySelector("[data-menu-toggle]"); const drawer = document.querySelector("[data-drawer]"); const header = document.querySelector("[data-header]");
  if (toggle && drawer) {
    toggle.addEventListener("click", () => { const open = drawer.hasAttribute("hidden"); if (open) drawer.removeAttribute("hidden"); else drawer.setAttribute("hidden", ""); toggle.setAttribute("aria-expanded", String(open)); });
    drawer.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { drawer.setAttribute("hidden", ""); toggle.setAttribute("aria-expanded", "false"); }));
  }
  if (!header) return; const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 12); onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
}
function setupFilters() {
  document.querySelectorAll("[data-filter]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const group = chip.getAttribute("data-filter-group") || "default"; const value = chip.getAttribute("data-filter") || "all";
      document.querySelectorAll(`[data-filter][data-filter-group="${group}"]`).forEach((item) => item.classList.toggle("is-on", item === chip));
      document.querySelectorAll(`[data-filter-target="${group}"]`).forEach((item) => { const cat = item.getAttribute("data-cat") || "all"; item.classList.toggle("is-hidden", value !== "all" && cat !== value); });
    });
  });
}