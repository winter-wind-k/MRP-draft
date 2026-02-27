console.log("connected")

//Button for example label test - functional
const testButton = document.querySelector("#test-button")
const exampleLabel = document.querySelector("#example-label")

function toggleExampleLabel() {
    exampleLabel.classList.toggle("hidden-text");
}

testButton.addEventListener("click", toggleExampleLabel)


//Button for real label test (phallus)
const testButton2 = document.querySelector("#test-button2")
const phallusLabel = document.querySelector("#phallus-label-test")

function togglePhallusLabel() {
    phallusLabel.classList.toggle("phallus-text-test");
}

testButton2.addEventListener("click", togglePhallusLabel)


//Button for label on image
const testButton3 = document.querySelector("#test-button3")
const test3Labels = document.querySelector("#test3-labels")

function toggleLabelsTest3() {
    test3Labels.classList.toggle("test3-labels-class");
}

testButton3.addEventListener("click", toggleLabelsTest3);


//Toggle test 1 successful!
const test1Toggle = document.querySelector("#switch-test-1")
const test1Labels = document.querySelector("#toggle-test1-labels")

if (test1Toggle && test1Labels) {
    const syncTest1Labels = () => {
        test1Labels.classList.toggle("toggle-test1-labels-class", !test1Toggle.checked);
    };

    test1Toggle.addEventListener("change", syncTest1Labels);
    syncTest1Labels();
}


// declaring variables for new buttons
const visuals = document.querySelectorAll(".visual");

function setActiveVisual(visualNumber) {
    visuals.forEach(v => v.classList.remove("active"));


    const target = document.getElementById("visual-" + visualNumber);
    if (target) target.classList.add("active");
}


//button function with inline js (for now)
//works but only in one direction lol
function changeImageTest1() {
    let img = document.getElementById("light-skin-test1");
    img.src = "images/VT_image2_003.jpg";
}

//function for both buttons but not inline js
const startingImage = document.getElementById("light-skin-test3");
const lightButtonTest3 = document.getElementById("light-btn");
const darkButtonTest3 = document.getElementById("dark-btn");

lightButtonTest3.addEventListener("click", function() {
    startingImage.src = "images/sag_skinTone1_001.jpg";
});

darkButtonTest3.addEventListener("click", function() {
    startingImage.src = "images/VT_image2_003.jpg";
})

//adding image change to labeled image
const startingLabeledImage = document.getElementById("starting-labeled-image");
const lightButtonLabels = document.getElementById("light-btn-with-labels");
const darkButtonLabels = document.getElementById("dark-btn-with-labels");

lightButtonLabels.addEventListener("click", function() {
    startingLabeledImage.src = "images/sag_skinTone1_001.jpg";
});

darkButtonLabels.addEventListener("click", function() {
    startingLabeledImage.src = "images/VT_image2_003.jpg";
})
