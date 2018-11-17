
// this file contains a bunch of functions that are used to update
// the constructor


module.exports = class Board {

    constructor(cells) {
        var numberOfCells = 0;
        this.cells = cells;
        for ( var i = 0 ; i <= numberOfCells ; i++ ) {
            cells[i] = [];
            for ( var j = 0 ; j <= numberOfCells ; j ++ ) {
                cells[i][j] = [];
            }
        }
    }


    update() {

    }


}