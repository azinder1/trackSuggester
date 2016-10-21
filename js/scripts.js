//==============BL=========================

function yourTrack (question1, question2, question3, question4, question5, question6) {
  var sum = question1 + question2 + question3 + question4 + question5 + question6;

  if (sum) {
    if (sum >= 6 && sum < 14) {
      return "#css-Design";
    }
    else if (sum >= 14 && sum <19) {
      return "#ruby-Rails";
    }
    else {
      return "#c-Net";
    }
  }
  else {
    alert ("Please fill out all the questions");
  }
};

//=================UI====================
$(document).ready(function() {
  $('#quiz form').submit(function(event){
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var question6 = parseInt($("input:radio[name=question6]:checked").val());

    event.preventDefault();
    $("#result").text(yourTrack(question1, question2, question3, question4, question5, question6));
  });
});
