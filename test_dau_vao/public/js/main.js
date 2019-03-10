$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 2500);
        return false;
    });

});


//Load json
$(document).ready(function(){
    $.getJSON('data.json', function(data) {
     $.each(data, function(key, value){


      
       $('.obj1').append('<div id="'+value.id+'" class="read col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" style="float: left;"><img src="'+value.image+'"   /> <h5>'+value.title+'</h5><p>'+value.content+'</p><h6>SEE MORE</h6></div>');
        
          
    
     });

    });
  });
//hien search
function hien() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
        $("#doi").removeClass("fa-search");
        $("#doi").addClass("fa-times");

    } else {
        x.style.display = "none";
        $("#doi").addClass("fa-search");
        $("#doi").removeClass("fa-times");
    }
}
//search
$(document).ready(function(){
     $.ajaxSetup({ cache: false });
     $('#search').keyup(function(){
      $('#result').html('');
      $('#state').val('');
      var searchField = $('#search').val();
      var expression = new RegExp(searchField, "i");
      $.getJSON('data.json', function(data) {
       $.each(data, function(key, value){
        if (value.title.search(expression) != -1 )
        {
         $('#result').append('<li id="'+value.id+'" class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40" class="img-thumbnail" /> '+value.title+' </li>');
        }

        
        

         
       });   
      });
     });//hien icon va tieu de



       $('#result').on('click', 'li', function() {

                var id = $(this).attr('id');

                $.getJSON('data.json', function(data) {
                   $.each(data, function(key, value){
                    
                    if ($('.read').eq(key).hasClass('active1')) {
                      $('.read').eq(key).removeClass('active1');
                    }

                    if ($('.read').eq(key).attr('id') == id) {
                        $('.read').eq(key).addClass('active1');
                        var numberOffset =  $('.read').eq(key).offset().top;
                        $('html').animate({ scrollTop: numberOffset }, 600);
                    }

                   });   
                  });

                var click_text = $(this).text().split('|');
                $('#search').val($.trim(click_text[0]));
                $("#result").html('');
      });//end click li

    });

//auto_play
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'autohide': 1,
            'wmode': 'opaque',
            'showinfo': 0,
            'loop': 1,
            'mute': 0,
            //'start': 15,
            //'end': 110,
            'playlist': 'NQKC24th90U'
        },
        videoId: 'JqWuzvSMs08',
        events: {
            'onReady': onPlayerReady
        }
    });

}

function onPlayerReady(event) {
    event.target.mute();
    $('#text').fadeIn(400);
   
}


$(window).scroll(function() {
    var viewport = $(window).scrollTop() + $(window).innerHeight();

    var min = $('.auto_p').offset().top + ($('iframe').innerHeight() / 2);
    var max = $('.gioithieu2').offset().top + $(window).innerHeight() - ($('iframe').innerHeight() / 2);
      if (viewport >= min && viewport <= max) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
   
});
//up numbers
 function numberChange(){
 
                        $('#users').animateNumber({ number: 1643 },1000,);
                        $('#projects').animateNumber({ number: 277 },1000);
                        $('#members').animateNumber({ number: 78 },1000);
                        $('#awards').animateNumber({ number: 109 },1000);
                                

}
var a = 0;
        $(window).scroll(function() { 
                                
                              var oTop = $('.ketqua').offset().top - window.innerHeight;
                              if (a == 0 && $(window).scrollTop() > oTop) {
                                numberChange();
                                a = 1;
                              }
        });
    
//menu mobile
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



//<!-- button to top-->
// When the user scrolls down 20px from the top of the document, show the button
/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}*/