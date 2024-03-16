$(document).ready(function(){
    console.log("Document ready"); // Debug log
    
    // Add horizontal class to column titles initially
    $(".column-title").addClass("horizontal");

    // Function to handle column click
    function handleColumnClick(clickedColumn) {
        // Check if the clicked column is already expanded
        var isExpanded = clickedColumn.hasClass("expanded");
        if (isExpanded) {
            // Remove expanded class from the clicked column
          //  clickedColumn.removeClass("expanded");
            // Restore all columns to their initial state
            $(".column").removeClass("expanded").addClass("compressed");
            $(".column-title").removeClass("vertical");
        } else {
            // Toggle the expanded/compressed class on the clicked column
            clickedColumn.toggleClass("expanded").removeClass("compressed");
            // Collapse all columns except the clicked one
            $(".column").not(clickedColumn).removeClass("expanded").addClass("compressed");
            // Toggle the vertical class on the column title based on the column's state
            $(".column").each(function() {
                var isCompressed = $(this).hasClass("compressed");
                $(this).find(".column-title").toggleClass("vertical", isCompressed);
                // Toggle the hidden class on the text based on the column's state
                $(this).find(".text").toggleClass("hidden", isCompressed);
            });
        }
// Toggle the visibility of images based on the column's state
// Toggle the visibility and height of images based on the column's state
$(".column").each(function() {
    var isCompressed = $(this).hasClass("compressed");
    var isExpanded = $(this).hasClass("expanded");
    
    // Check if the column is expanded or in default state
    if (isExpanded || (!isCompressed && !isExpanded)) {
        // Show the images in the expanded column or default state
        $(this).find(".images img").show().css("height", "auto");
    } else {
        // Hide the images in compressed columns
        $(this).find(".images img").hide().css("height", 0);
    }
});


 }

    // Click event handler for columns
    $(".column").on("click touchstart", function(){
        handleColumnClick($(this));
    });

    // Ensure that no column is initially expanded or compressed
    $(".column").removeClass("expanded compressed");
    $(".column-title").removeClass("vertical");

    // Function to cycle images
    function cycleImages() {
        $(".column").each(function() {
            var activeImage = $(this).find(".images img.active");
            var nextImage = activeImage.next("img");
            if (nextImage.length === 0) {
                nextImage = $(this).find(".images img").first();
            }
            activeImage.removeClass("active").hide();
            nextImage.addClass("active").show();
            nextImage.appendTo($(this).find(".images"));
        });
    }

    // Hide all images initially
    $(".images img").hide();

    // Call the cycleImages function every 1 second
    setInterval(cycleImages, 1000);
});
//