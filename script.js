/* script.js - hamburger menu for mobile navigation and a dark/light mode toggle */

// Get the button and the list of links from the page
var menuToggle = document.getElementById('menu-toggle');
var navLinks = document.getElementById('nav-links');
var themeToggle = document.getElementById('theme-toggle');
var root = document.documentElement; // the <html> element

/* Shows or hides the navigation links and updates the button for screen readers */
function toggleMenu() {
  var isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  menuToggle.textContent = isOpen ? 'Close' : 'Menu';
}

/* Hides the menu again after a link is clicked (so it does not cover the page) */
function closeMenu() {
  if (navLinks.classList.contains('open')) {
    toggleMenu();
  }
}

// Open or close the menu when the hamburger button is clicked
menuToggle.addEventListener('click', toggleMenu);

// Close the menu when any link inside it is clicked
var links = navLinks.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', closeMenu);
}

/* ----- Dark / light mode ----- */

/* Applies a theme ("light" or "dark"); CSS swaps the moon/sun icon, so only the label changes here */
function applyTheme(theme) {
  var next = theme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', theme);
  themeToggle.setAttribute('aria-label', 'Switch to ' + next + ' mode');
}

/* Switches between light and dark mode (each page load starts in light mode) */
function toggleTheme() {
  var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// Switch theme when the toggle button is clicked
themeToggle.addEventListener('click', toggleTheme);

// Always start in light mode
applyTheme('light');