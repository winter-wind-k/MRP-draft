// changing button from no text to check - changed how this works bc restyled as checkboxes
// https://stackoverflow.com/questions/10671174/changing-button-text-onclick 


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



