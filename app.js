$(document).ready(function() {


$('.box').on('click', function() {
  $(this).addClass(color);
})

$('.box').on('dblclick', function() {
  $(this).removeClass(colors);
})

$('#reset').on('click', function() {
  $('.box').removeClass(colors);
})

var color = 'white';

$('#red').on('click', function() {
  color = 'red';
})

$('#blue').on('click', function() {
  color = 'blue';
})

$('#green').on('click', function() {
  color = 'green';
})
$('#yellow').on('click', function() {
  color = 'yellow';
})

$('#white').on('click', function() {
  color = 'white';
})

var colors = 'white green red blue yellow';


//enables cursor to paint any box that it touches 

// var boxes = $('.box');
// boxes.mousedown(function() {
//     $(this).addClass(color);
//   }).mouseup(function() {
//   }).mouseout(function() {
//     $(this).addClass(color);
//   })

})
