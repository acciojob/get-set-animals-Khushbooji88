//complete this code
class Animal {
	constructor(species) {
		this.species = species;
	}
	
	makeSound(){
		return `The ${this.species} makes a sound`;
	}
}

class Dog extends Animal {
	bark() {
		return "woof";
	}
}

class Cat extends Animal {
	purr() {
		return "purr";
	}
	
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof
window.Cat = Cat;
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr
