$(document).ready(function(){
    // Image animation
    $('.moving-image').each(function(index) {
        var delay = index * 1000; // Adjust delay as needed
        $(this).delay(delay).animate({left: '100%'}, 5000, 'linear');
    });

    // Pop-up window
    $('.moving-image').click(function(){
        $('#popup').show();
    });

    $('.close').click(function(){
        $('#popup').hide();
    });
});
