const Player = require('./constants');

function TicTacToeBoardView() {

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

module.exports = TicTacToeBoardView;