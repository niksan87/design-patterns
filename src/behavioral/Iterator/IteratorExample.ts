import { log } from '../../utils/Logger';

export module IteratorExample {
    
    export const test = () => {
        const collection = new WordsCollection();
        collection.addItem('First');
        collection.addItem('Second');
        collection.addItem('Third');
        collection.addItem('Fourth');

        const straightIterator = collection.getIterator();
        log('Straight traversal:');
        while(straightIterator.valid()) {
            log(straightIterator.current());
            straightIterator.next();
        }

        const reversedIterator = collection.getReversedIterator();
        log('\nReversed traversal:');
        while(reversedIterator.valid()) {
            log(reversedIterator.current());
            reversedIterator.next();
        }

        const iterator = collection.getIterator();
        log('\nManual iteration:');
        log(iterator.current());
        iterator.next();
        log(iterator.current());
        iterator.previous();
        log(iterator.current());
        
    };

    interface Iterator<T> {
        current(): T;
        next(): T;
        previous(): T;
        rewind(): void;
        key(): number;
        valid(): boolean;
    }
    
    interface Aggregator<T> {
        getIterator(): Iterator<T>;
    }

    class AlphabeticalOrderIterator implements Iterator<string> {

        private _wordsCollection: WordsCollection;
        private _position: number;
        private _reverse: boolean;

        constructor(wordsCollection: WordsCollection, reverse: boolean = false){
            this._wordsCollection = wordsCollection;
            this._reverse = reverse;
            this._position = this._reverse ? this._wordsCollection.items.length - 1 : 0;
        }

        public current(): string {
            return this._wordsCollection.items[this._position];
        }

        public next(): string {
            return this._wordsCollection.items[this._reverse ? --this._position : ++this._position];

        }

        public previous(): string {
            return this._wordsCollection.items[this._reverse ? ++this._position : --this._position];
        }

        public rewind(): void {
            this._position = this._reverse ? this._wordsCollection.items.length - 1 : 0;
        }

        public key(): number {
            return this._position;
        }

        public valid(): boolean {
            if(this._reverse) {
                return this._position >= 0;
            }
            return this._position < this._wordsCollection.items.length;
        }

    }

    class WordsCollection implements Aggregator<string> {

        private _items: string[] = [];

        public get items(): string[] {
            return this._items;
        }

        public addItem(item: string): void {
            this._items.push(item);
        }

        public getIterator(): Iterator<string>{
            return new AlphabeticalOrderIterator(this);
        }

        public getReversedIterator(): Iterator<string>{
            return new AlphabeticalOrderIterator(this, true);
        }

    }

}