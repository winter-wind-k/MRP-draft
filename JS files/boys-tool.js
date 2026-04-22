// changing button from no text to check 
// https://stackoverflow.com/questions/10671174/changing-button-text-onclick 

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


// labels toggle function 
// labels ID and class         id="boys-labels"         class="boys-labels-class"
// toggle switch ID and class  id="boys-labels-toggle"  class="labels-toggle"   


const labelsToggle = document.querySelector("#boys-labels-toggle")
const boysLabels = document.querySelector("#boys-labels")

if (labelsToggle && boysLabels) {
    const syncBoysLabels = () => {
        boysLabels.classList.toggle("boys-labels-class", !labelsToggle.checked);
    };

    labelsToggle.addEventListener("change", syncBoysLabels);
    syncBoysLabels();
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



