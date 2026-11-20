class Block{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("src","#rocky");
    this.obj.setAttribute("height","20");
    this.obj.setAttribute("depth","2");
    this.obj.setAttribute("width","2");
    this.obj.setAttribute("repeat","1 5");

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}