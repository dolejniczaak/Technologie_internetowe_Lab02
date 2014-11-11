$(document).ready(function(){
	$("h1").hide();
	$("h1").fadeIn(3000);
	$('.content').css('background-color', 'black');
	$("ul a:link").click(
	function(){
			var podstrona=$(this).attr('href');
			$("body").html('Ładuję...');
			$("body").load(podstrona);
			return false;
			});
	$(".content").append("<div class='nowy_div'><a href='Ogólne.html'><h2>Przejdź dalej!</h2></a></div>");
	$(".nowy_div").width('180px');
	$(".nowy_div").height('30px');
	$(".nowy_div").css('margin-left','540px');
	$(".nowy_div").css('background-color', '#BCCF02');
	$('.tekst').append('<p> Aby dowiedzieć się więcej ciekawych rzeczy na temat skanerów przejdź do kolejnej strony! </p>');
	$("#stopa").remove();
	$('p').css("color", "white");
	$('.stopka').append('<p> Ta strona jest stworzona w celach naukowych. </p>');
	$('h7').click(function() {
 		 $( this ).slideUp();
			});

images=['images/mg1.jpg', 'images/mg2.jpg', 'images/mg3.jpg', 'images/mg4.jpg'];
 	$("#w_przod").click(function(){
	nastepny_obraz();
});

	$("#wstecz").click(function(){
	poprzedni_obraz();
});
	function aktualny_obraz() {
		i = jQuery.inArray($('#galeria').attr('src'), images);
		return i;}
	
	function zmien_obraz(i) {
		$('#galeria').animate({opacity: 0},
		 function() {
			$('#galeria').attr('src', images[i]);
			$('#box img').load(function() {
				$('#galeria').stop().animate({
					opacity: 1,
			});});});}

	function nastepny_obraz() {
		var i=aktualny_obraz();
		if (i < images.length - 1) {
			zmien_obraz(i + 1);
		} else {
			zmien_obraz(0);
		}};
		
	function poprzedni_obraz() {
		var i=aktualny_obraz();
		if (i==0) {
			zmien_obraz(images.length-1);
		} else {
			zmien_obraz(i-1);
		}};
			

	function zaladuj(div, file){
			$(div).load(file);
			return false;};
			});
	function slideSwitch() {
	    var $active = $('#slideshow IMG.active');
	
	    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');
	
	    var $next =  $active.next().length ? $active.next()
	        : $('#slideshow IMG:first');

	    $active.addClass('last-active');
	        
	    $next.css({opacity: 0.0})
	        .addClass('active')
	        .animate({opacity: 1.0}, 1000, function() {
	            $active.removeClass('active last-active');
	        });
}
	$(function() {
	    setInterval( "slideSwitch()", 5000 );
	});
	
	$(function(){
		$('#face-slider').hover(
			function(){	$('#face-slider').stop().animate({"right": "0"}, 1000); } ,
			function(){ $('#face-slider').stop().animate({"right": "-302px"}, 1000); }
		);
	});
	$('#contactform').on('submit', function(e) {
	    var $form = $(this), $submit = $('input[type="submit"]', $form);
	
	    e.preventDefault();
	
	    $('.form-error', $form).remove();
	
	    $.post($form.attr('action'), $form.serialize(), function(data) {
	        if (data === 'ok') {
	            $form.slideUp('fast', function() {
	                $form.after('<div class="form-success">Wiadomość została wysłana! Skontaktujemy się z Tobą jak tylko to będzie możliwe.</div>');
	            });
	
	            return true;
	        }

        $form.prepend('<div class="form-error">Wystąpił błąd podczas wysyłania formularza. Upewnij się, że wypełniłeś wszystkie pola i poprawnie rozwiązałeś działanie.</div>');
        return false;
    }, 'text');
});
