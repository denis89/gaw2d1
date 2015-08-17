soundManager.setup({
  url: 'swf/',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    lcListeners();
    animalsListeners();
    sttropezListeners();
    sunListeners();
    likemadoListeners();
    rattleListeners(); 
    albListeners();
    justListeners();
    countListeners();

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

var lcListeners = function(){
      document.getElementById('grid-elementa').addEventListener('click', function(){
        playSound('lc.mp3');
      })   
    }

var animalsListeners = function(){
      document.getElementById('grid-elementb').addEventListener('click', function(){
        playSound('animals.mp3');
      })   
    }


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


var likemadoListeners = function(){
      document.getElementById('grid-elemente').addEventListener('click', function(){
        playSound('likemado.mp3');
      })   
    }

var rattleListeners = function(){
      document.getElementById('grid-elementf').addEventListener('click', function(){
        playSound('rattle.mp3');
      })   
    }

var albListeners = function(){
      document.getElementById('grid-elementg').addEventListener('click', function(){
        playSound('alb.mp3');
      })   
    }

var justListeners = function(){
      document.getElementById('grid-elementh').addEventListener('click', function(){
        playSound('just.mp3');
      })   
    }

var countListeners = function(){
      document.getElementById('grid-elementi').addEventListener('click', function(){
        playSound('count.mp3');
      })   
    }



    
  function playSound(file) {
    var file = soundManager.createSound({
      id: file,
      url: 'sounds/' + file});
    file.play();  // play() from the soundmanager2.js
    }
