/*$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);
$('#blueButton').click(switchBlue);
$('#yellowButton').click(switchYellow);

function switchGray() {
  $('body').attr('class', 'gray');
}

function switchWhite() {
  $('body').attr('class', 'white');
}

function switchBlue() {
  $('body').attr('class', 'blue');
}

function switchYellow() {
  $('body').attr('class', 'yellow');
}

*/







$(function(){
	$('#switcher li').on('click', switchTheme);    /*<--Says: On click of switcher li, run SwitchTheme*/
});

function switchTheme (){
	var theme = $(this).attr('class');   /*<--- Here, "this" is holding the values of #switcher li*/
	$('body').attr('class', theme);
}
