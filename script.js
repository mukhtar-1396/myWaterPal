$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 18,
        color: "#24C0E3",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
    }).circularProgress('animate', 100, 5000);
});



/*experiment for horizontal progress bar*/
