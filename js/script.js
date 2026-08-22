// PuraTag tanıtım sitesi — küçük etkileşim davranışları

document.addEventListener('DOMContentLoaded', () => {
  // Scroll'da görünüme giren elementleri belirginleştir
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => observer.observe(el));

  // Mobil menü aç/kapat
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      if (open) {
        links.style.cssText = `
          display:flex; flex-direction:column; position:absolute;
          top:72px; left:0; right:0; background:#F5F5F0;
          padding:20px 24px; gap:18px; border-bottom:1px solid #E8E5DD;
        `;
      } else {
        links.removeAttribute('style');
      }
    });

    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        links.removeAttribute('style');
      });
    });
  }
});
