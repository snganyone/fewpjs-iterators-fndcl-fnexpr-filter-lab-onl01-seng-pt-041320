// Code your solution here
function findMatching(arr, str) {
    return arr.filter(function(word){
        return word.toLowerCase().indexOf(str.toLowerCase()) >= 0;
    });
}

function fuzzyMatch(arr, str) {
    // return arr.filter(function(word){
    //     return word[0].toLowerCase().indexOf(str) === 0;
    // });
    return arr.filter((word) => word.startsWith(str));
}