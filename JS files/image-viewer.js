//--------------------------------------------------------------------------------------------------
// buttons to add skin tone and body size function
// coding help from Jake (thank you Jake)
//--------------------------------------------------------------------------------------------------

// state aspects for skin tone and body size
let state = {
    tone: "light",
    tone: "olive",
    tone: "medium",
    tone: "dark",
    size: "larger",
    size: "smaller",
}

console.log("js file linked")


//--------------------------------------------------------------------------------------------------
// procedure checkboxes function
//--------------------------------------------------------------------------------------------------

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
        updateLabels();
    });

    cb.addEventListener('click', () => {
        console.log("checkbox changed", cb.value, cb.checked);
    });

    //link vnectomy and ul checkboxes
    cb.addEventListener('change', function () {

        //automatically check vnectomy if ul is checked
        if (this.value === '4') {
            const secondCheckbox = document.querySelector('[value="2"]');
            if (this.checked && secondCheckbox && !secondCheckbox.checked) {
                secondCheckbox.checked = true;

                secondCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
                console.log('Automatically checked checkbox 2 because checkbox 4 was checked');
            }

        }
        //automatically uncheck ul if vnectomy is unchecked
        if (this.value === '2') {
            const fourthCheckbox = document.querySelector('[value="4"]');
            if (!this.checked && fourthCheckbox && fourthCheckbox.checked) {
                fourthCheckbox.checked = false;

                fourthCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
                console.log('Automatically unchecked checkbox 4 because checkbox 2 was unchecked');
            }
        }


        updateLabels();
    });
});



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

        updateActiveButtons();
    } else {
        console.error("Image elements not found!");
    }

    updateLabels();
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

// update active button states
function updateActiveButtons() {
    // remove active class from all skin tone buttons
    document.querySelectorAll('.skin-tone-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // add active class to current skin tone button
    const activeToneButton = document.querySelector(`[onclick="setTone('${state.tone}')"]`);
    if (activeToneButton) {
        activeToneButton.classList.add('active');
    }

    // remove active class from all body size buttons
    document.querySelectorAll('.body-size-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // add active class to current body size button
    const activeSizeButton = document.querySelector(`[onclick="setSize('${state.size}')"]`);
    if (activeSizeButton) {
        activeSizeButton.classList.add('active');
    }
}

// show active button states on page load
document.addEventListener('DOMContentLoaded', function () {
    updateActiveButtons();
});

//--------------------------------------------------------------------------------------------------
// showing active state of checkboxes
//--------------------------------------------------------------------------------------------------


// event listeners for checkboxes v2 
function setupCheckboxListeners() {
    const checkboxes = document.querySelectorAll('.procedure-checkbox-input');

    checkboxes.forEach(checkbox => {
        checkbox.removeEventListener('change', handleCheckboxChange);

        checkbox.addEventListener('change', handleCheckboxChange);
    });

    updateLabels();
}

// update checkbox state from DOM
function updateCheckboxState() {
    const selectedCheckboxes = Array.from(document.querySelectorAll('.procedure-checkbox-input'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    state.checkboxes = selectedCheckboxes;
    console.log("Updated checkbox state:", state.checkboxes);

    updateLabels();
}

// update active states of checkboxes
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

    updateLabels();
}

document.addEventListener('DOMContentLoaded', function () {
    updateCheckboxActiveStates();
});

// ensure simple meta is checked off
document.addEventListener('DOMContentLoaded', function () {
    const firstCheckbox = document.getElementById('1');
    if (firstCheckbox) {
        console.log("First checkbox element:", firstCheckbox);
        console.log("First checkbox checked state:", firstCheckbox.checked);

        firstCheckbox.addEventListener('change', function (e) {
            console.log("First checkbox change event - checked:", this.checked, "event:", e);
        });
    }
});


//--------------------------------------------------------------------------------------------------
// random permutation of images appears on page load
//--------------------------------------------------------------------------------------------------

// skin tone and body size random selection
function getRandomPermutation() {
    const tones = ["light", "olive", "medium", "dark"];
    const sizes = ["larger", "smaller"];

    const shuffledTones = [...tones].sort(() => Math.random() - 0.5);
    const shuffledSizes = [...sizes].sort(() => Math.random() - 0.5);

    return {
        tone: shuffledTones[0],
        size: shuffledSizes[0]
    };
}

// random procedure selection
function checkRandomCheckboxes() {
    const checkboxes = document.querySelectorAll('.procedure-checkbox-input');

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // always check simple meta
    const firstCheckbox = document.getElementById('1');
    if (firstCheckbox) {
        firstCheckbox.checked = true;
        console.log('First checkbox (Simple Meta) automatically checked');
    }


    // create array of indices for checkboxes 2-4 (excluding first one)
    const availableIndices = [1, 2, 3];

    // Randomly select 0-3 of the remaining checkboxes 
    const numberOfAdditionalChecks = Math.floor(Math.random() * 4); // 0-3 additional checks
    const checkedBoxes = [0]; // Always check simple meta

    for (let i = 0; i < numberOfAdditionalChecks; i++) {
        if (availableIndices.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableIndices.length);
            const selectedIndex = availableIndices.splice(randomIndex, 1)[0];
            checkedBoxes.push(selectedIndex);
        }
    }

    checkedBoxes.forEach(index => {
        if (checkboxes[index]) {
            checkboxes[index].checked = true;
            console.log(`Checked checkbox ${index + 1}`);
        }
    });


    // vnect automatically checks off with ul
    const fourthCheckbox = document.getElementById('4');
    const secondCheckbox = document.getElementById('2');

    if (fourthCheckbox && secondCheckbox) {
        console.log(`Fourth checkbox checked: ${fourthCheckbox.checked}`);
        console.log(`Second checkbox checked: ${secondCheckbox.checked}`);

        if (fourthCheckbox.checked && !secondCheckbox.checked) {
            secondCheckbox.checked = true;
            console.log('Automatically checked vnect because ul is checked');
        }
    } else {
        console.log('Fourth or second checkbox not found');
        if (!fourthCheckbox) console.log('Fourth checkbox (ID: 4) not found');
        if (!secondCheckbox) console.log('Second checkbox (ID: 2) not found');
    }

    return checkedBoxes;
}


// random image loads on page load
function initializePage() {
    loadRandomImage();
    checkRandomCheckboxes();
    updateImage();
    updateActiveButtons();

    console.log("Page loaded with random permutation and checkboxes");
}

document.addEventListener('DOMContentLoaded', function () {
    initializePage();
});

// always check simple meta v2
function checkFirstCheckbox() {
    const firstCheckbox = document.getElementById('1');
    if (firstCheckbox) {
        firstCheckbox.checked = true;
        console.log('First checkbox (Simple Meta) automatically checked');

        // prevent unchecking
        firstCheckbox.addEventListener('change', function () {
            if (!this.checked) {
                this.checked = true;
                console.log("Simple Meta checkbox was prevented from being unchecked.");
            }
        });
    }
}


// debug automatic vnectomy selection
function handleCheckboxChange(event) {
    const checkbox = event.target;
    console.log(`Checkbox changed: ID=${checkbox.id}, Value=${checkbox.value}, Checked=${checkbox.checked}`);

    // no change to images if simple meta is clicked
    if (checkbox.id === '1') {
        console.log("First checkbox changed - skipping image update");

        // Only update active states, not image
        updateActiveButtons();
        updateCheckboxActiveStates();
        updateLabels();

        // prevent simple meta from being unchecked
        if (!checkbox.checked) {
            checkbox.checked = true;
            console.log("Prevented unchecking of first checkbox");
        }
        return;
    }

    // automatically check vaginectomy if ul is selected
    if (checkbox.id === '4' && checkbox.checked) {
        const secondCheckbox = document.getElementById('2');
        if (secondCheckbox) {
            secondCheckbox.checked = true;
            console.log('Fourth checkbox selected - automatically checked second checkbox');

            setTimeout(() => {
                secondCheckbox.dispatchEvent(new Event('change'));
            }, 10);
        } else {
            console.log('Second checkbox not found when fourth was checked');
        }
    }

    updateImage();
    updateActiveButtons();
    updateCheckboxActiveStates();
    updateLabels();
}

// load random permutation on page load
function loadRandomImage() {
    console.log("Loading random image permutation...");

    const randomPermutation = getRandomPermutation();

    state.tone = randomPermutation.tone;
    state.size = randomPermutation.size;

    console.log("Random permutation selected:", state);

    updateActiveButtons();
    updateImage();
    updateLabels();
}


// show active button states on page load and load random image
document.addEventListener('DOMContentLoaded', function () {
    loadRandomImage();

    console.log("Page loaded with random permutation");
});


//--------------------------------------------------------------------------------------------------
// user selection restrictions
//--------------------------------------------------------------------------------------------------


// users can't uncheck simple meta (delete if pre-op images are added)
document.addEventListener('DOMContentLoaded', function () {
    const firstCheckbox = document.getElementById('1');
    if (firstCheckbox) {
        firstCheckbox.addEventListener('change', function () {
            if (!this.checked) {
                this.checked = true;
                console.log("Simple Meta checkbox was prevented from being unchecked.");
            }
        });
    }
});

// make sure simple meta is checked off on page load (redundant just to be safe)
function checkFirstCheckbox() {
    const firstCheckbox = document.getElementById('1');
    if (firstCheckbox) {
        firstCheckbox.checked = true;
        console.log('First checkbox (Simple Meta) automatically checked');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    checkFirstCheckbox();
});


// stop image update from occuring if first checkbox is clicked (simple meta always on)
document.addEventListener('DOMContentLoaded', function () {
    const firstCheckbox = document.getElementById('1');
    if (firstCheckbox) {
        
        firstCheckbox.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        
        firstCheckbox.addEventListener('change', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.checked = true; // Force it to stay checked
            console.log("First checkbox prevented from being unchecked");
            return false;
        });
    }
});


// debug simple meta lock and automatic vnectomy selection
function handleCheckboxChange(event) {
    const checkbox = event.target;
    console.log(`Checkbox changed: ID=${checkbox.id}, Value=${checkbox.value}, Checked=${checkbox.checked}`);

    // no change to images if simple meta is clicked
    if (checkbox.id === '1') {
        console.log("First checkbox changed - skipping image update");

        // Only update active states, not image
        updateActiveButtons();
        updateCheckboxActiveStates();
        updateLabels();

        // prevent simple meta from being unchecked
        if (!checkbox.checked) {
            checkbox.checked = true;
            console.log("Prevented unchecking of first checkbox");
        }
        return;
    }

    // automatically check vaginectomy if ul is selected
    if (checkbox.id === '4' && checkbox.checked) {
        const secondCheckbox = document.getElementById('2');
        if (secondCheckbox) {
            secondCheckbox.checked = true;
            console.log('Fourth checkbox selected - automatically checked second checkbox');

            setTimeout(() => {
                secondCheckbox.dispatchEvent(new Event('change'));
            }, 10);
        } else {
            console.log('Second checkbox not found when fourth was checked');
        }
    }

    updateImage();
    updateActiveButtons();
    updateCheckboxActiveStates();
    updateLabels();
}



