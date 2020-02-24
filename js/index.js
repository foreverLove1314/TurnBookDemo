$(function() {
  $(".sample")
    .hover(
      function() {
        $(this).addClass("hover");
      },
      function() {
        $(this).removeClass("hover");
      }
    )
    .click(function() {
      //   Hash.go("book.html");
      window.location.href = "book.html";
    });
});
