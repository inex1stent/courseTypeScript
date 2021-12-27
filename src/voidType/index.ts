function noReturn(...args: Array<string>): void {
    console.log(args.join(' '));
}

const person2 = {
    name: 'leo',
    github: 'inex1stent',

    displayName(): void {
        console.log(this.name + ' ' + this.github);
    }
}

person2.displayName

noReturn('github', 'inex1stent');