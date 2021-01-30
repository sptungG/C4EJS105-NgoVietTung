//Load plugin 
$(window).load(function(){
	$('#loadingImg').remove();
	$('.wrap').show();
	$('.wrap').pinterest({
		line: 4,
		gap: 15,
		responsive: [{
			maxWidth: 1244,
			minWidth: 769,
			line: 3,
			gap: 10
		},{
			maxWidth: 768,
			line: 2,
			gap: 20
		},{
			maxWidth: 400,
			line: 1,
			gap: 25
		}]
	});
});

//Get the initial image length 
var current_count = $('.wrap img').length;

//add pictures 
function addImg(){
	++current_count;
	if(current_count > 30){
		alert("Gallery is empty Q~Q");
	}
	else {
		$('.wrap').pinterest('add', 'images/' + current_count + '.jpg', "Dish·" + current_count, "....");
	}
	scrollBottom(3);
}

//Roll to the bottom 
function scrollBottom( speed ){
	var ScrollTop = $(document).scrollTop();
	var top = ScrollTop + speed;
	$(document).scrollTop(top);
	if(top < ($(document).height() - $(window).height())) {
		setTimeout(function(){scrollBottom(speed);},0);
	}
}
//Delete picture 
function DeleteImg() {
	var num = $('#num').val();
	$('.wrap').pinterest('remove', num);
}

//Modify the number of waterfall columns 
function resetLine(){
	var value = $('#line').val();
	if(value.indexOf('/') > -1){
		console.log(value);
		var line = value.split('/')[0];
		var gap = value.split('/')[1];
		$('.wrap').pinterest('reset', {
			line: line,
			gap: gap
		});
	}
	else {
		$('.wrap').pinterest('reset', value);
	}
}