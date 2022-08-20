"use strict";

$(document).ready(function () {
  // edit modal expend
  $(".viewExpandMore").click(function (e) {
    e.preventDefault();
    console.log("aaa");
    $(".viewExpandLess").hide();
    $(".viewExpandLess").toggleClass("viewExpandLessActive");
    $(".vieweModalFooter").toggleClass("vieweModalFooterActive");
  });
});
//# sourceMappingURL=all.js.map
