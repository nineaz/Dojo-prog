

var HelloWorld = function() {};
HelloWorld.prototype.hello = function (name) {
  if (name === 'Bob' || name === 'Sally') {
    return 'Hello, ' + name + '!';
  } else {
    return 'Hello, World!';
  }

};







module.exports = HelloWorld;
