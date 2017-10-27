function divCreate() {
	var n = prompt("Input size of  the notepad");
	$('div.table').remove();
	for(var i = 0; i < n*n; i++){
		$('#main').append("<div class='table'>");
		$('.table').height($('#main').height()/n+"px").width( $('#main').width() / n+"px");
	}

}

$(document).ready(function(){
	for(var i = 0; i < 16*16; i++){
		$('#main').append("<div class='table'>");
		$('.table').height($('#main').height()/16+"px").width( $('#main').width() / 16+"px");
	}
	$('button').on('click', function(){
		divCreate();
		$('.table').on('mouseenter', function(){
	$(this).css('background','#000');
	});
	
	});
	$('.table').on('mouseenter', function(){
	$(this).css('background','#000');
	});
	
});