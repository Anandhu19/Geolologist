class Iron{
	constructor(x,y)
	{
	var options = {

   'restitution' :0.8,
   'friction':3,
   'density':30

	}
		this.body=Bodies.rectangle(x,y,100,100,options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
rect(0,0,100,100)
			pop()
	}

}