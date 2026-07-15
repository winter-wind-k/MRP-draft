// changing button from no text to check - changed how this works bc restyled as checkboxes
// https://stackoverflow.com/questions/10671174/changing-button-text-onclick 


// labels toggle function 
// labels ID and class         id="boys-labels"         class="boys-labels-class"
// toggle switch ID and class  id="boys-labels-toggle"  class="labels-toggle"   


//--------------------------------------------------------------------------------------------------
// different labels sets based on images
//--------------------------------------------------------------------------------------------------


// Function to determine which labels to show based on image filename
/* v3 functional! :) */
function updateLabels() {
    console.log("updateLabels called");

    // Get the current image element - adjust selector as needed
    const currentImage = document.querySelector('.boys-tool-illustration img') ||
        document.querySelector('.boys-tool-illustration');

    if (!currentImage) {
        console.log("No image found for label updating");
        return;
    }

    // Get filename from image src
    let fileName = currentImage.src.split('/').pop();
    if (!fileName) return;

    const baseName = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;

    console.log("Current filename:", fileName);
    console.log("Base name:", baseName);

    // Hide all label containers first
    document.querySelectorAll('.labels-container > div').forEach(div => {
        div.style.display = 'none';
    });

    // Show appropriate labels based on filename ending
    if (baseName.endsWith('13')) {
        console.log("Showing simple-scroto-labels");
        const element = document.querySelector('.simple-scroto-labels');
        if (element) {
            element.style.display = 'block';
            element.style.visibility = 'visible'; // Ensure visibility
        }
    } else if (baseName.endsWith('1')) {
        console.log("Showing simple-labels");
        const element = document.querySelector('.simple-labels');
        if (element) {
            element.style.display = 'block';
            element.style.visibility = 'visible';
        }
    } else if (baseName.endsWith('12')) {
        console.log("Showing simple-vnect-labels");
        const element = document.querySelector('.simple-vnect-labels');
        if (element) {
            element.style.display = 'block';
            element.style.visibility = 'visible';
        }
    } else if (baseName.endsWith('123')) {
        console.log("Showing simple-vnect-scroto-labels");
        const element = document.querySelector('.simple-vnect-scroto-labels');
        if (element) {
            element.style.display = 'block';
            element.style.visibility = 'visible';
        }
    } else if (baseName.endsWith('124')) {
        console.log("Showing simple-vnect-ul-labels");
        const element = document.querySelector('.simple-vnect-ul-labels');
        if (element) {
            element.style.display = 'block';
            element.style.visibility = 'visible';
        }
    } else if (baseName.endsWith('1234')) {
        console.log("Showing full-meta-labels");
        const element = document.querySelector('.full-meta-labels');
        if (element) {
            element.style.display = 'block';
            element.style.visibility = 'visible';
        }
    }
}

// Handle image clicks
document.addEventListener('click', function (e) {
    if (e.target.closest('.image-container') || e.target.closest('.boys-tool-illustration')) {
        setTimeout(updateLabels, 0);
    }
});

// Handle navigation button clicks
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', updateLabels);
});


//--------------------------------------------------------------------------------------------------
// labels toggle
//--------------------------------------------------------------------------------------------------


/* old labels toggle */
const labelsToggle = document.querySelector("#boys-labels-toggle")
const boysLabels = document.querySelector("#boys-labels")

const allCheckboxes = document.querySelectorAll('.procedure-checkbox');

if (labelsToggle && boysLabels) {
    const syncBoysLabels = () => {
        console.log("labels are synched :)")
        if (labelsToggle.checked) {
            boysLabels.style.display = 'block';
            updateLabels();

        } else {
            boysLabels.style.display = 'none';
            document.querySelectorAll('.boys-labels-class').forEach(div => {
                div.style.display = 'none';
                div.style.visibility = 'hidden'; //changed 1334
            });
        }
    };

    labelsToggle.addEventListener("change", syncBoysLabels);
    syncBoysLabels();
    updateLabels();
}

console.log("boys-labels.js loaded");

//--------------------------------------------------------------------------------------------------
// blur button
//--------------------------------------------------------------------------------------------------

var blurButton = document.getElementById('blur-button');
var boysImages = document.querySelectorAll('.boys-tool-illustration');

if (blurButton && boysImages.length > 0) {
    blurButton.addEventListener('click', function () {
        console.log("Blur button clicked");
        boysImages.forEach(img => {
            img.classList.toggle('blurred-image');
        });

        const isBlurred = boysImages[0].classList.contains('blurred-image');
        blurButton.textContent = isBlurred ? 'Unblur Images' : 'Blur Images';

        // Update labels after blur toggle (only if labels are active)
        if (labelsToggle && labelsToggle.checked) {
            updateLabels();
        }
    });
} else {
    console.log("Blur button or images not found - blur functionality disabled");
}



//--------------------------------------------------------------------------------------------------
// mobile vs. desktop menus
//--------------------------------------------------------------------------------------------------

function toggleCollapsible(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');

    // Toggle the active class on content
    content.classList.toggle('active');

    // Toggle the active class on header for arrow rotation
    header.classList.toggle('active');
}
