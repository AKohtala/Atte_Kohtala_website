// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "mid-header") {
        x.className += " responsive";
      } else {
        x.className = "mid-header";
      }
    } 