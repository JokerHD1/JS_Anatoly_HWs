function getOnlyNumbers(arrayOnAnyValues) {
    let result = arrayOnAnyValues.filter(value => typeof value === 'number' && !isNaN(value));
    return result;
}

const arr = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];
console.log(getOnlyNumbers(arr));
