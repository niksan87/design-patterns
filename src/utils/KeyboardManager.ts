import { log } from './Logger';

export class KeyboardManager {

    public static onKeyDown(key: string, callback: Function): void {
        document.addEventListener('keydown', (e) => {
            if(key === e.key) {
                callback();
            }
        });
    }
    

}