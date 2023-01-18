// Advanced type alias
type Buttons = {
  up: string;
  down: string;
  right: string;
  left: string;
};

type Last = Buttons & {
  x: boolean;
};

function getActions(btns: Last) {
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

type nums = 0 | 1 | -1;

function compair(num1: number, num2: number): nums {
  if (num1 > num2) return 0;
  else if (num2 > num1) return 1;
  else return -1;
}

console.log(compair(1, 2));

let myNumbers: nums = 0;

let articles: readonly [number, string, boolean] = [12, "Jonior", true];
articles = [83, "Senoir", false];
console.log(articles);

const [id, title, published] = articles;
console.log(id);
console.log(title);
console.log(published);
