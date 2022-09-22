const root = document.getElementById('root');
let output = '';

//Bind, Call and Aplay methods

let person = {
	firstName: 'Sasa',
	lastName: 'Trkulja',
	age: 55,
	isAdult() {
		return this.age >= 18;
	},
	printName() {
		return this.firstName + ' ' + this.lastName;
	},
};
//output = person.isAdult();

const printFullName = person.printName;
//output = printFullName();

// Bind

const counter = {
	count: 0,
	incrementCounter: function () {
		console.log(this);
		this.count++;
		console.log(this.count);
	},
};
const bindedIncrenebtCounter = counter.incrementCounter.bind(counter);
// document
// 	.querySelector('.btn')
// 	.addEventListener('click', counter.incrementCounter);

document
	.querySelector('.btn')
	.addEventListener('click', bindedIncrenebtCounter);

//Bind with argument

// function greeting(lang) {
// 	console.log(`${lang}: I am ${this.name}`);
// }
// const sasa = {
// 	name: 'Sasa',
// };
// const petar = {
// 	name: 'Petar',
// };
// const greetingSasa = greeting.bind(sasa, 'sr');
// greetingSasa();
// const greetingPetar = greeting.bind(petar, 'ba');
// greetingPetar();

// Call

// function greeting() {
// 	console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
// }
// const sasa = {
// 	name: 'Sasa',
// 	age: 55,
// };
// const petar = {
// 	name: 'Petar',
// 	age: 35,
// };

// greeting.call(sasa);

// greeting.call(petar);

// Call with argument

//Aplay

// function greet(greeting, lang) {
// 	console.log(lang);
// 	console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
// }
// const sasa = {
// 	name: 'Sasa',
// 	age: 55,
// };
// const petar = {
// 	name: 'Petar',
// 	age: 35,
// };

// greet.apply(sasa, ['Hi', 'sr']);

// greet.apply(petar, ['Hola', 'ba']);

//Object merge

// function registerUser(fName, lName) {
// 	let person = {
// 		firstName: fName,
// 		lastName: lName,
// 	};
// 	return person;
// }

// output = JSON.stringify(registerUser('Sasa', 'Trkulja'));

// const person1 = {
// 	name: 'Trkulja Sasa',
// 	age: 55,
// };
// const healthCare = {
// 	height: 185,
// 	weight: 73,
// };

// const copyPerson1 = { ...person1 };
// const copyPerson2 = Object.assign({}, person1);

// output = JSON.stringify(copyPerson2);

//const mergedObj = Object.assign(person1, healthCare); //mutira person1
//const mergedObj = Object.assign({}, person1, healthCare);

// const mergedObj = function (person, healtCare) {
// 	return Object.assign({}, person, healtCare);
// };
// output = JSON.stringify(mergedObj(person1, healthCare));

//Constructor functions
// function Person(firstName, lastName, age) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.age = age;
// 	this.isAdult = function () {
// 		return this.age >= 18;
// 	};
// }

// const sasa = new Person('Sasa', 'Trkulja', 55);

// output = JSON.stringify(sasa);

//output = sasa.isAdult();

// configure properties
//Object.defineProperty(sasa, 'firstName', { writable: false });
//Object.defineProperty(sasa, 'firstName', { enumerable: false });
//Object.defineProperty(sasa, 'firstName', { configurable: false });
//Object.defineProperty(sasa, 'firstName', { enumerable: true });
//Object.defineProperty(sasa, 'firstName', { writable: true });

// output = JSON.stringify(Object.getOwnPropertyDescriptor(sasa, 'firstName'));

// Object.defineProperty(sasa, 'fullName', {
// 	get: function () {
// 		return this.firstName + ' ' + this.lastName;
// 	},
// 	set: function (value) {
// 		let nameParts = value.split(' ');
// 		this.firstName = nameParts[0];
// 		this.lastName = nameParts[1];
// 	},
// });

// sasa.fullName = 'Petar Petrovic';

// output = sasa.fullName;

// let myFunc = function () {};

// Person.prototype.job = 'Frontend developer';

// output = JSON.stringify(myFunc.prototype);

// output = JSON.stringify(Person.prototype);

// output = JSON.stringify(sasa.__proto__);

// output = Person.prototype === sasa.__proto__;

//sasa.job = 'Backend developer';

// output = sasa.hasOwnProperty('job');

// function Human(firstName, lastName, age) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.age = age;

// 	Object.defineProperty(this, 'fullName', {
// 		get: function () {
// 			return this.firstName + ' ' + this.lastName;
// 		},
// 		set: function (value) {
// 			let nameParts = value.split(' ');
// 			this.firstName = nameParts[0];
// 			this.lastName = nameParts[1];
// 		},
// 		enumerable: true,
// 	});
// }

// function Student(firstName, lastName, age) {
// 	Human.call(this, firstName, lastName, age);
// 	this._enroledCourses = [];
// 	this.enroll = function (courseName) {
// 		this._enroledCourses.push(courseName);
// 	};
// 	this.printCourses = function () {
// 		return (
// 			this.fullName +
// 			"'s enrolled courses are: " +
// 			this._enroledCourses.join(', ')
// 		);
// 	};
// }
// output = Student.prototype.constructor;

// Student.prototype = Object.create(Human.prototype);

// output = Student.prototype.constructor;

// Student.prototype.constructor = Student;

// output = Student.prototype.constructor;

// const petar = new Student('Petar', 'Petrovic', 22);

// petar.enroll('HTML');
// petar.enroll('CSS');
// petar.enroll('javaScript');

// output = JSON.stringify(petar);
// output = petar.printCourses();

// console.log(petar.__proto__);
// console.log(petar.__proto__.__proto__);

// Classes

// class ClassHuman {
// 	constructor(firstName, lastName, age) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.age = age;
// 		this.date = new Date();
// 	}
// 	get fullName() {
// 		return this.firstName + ' ' + this.lastName;
// 	}
// 	set fullName(fullName) {
// 		let nameParts = fullName.split(' ');
// 		this.firstName = nameParts[0];
// 		this.lastName = nameParts[1];
// 	}
// 	get costumizeDate() {
// 		return this.date.toISOString().slice(0, 10).replaceAll('-', ' : ');
// 	}
// 	isAdult() {
// 		return this.age >= 18;
// 	}
// }

//console.log(typeof ClassHuman);

// Object.defineProperty(ClassHuman.prototype, 'fullName', {
// 	enumerable: true,
// });

// const me = new ClassHuman('Sasa', 'Trkulja', 55);

//me.fullName = 'Petar Petrovic';

//output = JSON.stringify(me);
// output = me.fullName;
// output = me.date;
// output = me.costumizeDate;
// output = me.isAdult();

//output = JSON.stringify(Object.getOwnPropertyDescriptor(me, 'fullName'));
// class ClassStudent extends ClassHuman {
// 	constructor(firstName, lastName, age) {
// 		super(firstName, lastName, age);
// 		this._enroledCourses = [];
// 	}
// 	static fromClassHuman(person) {
// 		return new Student(person.firstName, person.lastName, person.age);
// 	}
// 	enroll(courseName) {
// 		this._enroledCourses.push(courseName);
// 	}
// 	printCourses() {
// 		return (
// 			this.fullName +
// 			"'s enrolled courses are: " +
// 			this._enroledCourses.join(', ')
// 		);
// 	}
// }

//const meStudent = new ClassStudent('Sasa', 'Trkulja', 55);
// const meStudent = ClassStudent.fromClassHuman(me);
// meStudent.enroll('javaScript');
// meStudent.enroll('HTML');
// meStudent.enroll('CSS');

// output = meStudent.printCourses();

root.innerHTML = output;
