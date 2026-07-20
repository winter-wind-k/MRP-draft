
// labels toggle function 
// labels ID and class         id="boys-labels"         class="boys-labels-class"
// toggle switch ID and class  id="boys-labels-toggle"  class="labels-toggle"   


//--------------------------------------------------------------------------------------------------
// labels toggle
//--------------------------------------------------------------------------------------------------


// old labels toggle 
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
                div.style.visibility = 'hidden'; 
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

    const currentImage = document.querySelector('.boys-tool-illustration img') ||
        document.querySelector('.boys-tool-illustration');

    if (!currentImage) {
        console.log("No image found for label updating");
        return;
    }

    // read file name 
    let fileName = currentImage.src.split('/').pop();
    if (!fileName) return;

    const baseName = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;

    console.log("Current filename:", fileName);
    console.log("Base name:", baseName);

    // hide all labels first
    document.querySelectorAll('.labels-container > div').forEach(div => {
        div.style.display = 'none';
    });

    // read current procedures checked
    const checkboxes = document.querySelectorAll('.procedure-checkbox');
    let suffix = '';

    // build suffix based on checkboxes
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const value = checkbox.value || checkbox.id;
            if (value === '1') suffix += '1';
            else if (value === '2') suffix += '2';
            else if (value === '3') suffix += '3';
            else if (value === '4') suffix += '4';
        }
    });

    let selectedLabels = null;

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
                selectedLabels = getLabelFromFilename(baseName);
        }
    } else {
        selectedLabels = getLabelFromFilename(baseName);
    }

    // show the correct label set
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
            }
        });
    });

    const targetNode = document.querySelector('.boys-tool-illustration img') ||
        document.querySelector('.boys-tool-illustration');

    if (targetNode) {
        observer.observe(targetNode, { attributes: true });
    }
}

// automatically update labels when checkboxes change
function setupCheckboxChangeDetection() {
    const checkboxes = document.querySelectorAll('.procedure-checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {

            setTimeout(updateLabels, 10);
        });
    });
}


setupImageChangeDetection();
setupCheckboxChangeDetection();



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

    content.classList.toggle('active');
    header.classList.toggle('active');
}
