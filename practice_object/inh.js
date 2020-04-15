
// ES6

class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    eat() {
        return `${this.name} is eating!`;
    }

    sleep() {
        return `${this.name} is going to sleep!`;
    }

    wakeUp() {
        return `${this.name} is waking up!`;
    }
}
class Gorilla extends Animal {
    constructor(name, weight) {
        super(name, weight);
    }

    showVigour() {
        return `${super.eat()} ${this.poundChest()}`;
    }

    dailyRoutine() {
        return `${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`;
    }
    // ...
}


// TRADICIONAL

function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}
Animal.prototype.eat = function() {
    return `${this.name} is eating!`;
}

Animal.prototype.sleep = function() {
    return `${this.name} is going to sleep!`;
}

Animal.prototype.wakeUp = function() {
    return `${this.name} is waking up!`;
}



function Gorilla(name, weight) {
    Animal.call(this, name, weight);
    // Here, super is equivalent to Animal.call(this, …).
}

Gorilla.prototype = Object.create(Animal.prototype);
Gorilla.prototype.constructor = Gorilla;

Gorilla.prototype.showVigour = function () {
    return `${Animal.prototype.eat.call(this)} ${this.poundChest()}`;
}

Gorilla.prototype.dailyRoutine = function() {
    return `${Animal.prototype.wakeUp.call(this)} ${this.poundChest()} ${Animal.prototype.eat.call(this)} ${Animal.prototype.sleep.call(this)}`;
}