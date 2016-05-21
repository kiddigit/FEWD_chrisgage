$(document).ready(function(){
	
$("#1st").click(function(){
    $("#choice1").show();
    $('#intro').hide();
    $('body').css("background-color","#ccffcc");
    $("#1st").hide();
	$("#2nd").hide();
	$('body').css("padding","200px");
	$("#top").hide();
	});
	
$("#2nd").click(function(){
    $("#choice2").show();
    $('#intro').hide();
    $('body').css("background-color","#ccff33");
    $("#1st").hide();
	$("#2nd").hide();
	});
	
$("#1a").click(function(){
    $("#choiceA").show();
    $('#choice1').hide();
    $('body').css("background-color","#00cc99");
    $("#1a").hide();
	$("#1b").hide();
	});
	
$("#1b").click(function(){
    $("#choiceEE").show();
    $('#choice1').hide();
    $('body').css("background-color","#ff9999");
    $("#1a").hide();
	$("#1b").hide();
	});


$("#2a").click(function(){
    $("#choiceC").show();
    $('body').css("background-color","#ff9999");
    $("#2a").hide();
	$("#2b").hide();
	});
	
$("#2b").click(function(){
    $("#choiceD").show();
    $('body').css("background-color","#6699ff");
    $("#2a").hide();
	$("#2b").hide();
	});


$("#3a").click(function(){
    $("#choiceE").show();
    $('body').css("background-color","#ffff66");
    $("#3a").hide();
	$("#3b").hide();
	});
	
$("#3b").click(function(){
    $("#choiceF").show();
    $("#3a").hide();
	$("#3b").hide();
	});


$("#4a").click(function(){
    $("#choiceG").show();
    $("#4a").hide();
	$("#4b").hide();
	});
	
$("#4b").click(function(){
    $("#choiceH").show();
    $("#4a").hide();
	$("#4b").hide();
	});


$("#5a").click(function(){
    $("#choiceI").show();
    $("#5a").hide();
	$("#5b").hide();
	});
	
$("#5b").click(function(){
    $("#choiceJ").show();
    $("#5a").hide();
	$("#5b").hide();
	});


$("#6a").click(function(){
    $("#choiceK").show();
    $("#6a").hide();
	$("#6b").hide();
	});
	
$("#6b").click(function(){
    $("#choiceL").show();
    $("#6a").hide();
	$("#6b").hide();
	});


$("#7a").click(function(){
    $("#choiceM").show();
    $("#7a").hide();
	$("#7b").hide();
	});
	
$("#7b").click(function(){
    $("#choiceN").show();
    $("#7a").hide();
	$("#7b").hide();
	});

$("#8a").click(function(){
    $("#choiceO").show();
    $("#8a").hide();
	$("#8b").hide();
	});
	
$("#8b").click(function(){
    $("#choiceP").show();
    $("#8a").hide();
	$("#8b").hide();
	});

$("#9a").click(function(){
    $("#choiceR").show();
    $("#9a").hide();
	$("#9b").hide();
	});
	
$("#9b").click(function(){
    $("#choiceS").show();
    $("#9a").hide();
	$("#9b").hide();
	});

$("#11a").click(function(){
    $("#choiceT").show();
    $("#11a").hide();
	$("#11b").hide();
	});
	
$("#11b").click(function(){
    $("#choiceU").show();
    $("#11a").hide();
	$("#11b").hide();
	});
$("#12a").click(function(){
    $("#choiceV").show();
    $("#12a").hide();
	$("#12b").hide();
	});
	
$("#12b").click(function(){
    $("#choiceW").show();
    $("#12a").hide();
	$("#12b").hide();
	});

$("#13a").click(function(){
    $("#choiceX").show();
 /*   $("#13a").hide();*/
	$("#13b").hide();
	});

$("#14a").click(function(){
    $("#choiceY").show();
    $("#14a").hide();
	$("#14b").hide();
	});
$("#14b").click(function(){
    $("#choiceZ").show();
    $("#14a").hide();
	$("#14b").hide();
	});

$("#15a").click(function(){
    $("#choiceB").show();
    $("#15a").hide();
	$("#15b").hide();
	});

$("#16").click(function(){
    $("#choiceAA").show();
    $("#userInput").hide();
	$("#userInput").hide();
	});

$("whatYouFound").click(function(){
    $("#choiceBB").show();
    $("#userMsg").hide();
	$("#userMsg").hide();
	});

$(document).ready(function() {
$("#boy").click(function() {
    $("#choiceB").show();
    $("#girl").hide();
	$("#boy").hide();
	$('#girlwarriorpic').hide(); 
    });
});

$(document).ready(function() {
$("#girl").click(function() {
    $("#choiceB").show();
    $('#1a').show();
    $('#1b').show();
	$("#boy").hide();
	$("#girl").hide();
	$('#boywarriorpic').hide(); 
    });
});


});

$(document).ready(function() {
$("#youDied").hide();
$( "#rollDice" ).click(function() {
        var number = 1 + Math.floor(Math.random() * 10);
        $('#storenumber').text(number);
        if(number < 3) {
	      	$("#youDied").show()
	  		$("#youLived").hide();
  		} else {
	      	$("#youLived").show()
	      	$("#youDied").hide();
	    }
           $(this).hide(); 
    });
});






function changeName(){
	var userInput = document.getElementById('userInput').value;
	
	if ($.trim($("#userInput").val()) === "") {
        alert('You did not fill in anything');
        return false;
    } else{

	document.getElementById('name').innerHTML = ('Well fought,') + ' ' + userInput + '.';
	$('#choiceAA').show();
}
};




$(document).ready(function () {
	var arrows = 5;
$('#13a').click(function(){
	alert('You have ' + arrows + ' arrows!');
	var shot = prompt('How many arrows would you like to shoot?'/*, '1'*/);
	var shotten = parseInt(shot);
if(isNaN(shotten)){
    alert('You must enter a valid number of arrows!');
} else if(shotten > arrows){
    alert('Sorry, but you have only ' + arrows + ' arrows.  You cannot shoot ' + shotten + ' arrows!');
} else if(shotten < 0){
    alert('Sorry, but you cannot shoot less than 0 arrows!');
} else if(shotten == 3){
	alert("You won! You've killed the half-elf")
	$('#choiceW').show();
} else {
    arrows -= shotten;
    alert('Now you have ' + arrows + ' arrows!');
if (arrows == 0) {
    alert('You sly bastard, you! You won! You defeated your foe!')
      $('#choiceW').show();
      $('#13a').hide();
  }
} 
});
});



$(document).ready(function () {
	$('#15a').click(function(){
	var myArray = ['a knife', 'a sword', 'a potato'];    
	var rand = myArray[Math.floor(Math.random() * myArray.length)];
		document.getElementById('rand').innerHTML = ('You got') + ' ' + rand + '.';
	$('#choiceDD').show();
	});
});

function whatYouFound(){
    var stuff = ["1. Banana<P>", "2. Bigby's Crushing Hand spell<P>", "3. Bag of gold<P>", "4. Crossbow<P>"];
    var a = "The orc moves in and takes an item of yours.";
    document.getElementById("demo").innerHTML = stuff.join("") + a;
	$('#choiceBB').show();
};


function showMsg(){
  var userInput = document.getElementById('userInput2').value;
};

function chooseOne(){
    var userInput = document.getElementById('userInput2').value;
    var stuff = ["Banana", "Bigby's Crushing Hand spell", "Bag of gold", "Crossbow"];

    if ($.trim($("#userInput2").val()) === "") {
        alert('You did not fill in anything');
        return false;
    }
    else if (userInput == 'Banana') {
    	alert('You are cool.');document.getElementById('demo2').innerHTML = 'He took your ' + userInput + ". That's embarassing.";
    $('#choiceCC').show();
    } 
    else if (userInput == "Bigby's Crushing Hand spell") {
    	alert('You are cool.');document.getElementById('demo2').innerHTML = 'He took your ' + userInput + ". That's embarassing.";
    $('#choiceCC').show();
    } 

    else if (userInput == 'Bag of gold') {
    	alert('You are cool.');document.getElementById('demo2').innerHTML = 'He took your ' + userInput + ". That's embarassing.";
    $('#choiceCC').show();
    } 
    else if (userInput == 'Crossbow') {
    	alert('You are cool.');document.getElementById('demo2').innerHTML = 'He took your ' + userInput + ". That's embarassing.";
    $('#choiceCC').show();
    } 
    else if (userInput !== 'Banana', "Bigby's Crushing Hand spell", 'Bag of gold', 'Crossbow') {
    	alert('You are not cool. Enter one of the items only. Type carefully. (Or just copy and paste it.)');
    }; 
/*    else {
    	document.getElementById('demo2').innerHTML = 'He took your ' + userInput + ". That's embarassing.";
    $('#choiceCC').show();
	}*/
};

  var Characters =
    ["Gold Tooth Warrior","Killer Curmudgeon","Magic Mike, the Magician","Sneaky Pete (you'd be a thief)","Sheena Sorcerer","Lady Blood Shall Be Spilt","Sir Death to All"] ;

   function SetName() {
    var characterNumber = document.getElementById("character-numbers").value ;
    var dwarf = Characters[characterNumber] ;
    document.getElementById("character-name").innerHTML = 'You could have been called' + ' ' + dwarf ;
   }

   document.getElementById("character-numbers").onclick = SetDwarf ;










/*$(document).ready(function () {
    $('#13a').click(function(){
		var arrows = 5;
		alert('You have ' + arrows + ' arrows!');
		var shot    = prompt('How many arrows would you like to shoot?', '1');
		var shotten  = parseInt(shot);

if(isNaN(shotten)){
    alert('You must enter a valid number of arrows!');

} else if(shotten > arrows){
    alert('Sorry, but you have are only ' + arrows + ' arrows.  You can not shoot ' + shotten + ' arrows!');

} else if(shotten < 0){
    alert('Sorry, but you cannot shoot less than 0 arrows!');

} else if(shotten == 5){
    alert('All done!');

} else if(shotten == 3){
	alert("You won! You've killed the half-elf")
	$('#choiceW').show();
}   

  else {
   arrows -= shotten;
   alert('Now you have ' + arrows + ' arrows!');
} 

});
});
*/
