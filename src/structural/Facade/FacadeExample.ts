import { log } from '../../utils/Logger';

export module FacadeExample {
    
    export const test = () => {
        const subsystem1 = new Subsystem1();
        const subsystem2 = new Subsystem2();
        const facade = new Facade(subsystem1, subsystem2);
        log(facade.operation());
    };

    class Facade {
        
        protected subsystem1: Subsystem1;
        protected subsystem2: Subsystem2;

        constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2){
            this.subsystem1 = subsystem1 || new Subsystem1();
            this.subsystem2 = subsystem2 || new Subsystem2();
        }

        public operation(): string {
            return `\nFacade initiliazes subsustems:
    ${this.subsystem1.operation1()}
    ${this.subsystem2.operation1()}
Facade orders subsystems to perform the action:
    ${this.subsystem1.operationN()}
    ${this.subsystem2.operationZ()}
            `;
        }
    }

    class Subsystem1 {
        
        public operation1(): string {
            return 'Subsystem1.operation1()';
        }

        public operationN(): string {
            return 'Subsystem1.operationN()';
        }

    }

    class Subsystem2 {
        
        public operation1(): string {
            return 'Subsystem2.operation2()';
        }

        public operationZ(): string {
            return 'Subsystem2.operationZ()';
        }

    }

}