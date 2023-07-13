class Coder{
    // using visibility modifiers
    constructor (public readonly name: string,
        public music: string,
        private age: number,
        protected language: string = 'TypeScript'
        ){
        this.name = name
        this.music = music
        this.age = age
        this.language = language
    }

    public getAge(){
        return `Hello you are ${this.age} old`
    }
}

class WebDeveloper extends Coder{
    constructor(public computer: string,
        name: string,
        music: string,
        age: number){
            super(name, music, age)
            this.computer = computer
        }
}

interface Musician{
    name: string
    instrument: string
    play(action: string): string
}

class Guitarist implements Musician{
    name: string
    instrument: string

    constructor(name: string, instrument:string){
        this.name = name
        this.instrument = instrument
    }
    play(action: string): string {
        return `${this.name} ${action} ${this.instrument}`
    }
}

const Anim = new Coder('Anim', 'Rock', 12, 'Typescript')
const Page = new Guitarist('Page', 'Guitar')
console.log(Page.play('play'))