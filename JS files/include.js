console.log("js file is being loaded :)")

async function loadIncludes() {
  // Find every element that has a data-include attribute
  const targets = document.querySelectorAll("[data-include]");

  for (const el of targets) {
    // Get the file path from the data-include attribute
    const filePath = el.getAttribute("data-include");

    // Ask the browser to fetch (load) that file
    const response = await fetch(filePath);

    // Turn the response into text (HTML code)
    const html = await response.text();

    // Put the HTML inside this element
    el.innerHTML = html;
  }
}

function setActiveNav() {
  // 1) Get the current page from the URL path.
  // Example: /pages/about.html -> about.html
  let currentPage = window.location.pathname.split("/").pop();

  // If there is no file name in the path, treat it as index.html
  if (!currentPage) {
    currentPage = "index.html";
  }

  // Remove any query string (?x=1) or hash (#section), just in case
  currentPage = currentPage.split("?")[0].split("#")[0];

  // 2) Get all links in the navigation
  const links = document.querySelectorAll(".nav-links");

  // 3) Compare each link file name with the current page
  links.forEach((link) => {
    // Get the link target from href
    const href = link.getAttribute("href") || "";

    // Example: ../pages/about.html -> about.html
    let linkPage = href.split("/").pop() || "";

    // Remove query/hash from the link too
    linkPage = linkPage.split("?")[0].split("#")[0];
    console.log(linkPage);

    // Clear old active states first
    link.classList.remove("active");

    // If this link matches the current page, highlight it
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

function updateStickyHeaderOffset() {
  // SS Comment: Measure current header height and sync CSS sticky offset for the menu control row.
  const header = document.querySelector("header");

  if (header) {
    document.documentElement.style.setProperty("--sticky-header-offset", `${header.offsetHeight}px`);
  }
}

function applyStickyIncludeHosts() {
  // SS Comment: Tag header include host so it stays sticky even on pages without a sticky wrapper.
  const headerHost = document.querySelector('[data-include*="header.html"]');
  // SS Comment: Tag menu include host so menu controls stay sticky under the header.
  const menuHost = document.querySelector('[data-include*="menu.html"]');

  if (headerHost) {
    headerHost.classList.add("ss-sticky-header-host");
  }

  if (menuHost) {
    menuHost.classList.add("ss-sticky-menu-host");
  }
}

// Run the function when the page loads
loadIncludes().then(() => {
  // SS Comment: Run nav setup after shared components are injected into the page.
  setActiveNav();
  // SS Comment: Apply sticky classes to include hosts so behavior is consistent across page templates.
  applyStickyIncludeHosts();
  // SS Comment: Normalize layout on load in case older menu code left inline shift styles behind.
  clearLegacyInlineMenuStyles();
  // SS Comment: Keep sticky control offset aligned with the actual header height.
  updateStickyHeaderOffset();
  // SS Comment: Sync menu mode and sticky offset whenever viewport size changes.
  syncMenuMode();
  // SS Comment: Close mobile dropdown after selecting a nav link for better small-screen UX.
  document.querySelectorAll(".sidenav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (isMobileMenuViewport()) {
        closeNav();
      }
    });
  });
  // SS Comment: Re-sync sticky offset and menu mode on resize for responsive behavior.
  window.addEventListener("resize", () => {
    updateStickyHeaderOffset();
    syncMenuMode();
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

//Code for dark mode toggle:
let isDarkMode = false;

function switchTheme() {
  const body = document.body;
  const themeName = document.getElementById('theme-name');
  const toggleButton = document.querySelector('.toggle-button');
  const elements = document.querySelectorAll('[id="text"]');
  //(1) const header = document.getElementById('header-id'); <- add id to header in html

  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.classList.add('dark-mode');
    toggleButton.classList.add('active');
    themeName.textContent = 'Dark';

    elements.forEach(el => {
      el.classList.add('dark-mode-text');
    });

    // (2) header.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    toggleButton.classList.remove('active');
    themeName.textContent = 'Light';
    elements.forEach(el => {
      el.classList.remove('dark-mode-text');
    });

    // (3) header.classList.remove('dark-mode');
  }
}

//--------------------------------------------------------------------------------------------------

//for tutorial overlay:

//--------------------------------------------------------------------------------------------------

//for sidebar nav:
const MOBILE_MENU_BREAKPOINT = 900;

function isMobileMenuViewport() {
  // SS Comment: Use one breakpoint test so desktop and mobile menu behavior stay consistent.
  return window.innerWidth <= MOBILE_MENU_BREAKPOINT;
}

function clearLegacyInlineMenuStyles() {
  // SS Comment: Remove inline styles from older menu logic so CSS media rules can control layout cleanly.
  const sideNav = document.getElementById("mySidenav");
  const main = document.getElementById("main");
  const footerTargets = [
    ...document.querySelectorAll('[data-include*="footer.html"]'),
    ...document.querySelectorAll("footer")
  ];

  if (sideNav) {
    sideNav.style.width = "";
    sideNav.style.height = "";
  }

  if (main) {
    main.style.transform = "";
    main.style.marginLeft = "";
  }

  footerTargets.forEach((target) => {
    target.style.transform = "";
    target.style.marginLeft = "";
  });
}

function syncMenuMode() {
  clearLegacyInlineMenuStyles();
  // SS Comment: Keep body classes in sync with viewport so CSS can switch between desktop and mobile menu modes.
  if (isMobileMenuViewport()) {
    document.body.classList.add("mobile-menu-mode");
    document.body.classList.remove("desktop-menu-mode");
  } else {
    document.body.classList.add("desktop-menu-mode");
    document.body.classList.remove("mobile-menu-mode");
    // SS Comment: Ensure any open mobile dropdown is closed when returning to desktop layout.
    document.body.classList.remove("mobile-nav-open");
  }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  // SS Comment: Desktop menu is permanently visible; only mobile uses the dropdown open state.
  if (!isMobileMenuViewport()) {
    return;
  }

  document.body.classList.add("mobile-nav-open");
}

// Set the width of the side navigation to 0 and the left margin of the page content to 0 
function closeNav() {
  // SS Comment: Collapse the mobile dropdown menu.
  document.body.classList.remove("mobile-nav-open");
}

// animated menu button
function myFunction(x) {
  x.classList.toggle("change");
}

//--------------------------------------------------------------------------------------------------

//download button for pdfs

//--------------------------------------------------------------------------------------------------

// to be implemented (as a stretch goal)


//--------------------------------------------------------------------------------------------------

//dropdown menus

//--------------------------------------------------------------------------------------------------


//overview goals menu 
var acc = document.getElementsByClassName("goals-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("goals-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//--------------------------------------------------------------------------------------------------


// faq menus
var acc = document.getElementsByClassName("question-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("question-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    // https://www.w3schools.com/howto/howto_js_active_element.asp

    console.log("active class applied")

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//--------------------------------------------------------------------------------------------------

//sidebar menu
var acc = document.getElementsByClassName("collapsible-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("collapsible-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


//--------------------------------------------------------------------------------------------------

//scroll to top button

//--------------------------------------------------------------------------------------------------


let scrollTopBtn = document.getElementById("scroll-top");

// show button after scrolling (hidden when at top of page)
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

