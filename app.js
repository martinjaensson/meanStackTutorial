var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

person1 = {
	name: "Martin",
	email: "martinjaensson@gmail.com",
	number: "0736731222"
};

person2 = {
	name: "Linn",
	email: "linnalvin@gmail.com",
	number: "073555555"
};

person3 = {
	name: "Omed",
	email: "omedsaeid@gmail.com",
	number: "073666666"
};

var contactlist = [person1, person2, person3];


app.get('/contactlist', function(req, res) {
	console.log("I received GET request");
	res.json(contactlist);
});

app.listen(3000);

console.log("Server running on port 3000");
