//==============BL=========================

function yourTrack (question1, question2, question3, question4, question5, question6);{
  var sum = question1 + question2 + question3 + question4 + question5 + question6;

  if (sum >=6 && sum < 13) {
    return "CSS-Desisgn";
  }
  else if (sum >=13 && sum <19) {
    return "Ruby-Rails";
  }
  else if(sum >=19 && sum<=24) {
    return "C-NET"
  }
};







//=================UI====================
(document).ready(function(){})
  $('#quiz form').submit(function(event){
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var question6 = parseInt($("input:radio[name=question6]:checked").val());
    $("#result").text(yourTrack(question1, question2, question3, question4, question5, question6));
    event.preventDefault();
  });
});
