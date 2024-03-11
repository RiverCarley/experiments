$(document).ready(function(){
    // Image animation
    $('.moving-image').each(function() {
        var randomTop = Math.floor(Math.random() * 80) + 10; // Random top position between 10% and 90%
        var randomWidth = Math.floor(Math.random() * 100) + 10; // Random width between 10% and 100%
        $(this).css({
            top: randomTop + '%',
            left: '-100%' // Start position off-screen to the left
        });
        animateImage($(this)); // Start animation for each image
    });

    // Function to animate image
    function animateImage(image) {
        var randomDuration = Math.floor(Math.random() * 8000) + 3000; // Random duration between 3000ms and 11000ms
        image.animate({left: '100%'}, randomDuration, 'linear', function() {
            // Calculate new random position
            var randomTop = Math.floor(Math.random() * 80) + 10; // Random top position between 10% and 90%
            image.css({
                top: randomTop + '%',
                left: '-100%' // Start position off-screen to the left
            });
            animateImage(image); // Restart animation
        });
    }

    // Pop-up window
    $('.moving-image').click(function(){
        $('#popup').show();
    });

    $('.close').click(function(){
        $('#popup').hide();
    });
});
