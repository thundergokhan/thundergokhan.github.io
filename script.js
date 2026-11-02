const copy = {
  tr: {
    navExperience: "Deneyim", navProjects: "Projeler", navToolkit: "Araçlar", navContact: "İletişim",
    available: "İstanbul · Aktif", heroLine1: "Sistemleri", heroLine2: "hızlı", heroLine3: "ve", heroLine4: "güvenilir", heroLine5: "çalıştırırım.",
    heroIntro: "Middleware platform operations, secure file transfer ve infrastructure automation alanlarında çalışan bir systems engineer.",
    viewCareer: "Kariyeri incele", viewProjects: "Projeler ↓", mode: "MOD", status: "DURUM", uptime: "UPTIME", focus: "ODAK",
    career: "KARİYER", experienceTitle: "Operasyon pitinden üretime.", experienceNote: "Kritik altyapı, günlük operasyonlar ve kalıcı çözümler.",
    roleCurrent: "Integration Middleware Technologies", currentRole: "Garanti BBVA Technology bünyesinde BilgeAdam Technologies üzerinden middleware platform operations, automation ve secure file transfer operasyonları.",
    roleCloud: "Cloud Services Automation", cloudRole: "GT-ORBIT üzerinde Windows ve Linux sunucu provisioning; SCOM, Dynatrace, Instana ve TrueSight operasyonları; Python otomasyonları ve Power BI raporları.",
    roleSpecialist: "Enterprise Solution Specialist", specialistRole: "ITSM süreçleri, L1/L2 destek, RPA otomasyonları ve ETİ, DeFacto, Digiturk ile KOÇ projelerinde operasyon ve SLA yönetimi.",
    projectsLabel: "PROJELER", projectsTitle: "Garage'da geliştirilenler.", projectsNote: "Kişisel repo sahipliği ve gerçek kullanım odaklı araçlar.",
    middlewareMonitor: "Middleware servisleri ve altyapı sinyallerini tek panelde izleyen Python projesi.", bsaChecker: "BladeLogic Server Automation agent durumlarını kontrol eden Python aracı.",
    yamlScanner: "Kullanımda olan YAML yapılarını tarayan ve tutarsızlıkları bulan scanner.", viewSource: "Kaynağı incele ↗",
    toolkitLabel: "ARAÇ KUTUSU", toolkitTitle: "Takımın ekipman kutusu.", contactLabel: "İLETİŞİM", contactTitle1: "Sıradaki hedef", contactTitle2: "birlikte.",
    contactText: "Altyapı, otomasyon veya yeni bir iş birliği hakkında LinkedIn üzerinden ulaşabilirsin.", backTop: "Yukarı ↑"
  },
  en: {
    navExperience: "Experience", navProjects: "Projects", navToolkit: "Toolkit", navContact: "Contact",
    available: "Istanbul · Available", heroLine1: "I keep systems", heroLine2: "fast", heroLine3: "and", heroLine4: "reliable", heroLine5: "under pressure.",
    heroIntro: "A systems engineer focused on middleware platform operations, secure file transfer, and infrastructure automation.",
    viewCareer: "View career", viewProjects: "Projects ↓", mode: "MODE", status: "STATUS", uptime: "UPTIME", focus: "FOCUS",
    career: "CAREER", experienceTitle: "From operations pit to production.", experienceNote: "Critical infrastructure, daily operations, and permanent fixes.",
    roleCurrent: "Integration Middleware Technologies", currentRole: "Middleware platform operations, automation and secure file transfer at Garanti BBVA Technology through BilgeAdam Technologies.",
    roleCloud: "Cloud Services Automation", cloudRole: "Windows and Linux server provisioning on GT-ORBIT; SCOM, Dynatrace, Instana and TrueSight operations; Python automation and Power BI reporting.",
    roleSpecialist: "Enterprise Solution Specialist", specialistRole: "ITSM processes, L1/L2 support, RPA automation, and operations and SLA management across ETİ, DeFacto, Digiturk and KOÇ projects.",
    projectsLabel: "PROJECTS", projectsTitle: "Built in the garage.", projectsNote: "Personal repositories focused on practical, real-world tools.",
    middlewareMonitor: "A Python project for monitoring middleware services and infrastructure signals from one dashboard.", bsaChecker: "A Python tool for checking BladeLogic Server Automation agent health.",
    yamlScanner: "A scanner for YAML usage and configuration inconsistencies.", viewSource: "View source ↗",
    toolkitLabel: "TECH STACK", toolkitTitle: "The team's equipment box.", contactLabel: "CONTACT", contactTitle1: "The next target", contactTitle2: "together.",
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
const stage = document.querySelector(".car-stage");
const trackMap = document.querySelector(".track-map");

if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });

  stage.addEventListener("pointermove", (event) => {
    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    trackMap.style.transform = `scale(.88) translate(${x * -12}px, ${y * -8}px)`;
  });

  stage.addEventListener("pointerleave", () => {
    trackMap.style.transform = "scale(.88)";
  });
}
