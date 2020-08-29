class Box
{
    constructor(x, y, width, height)
    {
        var options = 
        {
            restitution:0.8,
            friction:0,
            
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("Box.png")
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world,this.body)
    }

    score()
    {
        if(this.visibility < 0 && this.visibility >- 105)
        {
            score++
        }
    }

    display()
    {
        if(this.body.speed < 3)
        {
            //rectMode(CENTER)
            //rect()
            imageMode(CENTER)
            image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
        }
        else
        {
            World.remove(world,this.body);
            push()
            this.visibility = this.visibility - 5
            tint(255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,20,20)
            pop()
        }
       
    }
    
  
};
  