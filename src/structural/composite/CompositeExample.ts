import { log } from '../../utils/Logger';

export module CompositeExample {
    
    export const test = () => {
        const clientCode = (component: Component) => log(`RESULT: ${component.operation()}`);
        const clientCode2 = (component1: Component, component2: Component) => {
            if(component1.isComposite()) {
                component1.add(component2);
            }
            log(`RESULT: ${component1.operation()}`);
        };
        const simple = new Leaf();
        clientCode(simple);

        const tree = new Composite();
        const branch1 = new Composite();
        branch1.add(new Leaf());
        branch1.add(new Leaf());
        const branch2 = new Composite();
        branch2.add(new Leaf());
        tree.add(branch1);
        tree.add(branch2);
        clientCode(tree);

        clientCode2(tree, simple);
    };

    abstract class Component {

        public parent: Component | null;

        public add(component: Component): void { }

        public remove(component: Component): void { }

        public isComposite(): boolean {
            return false;
        }

        public abstract operation(): string;
    }

    class Leaf extends Component {
        
        public operation(): string {
            return 'Leaf';
        }

    }

    class Composite extends Component {

        protected children: Component[] = [];

        public add(component: Component): void {
            this.children.push(component);
            component.parent = this;
        }

        public remove(component: Component): void {
            this.children.splice(this.children.indexOf(component), 1);
            component.parent = null;
        }

        public isComposite(): boolean {
            return true;
        }

        public operation(): string {
            const results: string[] = [];
            this.children.forEach(child => results.push(child.operation()));
            return `Branch(${results.join('+')})`;
        }
    }

}