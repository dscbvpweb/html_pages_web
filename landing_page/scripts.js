function moveToSelected(element) {

    if (element == "right-card") {
      var selected = $(".selected").next();
    } else if (element == "left-card") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).nextAll();
    var prev = $(selected).prevAll();
  
    $(selected).removeClass().addClass("selected");
    // console.log($('.selected').attr('value'));
  
    $(prev).removeClass().addClass("left-card");
    $(next).removeClass().addClass("right-card");
}

$('#carousel div').click(function() {
    moveToSelected($(this));
    // leftSidetext();
  });
  
  $('#prev').click(function() {
    moveToSelected('left-card');
    // leftSidetext();
  });
  
  $('#next').click(function() {
    moveToSelected('right-card');
    // leftSidetext();
  });