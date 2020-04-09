import { log } from '../../utils/Logger';

export module InterpreterExample {
    
    export const test = () => {
        const context = new Context('This is my text. However it could be separate sentences here.');
        const expressions = [new CountSentencesExpression(), new NumberOfCharactersExpression()];
        expressions.forEach((expression: Expression) => expression.interpret(context));
    };

    interface Expression {
        interpret(context: Context): void;
    }

    class CountSentencesExpression implements Expression {
        public interpret(context: Context): void {
            log(`Input: '${context.input}' has ${context.input.split('.').length - 1} senteces.`);
        }
    }

    class NumberOfCharactersExpression implements Expression {
        public interpret(context: Context): void {
            log(`Input: '${context.input}' has ${context.input.length - 1} characters.`);
        }
    }

    class Context {
        private _input: string;

        constructor(input: string){
            this._input = input;
        }

        public get input(): string {
            return this._input;
        }

    }

}