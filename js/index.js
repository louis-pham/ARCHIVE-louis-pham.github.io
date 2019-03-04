if (!localStorage.getItem("night-mode")) {
  localStorage.setItem("night-mode", "false");
}
let nightModeOn = localStorage.getItem("night-mode") === "false" ? false : true;

$(document).ready(() => {
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
      () => workItem.addClass("animated " + fadeDirection),
      { offset: "75%" } // the larger the offset the earlier the section will appear
    );
  }

  $("#night-mode-toggle").click(() => {
    nightModeOn = !nightModeOn;
    localStorage.setItem("night-mode", nightModeOn);
    nightModeToggle();
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
