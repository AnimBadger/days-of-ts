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

class Peeps{
    static count: number = 0

    static getCount(): number{
        return Peeps.count
    }

    public id: number

    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const Amy = new Peeps('Amy')
const John = new Peeps('John')
const Silly = new Peeps('Silly')
console.log(Peeps.count)
