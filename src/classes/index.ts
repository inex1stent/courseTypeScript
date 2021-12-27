export abstract class Human {
    constructor(public name: string) { }
    abstract program(): void;
}
export class Leo extends Human {
    program(): void {
        console.log('leo is programming')
    }
}