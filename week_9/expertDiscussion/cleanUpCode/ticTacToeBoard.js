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


module.exports = TicTacToeBoard;