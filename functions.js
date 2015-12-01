$(document).ready(function () {

  var quotes = ["...believe nothing; know, or doubt, as the case may be...","Aleister Crowley, Moonchild","The God that plays dice has set us free.","Heinz Pagels","We know what we are, but we know not what we may be.","Shakespeare","Too often we enjoy the comfort of opinion without the discomfort of thought.","John F Kennedy","Be humble for you are made of earth. Be proud for you are made of stars.","Siberian proverb","Show what's true in yourself to the world. Find what's true in the world for yourself.","Justin Adams","When you lose your mind, you'll come to your senses.","Socrates, Way of the Peaceful Warrior","I like your Christ. I do not like your christians. They are so unlike your Christ.","Ghandi","Censorship is telling a man he can't have a steak just because a baby can't chew it.","Mark Twain","Those that can make you believe absurdities can make you commit atrocities.","bumper sticker","We are all subject to the fates. But we must all act as if we are not or die of dispair.","Golden Compass","Success in life is determined by your ability to go from failure to failure without loss of enthusiasm.","Winston Churchill","Do what you can, with what you have, where you are.","Theodore Roosevelt","When you cease to make a contribution, you begin to die.","Eleanor Roosevelt","Never invest your money in anything that eats or needs repairing.","Billy Rose","The greatest joy in nature is the absence of man.","Bliss Carman","Only the shallow know themselves.","Oscar Wilde","Peace if possible, but truth at any rate.","Martin Luther","There are three faithful friends: an old wife, an old dog and ready money.","Benjamin Franklin","That man is richest whose pleasures are the cheapest.","Henry David Thoreau","After silence, that which comes closest to expressing the inexpressible is music.","Aldous Huxley","If you tell the truth, you don't have to remember anything.","Mark Twain","Give me where to stand, and I will move the earth.","Archimedes","Everything comes to him who hustles while he waits.","Thomas Edison","Experience is the name so many people give to their mistakes.","Oscar Wilde","It is better to deserve honors and not to have them than to have them and not deserve them.","Mark Twain","Some folks can look so busy doin' nothin' that they seem indespensable.","Kin Hubbard","Silence is the most perfect expression of scorn.","George Bernard Shaw","Television is chewing gum for the eyes.","Frank Lloyd Wright","Sleep, riches and health to be truly enjoyed must be interrupted.","Jean Paul Richter","No one can make you feel inferior without your consent.","Eleanor Roosevelt","The art of being wise is knowing what to overlook.","William James","The man who fears no truths has nothing to fear from lies.","Thomas Jefferson"];

  var new_quote;
  var new_author;

  var generate = function() {
    var index = Math.floor(Math.random()*quotes.length/2)*2;
    new_quote = quotes[ index ];
    new_author = "  -" + quotes[ index + 1 ];
    $('.quote').text(new_quote);
    $('.author').text(new_author);

    var new_url = "http://twitter.com/intent/tweet?&url=%20&text=" + new_quote.replace(/\s/g,"%20") + "  -" + new_author.replace(/\s/g, "%20");
    $('.twitter-link').attr("href", new_url);
  };

  generate();

  $('.btn').click(generate);

});
