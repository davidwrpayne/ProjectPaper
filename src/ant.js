module.exports = class Ant {

    constructor(postion) {
        this.position = postion;
    }

    draw(canvas, ctx) {
        
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.lineWidth = 1;
        ctx.arc(this.position.x,this.position.y-10,10,0,2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.position.x,this.position.y+10,10,0,2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.position.x,this.position.y,10,0,2*Math.PI);
        ctx.stroke();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.beginPath();
        ctx.lineTo(this.position.x+5, this.position.y +5);
        ctx.stroke();
    }

    setLocation(location) {
        this.position = location;
    }

    update(board) {
        //
        // var currentCell = board.cells[]

    }

}