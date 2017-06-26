# README

The following notes are for Udacity's Object-Oriented JavaScript course.

## Scopes
- lexical scope describes the regions in your source code where you can refer to a variable
by name without getting access errors
- only the curly braces on a function create a scope

- Execution Contexts vs. Lexical Scopes

## Closures


## The 'this' Keyword
- The keyword this gets bound to the correct object automatically
- 'this' is not bound to...

```js
var fn = function(a,b) {
	log(this)
}
// 'this' does not refer to the above function object

var obj = {
	fn: function(a,b) {
		log(this)
	}
};

var ob2 = { mthod: fn}
// 'this' doesn't apply here

obj.fn(3,4);
// 'this' doesn't apply here either
// the object found to the left of the dot where th containing funciton is called => 'this' does apply here

```



## Prototype Chains



## Object Decorator Pattern



## Functional Classes



## Prototypal Classes



## Psuedoclassical Patterns



## Superclass and Subclasses



## Pdeudoclassical Subclasses



## Final Project



