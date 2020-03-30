class Logger {

    public static log(args): void {
        console.log('/---', ...args);
    }

}

export const log = (...args) => {
    Logger.log(args);
};