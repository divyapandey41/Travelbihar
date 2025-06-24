function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

// start popup
document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
   });
  
   document.getElementById('closePopup').addEventListener('click', function() {
   document.getElementById('popup').style.display = 'none';
   });
  // end popup
  
