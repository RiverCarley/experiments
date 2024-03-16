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
            // Show all images
            $(".images img").show();
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
            // Hide images when column is compressed
            $(".column.compressed .images img").hide();
        }
    }

    // Click event handler for columns
    $(".column").click(function(){
        handleColumnClick($(this));
    });

    // Ensure that no column is initially expanded or compressed
    $(".column").removeClass("expanded compressed");
    $(".column-title").removeClass("vertical");
});
