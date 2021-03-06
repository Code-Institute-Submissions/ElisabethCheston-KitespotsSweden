
// Get the modal
var modal = document.getElementById("infoModal");

// Get the button that opens the modal
var btn = document.getElementById("infoButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// - HEADER MODAL - //
/*
const openModalButtons = document.querySelectorAll('[js-modal-target]')
const closeModalButtons = document.querySelectorAll('[js-close-button]')
const overlaybox = document.getElementById('overlaybox')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
    button.addEventListerner('click', () => {
        const modal = button.closest('.modal')
        openModalButtons(modal)
    })
})
overlaybox.addEventListener('click', () => {
    constModals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlaybox.classList.remove('active')
}

function closeModal(modal) {
    modal.classList.remove('active')
    overlaybox.classList.remove('active')
}
*/