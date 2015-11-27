$(document).ready(function(){
  var target = $('div.target');
  target.hide();

  $.fn.FadeSlideToggle = function(){
    return $(this).animate({
            'height': 'toggle',
            'width': 'toggle',
            'opacity': 'toggle',
            'border-radius': 'toggle'
          }, 500);
  };

  $('button').on('click', function(){
      target.FadeSlideToggle();
    });
});