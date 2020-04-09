import { log } from '../../utils/Logger';

export module BuilderExample {
    
    export const test = () => {
        const director = new Director();

        director.construct(new Resume());
        director.showFactory();

        director.construct(new Report());
        director.showFactory();
    };

    abstract class PageFactory {

        private _name: string;
        private _pages: string[];
        public buildMethods: Function[];

        constructor(name: string){
            this._name = name;
            this._pages = [];
            this.buildMethods = [];
            this.buildMethods.push(() => this.createHomePage(), () => this.createAboutPage());
        }

        public get name(): string {
            return this._name;
        }

        public get pages(): string[] {
            return this._pages;
        }

        public abstract createHomePage(): void;
        public abstract createAboutPage(): void;
    }

    class Resume extends PageFactory {

        
        constructor() {
            super('Resume');
            this.buildMethods.push(() => this.createResumePage());
        }

        public createHomePage(): void {
            this.pages.push('Home for resume');
        }

        public createAboutPage(): void {
            this.pages.push('About for resume');
        }

        public createResumePage(): void {
            this.pages.push('Resume');
        }
    }

    class Report extends PageFactory {
        
        constructor() {
            super('Report');
            this.buildMethods.push(() => this.createReportPage());
        }

        public createHomePage(): void {
            this.pages.push('Home for report');
        }

        public createAboutPage(): void {
            this.pages.push('About for report');
        }

        public createReportPage(): void {
            this.pages.push('Report');
        }
    }

    class Director {

        private _pageFactory: PageFactory;

        public construct(pageFactory: PageFactory){
            this._pageFactory = pageFactory;
            this._pageFactory.buildMethods.forEach((buildMethod: Function) => buildMethod());
        }

        public showFactory(): void {
            log(this._pageFactory);
        }

    }

}