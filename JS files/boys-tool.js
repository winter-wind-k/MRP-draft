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



//--------------------------------------------------------------------------------------------------
// blur button
//--------------------------------------------------------------------------------------------------

var blurButton = document.getElementById('blur-button');
var boysImages = document.querySelectorAll('.boys-tool-illustration');

blurButton.addEventListener('click', () => {
    boysImages.forEach(img => {
        img.classList.toggle('blurred-image');
    });

    const isBlurred = boysImages[0].classList.contains('blurred-image');
    blurButton.textContent = isBlurred ? 'Unblur Images' : 'Blur Images';

});


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
