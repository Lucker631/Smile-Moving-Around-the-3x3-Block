# Smile Moving Around the 3x3 Block

A simple console-based game where you control a smiling face `;)` around a 3x3 grid using WASD keys.

## Demo

```
 ;)    x    x
  x    x    x
  x    x    x
```

## Description

This is a minimalist TypeScript console game where you navigate a smiling face through a 3x3 grid. The game prevents you from moving beyond the boundaries of the grid and updates the display after each move.

## Technologies Used

- TypeScript
- Node.js
- readline (for handling user input)

## Installation

1. Clone this repository

   ```bash
   git clone https://github.com/your-username/smile-game.git
   cd smile-game
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Build the TypeScript code
   ```bash
   npm run build
   ```

## How to Play

1. Start the game

   ```bash
   npm run game
   ```

2. Controls:

   - `W` - Move up
   - `A` - Move left
   - `S` - Move down
   - `D` - Move right

3. Press Enter after each key input to move the smile

## Project Structure

```
smile-game/
├── src/
│   └── index.ts        # Main game file
├── dist/               # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

## Package Configuration

Ensure your `package.json` includes these scripts:

```json
"scripts": {
  "build": "tsc",
  "game": "node dist/index.js"
}
```

## Future Improvements

- Add collectible items or objectives
- Implement a scoring system
- Add different levels with larger grids
- Create obstacles or enemies

## License

MIT

## Acknowledgments

- Created as a learning project for TypeScript and console-based games
