function moveToSelected(element) {

    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
  
    $(selected).removeClass().addClass("selected");
    console.log($('.selected').attr('value'));
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(next).nextAll().removeClass().addClass('hideBottom');
    $(prev).prevAll().removeClass().addClass('hideTop');
  
  }
  
  // Eventos teclado
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          moveToSelected('prev');
          leftSidetext();
          break;
  
          case 39: // right
          moveToSelected('next');
          leftSidetext();
          break;
  
          default: return;
      }
      e.preventDefault();
  });
  
  $('#carousel div').click(function() {
    moveToSelected($(this));
    leftSidetext();
  });
  
  $('#prev').click(function() {
    moveToSelected('prev');
    leftSidetext();
  });
  
  $('#next').click(function() {
    moveToSelected('next');
    leftSidetext();
  });

  function leftSidetext(){
    var teams = [{
        name:'Tech Team',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        members:['Aloo', 'Gobhi', 'Matar']},
      {
        name:'Web Team',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        members:['Aloo', 'Gobhi', 'Matar']},
      {
        name:'EM Team',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        members:['Hihu', 'Lulu', 'Fifu']},
      {
          name:'Tech Writing Team',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          members:['Beep-Boop', 'Boop-Beep', 'Beepity-Bop']},
      {
          name:'RNIS ML Team',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          members:['Aloo', 'Gobhi', 'Matar', 'Nacho']},
      {
          name:'RNIS Hardware Team',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          members:['Aloo', 'Gobhi', 'Matar']},
      {
        name:'CP Team',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        members:['Aloo', 'Gobhi', 'Lul']} ];

    console.log($('.selected').attr('value'));
    var elemValue = $('.selected').attr('value');
    
    $('.team').html(teams[elemValue].name);
    $('.team-desc').html(teams[elemValue].desc);
    $('.name-list').html(teams[elemValue].members);

    var myNode = document.getElementsByClassName("name-list")[0];
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);}

    names = teams[elemValue].members;

            if(names.length!=0){
              names.forEach((name)=>{
                  var li = document.createElement('li');
                  li.textContent = name;
                  li.setAttribute('class', 'name-elem');
                  document.getElementsByClassName("name-list")[0].appendChild(li);
              });
      
  }

}