import { log } from '../../utils/Logger';

export module AbstractFactoryExample {
    
    export const test = () => {
        const factory1 = new ConcreteFactory1();
        const productA1 = factory1.createProductA();
        const productB1 = factory1.createProductB();
        productA1.usefullFunctionA();
        productB1.usefullFunctionB();
        productB1.anotherUsefulFunctionB(productA1);

        log('---');

        const factory2 = new ConcreteFactory2();
        const productA2 = factory2.createProductA();
        const productB2 = factory2.createProductB();
        productA2.usefullFunctionA();
        productB2.usefullFunctionB();
        productB2.anotherUsefulFunctionB(productA2);
    };

    interface AbstractFactory {
        createProductA(): AbstractProductA;
        createProductB(): AbstractProductB;
    }

    interface AbstractProductA {
        usefullFunctionA(): void;
    }

    interface AbstractProductB {
        usefullFunctionB(): void;
        anotherUsefulFunctionB(collaborator: AbstractProductA): void;
    }

    class ConcreteProductA1 implements AbstractProductA {

        public usefullFunctionA(): void {
            log('ConcreteProductA1.usefullFunctionA();');
        }

    }

    class ConcreteProductB1 implements AbstractProductB {

        public usefullFunctionB(): void {
            log('ConcreteProductB1.usefullFunctionB();');
        }

        public anotherUsefulFunctionB(collaborator: AbstractProductA): void {
            log('ConcreteProductB1.anotherUsefulFunctionB();');
            collaborator.usefullFunctionA();
        }

    }

    class ConcreteProductA2 implements AbstractProductA {

        public usefullFunctionA(): void {
            log('ConcreteProductA2.usefullFunctionA();');
        }

    }

    class ConcreteProductB2 implements AbstractProductB {

        public usefullFunctionB(): void {
            log('ConcreteProductB2.usefullFunctionB();');
        }

        public anotherUsefulFunctionB(collaborator: AbstractProductA): void {
            log('ConcreteProductB2.anotherUsefulFunctionB();');
            collaborator.usefullFunctionA();
        }

    }

    class ConcreteFactory1 implements AbstractFactory {

        public createProductA(): AbstractProductA {
            return new ConcreteProductA1();
        }

        public createProductB(): AbstractProductB {
            return new ConcreteProductB1();
        }

    }

    class ConcreteFactory2 implements AbstractFactory {

        public createProductA(): AbstractProductA {
            return new ConcreteProductA2();
        }

        public createProductB(): AbstractProductB {
            return new ConcreteProductB2();
        }

    }

}