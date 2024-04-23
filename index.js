
$( document ).ready(function() {
 
    // $("#btn-menu").toggleClass( 'hidden-menu', addOrRemoveOptional );
    var menubtn = document.getElementById('btn-menu');

    menubtn.addEventListener('click', function() {
        var rowmenu =  document.getElementById("btn-menu");
        // if(rowmenu.hasC)
        if ($( "#row-menu" ).hasClass('hidden-menu')) {
            $( "#row-menu" ).removeClass( 'hidden-menu');
        } else {
          $( "#row-menu" ).addClass( 'hidden-menu');
        }
        
    }, false);

    // videobtn
    // $('#play-video').on('click', function(e){
    //     e.preventDefault();
    //     $('#video-overlay').addClass('open');
    //     $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
    //   });
      
    //   $('.video-overlay, .video-overlay-close').on('click', function(e){
    //     e.preventDefault();
    //     close_video();
    //   });
      
    //   $(document).keyup(function(e){
    //     if(e.keyCode === 27) { close_video(); }
    //   });
      
    //   function close_video() {
    //     $('.video-overlay.open').removeClass('open').find('iframe').remove();
    //   };
    // videobtn


    // AOS
    AOS.init();
    // AOS

});