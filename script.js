function stringChop(str, size) {
    if (!str) return [];

    let result = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        result.push(str.substring(i, i + chunkLength));
    }
    return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
