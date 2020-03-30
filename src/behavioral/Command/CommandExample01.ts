import { KeyboardManager } from '../../utils/KeyboardManager';
import { log } from '../../utils/Logger';
import { getRandomNumber } from '../../utils/Misc';

export module CommandExample01 {
    
    export const test = () => {

        const receiver = new Receiver('Receiver');
        const invoker = new Invoker('Invoker');
        KeyboardManager.onKeyDown('q', () => invoker.execute(new AddNumberCommand(receiver)));
        KeyboardManager.onKeyDown('w', () => invoker.execute(new DivideByTwoCommand(receiver)));
        KeyboardManager.onKeyDown('e', () => invoker.execute(new AddTwoZeroes(receiver)));
        KeyboardManager.onKeyDown('ArrowRight', () => invoker.redo());
        KeyboardManager.onKeyDown('ArrowLeft', () => invoker.undo());
    };

    class Receiver {

        private _name: string;
        public value: number;

        constructor(name: string) {
            log(`${name} created!`);
            this._name = name;
        }

    }

    class Invoker {

        private _name: string;
        private _commands: Command[];
        private _index: number;

        constructor(name: string) {
            log(`${name} created!`);
            this._name = name;
            this._commands = [];
            this._index = -1;
        }

        public execute(command: Command): void {
            if(this._commands.length - 1 > this._index) {
                this._commands.splice(this._index + 1, this._commands.length - this._index + 1);
            }
            this._index++;
            this._commands.push(command);
            command.execute();
        }
        
        public redo(): void {
            if(this._commands[this._index + 1]) {
                this._index++;
                log('redo:');
                this._commands[this._index].execute();
            }
        }

        public undo(): void {
            if(this._commands[this._index - 1]) {
                this._index--;
                log('undo:');
                this._commands[this._index].execute();
            }
        }

    }

    abstract class Command {
        protected value: number;
        protected receiver: Receiver;
        
        constructor(receiver: Receiver) {
            this.receiver = receiver;            
        }

        public execute(): void {
            this.receiver.value = this.value;
            log(this.value);
        }
    }

    class AddNumberCommand extends Command {

        public constructor(receiver: Receiver) {
            super(receiver);
            this.value = getRandomNumber();
        }

    }

    class DivideByTwoCommand extends Command {

        public constructor(receiver: Receiver) {
            super(receiver);
            this.value = this.receiver.value / 2;
        }
        
    }

    class AddTwoZeroes extends Command {

        public constructor(receiver: Receiver) {
            super(receiver);
            this.value = this.receiver.value * 100;
        }
        
    }

}
