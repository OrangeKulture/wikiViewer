$(document).ready(function() {

  //Random article click functionality
  $('#randomQ').on('click', function() {
    window.open('https://en.wikipedia.org/wiki/Special:Random')
  });

  // Search functionality pressing enter key.
  $('#query').on('keyup', function(val) {
    if (val.keyCode === 13) {
      var resp = $('#query').val();

      var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + resp + '&format=json&limit=3&callback=?';

      // API
      $.ajax({
        url: url,
        type: "GET",
        async: false,
        dataType: "json",
        success: function(data, status, jqXHR) {

          var title1 = data[1][0];
          var title2 = data[1][1];
          var title3 = data[1][2];

          var desc1 = data[2][0];
          var desc2 = data[2][1];
          var desc3 = data[2][2];

          var link1 = data[3][0];
          var link2 = data[3][1];
          var link3 = data[3][2];

          //Dynamic Content
          $('#article1 h3').text(title1);
          $('#article2 h3').text(title2);
          $('#article3 h3').text(title3);

          $('#article1 p').text(desc1);
          $('#article2 p').text(desc2);
          $('#article3 p').text(desc3);

          $('#article1').on('click', function() {
            window.open(link1);
          });
          $('#article2').on('click', function() {
            window.open(link2);
          });
          $('#article3').on('click', function() {
            window.open(link3);
          });

        }

      });

      // END API

      //  Article animations

      $('#article1').css('display', 'block').addClass('animated bounceInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated bounceInDown');
      });

      $('#article2').css('display', 'block').addClass('animated bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated bounceInLeft');
      });

      $('#article3').css('display', 'block').addClass('animated bounceInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated bounceInUp');
      });
    } //end if statement 

  }); // end enter key press

  //CSS Animations

  $('#query').on('click', function() {
    $('#query').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated bounce');
    });
  });

});