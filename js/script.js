/* Save this as js/script.js */
// Init AOS
AOS.init({duration:700, once:true});

// Set year
document.addEventListener('DOMContentLoaded', ()=>{
  const year = document.getElementById('year'); if(year) year.textContent = new Date().getFullYear();

  // Projects (replace with your real project data / images)
  const projects = [
   // {title:'Brahma HelpLine Telegram Bot', desc:'Python & Telegram API', img:'images/proj1.jpg', url:'https://github.com/anz-thomas/brahma-helpline'},
  //  {title:'GitAutoPusher', desc:'Bash script to auto push repos', img:'images/proj2.jpg', url:'https://github.com/anz-thomas/gitautopusher'},
  //  {title:'Object Tracker (Android)', desc:'Auto pan/zoom camera object tracking', img:'images/proj3.jpg', url:'#'}
    {title:'Ai based service hub', desc:'', img:'images/proj3.jpg', url:'#'},
    {title:'Smartixx', desc:'A online concession ticked booking system ', img:'images/proj3.jpg', url:'#'}

  ];

  const grid = document.getElementById('projGrid');
  if(grid){
    grid.innerHTML = projects.map(p => `\
      <a class="proj-card" href="${p.url}" target="_blank" rel="noopener">\
        <div class="thumb">${p.img?`<img src="${p.img}" alt="${p.title}">`:''}</div>\
        <div class="p-body">\
          <h4>${p.title}</h4>\
          <p class="muted">${p.desc}</p>\
          <div class="p-tags"><span class="tag">github</span><span class="tag">demo</span></div>\
        </div>\
      </a>\
    `).join('');
  }

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-links a');
  hamburger?.addEventListener('click', ()=>{
    if(mobileMenu.style.display === 'block'){ mobileMenu.style.display='none'; return; }
    mobileMenu.innerHTML = Array.from(navLinks).map(a=>`<a href="${a.getAttribute('href')}" onclick="document.getElementById('mobileMenu').style.display='none'">${a.textContent}</a>`).join('');
    mobileMenu.style.display='block';
  });

  // Smooth scroll for buttons with data-scroll
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', (e)=>{
      const sel = btn.getAttribute('data-scroll');
      const el = document.querySelector(sel);
      if(el) el.scrollIntoView({behavior:'smooth'});
    });
  });

  // CV button
  document.getElementById('cvBtn')?.addEventListener('click', ()=>{
    window.location.href = 'resume.pdf';
  });

  // Active nav highlight on scroll
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', ()=>{
    let fromTop = window.scrollY + 120;
    sections.forEach(sec => {
      const id = sec.id; if(!id) return;
      const top = sec.offsetTop; const height = sec.offsetHeight;
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if(fromTop >= top && fromTop < top + height){
        document.querySelectorAll('.nav-links a').forEach(n=>n.classList.remove('active'));
        link?.classList.add('active');
      }
    });
  });

});

/* End of js */
