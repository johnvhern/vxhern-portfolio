document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

// * Logo switcher based on theme
const logoImg = document.getElementById('brand-logo');
const footerLogo = document.getElementById('footer-logo');

function updateLogo(theme) {
  if (theme === 'dark') {
    logoImg.src = 'imgs/logo/logo_dark.svg';
    footerLogo.src = 'imgs/logo/logo_dark.svg';
  } else {
    logoImg.src = 'imgs/logo/logo_light.svg';
    footerLogo.src = 'imgs/logo/logo_light.svg';
  }
}

// * Theme toggle button
const toggle = document.querySelectorAll('#themeToggle, #themeToggleDesktop');
const html = document.documentElement;

// * System preference theme detection
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Load saved theme or use system preference
const initialTheme = localStorage.getItem('theme') || getSystemTheme();
html.setAttribute('data-theme', initialTheme);

// * Set initial icon state for all toggle buttons
function updateToggleIcons(theme) {
  toggle.forEach(button => {
    if (theme === 'dark') {
      button.innerHTML = `<span class="icon is-small">
                              <i class="fa-regular fa-sun"></i>
                          </span>`;
    } else {
      button.innerHTML = `<span class="icon is-small">
                              <i class="fa-regular fa-moon"></i>
                          </span>`;
    }
  });
}

// * Initialize icons on page load
updateToggleIcons(initialTheme);

// * Update logo based on theme
updateLogo(initialTheme);


// * Add click listeners
toggle.forEach(button => {
  button.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    button.classList.add('rotating');

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateToggleIcons(newTheme);
    updateLogo(newTheme);

    setTimeout(() => {
      button.classList.remove('rotating');
    }, 50);
  });
});

// * Get Current Year for Footer
document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
