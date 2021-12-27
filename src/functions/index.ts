function mapStrings(array: Array<string>, callbackfn: CallableFunction) {
    const newArray: Array<string> = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackfn(array[i]));
    }
    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, function(item: any) {
    return item.toUpperCase();
});

console.log(abcMapped)