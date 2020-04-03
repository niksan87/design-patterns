import { log } from '../../utils/Logger';

export module MementoExample {
    
    export const test = () => {
        const employee = new Originator('John', 31, 'Developer');
        const caretaker = new Caretaker(employee);
        
        caretaker.backup();
        employee.log();

        employee.change('Jane', 20, 'Junior developer');
        caretaker.backup();
        employee.log();

        employee.change('Anna', 27, 'Senior developer');
        caretaker.backup();
        employee.log();

        employee.change('Peter', 22, 'Junior Developer');
        employee.log();
        
        log('Undoing');

        caretaker.undo();
        employee.log();

        caretaker.undo();
        employee.log();

        caretaker.undo();
        employee.log();

    };

    class Employee {

        public name: string;
        public age: number;
        public position: string;

        constructor(name: string, age: number, position: string){
            this.name = name;
            this.age = age;
            this.position = position;
        }

        public change(name?: string, age?: number, position?: string): void {
            this.name = name || this.name;
            this.age = age || this.age;
            this.position = position || this.position;
        }

        public log(): void {
            log(`${this.name} | ${this.age} | ${this.position}`);
        }

    }

    class Originator extends Employee {

        public save(): Memento {
            return new Memento(this.name, this.age, this.position);
        }

        public restore(memento: Memento): void {
            this.name = memento.name;
            this.age = memento.age;
            this.position = memento.position;
        }

    }

    class Memento extends Employee {

        private _date: string;

        constructor(name: string, age: number, position: string){
            super(name, age, position);
            this._date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        }
    }

    class Caretaker {

        private _mementos: Memento[];
        private _originator: Originator;

        constructor(originator: Originator){
            this._originator = originator;
            this._mementos = [];
        }

        public backup(): void {
            this._mementos.push(this._originator.save());
        }

        public undo(): void {
            if(!this._mementos.length) {
                return;
            }

            const lastMemento = this._mementos.pop();
            this._originator.restore(lastMemento as Memento);
        }
        
    }

}
