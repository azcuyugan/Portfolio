// Menu and theme elements
var menuToggle = document.getElementById('menu-toggle');
var navLinks = document.getElementById('nav-links');
var themeToggle = document.getElementById('theme-toggle');
var root = document.documentElement;

// Show or hide the mobile menu
function toggleMenu() {
  var isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  menuToggle.textContent = isOpen ? 'Close' : 'Menu';
}

// Close the menu after a link is clicked
function closeMenu() {
  if (navLinks.classList.contains('open')) {
    toggleMenu();
  }
}

// Set the theme to light or dark
function applyTheme(theme) {
  var next = theme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', theme);
  themeToggle.setAttribute('aria-label', 'Switch to ' + next + ' mode');
}

// Switch between light and dark
function toggleTheme() {
  var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// Button clicks
menuToggle.addEventListener('click', toggleMenu);
themeToggle.addEventListener('click', toggleTheme);

// Close the menu when any nav link is clicked
var links = navLinks.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', closeMenu);
}

// Start in light mode
applyTheme('light');