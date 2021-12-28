interface IobjectA {
    keyA: string,
    keyB: string,
}

const objectA: IobjectA = {
    keyA: 'a value',
    keyB: 'b value',
}

objectA.keyA = 'new value';
objectA.keyC = 'new key';
