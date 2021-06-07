class stone{
	constructor(x,y)
	{
	var options = {

   'restitution' :0.8,
   'friction':0.9,
   'density':12

	}
		this.body=Bodies.rectangle(x,y,100,50,options)
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
			fill("brown");
rect(0,0,100,50)
			pop()
	}

}