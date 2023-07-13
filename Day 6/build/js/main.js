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
const Anim = new Coder('Anim', 'Rock', 12, 'Typescript');
