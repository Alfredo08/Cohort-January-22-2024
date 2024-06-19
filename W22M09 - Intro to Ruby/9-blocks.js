
const greeting = (name, callback) => {
    console.log(name);
    callback();
    console.log("See you around!");
}

const printHello = () => {
    console.log("Hello there!");
}

greeting("Alex", printHello);