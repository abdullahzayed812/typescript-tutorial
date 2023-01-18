"use strict";
function getActions(btns) {
    console.log(`Action for button up ${btns.up}`);
    console.log(`Action for button down ${btns.down}`);
    console.log(`Action for button right ${btns.right}`);
    console.log(`Action for button left ${btns.left}`);
}
getActions({
    up: "go up",
    down: "go down",
    right: "go right",
    left: "go left",
    x: true,
});
function compair(num1, num2) {
    if (num1 > num2)
        return 0;
    else if (num2 > num1)
        return 1;
    else
        return -1;
}
console.log(compair(1, 2));
let myNumbers = 0;
let articles = [12, "Jonior", true];
articles = [83, "Senoir", false];
console.log(articles);
const [id, title, published] = articles;
console.log(id);
console.log(title);
console.log(published);
//# sourceMappingURL=test.js.map