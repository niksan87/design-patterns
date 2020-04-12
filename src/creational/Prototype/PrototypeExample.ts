import { log } from '../../utils/Logger';

export module PrototypeExample {
    
    export const test = () => {
        const objA = new Prototype('objA');
        objA.display();
        const objB = objA.clone();
        objB.name = 'objB';
        objB.display();
    };

    class Prototype {

        public name: string;
        public date: Date;

        constructor(name: string, date: Date = new Date()){
            this.name = name;
            this.date = date;
        }

        public clone(): Prototype {
            const obj = Object.create(Prototype.prototype || null);
            Object.keys(this).map((key: string) => obj[key] = this[key]);
            return obj;
        }

        public display(): void {
            log(`Object: '${this.name}', Date: '${this.date}'`);
        }
    }

}