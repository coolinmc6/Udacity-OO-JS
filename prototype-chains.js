var gold = {a:1};
console.log(gold.a);
console.log(gold.z); // undefined

// var blue = extend({}, gold); => not real code
// console.log(blue);
//

var rose = Object.create(gold);
console.log(rose); // logs an empty string
console.log(gold); // logs { a:1 }
console.log(rose.a) // logs 1 because it defaults to what is in gold if rose doesn't have a value


gold.z = 3;
console.log(rose.z)
// rose has a delegation relationship with gold so any new properties gold gets, rose gets by default

// blue does NOT have that; it is a one-time copy of gold so future property changes don't affect
// - All objects delegate to a super Object type.  So when you do rose.toString(), it's delegating to the 
// top level object, or the object prototype
// Arrays are under the Object prototype