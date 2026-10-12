const root = document.querySelector("#app");
const asset = (name) => `../Assets/Figma/Porto/${name}`;

const experiencePhotos = {
  teacher: ["teacher 1.png", "teacher 2.png", "teacher 3.png", "teacher 4.png", "teacher 5.png", "teacher 6.png", "teacher 7.png", "teacher 8.png"],
  worker: ["worker 1.png"],
  "production-staff": ["production 1.png", "production 2.png"],
  "content-creator": ["miejol 1.png", "miejol 2.png", "miejol 3.png", "miejol 4.png"],
  "brand-ambassador": ["macaronicuck 1.png", "macaronicuck 2.png", "macaronicuck 3.png", "macaronicuck 4.png"],
  "dpm-pens": ["BKI 1.png", "bki 2.png"]
};

const projectPhotos = {
  "smart-tumbler": ["smart tumbler.png"],
  "visual-novel-telaga-sarangan": ["story telling 1.png", "story telling 2.png"],
  "nutrition-for-the-future": ["animasi 2d 1.png", "animasi 2d 2.png", "animasi 2d 3.png", "animasi 2d 4.png"],
  "detector-telapak-tangan": ["pemrograman berbasis objek.png"],
  "waktu-jaga": ["animasi 3d 1.png", "animasi 3d 2.png", "animasi 3d 3.png", "animasi 3d 4.png", "animasi 3d 5.png", "animasi 3d 6.png", "animasi 3d 7.png", "animasi 3d 8.png"],
  "sajuti-melik": ["Mapping 1.png", "mapping 2.png", "mapping 3.png", "mapping 4.png"],
  "ar-virtucare": ["ar vr.png"],
  "escape-sby": ["escapesby 1.png", "escapesby 2.png", "escapesby 3.png", "escapesby 4.png", "escapesby 5.png", "escapesby 6.png", "escapesby 7.png", "escapesby 8.png", "escapesby 9.png"],
  "web-portfolio": ["ui ux diri 1.png", "ui ux diri 2.png", "ui ux diri 3.png", "ui ux diri 4.png"],
  "mr-galaxy-mall": ["mall adventure 1.png", "mall adventure 2.png"],
  "hahahihi-ecommerce": ["teknologi web 1.png", "teknologi web 2.png", "teknologi web 3.png", "teknologi web 4.png", "teknologi web 5.png"],
  "bite-hub": ["pemrograman mobile 1.png", "pemrograman mobile 2.png", "pemrograman mobile 3.png", "pemrograman mobile 4.png"],
  "jaringan-multimedia": ["jaringan multimedia 1.png", "jaringan multimedia 2.png", "jaringan multimedia 3.png", "undertone_WARM_1781653740539 1.png"]
};

const archivePhotos = {
  berkasir: ["berkasir 1.jpg", "berkasir 2.jpg", "berkasir 3.jpg", "berkasir 4.jpg", "berkasir 5.jpg", "berkasir 6.jpg", "berkasir 7.png", "berkasir 8.jpg"],
  "pg-697": ["drama arena.png"],
  "pg-698": ["pg 697.png", "pg 697 (2).png"],
  pionering: ["pg gretasha.png", "pg gretasha (2).png", "pg gretasha (3).png", "pg gretasha (4).png", "pg gretasha (5).png"],
  "jaringan-multimedia": ["boy n scout.png", "boy n scout (2).png", "boy n scout (3).png", "boy n scout (4).png"],
  mr: ["pioneering.png", "pioneering (2).png"]
};

const originalExperienceAsset = (name) => `Asset Asli/Experience/${encodeURIComponent(name)}`;
const originalProjectAsset = (name) => `Asset Asli/College%20Project/${encodeURIComponent(name)}`;
const originalArchiveAsset = (name) => `Asset Asli/Archive/${encodeURIComponent(name)}`;

function getArticleContent(templateId, slug) {
  const template = document.getElementById(templateId);
  const article = template?.content.querySelector(`[data-article="${slug}"]`);
  if (!article) throw new Error(`Missing article content for "${slug}" in #${templateId}`);
  return article.innerHTML;
}

function createPhotoGallery(files, getAssetPath, altPrefix) {
  const gallery = document.createElement("div");
  gallery.className = "portfolio-photo-gallery";
  gallery.setAttribute("aria-label", `Dokumentasi ${altPrefix}`);
  gallery.innerHTML = files.map((file, index) => {
    const imagePath = getAssetPath(file);
    const alt = `${altPrefix} - dokumentasi ${index + 1}`;
    return `<figure><a href="${imagePath}" target="_blank" rel="noopener noreferrer"><img src="${imagePath}" alt="${alt}" loading="lazy" decoding="async"></a><figcaption>${alt}</figcaption></figure>`;
  }).join("");
  return gallery;
}

const experiences = [
  ["teacher", "Teacher", "Oemar Diyan Boarding School"],
  ["worker", "Worker", "CV. Gajah Mada Plastik"],
  ["production-staff", "Production Staff", "Incipono Dimsum"],
  ["content-creator", "Content Creator", "Miejol Indonesia"],
  ["brand-ambassador", "Brand Ambassador", "Macaronicuck"],
  ["dpm-pens", "Badan Komunikasi dan Informasi", "Dewan Perwakilan Mahasiswa PENS"]
].map(([slug, role, organization]) => ({
  slug,
  role,
  organization,
  photos: experiencePhotos[slug] || []
}));

const education = [
  ["education-01.jpg", "Tk. Al Amin Jember", "2010 - 2011"],
  ["education-02.png", "SD Al Baitul Amien Jember", "2011 - 2017"],
  ["education-03.jpg", "PM Darussalam Gontor 1", "2017 - 2022"],
  ["education-04.png", "PM Darul Ma'rifat Gontor Kampus 3", "2022 - 2023"],
  ["education-05.png", "Politeknik Elektronika Negeri Surabaya", "2024 - Sekarang"]
];

const projects = [
  ["smart-tumbler", "01", "Manajemen Proyek", "Smart Tumbler", "Manpro.png", "Proyek manajemen dan pengembangan Smart Tumbler."],
  ["visual-novel-telaga-sarangan", "02", "Storytelling Interaktif", "Visual Novel Asal Usul Telaga Sarangan", "Visnov.png", "Proyek cerita interaktif."],
  ["nutrition-for-the-future", "03", "Animasi 2D", "Nutrition For The Future", "Animasi 2D.png", "Proyek animasi dua dimensi."],
  ["detector-telapak-tangan", "04", "Teknologi Video", "Aplikasi Detector Telapak Tangan", "PBO.png", "Aplikasi deteksi telapak tangan."],
  ["waktu-jaga", "05", "Animasi 3D", "Waktu Jaga", "Animasi 3D.png", "Proyek animasi tiga dimensi."],
  ["sajuti-melik", "06", "Workshop Audio Visual Media", "Sajuti Melik, Hasanuddin, Sejarah PENS", "PENS.png", "Proyek audio visual."],
  ["ar-virtucare", "07", "Teknologi AR / VR", "AR VirtuCare", "VR.png", "Proyek teknologi augmented dan virtual reality."],
  ["escape-sby", "08", "Design UI / UX", "Prototype Web EscapeSBY", "UI UX EscapeSBY.png", "Desain pengalaman dan antarmuka web."],
  ["web-portfolio", "09", "Design UI / UX", "Prototype Web Portofolio", "UI UX Portofolio.png", "Desain web portofolio."],
  ["mr-galaxy-mall", "10", "Mixed Reality", "Mall Adventure", "MR.png", "Game multiplayer berbasis lokasi nyata di Galaxy Mall 3 Surabaya."],
  ["hahahihi-ecommerce", "11", "Teknologi Web", "Hahahihi E-Commerce", "TekWeb.png", "Proyek aplikasi e-commerce berbasis web."],
  ["bite-hub", "12", "Pemrograman Mobile", "Bite Hub", "Pemrograman Mobile.png", "Proyek aplikasi mobile."],
  ["jaringan-multimedia", "13", "Multimedia", "Jaringan Multimedia", "Jaringan Multimedia.png", "Eksplorasi jaringan multimedia."]
].map(([slug, number, category, title, image, description]) => ({
  slug,
  number,
  category,
  title,
  image,
  description,
  photos: projectPhotos[slug] || [],
  content: getArticleContent("project-articles", slug)
}));

const archive = [...document.querySelector("#archive-content").content.querySelectorAll(".archive-card")]
  .map((card, index) => {
    const slug = card.dataset.slug;
    const photos = archivePhotos[slug] || [];

    return {
      slug,
      number: String(index + 1).padStart(2, "0"),
      category: card.querySelector(".project-category").textContent,
      title: card.querySelector("h2").textContent,
      photos,
      description: card.querySelector("p").textContent,
      content: getArticleContent("archive-articles", slug)
    };
  });

function brand() {
  return `<div class="brand"><span class="brand-mark" role="img" aria-label="Logo"></span><p class="brand-name">Ariq Rifky Ghiffari</p></div>`;
}

function header(title, back = true, backPage = "home") {
  const backLabels = { projects: "College Project", archive: "Archive", experience: "Experiences", education: "riwayat pendidikan" };
  return `${back ? `<button class="back" data-page="${backPage}" type="button" aria-label="Kembali ke ${backLabels[backPage] || "beranda"}">‹</button>` : ""}${brand()}${title ? `<h1 class="page-title">${title}</h1>` : ""}`;
}

function renderHome() {
  root.innerHTML = `<section class="landing fade-in">${header("", false)}<h1 class="landing-title">Get to know <span>about myself</span> !</h1><nav class="menu" aria-label="Portfolio navigation"><section class="menu-group"><h2>I. Profile</h2><a class="menu-link" href="#about" data-page="about"><span>01.1 about me</span><span>01</span></a><a class="menu-link" href="#education" data-page="education"><span>01.2 educational history</span><span>02</span></a><a class="menu-link" href="#experience" data-page="experience"><span>01.3 experience</span><span>03</span></a></section><section class="menu-group"><h2>II. Project</h2><a class="menu-link" href="#projects" data-page="projects"><span>02.1 college project</span><span>04</span></a><a class="menu-link" href="#archive" data-page="archive"><span>02.2 archive</span><span>05</span></a></section><section class="menu-group"><h2>III. Extras</h2><a class="menu-link" href="#cv" data-page="cv"><span>03.1 curriculum vitae</span><span>06</span></a></section></nav><a class="landing-contact" href="#contact" data-page="contact">Contact Us</a></section>`;
}

// The editable About Me copy lives in the <template> in index.html.
function renderAbout() {
  const content = document.querySelector("#about-me-content").content.cloneNode(true);
  root.replaceChildren();
  root.insertAdjacentHTML("afterbegin", `<section class="fade-in">${header("about me")}</section>`);
  root.querySelector("section").append(content);
}

function renderExperience() {
  root.innerHTML = `<section class="fade-in">${header("Experiences")}<div class="experience-grid">${experiences.map(({ slug, photos, role, organization }, index) => `<a class="experience-card" href="#experience/${slug}" data-page="experience-${slug}">${photos.length ? `<img src="${originalExperienceAsset(photos[0])}" alt="${role} at ${organization}" loading="lazy" decoding="async">` : `<div class="experience-card-placeholder" aria-hidden="true">DPM</div>`}<div class="experience-copy"><p class="experience-number">${String(index + 1).padStart(2, "0")}</p><h2>${role}</h2><p class="experience-organization">${organization}</p><span class="experience-open">Lihat pengalaman ↗</span></div></a>`).join("")}</div></section>`;
}

function renderExperienceDetail(experience) {
  const content = document.querySelector("#experience-details").content.cloneNode(true);
  const detail = content.querySelector(`[data-experience="${experience.slug}"]`);
  if (!detail) throw new Error(`Missing experience detail for "${experience.slug}"`);
  const existingPhoto = detail.querySelector(".education-story-photo");
  if (existingPhoto && experience.photos.length) {
    existingPhoto.replaceWith(createPhotoGallery(experience.photos, originalExperienceAsset, experience.role));
  } else if (experience.photos.length) {
    detail.querySelector(".tk-story").append(
      createPhotoGallery(experience.photos, originalExperienceAsset, experience.role)
    );
  } else {
    existingPhoto?.remove();
  }
  const screen = document.createElement("section");
  screen.className = "fade-in";
  screen.innerHTML = header(detail.querySelector("[data-experience-title]").textContent, true, "experience");
  screen.append(detail);
  root.replaceChildren(screen);
}

function renderEducation() {
  renderTemplatePage("education-content", "educational history");
}

function renderEducationDetail(school) {
  const content = document.querySelector("#education-details").content.cloneNode(true);
  const detail = content.querySelector(`[data-school="${school}"]`);
  const screen = document.createElement("section");
  screen.className = "fade-in";
  screen.innerHTML = header(detail.querySelector("h2").textContent, true, "education");
  screen.append(detail);
  root.replaceChildren(screen);
}

function renderProjects() {
  const content = document.querySelector("#projects-content").content.cloneNode(true);
  content.querySelectorAll(".project-card").forEach((card) => {
    const slug = card.getAttribute("href").slice("#project/".length);
    const photos = projectPhotos[slug] || [];
    const image = card.querySelector(".project-thumb");
    if (!photos.length) {
      image.remove();
      return;
    }
    image.src = originalProjectAsset(photos[0]);
    image.alt = `${card.querySelector("h2").textContent} - dokumentasi proyek`;
  });
  const screen = document.createElement("section");
  screen.className = "fade-in";
  screen.innerHTML = header("College Project");
  screen.append(content);
  root.replaceChildren(screen);
}

function renderArchive() {
  root.innerHTML = `<section class="fade-in">${header("Archive")}<div class="content archive-grid">${archive.map((item) => `<a class="archive-card" href="#archive/${item.slug}" data-page="archive-${item.slug}">${item.photos.length ? `<img src="${originalArchiveAsset(item.photos[0])}" alt="${item.title}" loading="lazy" decoding="async">` : `<div class="archive-card-placeholder" aria-label="Foto dokumentasi belum tersedia">Foto belum tersedia</div>`}<span class="project-number">${item.number}</span><span class="project-category">${item.category}</span><h2>${item.title}</h2><p>${item.description}</p></a>`).join("")}</div></section>`;
}

function renderTemplatePage(templateId, title) {
  const content = document.getElementById(templateId).content.cloneNode(true);
  const screen = document.createElement("section");
  screen.className = "fade-in";
  screen.innerHTML = header(title);
  screen.append(content);
  root.replaceChildren(screen);
}

function renderArticleDetail(item, section) {
  const isProject = section === "project";
  const backPage = isProject ? "projects" : "archive";
  const backLabel = isProject ? "semua proyek" : "Archive";
  const projectContent = item.content || "";
  const projectGallery = item.photos.length
    ? createPhotoGallery(item.photos, isProject ? originalProjectAsset : originalArchiveAsset, item.title).outerHTML
    : "";
  const screen = document.createElement("section");
  screen.className = "fade-in";
  screen.innerHTML = header(item.title, true, backPage);

  const article = document.createElement("article");
  article.className = "content education-detail education-detail-centered experience-detail portfolio-article";
  article.innerHTML = `<div class="tk-story">${projectContent}${projectGallery}</div><a class="text-link" href="#${backPage}" data-page="${backPage}">← Kembali ke ${backLabel}</a>`;
  screen.append(article);
  root.replaceChildren(screen);
}

function renderProjectDetail(project) {
  renderArticleDetail(project, "project");
}

function renderArchiveDetail(item) {
  renderArticleDetail(item, "archive");
}

function renderContact() {
  const contacts = [
    ["WA", "+62 877-4086-8527", "https://wa.me/6287740868527"],
    ["IG", "@Pak.RW_", "https://instagram.com/pak.rw_"],
    ["in", "Ariq Rifky Ghiffari", "https://www.linkedin.com/in/ariq-rifky-114516353/"],
    ["X", "Pak.RW_", "https://x.com/masulcoor"],
    ["TT", "Arikpengemakantempe.", "https://https://www.tiktok.com/@arikpengenmakantempe"]
  ];
  root.innerHTML = `<section class="fade-in">${header("Contact Us")}<div class="contact-list">${contacts.map(([icon, label, href]) => `<a class="contact-item" href="${href}" target="_blank" rel="noopener noreferrer"><span class="contact-icon" aria-hidden="true">${icon}</span><span>${label}</span><span class="contact-arrow" aria-hidden="true">↗</span></a>`).join("")}</div></section>`;
}

function renderCv() {
  root.innerHTML = `<section class="fade-in">${header("Curriculum Vitae")}<article class="content cv-content"><header class="cv-heading"><img src="${asset("image.png")}" alt="Ariq Rifky Ghiffari"><div><p class="eyebrow">CURRICULUM VITAE</p><h2>Ariq Rifky Ghiffari</h2><p>Kreator visual · Dekorator panggung · Content creator</p></div></header><section class="cv-section"><h3>Profil</h3><p>Kreator visual dengan pengalaman di bidang dekorasi panggung, komunikasi visual, dan content creation. Dikenal memiliki kedisiplinan, adaptabilitas, serta ketajaman estetika.</p></section><section class="cv-section"><h3>Pengalaman</h3><ul>${experiences.map(({ role, organization }) => `<li><strong>${role}</strong><span>${organization}</span></li>`).join("")}</ul></section><section class="cv-section"><h3>Pendidikan</h3><ul>${education.map(([, school, years]) => `<li><strong>${school}</strong><span>${years}</span></li>`).join("")}</ul></section><section class="cv-section"><h3>Proyek pilihan</h3><ul>${projects.slice(0, 5).map((project) => `<li><strong>${project.title}</strong><span>${project.category}</span></li>`).join("")}</ul></section><a class="text-link" href="#contact" data-page="contact">Hubungi saya ↗</a></article></section>`;
}

const pages = {
  home: renderHome,
  about: renderAbout,
  education: renderEducation,
  "education-tk": () => renderEducationDetail("tk"),
  "education-sd": () => renderEducationDetail("sd"),
  "education-gontor-1": () => renderEducationDetail("gontor-1"),
  "education-gontor-3": () => renderEducationDetail("gontor-3"),
  "education-pens": () => renderEducationDetail("pens"),
  experience: renderExperience,
  ...Object.fromEntries(experiences.map((experience) => [`experience-${experience.slug}`, () => renderExperienceDetail(experience)])),
  projects: renderProjects,
  archive: renderArchive,
  contact: renderContact,
  cv: renderCv,
  ...Object.fromEntries(projects.map((project) => [`project-${project.slug}`, () => renderProjectDetail(project)])),
  ...Object.fromEntries(archive.map((item) => [`archive-${item.slug}`, () => renderArchiveDetail(item)]))
};

const introScreen = document.querySelector("#intro-screen");
const startButton = document.querySelector("#start-portfolio");
const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") document.body.classList.add("theme-light");

function updateThemeToggle() {
  const isLight = document.body.classList.contains("theme-light");
  themeToggle.setAttribute("aria-label", `Ganti ke mode ${isLight ? "gelap" : "terang"}`);
  themeToggle.innerHTML = `<span aria-hidden="true">${isLight ? "◐" : "☼"}</span> Mode ${isLight ? "gelap" : "terang"}`;
}

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("theme-light");
  localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
  updateThemeToggle();
});

updateThemeToggle();
root.inert = true;
root.setAttribute("aria-hidden", "true");
document.body.classList.add("intro-active");
startButton.addEventListener("click", () => {
  introScreen.classList.add("is-opening");
  startButton.disabled = true;
  const transitionDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1500;
  window.setTimeout(() => {
    root.inert = false;
    root.removeAttribute("aria-hidden");
    document.body.classList.remove("intro-active");
    introScreen.remove();
    root.querySelector("a, button")?.focus({ preventScroll: true });
  }, transitionDuration);
});

function render(page = "home") {
  (pages[page] || renderHome)();
  document.querySelectorAll("[data-page]").forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    const next = link.dataset.page;
    const route = next.startsWith("project-") ? `project/${next.slice(8)}` : next.startsWith("education-") ? `education/${next.slice(10)}` : next.startsWith("experience-") ? `experience/${next.slice(11)}` : next.startsWith("archive-") ? `archive/${next.slice(8)}` : next === "home" ? "" : next;
    history.pushState({ page: next }, "", `#${route}`);
    render(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));
}

function currentPage() {
  const route = location.hash.slice(1);
  if (route.startsWith("project/")) return `project-${route.slice(8)}`;
  if (route.startsWith("education/")) return `education-${route.slice("education/".length)}`;
  if (route.startsWith("experience/")) return `experience-${route.slice("experience/".length)}`;
  if (route.startsWith("archive/")) return `archive-${route.slice("archive/".length)}`;
  return route || "home";
}

window.addEventListener("popstate", () => render(currentPage()));
render(currentPage());
