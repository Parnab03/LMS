{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js" integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E=" crossorigin="anonymous"></script>
<script src="js/main.js"></script> */}
    $(function slider() {
'use strict';
var auto;
$('.next').click(function () {
$('.slider .active').each(function () {
    if (!$(this).is(':last-child')) {
        $(this).hide('slide', {
            direction: 'left'
        }, 500).removeClass('active').next().addClass('active').show('slide', {
            direction: 'right'
        }, 500);
    } else {
        $(this).removeClass('active').hide('slide', {
            direction: 'left'
        }, 500);
        $('.slide').first().addClass('active').show('slide', {
            direction: 'right'
        }, 500);
    }
});
});
$('.prev').click(function () {
$('.slider .active').each(function () {
    if (!$(this).is(':first-child')) {
        $(this).removeClass('active').hide('slide', {
            direction: 'right'
        }, 500).prev().addClass('active').show('slide', {
            direction: 'left'
        }, 500);
    } else {
        $(this).hide('slide', {
            direction: 'right'
        }).removeClass('active');
        $('.slide').last().addClass('active').show('slide', {
            direction: 'left'
        }, 500);
    }
});
});
auto = setInterval(function(){
$('.next').click()
}, 3000);
$('.slider').hover(function () {
clearInterval(auto);
}, function () {
 auto = setInterval(function(){
$('.next').click()
}, 3000);
});
});