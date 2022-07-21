var adaptiveButton = document.querySelector('#adaptiveButton');
var adaptiveMenu = document.querySelector('#adaptiveMenu');
adaptiveButton.addEventListener('click', adaptiveMenuFunc);
function adaptiveMenuFunc() {
  adaptiveMenu.classList.toggle('adaptive_block_class');
}
//Smooth Scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
function toggle() {
  var a = document.getElementById("style1");
  a.x = 'dark' == a.x ? 'style' : 'dark'; // short if
  a.href = a.x + '.css';
  var theImg = document.getElementById("sideImage"),
  x = theImg.src.split("/"),
  t = x.length-1,
  y = x[t];

if(y == 'side.webp')
{
theImg.src='./Images/side-white.webp'
}

if(y == 'side-white.webp')
{
theImg.src='./Images/side.webp'
}
}

const button = document.getElementsByClassName('link-button')
button.onclick = () => {
  navigator.clipboard.writeText(window.location.href);
}



  
