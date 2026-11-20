class Goblin{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.querySelector("#goblin").cloneNode(true);
    this.obj.setAttribute("scale","0.5 0.5 0.5")

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}