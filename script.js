const copy = {
  tr: {
    navCareer: "Kariyer", navGarage: "Garage", navToolkit: "Araç Kutusu", navContact: "İletişim",
    session: "Sistem oturumu / İstanbul", hero1: "Gökhan", hero2: "Yıldırım",
    heroRole: "Systems engineer. Middleware operations. Automation-first mindset.",
    openTelemetry: "Telemetriyi aç", viewGarage: "Garage'i görüntüle ↓",
    careerLabel: "Kariyer", careerTitle1: "Yarış", careerTitle2: "pozisyonları",
    roleCurrent: "Integration Middleware Technologies",
    roleCloud: "Cloud Services Automation",
    roleSpecialist: "Enterprise Solution Specialist",
    garageLabel: "Garage", garageTitle1: "Geliştir.", garageTitle2: "Test et. Yayınla.",
    middlewareMonitor: "Middleware servisleri ve altyapı sinyallerini tek panelde izleyen Python projesi.", bsaChecker: "BladeLogic Server Automation agent durumlarını kontrol eden Python aracı.",
    yamlScanner: "Kullanımda olan YAML yapılarını tarayan ve tutarsızlıkları bulan scanner.", viewSource: "Kaynağı incele ↗",
    toolkitLabel: "Teknik setup", toolkitTitle1: "Teknik", toolkitTitle2: "yapı",
    contactLabel: "İletişim", contactTitle: "Hadi yarışalım.",
    contactText: "Altyapı, otomasyon veya yeni bir iş birliği hakkında LinkedIn üzerinden ulaşabilirsin.", backTop: "Yukarı ↑"
  },
  en: {
    navCareer: "Career", navGarage: "Garage", navToolkit: "Toolkit", navContact: "Contact",
    session: "Systems session / Istanbul", hero1: "Gökhan", hero2: "Yıldırım",
    heroRole: "Systems engineer. Middleware operations. Automation-first mindset.",
    openTelemetry: "Open telemetry", viewGarage: "View garage ↓",
    careerLabel: "Career", careerTitle1: "Race", careerTitle2: "positions",
    roleCurrent: "Integration Middleware Technologies",
    roleCloud: "Cloud Services Automation",
    roleSpecialist: "Enterprise Solution Specialist",
    garageLabel: "Garage", garageTitle1: "Build.", garageTitle2: "Test. Ship.",
    middlewareMonitor: "A Python project for monitoring middleware services and infrastructure signals from one dashboard.", bsaChecker: "A Python tool for checking BladeLogic Server Automation agent health.",
    yamlScanner: "A scanner for YAML usage and configuration inconsistencies.", viewSource: "View source ↗",
    toolkitLabel: "Technical setup", toolkitTitle1: "Technical", toolkitTitle2: "setup",
    contactLabel: "Contact", contactTitle: "Let's race.",
    contactText: "Reach out through LinkedIn to discuss infrastructure, automation or a new collaboration.", backTop: "Back to top ↑"
  }
};

let language = localStorage.getItem("portfolio-language") || "tr";

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.getElementById("languageSwitch").textContent = language === "tr" ? "EN" : "TR";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[language][key]) element.textContent = copy[language][key];
  });
  localStorage.setItem("portfolio-language", language);
  document.title = language === "tr"
    ? "Gökhan Yıldırım — Systems Engineer"
    : "Gökhan Yıldırım — Systems Engineer";
}

document.getElementById("languageSwitch").addEventListener("click", () => {
  applyLanguage(language === "tr" ? "en" : "tr");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
applyLanguage(language);

const cursorGlow = document.querySelector(".cursor-glow");
const stage = document.querySelector(".hero-machine");

if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });

  stage?.addEventListener("pointermove", (event) => {
    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.style.transform = `translate(${x * 7}px, ${y * 5}px)`;
  });

  stage?.addEventListener("pointerleave", () => {
    stage.style.transform = "";
  });
}
