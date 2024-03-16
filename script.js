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
            clickedColumn.removeClass("expanded");
            // Restore all columns to their initial state
            $(".column").removeClass("expanded compressed");
            $(".column-title").removeClass("vertical");
            // Hide all images except the first one in each column
            $(".column .images img").not(":first-child").hide();
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
                // Hide images when column is compressed
                if (isCompressed) {
                    $(this).find(".images img").hide();
                } else {
                    // Show only the first image when the column is expanded
                    $(this).find(".images img").hide().first().show();
                }
            });
        }
    }

    // Click event handler for columns
    $(".column").click(function(){
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

    // Hide all images in each column except for the first one, and mark it as active
    $(".column .images img").hide().first().addClass("active").show();

    // Call the cycleImages function every 1 second
    setInterval(cycleImages, 1000);
});
