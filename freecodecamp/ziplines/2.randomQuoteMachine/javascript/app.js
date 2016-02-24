$(document).ready(function(){
  var quotes = 
    [["For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move.", "Robert Louis Stevenson"], 
    ["Oh the places you’ll go.", "Dr. Seuss"], 
    ["I haven’t been everywhere, but it’s on my list.", "Susan Sontag"], 
    ["Not all those who wander are lost.", "J.R.R. Tolkien"],
    ["Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do.", "Mark Twain"], 
    ["The world is a book, and those who do not travel read only one page.", "Saint Augustine"], 
    ["One doesn't discover new lands without consenting to lose sight, for a very long time, of the shore.", "Andre Gide"], 
    ["No matter what people tell you, words and ideas can change the world.", "Robin Williams"], 
    ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Helen Keller"], 
    ["I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou"], 
    ["Whether you think you can or you think you can’t, you’re right.", "Henry Ford"], 
    ["People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.", "Zig Ziglar"], 
    ["When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.", "John Lennon"], 
    ["If you want to lift yourself up, lift up someone else.", "Booker T. Washington"], 
    ["A person who never made a mistake never tried anything new.", "Albert Einstein"], 
    ["The question isn’t who is going to let me; it’s who is going to stop me.", "Ayn Rand"], 
    ["It’s not the years in your life that count. It’s the life in your years.", "Abraham Lincoln"], 
    ["Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.", "Buddha"], 
    ["Don’t underestimate the value of Doing Nothing, of just going along, listening to all the things you can’t hear, and not bothering.", "Winnie the Pooh"], 
    ["Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.", "Thich Nhat Hanh"], 
    ["Some cause happiness wherever they go; others whenever they go", "Oscar Wilde"], 
    ["Time you enjoy wasting is not wasted time.", "Marthe Troly-Curtin"], 
    ["Happiness is having a large, loving, caring, close-knit family in another city.", "George Burns"], 
    ["We don’t stop playing because we grow old; we grow old because we stop playing.", "George Bernard Shaw"], 
    ["Worry never robs tomorrow of its sorrow. It only saps today of its joy.", "Leo Buscaglia"], 
    ["People who think they know everything are a great annoyance to those of us who do.", "Isaac Asimov"], 
    ["I'm sorry, if you were right, I'd agree with you.", "Robin Williams"], 
    ["Expert: a man who makes three correct guesses consecutively.", "Laurence J. Peter"], 
    ["My fake plants died because I did not pretend to water them.", "Mitch Hedberg"], 
    ["Wine is constant proof that God loves us and loves to see us happy.", "Benjamin Franklin"], 
    ["I would like to die on Mars. Just not on impact.", "Elon Musk"], 
    ["The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.", "Terry Pratchett"], 
    ["My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.", "Ellen DeGeneres"], 
    ["Gentlemen, you can't fight in here! This is the War Room.", "Dr. Strangelove: Or, How I Learned to Stop Worrying and Love the Bomb (1964)"], 
    ["I don't want to talk to you no more, you empty-headed animal food trough wiper. I fart in your general direction. Your mother was a hamster and your father smelt of elderberries.", "Monty Python and the Holy Grail (1975)"], 
    ["If I'm not back in five minutes, just wait longer.", "Ace Ventura: Pet Detective (1994)"], 
    ["Be kind whenever possible. It is always possible.", "Dalai Lama"], 
    ["Scientists have become the bearers of the torch of discovery in our quest for knowledge.", "Stephen Hawking"], 
    ["Equipped with his five senses, man explores the universe around him and calls the adventure Science.", "Edwin Powell Hubble"], 
    ["Research is what I'm doing when I don't know what I'm doing.", "Wernher von Braun"], 
    ["The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'", "Isaac Asimov"], 
    ["Somewhere, something incredible is waiting to be known.", "Carl Sagan"], 
    ["It is easier to do a job right than to explain why you didn't.", "Martin Van Buren"], 
    ["Do I not destroy my enemies when I make them my friends?", "Abraham Lincoln"], 
    ["Without a struggle, there can be no progress.", "Frederick Douglass"], 
    ["You must be the change you wish to see in the world.", "Mahatma Gandhi"], 
    ["If you change the way you look at things, the things you look at change.", "Wayne Dyer"], 
    ["Sometimes it's the smallest decisions that can change your life forever.", "Keri Russell"], 
    ["Yesterday is not ours to recover, but tomorrow is ours to win or lose.", "Lyndon B. Johnson"], 
    ["I have learned that to be with those I like is enough.", "Walt Whitman"], 
    ];
  var random;
  var quote;
  var source;
  var link;

  random = Math.floor(Math.random() * quotes.length);
    quote = quotes[random][0];
    source = quotes[random][1];
    $('#quote').text(quote);
    $('#source').text(source); 

    link = "http://twitter.com/home?status=" + quote + " - " + source;

    $('.tweet').attr("href", link)

  $('.btn').on('click', function(){
    random = Math.floor(Math.random() * quotes.length);
    quote = quotes[random][0];
    source = quotes[random][1];
    $('#quote').text(quote);
    $('#source').text(source); 

    link = "http://twitter.com/home?status=" + quote + " - " + source;

    $('.tweet').attr("href", link)

    });
  
});