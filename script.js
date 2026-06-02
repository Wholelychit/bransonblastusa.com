const menuButton = document.getElementById('menuButton');
const siteNav = document.getElementById('siteNav');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

addGuideLinks();

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menu';
    }
  });
}

function addGuideLinks() {
  addNavLink('/branson-lakes-area-guide.html', 'Lake Guide');

  const checklist = document.querySelector('.checklist ul');
  if (!checklist || checklist.querySelector('a[href="/branson-lakes-area-guide.html"]')) return;

  const item = document.createElement('li');
  const link = document.createElement('a');
  link.href = '/branson-lakes-area-guide.html';
  link.textContent = 'Branson lakes area guide';
  item.appendChild(link);
  checklist.insertBefore(item, checklist.children[1] || null);
}

function addNavLink(href, text) {
  if (!siteNav || siteNav.querySelector(`a[href="${href}"]`)) return;

  const link = document.createElement('a');
  link.href = href;
  link.textContent = text;

  const contactLink = siteNav.querySelector('a[href="#contact"]');
  siteNav.insertBefore(link, contactLink || null);
}
