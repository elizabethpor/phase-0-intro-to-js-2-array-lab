// Write your solution here!
const cats = [
    "Milo", 
    "Otis", 
    "Garfield"
]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) { 
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat() {
 //   const noLastCatArray = [cats.slice(-1)];
 //   return noLastCatArray;
    return [cats.slice(0, -1)];
}
function removeFirstCat() {
 //   const noFirstCat = [cats.slice(1)];
 //   return noFirstCat;
    return [cats.slice(1)];
}