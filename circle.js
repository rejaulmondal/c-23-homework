class Circle{
    constructor(x,y,radius){
        var options={
            'density':1.0,
            'friction':100.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.width = radius;
        this.height = radius;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        fill("orange");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.width, this.height);
    }
}