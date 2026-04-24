//-------------------------------------------------
// buttons to add skin tone and body size function
// coding help from Jake (thank you Jake)
//-------------------------------------------------

// state aspects for skin tone and body size
let state = {
    tone: "light",      //aspect1: "a",
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

    img.src = `/images/boys-tool-illustrations/${fileName}`;
    console.log("new src:", img.src);
}

//-------------------------------------------------
// skin tone button functions
//-------------------------------------------------

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

//-------------------------------------------------
// body size button functions
//-------------------------------------------------

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