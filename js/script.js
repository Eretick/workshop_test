// JavaScript Document
var idImgCarousel = 1;
var maxImgCarousel=4;
var minImgCarousel=1;

$('.right').click(function() {
	idImgCarousel++;
	if(idImgCarousel>maxImgCarousel) idImgCarousel=1;
	$(".carousel").attr("src", "images/carousel/"+idImgCarousel+".jpg");
});

$('.left').click(function() {
	idImgCarousel--;
	if(idImgCarousel<minImgCarousel) idImgCarousel=4;
	$(".carousel").attr("src", "images/carousel/"+idImgCarousel+".jpg");
});
