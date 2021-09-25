class Cannon{
    constructor(x, y, w, h, angle){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.angle = angle
        this.cannon_img = loadImage("assets/canon.png")
        this.cannonBase_img = loadImage("assets/cannonBase.png")
    }

    display(){
        

        if(keyIsDown(RIGHT_ARROW) && this.angle < 65){
            this.angle = this.angle + 1
            
        }

        if(keyIsDown(LEFT_ARROW)&& this.angle > -20){
            this.angle = this.angle - 1
        }

        push();
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.cannon_img, 0, 0, this.w, this.h)
        pop();


        
        image(this.cannonBase_img, 70, 20, 200, 200)
        noFill();
    }


}