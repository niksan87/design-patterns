import { log } from '../../utils/Logger';

export module ChainOfRespExample {
    
    export const test = () => {

        const scores = [
            new Score('John', 1),
            new Score('Jane', 5),
            new Score('Adam', 4),
            new Score('Peter', 6),
            new Score('Ana', 3)
        ];

        let acceptedScores: Score[] = [];

        scores.forEach((score: Score) => {
            const validationChain = new ValidationChain();
            validationChain.addValidator(new ScoreAbove3Validator());
            validationChain.addValidator(new IsFourLetterNameValidator());

            if(validationChain.validate(score)) {
                acceptedScores.push(score);
            }
        });

        acceptedScores.forEach(score => log(score));
    };

    class Score {

        public participant: string;
        public value: number;

        constructor(participant: string, value: number){
            this.participant = participant;
            this.value = value;
        }
    }

    class ValidationChain {

        private _validators: Validator[] = [];

        public validate(score: Score): boolean {
            let output = true;
            for (let i = 0; i < this._validators.length; i++) {
                output = this._validators[i].validate(score);
                if(!output) {
                    break;
                }
            }
            return output;
        }

        public addValidator(validator: Validator): void {
            this._validators.push(validator);
        }
    }

    abstract class Validator {
        public abstract validate(score: Score): boolean;
    }

    class ScoreAbove3Validator extends Validator {
        public validate(score: Score): boolean{
            return score.value > 2;
        }
    }

    class IsFourLetterNameValidator extends Validator {
        public validate(score: Score): boolean{
            return score.participant.length === 4;
        }
    }
}