import { log } from '../../utils/Logger';

export module ProxyExample {
    
    export const test = () => {
        log('Client: Executing with real subject ...');
        const realSubject = new RealSubject();
        realSubject.request();
        log('Client: Executing with a proxy ...');
        const proxy = new Proxy(realSubject);
        proxy.request();
    };

    interface Subject {
        request(): void;
    }

    class RealSubject implements Subject {

        public request(): void {
            log('RealSubject: Handling request.');
        }

    }

    class Proxy implements Subject {

        private _realSubject: RealSubject;

        constructor(realSubject: RealSubject){
            this._realSubject = realSubject;
        }

        public request(): void {
            if(this.provideAccess()) {
                this._realSubject.request();
                this.logAccess();
            }

        }

        private provideAccess(): boolean {
            log('Proxy: Checking whether should provide access.');
            return true;
        }

        private logAccess(): void {
            log('Proxy: Logging access.');
        }
    }

}