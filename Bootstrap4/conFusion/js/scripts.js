$(document).ready(function(){
//Using this script for modal triggers buttons instead of data-target and data-toggle attributes
    $("#openLogin").click(function(){
        $("#loginModal").modal("show");
    });

    $("#openReserve").click(function(){
        $("#reserveModal").modal("show");
    });

//Set the interval on ms for the slide show
    $("#myCarousel").carousel({interval: 1500});

//Play and Pause button for the carousel
$('#playPause').click(function (){
    if ($('#playPause').children('span').hasClass('fa-pause')){
        $('#myCarousel').carousel('pause');
        $('#playPause').children('span').removeClass('fa-pause');
        $('#playPause').children('span').addClass('fa-play');
    }else{
        $('#playPause').children('span').removeClass('fa-play');
        $('#playPause').children('span').addClass('fa-pause');
        $('#myCarousel').carousel('cycle');
    }
});
});