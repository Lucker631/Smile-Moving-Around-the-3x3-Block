import * as readline from "readline";

interface Coordinates {
  x: number;
  y: number;
}
const defaultCharacterPosition: Coordinates = {
  x: 0,
  y: 0,
};
type Gameboard = string[][];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function movement() {
  rl.question("", (answer) => {
    switch (answer.toLowerCase()) {
      case "w":
        game.moveUp();
        break;
      case "d":
        game.moveRight();
        break;
      case "s":
        game.moveDown();
        break;
      case "a":
        game.moveLeft();
        break;
    }
    movement();
  });
}

class Game {
  constructor(private position: Coordinates) {}

  private character: string = " ;)  ";

  private boardCharacter: string = "  x  ";

  public board: Gameboard = [
    ["  x  ", "  x  ", "  x  "],
    ["  x  ", "  x  ", "  x  "],
    ["  x  ", "  x  ", "  x  "],
  ];

  public startGame = (board: Gameboard) => {
    let rowStage: string = "";
    for (const row of board) {
      for (const cell of row) {
        rowStage += cell;
      }
      console.log(rowStage);
      rowStage = "";
    }
  };

  async placeCharacter() {
    const { x, y } = this.position;
    this.board[x][y] = this.character;
    // console.log(this.board)
    this.startGame(this.board);
  }

  public moveRight() {
    if (this.border("right")) {
      console.clear();
      const oldY = this.position.y;
      this.position.y = this.position.y + 1;
      this.board[this.position.x][oldY] = this.boardCharacter;
      this.placeCharacter();
    } else {
      console.log("You reached the map edge, you cant go further");
    }
  }
  public moveLeft() {
    if (this.border("left")) {
      console.clear();
      const oldY = this.position.y;
      this.position.y = this.position.y - 1;
      this.board[this.position.x][oldY] = this.boardCharacter;
      this.placeCharacter();
    } else {
      console.log("You reached the map edge, you cant go further");
    }
  }
  public moveDown() {
    if (this.border("down")) {
      console.clear();
      const oldX = this.position.x;
      this.position.x = this.position.x + 1;
      this.board[oldX][this.position.y] = this.boardCharacter;
      this.placeCharacter();
    } else {
      console.log("You reached the map edge, you cant go further");
    }
  }
  public moveUp() {
    if (this.border("up")) {
      console.clear();
      const oldX = this.position.x;
      this.position.x = this.position.x - 1;
      this.board[oldX][this.position.y] = this.boardCharacter;
      this.placeCharacter();
    } else {
      console.log("You reached the map edge, you cant go further");
    }
  }

  public border(direction: "up" | "down" | "left" | "right"): boolean {
    const { x, y } = this.position;
    switch (direction) {
      case "up":
        return x > 0;
      case "down":
        return x < this.board.length - 1;
      case "left":
        return y > 0;
      case "right":
        return y < this.board[0].length - 1;
    }
  }
}

const rules: string = "Use WASD to move around";
const game = new Game(defaultCharacterPosition);
// console.log(game)
game.placeCharacter();
movement();
console.log(rules);

// game.checkBorder()
