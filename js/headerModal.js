// - HEADER MODAL - //

// Get the modalInfo
var modalInfo = document.getElementById("modalInfo");
// Get the button that opens the modalInfo
var btnInfo = document.getElementById("infoButton");
// Get the <span> element that closes the modalInfo
var spanInfo = document.getElementsByClassName("closeInfo")[0];
// When the user clicks on the button, open the modalInfo
btnInfo.onclick = function() {
  modalInfo.style.display = "block";
}
// When the user clicks on <span> (x), close the modalInfo
spanInfo.onclick = function() {
  modalInfo.style.display = "none";
}
// When the user clicks anywhere outside of the modalInfo, close it
window.onclick = function(event) {
  if (event.target == modalInfo) {
    modalInfo.style.display = "none";
  }
}

// - ATTRIBUTE MODAL - //
// Get the modalAttribute
var modalAttribute = document.getElementById("modalAttribute");
// Get the button that opens the modalAttribute
var btnAttribute = document.getElementById("attributeBtn");
// Get the <span> element that closes the modalAttribute
var spanAttribute = document.getElementsByClassName("closeAttribute")[0];
// When the user clicks on the button, open the modalAttribute
btnAttribute.onclick = function() {
  modalAttribute.style.display = "block";
}
// When the user clicks on <span> (x), close the modalAttribute
spanAttribute.onclick = function() {
  modalAttribute.style.display = "none";
}
// When the user clicks anywhere outside of the modalAttribute, close it
window.onclick = function(event) {
  if (event.target == modalAttribute) {
    modalAttribute.style.display = "none";
  }
}