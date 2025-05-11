"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const defaultCharacterPosition = {
    x: 0,
    y: 0,
};
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
    constructor(position) {
        this.position = position;
        this.character = " ;)  ";
        this.boardCharacter = "  x  ";
        this.board = [
            ["  x  ", "  x  ", "  x  "],
            ["  x  ", "  x  ", "  x  "],
            ["  x  ", "  x  ", "  x  "],
        ];
        this.startGame = (board) => {
            let rowStage = "";
            for (const row of board) {
                for (const cell of row) {
                    rowStage += cell;
                }
                console.log(rowStage);
                rowStage = "";
            }
        };
    }
    placeCharacter() {
        return __awaiter(this, void 0, void 0, function* () {
            const { x, y } = this.position;
            this.board[x][y] = this.character;
            // console.log(this.board)
            this.startGame(this.board);
        });
    }
    moveRight() {
        if (this.border("right")) {
            console.clear();
            const oldY = this.position.y;
            this.position.y = this.position.y + 1;
            this.board[this.position.x][oldY] = this.boardCharacter;
            this.placeCharacter();
        }
        else {
            console.log("You reached the map edge, you cant go further");
        }
    }
    moveLeft() {
        if (this.border("left")) {
            console.clear();
            const oldY = this.position.y;
            this.position.y = this.position.y - 1;
            this.board[this.position.x][oldY] = this.boardCharacter;
            this.placeCharacter();
        }
        else {
            console.log("You reached the map edge, you cant go further");
        }
    }
    moveDown() {
        if (this.border("down")) {
            console.clear();
            const oldX = this.position.x;
            this.position.x = this.position.x + 1;
            this.board[oldX][this.position.y] = this.boardCharacter;
            this.placeCharacter();
        }
        else {
            console.log("You reached the map edge, you cant go further");
        }
    }
    moveUp() {
        if (this.border("up")) {
            console.clear();
            const oldX = this.position.x;
            this.position.x = this.position.x - 1;
            this.board[oldX][this.position.y] = this.boardCharacter;
            this.placeCharacter();
        }
        else {
            console.log("You reached the map edge, you cant go further");
        }
    }
    border(direction) {
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
const rules = "Use WASD to move around";
const game = new Game(defaultCharacterPosition);
// console.log(game)
game.placeCharacter();
movement();
console.log(rules);
// game.checkBorder()
