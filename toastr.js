$(".toast_btn > a.button").each(function() {
  if (!$(this).hasClass("active")) {
    $(this)[0].click();
  }
});
