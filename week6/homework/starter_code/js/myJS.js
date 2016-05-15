$(document).ready(function(){
	$('.readmore').click(function(e){
		e.preventDefault();
		$('#show-this-on-click').slideDown();
		$(this).hide();
		$('.readless').show();
	});
});


$(document).ready(function(){
	$('.readless').click(function(e){
		e.preventDefault();
		$('#show-this-on-click').slideUp();
		$(this).hide();
		$('.readmore').show();
	});
});





$(document).ready(function(){
	$('.learnmore').click(function(e){
		e.preventDefault();
		$('#learnmoretext').slideDown();
		$(this).hide();
		$('.readmore').show();
	});
});