class cannonBall{
    constructor(x, y){
        var option = {
            isStatic: true
        }

        this.r = 30
        this.body = Bodies.circle(x, y, this.r, option)
        this.image = loadImage("assets/cannonball.png")
        this.trajectory = [];
       
        World.add(world, this.body)

    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.r, this.r)
        pop();
        if(this.body.velocity.x > 0 && this.body.position.x > 225){
            var pos = [this.body.position.x, this.body.position.y]
            this.trajectory.push(pos);
        }
        for(var i = 0; i < this.trajectory.length; i++){
            image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5)

        }

        
    }

    shoot(){
        var newangle = cannon.angle- 30;
        newangle = newangle * (3.14/180)
        var velocity = p5.Vector.fromAngle(newangle)
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body, false)
        Matter.Body.setVelocity(this.body, {x:velocity.x *(180 / 3.14), y: velocity.y *(180 / 3.14)})
    }
}
