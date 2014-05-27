/**************************************
  Main.js

  Project a div of n^2 size, full of n^2 inner divs.
  Hover over to color divs, as in an old-school
  etch-a-sketch.

***************************************/


// Project gameboard.
var newBoard = function() {
    var width = parseInt(prompt("How wide a board? [Under 20 to be safe.]"));
    var blockWidth = (Math.ceil($("#game-board").width() - 1) / width); 
    for (i = 1; i <= Math.pow(width, 2); i += 1) {
        $("#game-board")
        .append("<div class='block' style='background-color: #999'></div>");
         };
         $(".block").width(blockWidth);
         $(".block").height(blockWidth);
    $('#traditional').click()
};

// Hover Handlers
var hoverHandlers = {
    random: function() {
        $(this)
        .css("background-color", 
            "#" + Math.floor(Math.random()*16777215).toString(16));
        console.log($(this));
    },

    traditional: function() {
        $(this).css("background-color", "#666");
    },
        
    additive: function() {
        var rgb = $(this)
                   .css("background-color").slice(4,-1).split(",");
        console.log("rgb = " + rgb);
        var r = Math.floor(parseInt(rgb[0]) * 0.9);
        var g = Math.floor(parseInt(rgb[1]) * 0.9);
        var b = Math.floor(parseInt(rgb[2]) * 0.9);
        console.log([r,g,b])
            $(this).css("background-color", 
                        "rgb(" + [r,g,b] + ")");
        }
};

// Set Listener & listen
var setColorScheme = function(event) {
    var element = event.currentTarget.value;
    // Reset listner.
    $(".block").off();
    // Set correct handler.
    $(".block").hover(hoverHandlers[element]);
};

$(".nav input").on("click", setColorScheme);
$("#create").on("click", newBoard);
newBoard();
