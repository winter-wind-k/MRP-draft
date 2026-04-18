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
const links = document.querySelectorAll(".nav-links a");

// 3) Compare each link file name with the current page
links.forEach((link) => {
        // Get the link target from href
        const href = link.getAttribute("href") || "";

        // Example: ../pages/about.html -> about.html
        let linkPage = href.split("/").pop() || "";

        // Remove query/hash from the link too
        linkPage = linkPage.split("?")[0].split("#")[0];

        // Clear old active states first
        link.classList.remove("active");

        // If this link matches the current page, highlight it
        if (linkPage === currentPage) {
        link.classList.add("active");

        }
    });
}

// Run the function when the page loads
loadIncludes().then(setActiveNav);


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


//for tutorial overlay:


//for sidebar nav:
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// animated menu button:
function myFunction(x) {
  x.classList.toggle("change");
}

//download button:
const downloadButton = document.querySelector(".download-button");

if (downloadButton) {
    downloadButton.addEventListener("click", () => {
  print();
});
}

