const Player = require('./constants');
const TicTacToeBoard = require('./ticTacToeBoard');
const PromptView = require('./promptView');



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

module.exports = TicTacToeController;