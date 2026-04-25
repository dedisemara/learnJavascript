// 16-play-a-tic-tac-toe-game
/*
Tasks:
In a game of tic-tac-toe, two players take turns marking an available cell in a 3 * 3 grid with their respective tokens (either X or O). When one player has placed three tokens in a horizontal, vertical, or diagonal row on the grid, the game is over and that player has won. A draw (no winner) occurs when all the cells on the grid have been filled with tokens and neither player has achieved a win. Create a program for playing tic-tac-toe.

The program prompts two players to enter an X token and O token alternately. Whenever a token is entered, the program redisplays the board on the console and determines the status of the game (win, draw, or continue).

Here is a sample run:

-------------
|   |   |   |
-------------
|   |   |   |
-------------
|   |   |   |
-------------
Enter a row (0, 1, or 2) for player X: 1
Enter a column (0, 1, or 2) for player X: 1
-------------
|   |   |   |
-------------
|   | X |   |
-------------
|   |   |   |
-------------
Enter a row (0, 1, or 2) for player O: 1
Enter a column (0, 1, or 2) for player O: 2

-------------
|   |   |   |
-------------
|   | X | O |
-------------
|   |   |   |
-------------

Enter a row (0, 1, or 2) for player X:
...

-------------
| X |   |   |
-------------
| O | X | O |
-------------
|   |   | X |
-------------

Player X won
*/

// use model views control (MVC)
// - Model --> TicTacToeBoard
// inside the model
//  - Data
//  - Set Data
//  - Get Data

// - View --> TicTacToeBoardView
// inside the view
//  - rendering boardView (TicTacToeBoardView)
//  - promtView
//  - we doesn't allow processing data here. it's only viewing data

// - Controller --> TicTacToeBoardController
// inside the controller
//  - controller handle combine of model and view or combine all --> like a bridge
//  - illustration Model <- Controller -> View

// now we have architecture and then let's execute it
// encapsulation -> capsul -> powder (drug)

// terminology
// - grid
// - cell (cell state)
//   - empety
//   - player one
//   - player two

const readlineSync = require('readline-sync');
// why using capital word -> because Enum pattern
const Player = {
    ONE: 0,
    TWO: 1,
};

function TicTacToeBoard(gridSize) {
    this._gridSize = gridSize;
    this._grid = new Array(gridSize)
        .fill(null)
        .map(() => new Array(gridSize).fill(null))


    this.getGridSize = function() {
        return this._gridSize;
    }

    this.getOccupant = function(row, col) {
        return this._grid[row][col];
    }

    this.setOccupant = function(row, col, player) {
        this._grid[row][col] = player;
    }
    this.isCellEmpty = function(row, col){
        return this.getOccupant(row, col) === null;
    }
    this.isValidCoordinate = function(row, col){
        return row >= 0 && row < this._gridSize &&
               col >= 0 && col < this._gridSize;
    }
};

function TicTacToeBoardView() {
// -------------
// | X |   |   |
// -------------
// | O | X | O |
// -------------
// |   |   | X |
// -------------

    this._symbolMap = {
        null: ' ',
        [Player.ONE]: 'X',
        [Player.TWO]: 'O',
    }
    this.render = function(board) {
        let output = '';

        const hSparator = '-'.repeat((board.getGridSize() * 4) + 1);

        for (let r = 0; r < board.getGridSize(); r++) {
            output += hSparator + '\n';


            let rowStr = '|';
            for (let c = 0; c < board.getGridSize(); c++) {
                const occupant = board.getOccupant(r, c);
                const symbol = this._symbolMap[occupant];
                rowStr += ` ${symbol} |`
            }
            output += rowStr + '\n';
        };
        output += hSparator;
        return output;
    }
    
    this.getSymbol = function(player) {
        return this._symbolMap[player];
    }

};

function PromptView(gridSize) {
    this._gridSize = gridSize;
    this._boardView = new TicTacToeBoardView();

    this.readRow = function(player) {
        const symbol = this._boardView.getSymbol(player);
        return Number.parseInt(
            readlineSync.question(`Enter a row (0 - ${this._gridSize - 1}) for player ${symbol}: `), 
            10);
    }

    this.readColumn = function(player) {
        const symbol = this._boardView.getSymbol(player);
        return Number.parseInt(
            readlineSync.question(`Enter a collumn (0 - ${this._gridSize - 1}) for player ${symbol}: `), 
            10);

    }

    this.displayBoard = function(board) {
        console.log('\n' + this._boardView.render(board));
    };
    
    this.displayPlayerWon = function(player) {
        const symbol = this._boardView.getSymbol(player);
        console.log(`Player ${symbol} won.`)

    }

    this.displayPlayerDraw = function(player) {
        console.log(`It's a draw.`)
    }

    this.displayInvalidCoordinateError = function(player) {
        console.log('Error: Invalid coordinate. Try again!')
    };

    this.displayCellAlreadyOccupiedError = function(player) {
        console.log('Error: Call already occupied. Try again!')
    }

};


// testing method
// const board = new TicTacToeBoard(4);
// board.setOccupant(0, 0, Player.ONE);
// board.setOccupant(0, 1, Player.TWO);

// const promptView = new PromptView(4);
// promptView.displayBoard(board);
// promptView.displayPlayerDraw()
// promptView.displayInvalidCoordinateError();
// promptView.displayCellAlreadyOccupiedError();

// const row = promptView.readRow(Player.ONE);
// const column = promptView.readColumn(Player.TWO);

// console.log(row);
// console.log(column);

function TicTacToeController() {
    this._board = new TicTacToeBoard(3);
    this._promptView = new PromptView(3);

    this._currentPlayer = Player.ONE;
    this._moveCount = 0;

    this.initializeGame = function() {
        while (true) {
            this._promptView.displayBoard(this._board);

            const [row, col] = this._retrieveRowAndColumn();
            this._board.setOccupant(row, col, this._currentPlayer);

            if (this._isWon(row, col)) {
                this._promptView.displayBoard(this._board);
                this._promptView.displayPlayerWon(this._currentPlayer);
                break;
            }

            this._moveCount++

            if (this._isDraw()){
                this._promptView.displayBoard(this._board);
                this._promptView.displayPlayerDraw();
                break;
            }

            this._switchPlayer();
        }
    }

    this._retrieveRowAndColumn = function() {
        let row;
        let col;


        while(true){
            row = this._promptView.readRow(this._currentPlayer);
            col = this._promptView.readColumn(this._currentPlayer);

            if (!this._board.isValidCoordinate(row, col)){
                this._promptView.displayInvalidCoordinateError();
                continue;

            }

            if (!this._board.isCellEmpty(row, col)) {
                this._promptView.displayCellAlreadyOccupiedError();
                continue
            }
            break;

        }
        return [row, col];
    }

    this._switchPlayer = function() {
        this._currentPlayer = this._currentPlayer === Player.ONE
            ? Player.TWO
            : Player.ONE;
    }

    this._isWon = function(lastRow, lastCol) {
        const gridSize = this._board.getGridSize();

        // check row
        let rowWin = true;
        for (let c = 0; c < gridSize; c++) {
            if (this._board.getOccupant(lastRow, c) !== this._currentPlayer) {
                rowWin = false;
                break;
            }
        }
        if (rowWin) {
            return true
        };

        // check col
        let colWin = true;
        for (let r = 0; r < gridSize; r++){
            if(this._board.getOccupant(r, lastCol) !== this._currentPlayer) {
               colWin = false;
               break; 
            }
        }
        if (colWin) {
            return true;
        };

        // check diagonal (optional)

        if(lastRow === lastCol) {
            let diagWin = true;
            for (let i = 0; i < gridSize; i++){
                if (this._board.getOccupant(i, i) !== this._currentPlayer){
                    diagWin = false;
                    break;
                }
            }
            if (diagWin) {
                return true;
            }
        }

        
        // check anti diagonal (optional)
        if (lastCol + lastRow === gridSize - 1){
            let diagWin = true;
            for (let i = 0; i < gridSize; i++) {
                if(this._board.getOccupant(i, gridSize - i - 1) !== this._currentPlayer){
                    diagWin = false;
                    break
                }
            }
            if (diagWin) {
                return true;
            }
        }
        return false;

    }

    this._isDraw = function() {
        return this._moveCount === this._board.getGridSize() * this._board.getGridSize();
    }
};


const controller = new TicTacToeController();
controller.initializeGame()