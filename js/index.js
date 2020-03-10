$(function() {
  $(".bookDiv").each(function(index, value) {
    var imgWidth = 0;
    $(this)
      .find("img")
      .each(function() {
        imgWidth += $(this).width();
      });
    console.log(imgWidth);
  });

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
      var bookId = $(this).attr("sample");
      //   Hash.go("book.html");
      window.location.href = "book.html" + "?bookId=" + bookId;
    });
});
