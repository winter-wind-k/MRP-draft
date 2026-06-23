// changing button from no text to check - changed how this works bc restyled as checkboxes
// https://stackoverflow.com/questions/10671174/changing-button-text-onclick 


// labels toggle function 
// labels ID and class         id="boys-labels"         class="boys-labels-class"
// toggle switch ID and class  id="boys-labels-toggle"  class="labels-toggle"   


//--------------------------------------------------------------------------------------------------
// labels toggle
//--------------------------------------------------------------------------------------------------

const labelsToggle = document.querySelector("#boys-labels-toggle")
const boysLabels = document.querySelector("#boys-labels")

if (labelsToggle && boysLabels) {
    const syncBoysLabels = () => {
        boysLabels.classList.toggle("boys-labels-class", !labelsToggle.checked);
    };

    labelsToggle.addEventListener("change", syncBoysLabels);
    syncBoysLabels();
}

console.log("boys page file is linked :)")
//--------------------------------------------------------------------------------------------------
// different labels sets based on images
//--------------------------------------------------------------------------------------------------

// Function to toggle labels based on image name -- DOES NOT WORK
function toggleLabelsFromImage(imageName) {
    console.log("label set selected")

    // Hide all label sets
    document.querySelectorAll('.boys-labels-class').forEach(set => {
        set.style.display = 'none';
    });

    // Extract the number combination from the end of filename
    const match = imageName.match(/(\d+)(?=\.(?:jpg|jpeg|png|gif|webp|svg)$)/i);

    if (match) {
        const numbers = match[1];
        console.log("Found numbers in image name for labels:", numbers);

        // Show the label set that corresponds to these numbers
        const labelSet = document.querySelector(`.label-set[data-numbers="${numbers}"]`);
        if (labelSet) {
            labelSet.style.display = 'block';
            console.log("Showing label set for numbers:", numbers);
        } else {
            // If no specific set found, show default or first set
            const defaultSet = document.querySelector('.label-set');
            if (defaultSet) {
                defaultSet.style.display = 'block';
                console.log("Showing default label set");
            }
        }
    } else {
        console.log("No number combination found in image name for labels");
        // Show default label set
        const defaultSet = document.querySelector('.boys-labels-class');
        if (defaultSet) {
            defaultSet.style.display = 'block';
        }
    }
}


//blur inner view images
var blurButton = document.getElementById('blur-button');
var boysImages = document.querySelectorAll('.boys-tool-illustration');

blurButton.addEventListener('click', () => {
    boysImages.forEach(img => {
        img.classList.toggle('blurred-image');
    });

    const isBlurred = boysImages[0].classList.contains('blurred-image');
    blurButton.textContent = isBlurred ? 'Unblur Images' : 'Blur Images';
});



