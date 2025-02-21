function stringChop(str, size) {
     if (!str || typeof str !== "string") return []; // Handle null, undefined, and non-string inputs
    if (size <= 0) return []; // Ensure chunk size is positive

    let result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }
    return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
