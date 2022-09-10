const root = document.getElementById('root');
let output = '';

let person = {
	firstName: 'Sasa',
	lastName: 'Trkulja',
	age: 55,
	isAdult() {
		return this.age >= 18;
	},
};
output = person.isAdult();
function registerUser(fName, lName) {
	let person = {
		firstName: fName,
		lastName: lName,
	};
	return person;
}

output = JSON.stringify(registerUser('Sasa', 'Trkulja'));

const person1 = {
	name: 'Trkulja Sasa',
	age: 55,
};
const healthCare = {
	height: 185,
	weight: 73,
};

const copyPerson1 = { ...person1 };
const copyPerson2 = Object.assign({}, person1);

output = JSON.stringify(copyPerson2);

//const mergedObj = Object.assign(person1, healthCare); mutira person1
//const mergedObj = Object.assign({}, person1, healthCare);

const mergedObj = function (person, healtCare) {
	return Object.assign({}, person, healtCare);
};
output = JSON.stringify(mergedObj(person1, healthCare));

//Constructor functions
function Person(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.isAdult = function () {
		return this.age >= 18;
	};
}

const sasa = new Person('Sasa', 'Trkulja', 55);

output = JSON.stringify(sasa);

//output = sasa.isAdult();

// configure properties
//Object.defineProperty(sasa, 'firstName', { writable: false });
//Object.defineProperty(sasa, 'firstName', { enumerable: false });
//Object.defineProperty(sasa, 'firstName', { configurable: false });
//Object.defineProperty(sasa, 'firstName', { enumerable: true });
//Object.defineProperty(sasa, 'firstName', { writable: true });

output = JSON.stringify(Object.getOwnPropertyDescriptor(sasa, 'firstName'));

Object.defineProperty(sasa, 'fullName', {
	get: function () {
		return this.firstName + ' ' + this.lastName;
	},
	set: function (value) {
		let nameParts = value.split(' ');
		this.firstName = nameParts[0];
		this.lastName = nameParts[1];
	},
});

sasa.fullName = 'Petar Petrovic';

output = sasa.fullName;

let myFunc = function () {};

Person.prototype.job = 'Frontend developer';

output = JSON.stringify(myFunc.prototype);

output = JSON.stringify(Person.prototype);

output = JSON.stringify(sasa.__proto__);

output = Person.prototype === sasa.__proto__;

//sasa.job = 'Backend developer';

output = sasa.hasOwnProperty('job');

root.innerHTML = output;
