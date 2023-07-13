"use strict";
class Coder {
    // using visibility modifiers
    constructor(name, music, age, language = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
    getAge() {
        return `Hello you are ${this.age} old`;
    }
}
class WebDeveloper extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
}
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Anim = new Coder('Anim', 'Rock', 12, 'Typescript');
const Page = new Guitarist('Page', 'Guitar');
console.log(Page.play('play'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Amy = new Peeps('Amy');
const John = new Peeps('John');
const Silly = new Peeps('Silly');
console.log(Peeps.count);
