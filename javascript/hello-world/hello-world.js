var HelloWorld = function() {
  this.hello = function(nom){
    if (nom === '') {
      return("Hello, World!");
    }
    else {
      return("Hello, " + nom + "!" );
    }
  };
};

// var coucou = new HelloWorld();
// console.log(coucou.hello("Edwin"));
module.exports = HelloWorld;
