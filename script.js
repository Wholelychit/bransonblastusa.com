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
  const guideLinks = [
    { href: '/branson-lakes-area-guide.html', text: 'Lake Guide' },
    { href: '/branson-west-visitor-guide.html', text: 'Branson West' },
    { href: '/lake-taneycomo-fishing-trip.html', text: 'Taneycomo Fishing' },
    { href: '/advertise-branson.html', text: 'Advertise' }
  ];

  guideLinks.forEach(({ href, text }) => addNavLink(href, text));

  const checklist = document.querySelector('.checklist ul');
  if (!checklist) return;

  const checklistLinks = [
    { href: '/branson-lakes-area-guide.html', text: 'Branson lakes area guide' },
    { href: '/branson-west-visitor-guide.html', text: 'Branson West visitor guide' },
    { href: '/lake-taneycomo-fishing-trip.html', text: 'Lake Taneycomo fishing trip guide' },
    { href: '/advertise-branson.html', text: 'Local business visibility page' }
  ];

  checklistLinks.reverse().forEach(({ href, text }) => {
    if (checklist.querySelector(`a[href="${href}"]`)) return;

    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    item.appendChild(link);
    checklist.insertBefore(item, checklist.children[1] || null);
  });
}

function addNavLink(href, text) {
  if (!siteNav || siteNav.querySelector(`a[href="${href}"]`)) return;

  const link = document.createElement('a');
  link.href = href;
  link.textContent = text;

  const contactLink = siteNav.querySelector('a[href="#contact"]');
  siteNav.insertBefore(link, contactLink || null);
}
