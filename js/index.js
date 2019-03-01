$(document).ready(() => {
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
});
