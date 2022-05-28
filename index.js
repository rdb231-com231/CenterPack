export default class Select {
    constructor(main) {
        this.main = main
    };

    send() {
        return console.log(this.main);
    };

    static randint(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    randnum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    static output(msg) {
        return console.log(msg);
    };
    
    static randstr(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    };

    static randbln() {
        arr = [true, false];
        this.randstr(arr);
    }
};

export function send(msg) {
    return console.log(msg.toString());
};

export class Store {
    data = {};
    constructor(name) {
        this.data[name];
    };

    store(data, name) {
        this.data[name] = data;
    };

    remove(data, name) {
        if (data.name[data]) data.name[data] = null;
        else return;
    };
};


import { str, merge, kick } from 'ondash'