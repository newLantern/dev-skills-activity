$('.blueBox').click(function(){
	window.location = "http://cleanleafcreative.com";
});
$('.close').click(function(event){
	event.preventDefault();
	$(this).parent().hide();
});