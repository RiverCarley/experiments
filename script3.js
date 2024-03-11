$(document).ready(function(){
    var currentSlide = 1;
    var totalSlides = $('.slide').length;

    function showSlide(index) {
        $('.slide').hide();
        $('#slide' + index).show();
    }

    $('.slideshow').click(function(){
        currentSlide++;
        if (currentSlide > totalSlides) {
            currentSlide = 1;
        }
        showSlide(currentSlide);
    });

    // Show the first slide initially
    showSlide(currentSlide);
});
