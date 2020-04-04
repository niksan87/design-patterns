import { log } from '../../utils/Logger';

export module StrategyExample {
    
    export const test = () => {

        const context = new Context();

        context.strategy = new StrategyA();
        context.doBusinessLogic();

        context.strategy = new StrategyB();
        context.doBusinessLogic();

        context.strategy = new StrategyC();
        context.doBusinessLogic();
        
    };

    interface Strategy {
        executeAlgorithm(): void;
    }

    class StrategyA implements Strategy {
        public executeAlgorithm(): void {
            log('Strategy A algorithm executed.');
        }
    }

    class StrategyB implements Strategy {
        public executeAlgorithm(): void {
            log('Strategy B algorithm executed.');
        }
    }

    class StrategyC implements Strategy {
        public executeAlgorithm(): void {
            log('Strategy C algorithm executed.');
        }
    }

    class Context {
        
        private _strategy: Strategy;

        public set strategy(strategy: Strategy) {
            this._strategy = strategy;
        }

        public doBusinessLogic(): void {
            this._strategy.executeAlgorithm();
        }

    }
}