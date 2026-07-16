// changing button from no text to check - changed how this works bc restyled as checkboxes
// https://stackoverflow.com/questions/10671174/changing-button-text-onclick 


// labels toggle function 
// labels ID and class         id="boys-labels"         class="boys-labels-class"
// toggle switch ID and class  id="boys-labels-toggle"  class="labels-toggle"   


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
// different labels sets based on images
//--------------------------------------------------------------------------------------------------

// v6 functional 
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

    // Get current checkbox states
    const checkboxes = document.querySelectorAll('.procedure-checkbox');
    let suffix = '';

    // Build suffix based on checked checkboxes (in order)
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            // Get the value or id to determine which label set to show
            const value = checkbox.value || checkbox.id;
            if (value === '1') suffix += '1';
            else if (value === '2') suffix += '2';
            else if (value === '3') suffix += '3';
            else if (value === '4') suffix += '4';
        }
    });

    // Show appropriate labels based on checkbox selection and filename
    let selectedLabels = null;

    // If checkboxes are checked, use the combined logic
    if (suffix) {
        switch (suffix) {
            case '1':
                console.log("Showing simple-labels");
                selectedLabels = '.simple-labels';
                break;
            case '12':
                console.log("Showing simple-vnect-labels");
                selectedLabels = '.simple-vnect-labels';
                break;
            case '123':
                console.log("Showing simple-vnect-scroto-labels");
                selectedLabels = '.simple-vnect-scroto-labels';
                break;
            case '124':
                console.log("Showing simple-vnect-ul-labels");
                selectedLabels = '.simple-vnect-ul-labels';
                break;
            case '1234':
                console.log("Showing full-meta-labels");
                selectedLabels = '.full-meta-labels';
                break;
            default:
                // Fallback to filename-based logic if no specific checkbox combination
                selectedLabels = getLabelFromFilename(baseName);
        }
    } else {
        // If no checkboxes checked, use filename-based logic
        selectedLabels = getLabelFromFilename(baseName);
    }

    // Show the selected labels
    if (selectedLabels) {
        document.querySelectorAll('.boys-labels-class').forEach(div => {
            div.style.display = 'none';
            div.style.visibility = 'hidden';
        });

        const element = document.querySelector(selectedLabels);
        if (element) {
            element.style.display = 'block';
            element.style.visibility = 'visible';
        }
    }
}

// determine label set from filename
function getLabelFromFilename(baseName) {
    if (baseName.endsWith('13')) {
        console.log("Showing simple-scroto-labels (filename-based)");
        return '.simple-scroto-labels';
    } else if (baseName.endsWith('1')) {
        console.log("Showing simple-labels (filename-based)");
        return '.simple-labels';
    } else if (baseName.endsWith('12')) {
        console.log("Showing simple-vnect-labels (filename-based)");
        return '.simple-vnect-labels';
    } else if (baseName.endsWith('123')) {
        console.log("Showing simple-vnect-scroto-labels (filename-based)");
        return '.simple-vnect-scroto-labels';
    } else if (baseName.endsWith('124')) {
        console.log("Showing simple-vnect-ul-labels (filename-based)");
        return '.simple-vnect-ul-labels';
    } else if (baseName.endsWith('1234')) {
        console.log("Showing full-meta-labels (filename-based)");
        return '.full-meta-labels';
    }
    return null;
}

// automatically update labels when image changes
function setupImageChangeDetection() {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                updateLabels();
                syncBoysLabels();
            }
        });
    });

    const targetNode = document.querySelector('.boys-tool-illustration img') ||
        document.querySelector('.boys-tool-illustration');

    if (targetNode) {
        observer.observe(targetNode, { attributes: true });
    }
}

// automatically update labels when checkboxes are changed
// Set up checkbox change detection
function setupCheckboxChangeDetection() {
    const checkboxes = document.querySelectorAll('.procedure-checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            // Add a small delay to ensure DOM updates complete
            setTimeout(updateLabels, 10);
        });
    });
}


// Initialize the detections
setupImageChangeDetection();
setupCheckboxChangeDetection();


//--------------------------------------------------------------------------------------------------


// Function to determine which labels to show based on image filename
/* v3 functional! :) 
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
*/



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

        //blur labels if images are blurred
        if (isBlurred) {
            const labelContainers = document.querySelectorAll('.boys-label-container > div');
            labelContainers.forEach(container => {
                container.style.filter = 'blur(10px)';
                container.style.opacity = '0.7';
            });
        } else {
            const labelContainers = document.querySelectorAll('.boys-label-container > div');
            labelContainers.forEach(container => {
                container.style.filter = 'none';
                container.style.opacity = '1';
            });
        }

        const labelsToggle = document.getElementById('labels-toggle'); 
        if (labelsToggle && labelsToggle.checked) {
            updateLabels();
        }
    });

} else {
    console.log("Blur button or images not found - blur functionality disabled");
}

// apply blur on first click
if (labelsToggle) {
    let isFirstToggle = true;

    labelsToggle.addEventListener('change', function () {
        if (isFirstToggle && this.checked) {
            // apply blur to labels on page load (images default blurred)
            const isBlurred = boysImages.length > 0 && boysImages[0].classList.contains('blurred-image');
            if (isBlurred) {
                const labelContainers = document.querySelectorAll('.boys-label-container > div');
                labelContainers.forEach(container => {
                    container.style.filter = 'blur(2px)';
                    container.style.opacity = '0.7';
                });
            }
            isFirstToggle = false;
        }

        if (this.checked) {
            updateLabels();
        }
    });
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
