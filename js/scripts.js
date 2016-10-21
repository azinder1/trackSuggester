//==============BL=========================

function yourTrack (name1, name2, name3, name4, name5, name6;)
  var sum = name1 + name2 + name3 + name4 + name5 + name6;




//=================UI====================
(document).ready(function(){})
  $('#quiz form').submit(function(event){
    var name1 = parseInt($("input:radio[name]:checked").val());
    var name2 = parseInt($("input:radio[name=]:checked").val());
    var name3 = parseInt($("input:radio[name=]:checked").val());
    var name4 = parseInt($("input:radio[name=]:checked").val());
    var name5 = parseInt($("input:radio[name=]:checked").val());
    var name6 = parseInt($("input:radio[name=]:checked").val());
  event.preventDefault();
  });
});
