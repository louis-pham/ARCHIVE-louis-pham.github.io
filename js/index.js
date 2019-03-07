if (!localStorage.getItem("night-mode")) {
  localStorage.setItem("night-mode", "false");
}
let nightModeOn = localStorage.getItem("night-mode") === "false" ? false : true;

$( document ).ready(function() {
  let lastScrollTop = 0;
  let lastScrollDirection;
  nightModeToggle();
  // get copyright year
  let currentYear = new Date().getFullYear();
  $("#copyright-year").text(currentYear);

  let workItems = $(".work-item");

  for (let i = 0; i < workItems.length; i++) {
    const workItem = $(workItems[i]);
    const fadeDirection =  (i % 2 == 0 ? "fadeInLeft" : "fadeInRight")
    workItem.css("opacity", 0);
    workItem.waypoint(
      function () { workItem.addClass("animated " + fadeDirection); },
      { offset: "75%" } // the larger the offset the earlier the section will appear
    );
  }

  $("#night-mode-toggle").click(function () {
    nightModeOn = !nightModeOn;
    localStorage.setItem("night-mode", nightModeOn);
    nightModeToggle();
  });

  $(window).scroll(function(event) {
    let st = $(this).scrollTop();
    let scrollDirection;
    if (st >= 0) { // prevents funny business with negative scrollTop on iOS touch screen when at the top of the page and pulling down and letting the page bounce back up, it would trigger a "down" scroll and thus causing the toggle icon to hide
      if (st > lastScrollTop){
          scrollDirection = "down";
          if (scrollDirection !== lastScrollDirection) {
            $("#night-mode-toggle").removeClass("nightModeFadeInRight");
            $("#night-mode-toggle").addClass("nightModeFadeOutRight");
          }
      } else if (st == lastScrollTop) {
         //do nothing
         //In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one
      } else {
        scrollDirection = "up";
        if (scrollDirection !== lastScrollDirection) {
          $("#night-mode-toggle").removeClass("nightModeFadeOutRight");
          $("#night-mode-toggle").addClass("nightModeFadeInRight");
        }
      }
      lastScrollTop = st;
      lastScrollDirection = scrollDirection;
    }
  });
});

function nightModeToggle() {
  if (nightModeOn) {
    $("body").addClass("night-mode");
    $("#night-mode-toggle i").addClass("fa-moon");
    $("#night-mode-toggle i").removeClass("fa-lightbulb");
  } else {
    $("body").removeClass("night-mode");
    $("#night-mode-toggle i").addClass("fa-lightbulb");
    $("#night-mode-toggle i").removeClass("fa-moon");
  }
}
