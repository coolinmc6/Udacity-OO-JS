// Object Decorator
var carlike = function(obj, loc) {
	obj.loc = loc
	obj.move = function(){
		this.loc++
	};
	return obj;
};

// Class => the functional shared pattern
var Car = function(loc) {
	var obj = {loc: loc}
	obj.move = move
	return obj;
};

var move = function() {
	this.loc++
}

// Version #3: Adding methods to classes
// Class => the functional shared pattern
var Car = function(loc) {
	var obj = {loc: loc}
	extend(obj, Car.methods) // => 'extend' is not a native JS function but many libraries do this for you
	return obj;
};

Car.methods = {
	move: function() {
		this.loc++
	}
}
