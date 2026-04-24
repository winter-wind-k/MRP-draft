//this is my script graveyard and it contains things that i tried that didn't work 
// but i might want to return to the script at some point

//This does not work!

//Header and footer components
// function setActiveNav() {
//     // 1) Get the current page from the URL path.

//     // Example: /pages/about.html -> about.html
//     let currentPage = window.location.pathname.split("/").pop();


//     // If there is no file name in the path, treat it as index.html
//     if (!currentPage) {
//         currentPage = "index.html";
//     }


//     // Remove any query string (?x=1) or hash (#section), just in case
//     currentPage = currentPage.split("?")[0].split("#")[0];


//     // 2) Get all links in the navigation
//     const links = document.querySelectorAll(".nav-links a");


//     // 3) Compare each link file name with the current page
//     links.forEach((link) => {
//         // Get the link target from href
//         const href = link.getAttribute("href") || "";


//         // Example: ../pages/about.html -> about.html
//         let linkPage = href.split("/").pop() || "";


//         // Remove query/hash from the link too
//         linkPage = linkPage.split("?")[0].split("#")[0];


//         // Clear old active states first
//         link.classList.remove("active");


//         // If this link matches the current page, highlight it
//         if (linkPage === currentPage) {
//             link.classList.add("active");
//         }
//     });
// }

// // Run the function when the page loads
// loadIncludes().then(setActiveNav);

//code for showing checkmarks but not good (for our application)

//check off light skin button
function checkLightSkinButton() {

    var btn = document.getElementById("light-skin-button");

    if (btn.value == "&ZeroWidthSpace;") {
        btn.value = "✔";
        btn.innerHTML = "✔";
    }
    else {
        btn.value = "&ZeroWidthSpace;";
        btn.innerHTML = "✔";
    }

}


//check off olive skin button
function checkOliveSkinButton() {

    var btn = document.getElementById("olive-skin-button");

    if (btn.value == "&ZeroWidthSpace;") {
        btn.value = "✔";
        btn.innerHTML = "✔";
    }
    else {
        btn.value = "&ZeroWidthSpace;";
        btn.innerHTML = "✔";
    }

}

//check off medium skin button
function checkMediumSkinButton() {

    var btn = document.getElementById("medium-skin-button");

    if (btn.value == "&ZeroWidthSpace;") {
        btn.value = "✔";
        btn.innerHTML = "✔";
    }
    else {
        btn.value = "&ZeroWidthSpace;";
        btn.innerHTML = "✔";
    }

}

//check off dark skin button
function checkDarkSkinButton() {

    var btn = document.getElementById("dark-skin-button");

    if (btn.value == "&ZeroWidthSpace;") {
        btn.value = "✔";
        btn.innerHTML = "✔";
    }
    else {
        btn.value = "&ZeroWidthSpace;";
        btn.innerHTML = "✔";
    }

}

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------
    // SINGLE SOURCE OF TRUTH (no reading back from DOM)
    // -------------------------------------------------------------------
    const state = {
        procedure: 'simpleScrotoplastyVaginectomyUL',
        tone: 'medium',
        size: 'large'
    };



    // -------------------------------------------------------------------
    // DOM
    // -------------------------------------------------------------------
    const els = {
        //menuIcon: document.getElementById('menuIcon'),
        //fullScreenMenu: document.getElementById('fullScreenMenu'),

        //update to reflect procedures?
        //dropdown: document.getElementById('eczemaDropdown'),
        //dropdownSelected: document.querySelector('#eczemaDropdown .dropdown-selected'),
        //dropdownOptions: document.querySelector('#eczemaDropdown .dropdown-options'),

        tones: document.getElementById('skinTones'),
        //update this    ----    body sizes : document.getElementById('sizes'),
        //update this    ----    procedures: document.getElementById('procedures'),

        img: document.getElementById('boys-tool-image'),
        meta: document.getElementById('imageMeta'),
        compareBtn: document.getElementById('compareBtn')
    };

    // -------------------------------------------------------------------
    // Setting skin tones (treat fancy checkboxes as radios; no DOM reads for state)
    // -------------------------------------------------------------------
    function setActiveTone(tone) {
        state.tone = tone;
        els.tones.querySelectorAll('.swatch').forEach(sw => {
            const isMatch = sw.dataset.tone === tone;
            sw.classList.toggle('selected', isMatch);
            sw.setAttribute('aria-checked', String(isMatch));
            const input = sw.querySelector('input[type="checkbox"]');
            if (input) input.checked = isMatch; // if present
        });
    }

    els.tones?.addEventListener('click', (e) => {
        const swatch = e.target.closest('.swatch');
        if (!swatch) return;
        const tone = swatch.dataset.tone;
        if (!tone || tone === state.tone) return;
        setActiveTone(tone);
        updateImage();
    })

});

//first code from Jake - making procedure checkboxes call up different images 
// (without other aspects)

const boysImageMap = {
    "1": "simple_1.jpg",
    "1,2": "simple_vaginectomy_12.jpg",
    "1,2,3": "simple_vaginectomy_scrotoplasty_123",
    "1,2,3,4": "simple_vaginectomy_scrotoplasty_ul_1234",
    "1,3": "simple_scrotoplasty_13.jpg",
    "1,2,4": "simple_vaginectomy_ul_124.jpg",
};

function updateImage() {
    const selected = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value)
        .sort()
        .join(',');

    resultImage.src = imageMap[selected] || "default.jpg";
}

//adapted from Tono script - currently not in use
//Load your data BEFORE our script
// <script src="/JS files/image-viewer.js"></script>
//<script>
// normalize types to your folder names
function normalizeView(val) {
    const map = { front: 'front' };
    return map[val] || val;
}
// Fallback path builder (gallery lives in /pages/, images in /images/eczema/)
function fallbackGetImagePath({ view, procedure, tone, size }) {
    const t = normalizeView(view);
    return `/images/boys-tool-illustrations/${t}/${t}-${procedure}-${tone}-${size}.jpg`;
}
// If data.js (or another script) didn’t define getImagePath, provide one.
if (typeof window.getImagePath !== 'function') {
    window.getImagePath = (args) => fallbackGetImagePath(args);
}
//</script> 

//check buttons - no longer relevant
//check off smaller body size button
function checkSmallerSizeButton() {

    var btn = document.getElementById("smaller-size-button");

    if (btn.value == "&ZeroWidthSpace;") {
        btn.value = "✔";
        btn.innerHTML = "✔";
    }
    else {
        btn.value = "&ZeroWidthSpace;";
        btn.innerHTML = "✔";
    }

}

//check off smaller body size button
function checkLargerSizeButton() {

    var btn = document.getElementById("larger-size-button");

    if (btn.value == "&ZeroWidthSpace;") {
        btn.value = "✔";
        btn.innerHTML = "✔";
    }
    else {
        btn.value = "&ZeroWidthSpace;";
        btn.innerHTML = "✔";
    }

}
