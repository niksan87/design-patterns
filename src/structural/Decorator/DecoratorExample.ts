import { log } from '../../utils/Logger';

export module DecoratorExample {
    
    export const test = () => {
        const simple = new ConcreteComponent();
        log(simple.operation());

        const decoratorA = new ConcreteDecoratorA(simple);
        log(decoratorA.operation());

        const decoratorB = new ConcreteDecoratorB(decoratorA);
        log(decoratorB.operation());

    };

    interface Component {
        operation(): string;
    }

    class ConcreteComponent implements Component {

        public operation(): string {
            return 'ConcreteComponent';
        }

    }

    class Decorator implements Component {

        protected component: Component;

        constructor(component: Component){
            this.component = component;
        }

        public operation(): string {
            return `${this.component.operation()}`;
        }

    }

    class ConcreteDecoratorA extends Decorator {
        
        public operation(): string {
            return `ConcreteDecoratorA(${super.operation()})`;
        }
        
    }

    class ConcreteDecoratorB extends Decorator {
        public operation(): string {
            return `ConcreteDecoratorB(${super.operation()})`;
        }
    }


}