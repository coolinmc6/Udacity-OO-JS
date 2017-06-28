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

// functions are just specialized objects

// Version 4: Prototypal Pattern of creating objects
var Car = function(loc) {
	var obj = Object.create(Car.prototype)
	obj.loc = loc
	return obj;
};

Car.prototype.move = function() {
	this.loc++
}

// Terms: functional class pattern, object decorators, prototypal classes

// Version #5: Pseudoclassical Patterns -> then layer on top of prototypal pattern
// we can remove 'var obj = ...' and 'return obj' if we use the 'new' keyword
var Car = function(loc) {
	// 'implied code' (JS does for us): this = Object.create(Car.prototype)
	this.loc = loc
	// 'implied code' (JS does for us): return this;

};

Car.prototype.move = function() {
	this.loc++
}

// Version #5 Polished
var Car = function(loc) {
	this.loc = loc
};

Car.prototype.move = function() {
	this.loc++
}

// Version #6: Superclass and Subclasses
// Car is a super class that Van and Cop build off of with their own particular functions
var Car = function() {
	var obj = {loc: loc}
	obj.move = function() {
		obj.loc++
	}
	return obj;
};

var Van = function(loc) {
	var obj = Car(loc);
	obj.grab = function (){ /*...*/}
	return obj;
};

var Cop = function(loc) {
	var obj = Car(loc);
	obj.call = function() { /*...*/}
	return obj;
}

// Version #7: Pseudoclassical Subclasses
var Car = function(loc) {
	this.loc = loc;
}
Car.prototype.move = function() {
	this.loc++
}
// prototype chains save memory.  if it was this.move = ... inside the Car class, we'd be 
// creating a new move function inside every Car(?)
var Van = function(loc) {
	Car.call(this, loc)
	// the 'this' keyword ensures that Car's 'this' is bound to the van instance
}


