import { log } from '../../utils/Logger';

export module ChainOfResponsibility {

    type Sender = any;

    type EventArgs = any;

    type EventHandler = (sender: Sender, eventArgs: EventArgs) => void;
    
    interface ICancellableEvent {
        add(eventHandler: EventHandler): void;
        remove(eventHandler: EventHandler): void;
    }

    interface ICancellableEventArgs {
        cancel: boolean;
    }
    
    class CancellableEvent implements ICancellableEvent {

        private _eventHandlers: EventHandler[] = [];

        public add(eventHandler: EventHandler): void {
            if(this._eventHandlers.indexOf(eventHandler) === -1) {
                this._eventHandlers.push(eventHandler);
            }
        }

        public remove(eventHandler: EventHandler): void {
            const i = this._eventHandlers.indexOf(eventHandler);
            if(i !== -1) {
                this._eventHandlers.splice(i, 1);
            }
        }

        public raise(sender: Sender, eventArgs: EventArgs): void {
            const eventHandlers = this._eventHandlers.slice(0);
            eventHandlers.forEach((eventHandler: EventHandler) => eventHandler(sender, eventArgs));
        }
    }

    class ValidationEventArgs implements ICancellableEventArgs {

        public value: any = null
        public isValid: boolean = true;
        public cancel: boolean = false;
        public result: string = '';

        constructor(value: any){
            this.value = value;
        }

        public status(): void {
            log(this.isValid ? `The value: ${this.value} is valid!` : this.result);
        }

    }

    class ValidationChain {

        private _validators = new CancellableEvent();

        public get validators(): ICancellableEvent {
            return this._validators;
        }

        public validate( eventArgs: ValidationEventArgs): void {
            this._validators.raise(this, eventArgs);
        }

    }

    class StringValidators {
        
        public static NullValidator(sender: Sender, eventArgs: ValidationEventArgs): void {
            if(eventArgs.value === null) {
                eventArgs.result = 'String is null';
                eventArgs.cancel = true;
                eventArgs.isValid = false;
            }
        }

        public static EmptyValidator(sender: Sender, eventArgs: ValidationEventArgs): void {
            if(eventArgs.value.eventArgs.value.trim().length <= 0) {
                eventArgs.result = 'String is empty!';
                eventArgs.cancel = true;
                eventArgs.isValid = false;
            }
        }

        public static LengthValidator(max: number): Function {
            return (sneder: Sender, eventArgs: ValidationEventArgs) => {
                if((eventArgs.value as string).length > max) {
                    eventArgs.result = `The string ${eventArgs.value} is too long!`;
                    eventArgs.cancel = true;
                    eventArgs.isValid = false;
                }
            };
        }

    }
    
    export const test = () => {

        const valuesToValidate = [null, '', '12345678910', 'Custom'];
        const validationChain = new ValidationChain();

        validationChain.validators.add(StringValidators.NullValidator);
        validationChain.validators.add(StringValidators.EmptyValidator);
        // .add(StringValidators.LengthValidator(10));

        valuesToValidate.forEach(value => {
            const eventArgs = new ValidationEventArgs(value);
            validationChain.validate(eventArgs);
            eventArgs.status();
        });
        
    };

}