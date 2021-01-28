/*======================== Drop Menu ========================*/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropUp").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropup-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

/*======================== TOP button ========================*/
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*======================== SIGN IN / UP ========================*/

window.onload = function() {
  navigator.id.watch({
    loggedInUser: null,
    on_login: function(assertion) {
      navigator.id.logout();
      document.getElementById('victory').style.display = 'inline';
      document.getElementById('try').style.display = 'none';
    },
    on_logout: function() { },
    on_ready: function() {
      document.getElementsByTagName('body')[0].className = '';
    }
  });
};

document.getElementById('auth').onclick = function() {
  navigator.id.request();
};
