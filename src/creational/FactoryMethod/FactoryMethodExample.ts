import { log } from '../../utils/Logger';

export module FactoryMethodExample {
    
    export const test = () => {
        const factories = [new Resume(), new Report()];
        factories.forEach((factory: PageFactory) => {
            log(`Factory name: ${factory.name}, pages: ${factory.pages}.`);
        });
    };

    abstract class PageFactory {

        private _name: string;
        private _pages: string[];

        constructor(name: string){
            this._name = name;
            this._pages = [];
            this.createPages();
        }

        public get name(): string {
            return this._name;
        }

        public get pages(): string[] {
            return this._pages;
        }

        public abstract createPages(): void;
    }

    class Resume extends PageFactory {
        
        constructor() {
            super('Resume');
        }

        public createPages(): void {
            this.pages.push('Home');
            this.pages.push('Education');
            this.pages.push('Experience');
        }
    }

    class Report extends PageFactory {
        
        constructor() {
            super('Report');
        }

        public createPages(): void {
            this.pages.push('Home');
            this.pages.push('Results');
            this.pages.push('Summary');
            this.pages.push('Conclusion');
        }
    }

}