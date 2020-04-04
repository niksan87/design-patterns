import { CommandExample } from './behavioral/Command/CommandExample';
import { ChainOfRespExample } from './behavioral/ChainOfResponsibility/ChainOfRespExample';
import { ObserverExample } from './behavioral/Observer/ObserverExample';
import { MediatorExample } from './behavioral/Mediator/MediatorExample';
import { MementoExample } from './behavioral/Memento/MementoExample';
import { StateExample } from './behavioral/State/StateExample';

window.onload = () => {

    /**
     * ===================
     * BEHAVIORAL PATTERNS
     * ===================
     */
    
    /**
     * COMMAND
     */
    // CommandExample.test();

    /**
     * CHAIN OF RESPONCIBILITY
     */
    // ChainOfRespExample.test();

    /**
     * OBSERVER
     */
    // ObserverExample.test();

    /**
     * MEDIATOR
     */
    // MediatorExample.test();

    /**
     * MEMENTO
     */
    // MementoExample.test();

    /**
     * STATE
     */
    StateExample.test();

};
