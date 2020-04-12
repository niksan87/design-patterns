import { log } from '../../utils/Logger';

export module FlyweightExample {
    
    export const test = () => {
        const factory = new FlyweightFactory([
            ['Chevrolet', 'Camaro2018', 'pink'],
            ['Mercedes Benz', 'C300', 'black'],
            ['Mercedes Benz', 'C500', 'red'],
            ['BMW', 'M5', 'red'],
            ['BMW', 'X6', 'white'],
        ]);
        factory.listFlyweights();
        log('---');
        addCarToDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M6', 'red');
        factory.listFlyweights();
        log('---');
        addCarToDatabase(factory, 'CL234IR', 'Jane Doe', 'BMW', 'M6', 'red');
        factory.listFlyweights();
    };

    class Flyweight {

        private _sharedState: Object;

        constructor(sharedState: Object){
            this._sharedState = sharedState;
        }

        public operation(uniqueState: Object): void {
            log(`Shared state: ${this._sharedState}\nUnique state: ${uniqueState}`);
        }
    }

    class FlyweightFactory {

        private _flyweights: { [name: string]: Flyweight } = {};

        constructor(initialFlyweightStates: string[][]){
            initialFlyweightStates.forEach((flyweightState: string[]) => this._flyweights[this.getKey(flyweightState)] = new Flyweight(flyweightState));
        }

        public getFlyweight(sharedState: string[]): Flyweight {
            const key = this.getKey(sharedState);
            if(!(key in this._flyweights)) {
                log('Creating a new flyweight.');
                this._flyweights[key] = new Flyweight(sharedState);
            } else {
                log(`Reusing existing flyweight with key '${key}'.`);
            }
            return this._flyweights[key];
        }

        public listFlyweights(): void {
            const count = Object.keys(this._flyweights).length;
            log(`\nFlyweight factory has ${count} flyweights:`);
            for (const key in this._flyweights) {
                log(key);
            }
        }

        private getKey(state: string[]): string {
            return state.join('_');
        }
    }

    const addCarToDatabase = (
        flyweightFactory: FlyweightFactory,
        plates: string,
        owner: string,
        brand: string,
        model: string,
        color: string
    ) => {
        log('Adding car to database.');
        const flyweight = flyweightFactory.getFlyweight([brand, model, color]);
    };

}