var logos = document.querySelectorAll('input[name=rate]');

document.addEventListener("click", function(event) {
  var targ = event.target.parentElement;
  if (!(targ && targ.classList.contains('star-widget'))) {
    logos.forEach(e => {
      if (e.checked) {
        e.checked = false;
      }
    });
  }
});
  