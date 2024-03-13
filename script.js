$(document).ready(function(){
    $(".column").click(function(){
        $(this).toggleClass("expanded");
        $(".column").not(this).removeClass("expanded");

        if ($(this).hasClass("expanded")) {
            $(this).find(".images img").click(function(){
                var imageUrl = $(this).attr("src");
                $("#expanded-image").attr("src", imageUrl);
                $("#popup").show();
            });
        } else {
            $(".images img").off("click"); // Remove click event handler when column is not expanded
        }
    });

    $(".close").click(function(){
        $("#popup").hide();
    });
});
