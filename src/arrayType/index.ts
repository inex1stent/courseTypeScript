function multiply(...args: Array<number>) {
    return args.reduce((multiply, value) => multiply * value, 1);
}

const result = multiply(1, 2, 3);
console.log(result)