function showMsg(msg: any) {
    return msg;
}

console.log(showMsg([1, 2, 3]));
console.log(showMsg('hello'));

// it is not recommended to use the any type when there are other solutions