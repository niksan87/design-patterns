import { log } from '../../utils/Logger';

export module SingletonExample {
    
    export const test = () => {
        const singA = Singleton.instance;
        log(singA);

        const singB = Singleton.instance;
        log(singA === singB);

        const singC = new Singleton();
    };

    class Singleton {
        
        private static _instance: Singleton;

        private constructor(){ }

        public static get instance(): Singleton {
            Singleton._instance = Singleton._instance || new Singleton();
            return Singleton._instance;
        }
        
    }

}