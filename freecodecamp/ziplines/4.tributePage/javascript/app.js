$(document).ready(function(){
  var quotes = [["As usual, nature's imagination far surpasses our own, as we have seen from the other theories which are subtle and deep.", "in The Character of Physical Law (1965)"],
  ["Einstein was a giant. His head was in the clouds, but his feet were on the ground. Those of us who are not so tall have to choose!", "Spoken at a seminar, as quoted by Carver A. Mead, Collective Electrodynamics: Quantum Foundations of Electromagnetism (2002)"],
  ["Tell your son to stop trying to fill your head with science—for to fill your heart with love is enough.", "Note to the mother of Marcus Chown."],
  ["If we want to solve a problem that we have never solved before, we must leave the door to the unknown ajar.", "in 'The Value of Science,' What Do You Care What Other People Think? (1988, 2001)"],
  ["Our imagination is stretched to the utmost, not as in fiction, to imagine things which are not really there, but just to comprehend those things which are there.", "in The Character of Physical Law (1965)"],
  ["The whole question of imagination in science is often misunderstood by people in other disciplines. ... They overlook the fact that whatever we are allowed to imagine in science must be consistent with everything else we know.", "in The Feynman Lectures in Physics (1964), Vol. 2, Lecture 20, p.20-10"],
  ["The first principle is that you must not fool yourself and you are the easiest person to fool.", "in Surely You're Joking, Mr. Feynman!"],
  ["I was born not knowing and have had only a little time to change that here and there.", "in a Letter to Armando Garcia J, December 11, 1985"],
  ["For a successful technology, reality must take precedence over public relations, for Nature cannot be fooled.", "in Rogers Commission Report (1986)"],
  [" It doesn't make any difference how beautiful your guess is, it doesn't make any difference how smart you are, who made the guess, or what his name is. If it disagrees with experiment, it's wrong. That's all there is to it.", "from a lecture (1964)"]];

  var random;
  var quote;
  var source;
  var counter = 0;

  random = Math.floor(Math.random() * quotes.length);
  quote = quotes[random][0];
  source = quotes[random][1];
  $('#quote').text(quote);
  $('#source').text(source).hide(); 
  $('.details').hide();


  $('.quote-btn').on('click', function(){
    random = Math.floor(Math.random() * quotes.length);
    quote = quotes[random][0];
    source = quotes[random][1];
    $('#quote').text(quote);
    $('#source').text(source);
    });

  $('.source-btn').on('click', function(){
      $(this).siblings('p').slideToggle();
      if($(this).hasClass('more-info')) {
        $(this).text('Less details').removeClass('more-info').addClass('less-info');
      }
      else if($(this).hasClass('less-info')) {
        $(this).text('More details').removeClass('less-info').addClass('more-info');
      }
    });

  var currentIndex = 0,
      items = $('.pic div'),
      itemAmt = items.length;

  function cycleItems() {
    var item = $('.pic div').eq(currentIndex);
    items.hide();
    item.css('display', 'inline');
  }



  $('.img-nav-right').on('click', function(){
    currentIndex++;      
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
  });

  $('.img-nav-left').on('click', function(){
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = itemAmt - 1;
    }
    cycleItems();
  });


  var timelineBlocks = $('.cd-timeline-block'),
    offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    (!window.requestAnimationFrame) 
      ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
  }


});