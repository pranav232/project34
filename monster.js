class Monster{
    constructor(x,y,width,height){
    var box_options ={
  restitution:1
    }

    this.body = Bodies.rectangle(x,y,width,height,box_options);
    this.width = width;
    this.height = height;
    this.image=loadImage("monster1.png")
    World.add(world,this.body);

}
display(){
    var pos = this.body.position
    imageMode(CENTER);
    fill("orange");
    image(this.image,pos.x,pos.y,this.width,this.height);

}
}