class Paper{
    constructor(x,y,)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		//this.r=r;
        this.body=Bodies.circle(this.x, this.y,20, options);
        this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
           stroke("white");
           fill(255);
            ellipse(0,0,this.r, this.r);
            imageMode(CENTER);
            image(this.image,0,0,50,50)
            pop()
			
	}

}
