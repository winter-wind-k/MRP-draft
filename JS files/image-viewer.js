//--------------------------------------------------------------------------------------------------
// buttons to add skin tone and body size function
// coding help from Jake (thank you Jake)
//--------------------------------------------------------------------------------------------------

// state aspects for skin tone and body size
let state = {
    tone: "light",      //aspect1: "a", aspect = "container term" for skin tone and body size
    tone: "olive",      //aspect1: "b",
    tone: "medium",     //aspect1: "c",
    tone: "dark",       //aspect1: "d",
    size: "larger",     //aspect2: "a",
    size: "smaller",    //aspect2: "b",
}

console.log("js file linked")

// make procedure checkboxes into an array and select by number combination at end of file name
function getCheckboxPart() {
    console.log("procedure checkbox array is working :)")

    const selected = Array.from(document.querySelectorAll('.procedure-checkbox-input'))
        .filter(cb => cb.checked)
        .map(cb => cb.value)
        .sort();


    return selected.length ? selected.join('') : "0";
}

// add function to each checkbox
const procedureCheckboxes = document.querySelectorAll('.procedure-checkbox-input')
console.log("checkboxes found:", procedureCheckboxes.length)

procedureCheckboxes.forEach(cb => {
    console.log("procedure checkboxes are working :)")

    cb.addEventListener('change', () => {
        console.log("checkbox changed", cb.value, cb.checked)
        updateImage();
    });

    cb.addEventListener('click', () => {
        console.log("checkbox changed", cb.value, cb.checked);
    });
});


// update image based on skin tone and body size buttons
function updateImage() {
    console.log("update image function is working :)")

    const checkboxPart = getCheckboxPart();
    console.log("checkboxPart", checkboxPart);

    const fileName = `${state.tone}_${state.size}_${getCheckboxPart()}.jpg`
    console.log("fileName:", fileName);

    const img = document.getElementById("boys-tool-image");
    console.log("image element:", img)

    img.src = `/images/boys-tool-illustrations/front/${fileName}`;
    console.log("new src:", img.src);
}

function updateImage() {
    console.log("update image function is working :)")

    const checkboxPart = getCheckboxPart();
    console.log("checkboxPart", checkboxPart);

    const fileName = `${state.tone}_${state.size}_${checkboxPart}.jpg`;
    console.log("fileName:", fileName);

    const innerImg = document.getElementById("inner-view-image");
    const frontImg = document.getElementById("front-view-image");

    innerImg.src = `/images/boys-tool-illustrations/inner/${fileName}`;
    frontImg.src = `/images/boys-tool-illustrations/front/${fileName}`;

    console.log("new inner src:", innerImg.src);
    console.log("new front src:", frontImg.src);

    if (innerImg && frontImg) {
        innerImg.src = `/images/boys-tool-illustrations/inner/${fileName}`;
        frontImg.src = `/images/boys-tool-illustrations/front/${fileName}`;

        console.log("New inner src:", innerImg.src);
        console.log("New front src:", frontImg.src);

        // Update active button states
        updateActiveButtons();
    } else {
        console.error("Image elements not found!");
    }
}

//--------------------------------------------------------------------------------------------------
// skin tone button functions
//--------------------------------------------------------------------------------------------------

// set light skin tone 
function setTone(light) {
    console.log("set light skin tone function is working :)")

    state.tone = light;
    updateImage();
}

// set olive skin tone 
function setTone(olive) {
    console.log("set olive skin tone function is working :)")

    state.tone = olive;
    updateImage();
}

// set medium skin tone 
function setTone(medium) {
    console.log("set medium skin tone function is working :)")

    state.tone = medium;
    updateImage();
}

//set dark skin tone 
function setTone(dark) {
    console.log("set dark skin tone function is working :)")

    state.tone = dark;
    updateImage();
}

//--------------------------------------------------------------------------------------------------
// body size button functions
//--------------------------------------------------------------------------------------------------

// set larger body size
function setSize(larger) {
    console.log("set larger body size function is working :)")

    state.size = larger;
    updateImage();
}

// set smaller body size
function setSize(smaller) {
    console.log("set smaller body size function is working :)")

    state.size = smaller;
    updateImage();
}

//--------------------------------------------------------------------------------------------------
// showing active state of buttons
//--------------------------------------------------------------------------------------------------

// Function to update active button states
function updateActiveButtons() {
    // Remove active class from all skin tone buttons
    document.querySelectorAll('.skin-tone-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to current skin tone button
    const activeToneButton = document.querySelector(`[onclick="setTone('${state.tone}')"]`);
    if (activeToneButton) {
        activeToneButton.classList.add('active');
    }

    // Remove active class from all body size buttons
    document.querySelectorAll('.body-size-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to current body size button
    const activeSizeButton = document.querySelector(`[onclick="setSize('${state.size}')"]`);
    if (activeSizeButton) {
        activeSizeButton.classList.add('active');
    }
}

// Initialize active button states on page load
document.addEventListener('DOMContentLoaded', function () {
    updateActiveButtons();
});

//--------------------------------------------------------------------------------------------------
// showing active state of checkboxes
//--------------------------------------------------------------------------------------------------

// Automatically check vaginectomy when UL is checked off -- NOT WORKING
function autoVaginectomy() {
    if (document.getElementbyId('#4').checked) {
        console.log('checked');
        document.getElementById("#2").checked = true

    } else {
        console.log('unchecked');
    }
}

// Add event listeners to checkboxes
function setupCheckboxListeners() {
    const checkboxes = document.querySelectorAll('.procedure-checkbox-input');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            console.log("Checkbox changed:", this.value, this.checked);

            // Update state with current checkbox values
            updateCheckboxState();

            // Update image display
            updateImage();
        });
    });
}

// Update checkbox state from DOM
function updateCheckboxState() {
    const selectedCheckboxes = Array.from(document.querySelectorAll('.procedure-checkbox-input'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    state.checkboxes = selectedCheckboxes;
    console.log("Updated checkbox state:", state.checkboxes);
}

// Update active states of checkboxes
function updateCheckboxActiveStates() {
    const checkboxes = document.querySelectorAll('.procedure-checkbox-input');

    checkboxes.forEach(checkbox => {
        const label = checkbox.closest('.procedure-line');
        if (label) {
            if (checkbox.checked) {
                label.classList.add('active');
            } else {
                label.classList.remove('active');
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    updateCheckboxActiveStates();
});



//--------------------------------------------------------------------------------------------------
// random permutation of images appears on page load -- ADD IN PART WITH CHECKBOXES TO MAKE FULLY FUNCTIONAL
//--------------------------------------------------------------------------------------------------

function getRandomPermutation() {
    const tones = ["light", "olive", "medium", "dark"];
    const sizes = ["larger", "smaller"];


    // Shuffle arrays
    const shuffledTones = [...tones].sort(() => Math.random() - 0.5);
    const shuffledSizes = [...sizes].sort(() => Math.random() - 0.5);

    return {
        tone: shuffledTones[0],
        size: shuffledSizes[0]
    };
}

// Load random image on page load
function loadRandomImage() {
    console.log("Loading random image permutation...");

    // Get random permutation
    const randomPermutation = getRandomPermutation();

    // Set state to random values
    state.tone = randomPermutation.tone;
    state.size = randomPermutation.size;

    console.log("Random permutation selected:", state);

    // Update UI to show the random selection
    updateActiveButtons();

    // Load the image (this will trigger updateImage internally)
    // We need to manually call updateImage since we're setting state directly
    updateImage();
}

// Initialize active button states on page load and load random image
document.addEventListener('DOMContentLoaded', function () {
    // Load random image on page load
    loadRandomImage();

    // Set up any additional event listeners if needed
    console.log("Page loaded with random permutation");
});

// Optional: Function to manually trigger random permutation (for testing)
function triggerRandomPermutation() {
    console.log("Manually triggering random permutation...");
    loadRandomImage();
}