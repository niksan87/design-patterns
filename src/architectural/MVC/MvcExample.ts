import { log } from '../../utils/Logger';

export module MvcExample {
    
    export const test = () => {

        const app = new Controller(new Model(), new View());
        
    };

    class Model {
        
        public clickCount: number = 0;

        public click(): void {
            this.clickCount++;
        }

    }

    class View {
        
        constructor() {
            window['click'] = () => window.dispatchEvent(new Event('click'));
        }

        public onClick(handler: Function): void {
            window.addEventListener('click', () => handler());
        }
        
        public showClickCount(data): void {
            console.log(data);
        }
        
    }

    class Controller {

        constructor(public model: Model, public view: View){
            this.model = model;
            this.view = view;
            this.view.onClick(this.handleClick);
            this.view.showClickCount(this.model.clickCount);
        }

        private handleClick = () => {
            this.model.click();
            this.view.showClickCount(this.model.clickCount);
        }

    }

}