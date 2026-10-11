const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}
document.querySelectorAll("[data-topic]").forEach(link => link.addEventListener("click", () => {
  const topic = document.querySelector("#topic");
  if (topic) topic.value = link.dataset.topic;
}));
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(contactForm);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const topic = String(form.get("topic") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !email || !topic || !message || !document.querySelector("#consent").checked) return;
    const subject = encodeURIComponent("Mattu Bridge website enquiry: " + topic);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nEnquiry type: " + topic + "\n\nMessage:\n" + message);
    const status = document.querySelector("#form-status");
    status.textContent = "Your email app should open with your enquiry. Please review and send the message there.";
    window.location.href = "mailto:info@matobridge.de?subject=" + subject + "&body=" + body;
  });
}
