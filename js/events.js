//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  })
}

function frameIt(){
  $(document).on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('form').on('key press', function(key){
    if(key.which == 71){
      alert('G was pressed')
    }
  })
}
