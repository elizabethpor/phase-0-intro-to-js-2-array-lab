// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// can use pop() or splice()
// function destructivelyRemoveLastCat() {
//     cats.pop();
// }
function destructivelyRemoveLastCat() {
    cats.splice(2, 1);
}

//can use shift() or splice()
// function destructivelyRemoveFirstCat() {
//     cats.shift();
// }

function destructivelyRemoveFirstCat() {
    cats.splice(0, 1);
}

function appendCat(name) {
    // const copyOfCatsAppended = [...cats, name];
    // return copyOfCatsAppended;
    return [...cats, name];
}

function prependCat(name) {
    // const copyOfCatsPrepended = [name , ...cats];
    // return copyOfCatsPrepended;
    return [name, ...cats];
}

function removeLastCat() {
    // const copyOfCatsNoLastCat = cats.slice(0, cats.length -1);
    // return copyOfCatsNoLastCat;
    return cats.slice(0, cats.length -1);
}

function removeFirstCat() {
    // const copyOfCatsNoFirstCat = cats.slice(1);
    // return copyOfCatsNoFirstCat;
    return cats.slice(1);
}