import { log } from '../../utils/Logger';

export module MvcExample {

    let counter = 0;
    
    export const test = () => {
        const app = new Controller(new Model(), new View()); 
    };

    class Model {
        
        public data: number = 0;

        public updateData(data: number): void {
            this.data = data;
        }

        public async getAsyncResponse(): Promise<number> {
            log('Requesting data...');
            return await new Promise((resolve) => {
                setTimeout(() => {
                    log('Data received:');
                    counter++;
                    resolve(counter);
                }, 1000);
            });
        }

    }

    class View {
        
        constructor() {
            window['click'] = () => window.dispatchEvent(new Event('click'));
        }

        public onClick(handler: Function): void {
            window.addEventListener('click', () => handler());
        }
        
        public showData(data): void {
            log('1');
        }
        
    }

    class Controller {

        constructor(public model: Model, public view: View){
            this.model = model;
            this.view = view;
            this.view.onClick(this.handleClick);
            this.view.showData(this.model.data);
        }

        private handleClick = () => {
            this.model.getAsyncResponse().then((data) => {
                this.model.updateData(data);
                this.view.showData(this.model.data);
            });            
        }

    }

}