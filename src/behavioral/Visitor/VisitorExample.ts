import { log } from '../../utils/Logger';

export module VisitorExample {
    
    export const test = () => {
        const consoleWriter = new ConsoleWriter();
        const screenWriter = new ScreenWriter();

        const grandParent = new ElementNode('Grand parent');
        const parentA = new Element('Parent A');
        const parentB = new ElementNode('Parent B');
        const childA = new Element('Child A');
        const childB = new Element('Child B');

        grandParent.appendChild([parentA, parentB]);
        parentB.appendChild([childA, childB]);

        grandParent.accept(consoleWriter);
        grandParent.accept(screenWriter);
        
    };

    interface ElementVisitor {
        visitElement(element: Element): void;
        visitElementNode(elementNode: ElementNode): void;
    }

    class Element {
        public name: string;
        public parent: ElementNode;

        constructor(name: string, parent?: ElementNode){
            this.name = name;
            if(parent) {
                this.parent = parent;
            }
        }

        public accept(visitor: ElementVisitor): void {
            visitor.visitElement(this);
        }

        public get depth(): number {
            return this.parent ? this.parent.depth + 1 : 0;
        }
    }

    class ElementNode extends Element {

        private _children: Element[] = [];

        public get length(): number {
            return this._children.length;
        }

        public appendChild(child: Element | Element[]): ElementNode {
            if(!Array.isArray(child)){
                child = [child];
            }
            child.forEach(child => {
                child.parent = this;
                this._children.push(child);
            });
            return this;
        }

        public accept(visitor: ElementVisitor): void {
            visitor.visitElementNode(this);
            this._children.forEach( child => child.accept(visitor));
        }

    }

    class ConsoleWriter implements ElementVisitor {

        public visitElement(element: Element): void {
            log(`Visiting element '${element.name}'.`);
        }

        public visitElementNode(elementNode: ElementNode): void {
            log(`Visiting element node '${elementNode.name}'.`);
        }

    }

    class ScreenWriter implements ElementVisitor {

        public visitElement(element: Element): void {
            const div = document.createElement('div');
            div.style.color ='white';
            div.textContent = `Visiting element '${element.name}'.`;
            document.body.appendChild(div);
        }

        public visitElementNode(elementNode: ElementNode): void {
            const div = document.createElement('div');
            div.style.color ='white';
            div.textContent = `Visiting element node '${elementNode.name}'.`;
            document.body.appendChild(div);
        }

    }

}