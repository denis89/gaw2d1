soundManager.setup({
  url: 'swf/',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    sttropezListeners();
    albListeners();
    sunListeners();

  } 
}); 
    // Ready to use; soundManager.createSound() etc. can now be called.
//
  //  playButton.addEventListener("click", function(){
  //   soundManager.createSound({id:'drumloop',
  //    url:'/sounds/drumloop.mp3'});
//
  //  var playButton = document.getElementById('playbutton//');
//

    var sttropezListeners = function(){
      document.getElementById('grid-elementc').addEventListener('click', function(){
        playSound('sttropez.mp3');
      })   
    }

var sunListeners = function(){
      document.getElementById('grid-elementd').addEventListener('click', function(){
        playSound('sun.mp3');
      })   
    }

var albListeners = function(){
      document.getElementById('grid-elementg').addEventListener('click', function(){
        playSound('alb.mp3');
      })   
    }
   

    
  function playSound(file) {
    var file = soundManager.createSound({
      id: file,
      url: 'sounds/' + file});
    file.play();  // play() from the soundmanager2.js
    }
