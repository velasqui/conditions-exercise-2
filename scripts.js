var name1 = "Christopher";
var name2 = "Ian";
var name3 = "Ada";

var name1Length = name1.length;
var name2Length = name2.length;
var name3Length = name3.length;

var nameArray = [name1, name2, name3];

var lgth = 0;
var longest;

for (var i = 0; i < nameArray.length; i++) {
    if (nameArray[i].length > lgth) {
        var lgth = nameArray[i].length;
        longest = nameArray[i];
    }
}
console.log(longest + " has the longest name.");

if (name1Length == name2Length) {
    console.log(name1 + " and " + name2 + " tie for the longest name.");
} else if (name1Length == name3Length) {
    console.log(name1 + " and " + name3 + " tie for the longest name.");
} else {
    console.log(name2 + " and " + name3 + " tie for the longest name.")
}

if (name1Length == name2Length && name1Length == name3Length) {
    console.log("All three names, " + name1 + ", " + name2 + ", and " +name3 + "; are the same length");
}