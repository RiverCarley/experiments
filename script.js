$(document).ready(function(){
    $(".column").click(function(){
        console.log("Column clicked"); // Add this line for debugging
        $(this).toggleClass("expanded");
        $(".column").not(this).removeClass("expanded");
    });
});
