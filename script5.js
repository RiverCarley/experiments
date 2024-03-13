$(document).ready(function(){
    // Hide all slides initially
    $('.slide').hide();

    // Show initial slide
    $('.slideshow .slide:first-child').show(); // Show only the first slide
    $('.gallery').hide();

    // Change slide on click
    $('.slide').click(function() {
        var currentSlide = $(this).index();
        $(this).hide().siblings('.slide').show();
    });

    // Open gallery on text click
    $('.text').click(function() {
        var galleryId = $(this).data('gallery');
        $('#' + galleryId).show().siblings('.gallery').hide();
        $('.slideshow').hide();
    });

    // Close gallery
    $('.close-gallery').click(function() {
        $('.gallery').hide();
        $('.slideshow').show();
    });
});
