$(document).ready(function(){
  var target = $('div.target');
  target.hide();
  $('button').on('click', function(){
      target.animate({
            'height': 'toggle',
            'width': 'toggle',
            'opacity': 'toggle',
            'border-radius': 'toggle'
          }, 500);
    });
});