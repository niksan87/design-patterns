import { log } from '../../utils/Logger';

export module TemplateMethodExample {
    
    export const test = () => {
        const migrators = [new PersonMigrator(), new AddressMigrator()];
        migrators.forEach(migrator => migrator.updateItems());
    };

    abstract class ItemMigrator {
        
        protected abstract getItems(): void;
        protected abstract changeItems(): boolean;
        protected abstract saveItems(): void;

        public updateItems(): void {
            log(`\nUpdating items of type '${this.constructor.name}'`);
            this.getItems();
            if(this.changeItems()) {
                this.saveItems();
            }
        }
    }

    class PersonMigrator extends ItemMigrator {

        protected getItems(): void {
            log('Getting people.');
        }

        protected changeItems(): boolean {
            log('Changing people.');
            return true;
        }

        protected saveItems(): void {
            log('Saving people.');
        }

    }

    class AddressMigrator extends ItemMigrator {

        protected getItems(): void {
            log('Getting addresses.');
        }

        protected changeItems(): boolean {
            log('Not changing addresses.');
            return false;
        }

        protected saveItems(): void {
            log('Saving addresses.');
        }

    }

}