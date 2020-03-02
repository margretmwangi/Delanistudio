$(document).ready(function() {
    //Portfolio label on hover effect
    $('#portfolio span').addClass("hide");
    $('#portfolio .doings').hover(function() {
      /*fade in code*/
      $(this).find('span').removeClass('hide');
      $(this).find('.doings').addClass('imageEffect');
    }, function() {
      /*fade out code*/
      $(this).find('span').addClass('hide');
      $(this).find('.doings').removeClass('imageEffect');
    });
    //SubmissionForm
    $('#submit').submit(function(event) {
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
      if (name == "" || email == "" || message == "") {
        $("#message").text("Please fill in all the fields with correct data.");
        $('#message').removeClass("successful");
        $('#message').addClass("failed");
      } else {
        $("#message").text("Thank you " + name +  "Your message has been successfully submitted.");
        $('#message').removeClass("failed");
        $('#message').addClass("successful");
      }
      event.preventDefault();
    });
      //What we do description toggle
      $(".first").click(function() {
        $(".illustration1").toggle();
        $(".details1").toggle();
      });
      $(".second").click(function() {
        $(".illustration2").toggle();
        $(".details2").toggle();
      });
      $(".third").click(function() {
        $(".illustration3").toggle();
        $(".details3").toggle();
      });
    //Scroll to 'About Section' feature on mouse click
    $(function() {
      $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 250, 'linear');
      });
    });
  });
  function thankYou() {
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var message= document.getElementById("message").value;

    if ( name == "" || email == "" || message == ""){
      alert(Pleaseinputyourinformation);
    }
    else {
      alert(thankYouyourmessageissent);
    }
  }
