var generator = require('password-generator');

var password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);