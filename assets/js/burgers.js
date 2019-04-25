$(".submitBtn").click(function(){
console.log("btn click");
console.log($(".textbox").val());
});

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".submitBtn").click(function(){
        console.log("btn click");
        console.log($(".textbox").val());

          // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burger = {
      name: $(".textbox").val().trim(),
      devoured: false,
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
        });
        
        
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var burger = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });



  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
