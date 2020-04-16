import { log } from '../../utils/Logger';

export module BridgeExample {
    
    export const test = () => {
        const clientCode = (abstraction: Abstraction) => log(abstraction.operation());
        
        let implementation = new ConcreteImplementationA();
        let abstraction = new Abstraction(implementation);
        clientCode(abstraction);

        implementation = new ConcreteImplementationB();
        abstraction = new ExtendedAbstraction(implementation);
        clientCode(abstraction);
    };

    class Abstraction {

        protected implementation: Implementation;

        constructor(implementation: Implementation){
            this.implementation = implementation;
        }

        public operation(): string {
            return `Abstraction:\nBase operation with result -> ${this.implementation.operationImplementation()}`;
        }
    }

    class ExtendedAbstraction extends Abstraction {

        public operation(): string {
            return `Extended abstraction:\nBase operation with result -> ${this.implementation.operationImplementation()}`;
        }
    }

    interface Implementation {
        operationImplementation(): string;
    }

    class ConcreteImplementationA implements Implementation {

        public operationImplementation(): string {
            return `Concrete implementation A: Result A.`;
        }

    }

    class ConcreteImplementationB implements Implementation {

        public operationImplementation(): string {
            return `Concrete implementation B: Result B.`;
        }

    }

}