$(document).ready(function(){
    // Open popup on image click
    $('.overlay').click(function(){
        var src = $(this).siblings('img').attr('src');
        var text = $(this).find('.text').text();

        $('#expanded-image').attr('src', src);
        $('#expanded-text').text(text);

        $('.popup').show();
    });

    // Close popup
    $('.close').click(function(){
        $('.popup').hide();
    });
});
