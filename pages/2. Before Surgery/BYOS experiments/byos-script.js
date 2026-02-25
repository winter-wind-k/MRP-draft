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
