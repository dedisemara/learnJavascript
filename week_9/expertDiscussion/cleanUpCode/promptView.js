
const readlineSync = require('readline-sync');
const TicTacToeBoardView = require('./ticTacToeBoardView');

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

module.exports = PromptView;