import { log } from '../../utils/Logger';

export module ObserverExample01 {
    
    export const test = () => {
        const employee = new Employee('John', 'Developer');
        const observer = (subject: string, property: string, before: any, after: any) => {
            log(`Subject '${subject}' changed property '${property}' from '${before}' to '${after}'.`);
        };
        employee.add(observer);
        employee.name = 'John';
        employee.position = 'Senior developer';
    };

    type Observer = (subject: string, property: string, before: any, after: any) => void;

    class Subject {

        private _observers: Observer[] = [];

        public add(observer: Observer): void {
            this._observers.push(observer);
        }

        public remove(observer: Observer): void {
            const i = this._observers.indexOf(observer);
            if (i === -1) {
                return;
            }
            this._observers.splice(i, 1);
        }

        public notify(subject: string, property: string, before: any, after: any): void {
            this._observers.forEach(observe => observe(subject, property, before, after));
        }

    }

    class Employee extends Subject {

        private _name: string;
        private _position: string;

        public constructor(name: string, position: string){
            super();
            this._name = name;
            this._position = position;
        }

        public set name(name: string) {
            this.notify(this.constructor.name, 'name', this._name, name);
            this._name = name;
        }

        public set position(position: string) {
            this.notify(this.constructor.name, 'position', this._position, position);
            this._position = position;
        }

    }

}