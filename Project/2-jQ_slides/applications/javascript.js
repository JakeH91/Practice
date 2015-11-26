$(document).ready(function(){
  $('html').addClass('js');

  var contactForm = {
    container: $('#newItem'),

    init: function(){
      $('<button></button>', {text: 'Create New Item'})
        .addClass('btn btn-sm btn-success open')
        .insertAfter('.header')
        .on('click', this.show);
    },

    show: function(){
      contactForm.close.call(contactForm.container);
      contactForm.container.slideDown();
      $(this).hide();
    },

    close: function(){
      var $this = $(this);
      $('<span class=close>X</span>')
        .prependTo(this)
        .on('click', function(){
          $this.hide();
          $(this).remove();
          $('button.open').show();
        })
    }
  };

  contactForm.init();

  $('.firstList').on('click', '.heading', function(){
    $(this).closest('li').find('.secondList').slideToggle();
  });


});