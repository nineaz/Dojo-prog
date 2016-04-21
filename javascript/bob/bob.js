var bob = function() {
  this.hey = function(phrase) {
    function isAquestion() {
      return phrase[phrase.length - 1] === '?';
    }
    function isShouting() {
      return phrase.toUpperCase() === phrase && /[A-Z]/.test(phrase);
    }
    function isMute() {
      return phrase.length === 0 || phrase === '   ';
    }
    if (isMute()) {
      return 'Fine. Be that way!';
    }
    else if (isShouting()) {
      return 'Whoa, chill out!';
    }
    else if (isAquestion()) {
      return 'Sure.';
    }
    return 'Whatever.';
    };
  };
  
  module.exports = bob;
