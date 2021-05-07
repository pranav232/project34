class Box{
    constructor(x,y,width,height){
    var box_options ={
  restitution:1
    }

    this.body = Bodies.rectangle(x,y,width,height,box_options);
    this.width = width;
    this.height = height;

    World.add(world,this.body);

}
display(){
    var pos = this.body.position
    rectMode(CENTER);
    fill("orange");
    rect(pos.x,pos.y,this.width,this.height);

}
}