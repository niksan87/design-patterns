import { log } from '../../utils/Logger';

export module MediatorExample {
    
    export const test = () => {
        
        const mediator = new Mediator();
        const personA = new Person('John', 18, mediator);
        const personB = new Person('Peter', 16, mediator);
        const personC = new Person('Anna', 25, mediator);
        const personD = new Person('George', 13, mediator);
        const personE = new Person('Eve', 14, mediator);

        mediator.addPerson(personA);
        mediator.addPerson(personB);
        mediator.addPerson(personC);
        mediator.addPerson(personD);
        mediator.addPerson(personE);

        personA.send('Hello');
        personC.send('Hey');
        personD.send('Hi');
        
    };

    class Mediator {

        private _people: Person[] = [];

        public addPerson(person: Person): void {
            this._people.push(person);
        }

        public send(message: string, sender: Person): void {
            this._people.forEach(person => {
                const bothAreAdultsOrNot = (person.age > 17 && sender.age > 17) || (person.age < 18 && sender.age < 18);
                if(person !== sender && bothAreAdultsOrNot) {
                    person.receive(`${message} from ${sender.name}.`);
                }
            });
        }

    }

    class Person {
        
        public name: string;
        public age: number;
        public mediator: Mediator;

        constructor(name: string, age: number, mediator: Mediator) {
            this.name = name;
            this.age = age;
            this.mediator = mediator;
        }

        public send(message: string): void {
            this.mediator.send(message, this);
        }

        public receive(message: string): void {
            log(`Message '${message}' received from ${this.name}.`);
        }
    }

}
