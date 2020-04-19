import { log } from '../../utils/Logger';

export module AdapterExample {
    
    export const test = () => {
        const target = new Target();
        log(target.request());

        const adaptee = new Adaptee();
        log(adaptee.specificRequest());

        const adapter = new Adapter(adaptee);
        log(adapter.request());
    };

    class Target {

        public request(): string {
            return 'Target: The default target\'s behavior.';
        }

    }

    class Adaptee {
        
        public specificRequest(): string {
            return escape('Target: The specific target\'s behavior.');
        }

    }

    class Adapter extends Target {
        
        private _adaptee: Adaptee;

        constructor(adaptee: Adaptee){
            super();
            this._adaptee = adaptee;
        }

        public request(): string {
            return unescape(this._adaptee.specificRequest());
        }

    }

}