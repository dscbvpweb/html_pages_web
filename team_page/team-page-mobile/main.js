function moveItem(element) {
  var selected = element;

  var next = $(selected).nextAll();
  var prev = $(selected).prevAll();

  $(selected).toggleClass("moved");

  $(next).removeClass("moved");
  $(prev).removeClass("moved");
}

$(".box").click(function() {
  moveItem($(this));
});
