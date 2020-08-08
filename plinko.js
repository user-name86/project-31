class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic: true
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0,0,this.radius, this.radius);
        pop();
    }
}