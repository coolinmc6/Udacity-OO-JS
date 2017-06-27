// Version 1
var amy = {loc:1};
amy.loc++;
var ben = {loc:9};
ben.loc++;

// Version 2
var amy = {loc:1};
move(amy)
var ben = {loc:9};
move(ben)

// Version 3
var amy = carlike({}, 1)
move(amy)
var ben = carlike({}, 9)
move(ben)

// Version 4
var amy = carlike({}, 1)
amy.move()
var ben = carlike({}, 9)
ben.move()

// Version 5
var amy = Car(1)
amy.move()
var ben = Car(9)
ben.move()