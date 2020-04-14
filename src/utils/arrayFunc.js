
//数组合并去重

function mergeArray(arr1, arr2) {
    if ( ! (arr1 instanceof Array) ||  ! (arr2 instanceof Array) ) {
        throw (TypeError("params must be Array!"))

    }
    let arr = arr1
    for (const it of arr2) {
        if (!arr1.includes(it)) {
            arr.push(it)
        }
    }
    return arr

}

export { mergeArray }

