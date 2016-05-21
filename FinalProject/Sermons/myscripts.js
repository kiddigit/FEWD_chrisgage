/*
<!-- This is for the top menu -->*/

  $(function() {
  $('#about').on("click", function() {
    
    $("#main_text").load("about.html");
  });
});

  $(function() {
  $('#mark').on("click", function() {
    
    $("#main_text").load("mark.html");
  });
});

  $(function() {
  $('#matthew').on("click", function() {
    
    $("#main_text").load("matthew.html");
  });
});

  $(function() {
  $('#luke').on("click", function() {
    $("#main_text").load("luke.html");
  });
});

  $(function() {
  $('#john').on("click", function() {
    $("#main_text").load("john.html");
  });
});




/*
<!-- This is for the TOC on the right-hand nav -->
*/
$(document).ready(function() {
            $('[id="nav_1"]').click(function(event){
               $.get("newContent.html",
                  function(data) {
                     $('#main_text').html(data);
                  }
               );
            });
         });


/*
$(function() {
  $('[id="nav_1"]').on("click", function() {
    var letter = this.id.split('_')[1];
    $("#main_text").load("newContent.html .one, textarea");
  });
});*/

$(function() {
  $('[id="nav_a"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("john.html .two, #two1");
  });
});

$(function() {
  $('[id="nav_b"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("luke.html .two, #two1");
  });
});

$(function() {
  $('[id="nav_c"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("luke.html .three, #three1");
  });
});

$(function() {
  $('[id="nav_d"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("matthew.html .one, #one1");
  });
});

$(function() {
  $('[id="nav_e"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("matthew.html .two, #two1");
  });
});

$(function() {
  $('[id="nav_f"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("john.html .three, #three1");
  });
});

$(function() {
  $('[id="nav_g"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("matthew.html .three, #three1");
  });
});

$(function() {
  $('[id="nav_h"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("mark.html .three, #three1");
  });
});

$(function() {
  $('[id="nav_i"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("mark.html .one, #one1");
  });
});

$(function() {
  $('[id="nav_j"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("john.html .one, #one1");
  });
});

$(function() {
  $('[id="nav_k"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("mark.html .two, #two1");
  });
});

$(function() {
  $('[id="nav_l"]').on("click", function() {
/*    var letter = this.id.split('_')[1];
*/    $("#main_text").load("luke.html .one, #one1");
  });
});