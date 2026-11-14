class ufo{
    constructor(x,z){
        this.obj = document.createElement("a-entity");
        this.x = x;
        this.y = 100;
        this.dy = 0.25;
        this.z = z;
        let base = document.createElement("a-sphere");
        base.setAttribute("position", "0 1 0");
        base.setAttribute("color","#5a94ca");
        this.obj.append(base);


        let base_2 = document.createElement("a-entity");
        let base_2_vessel = document.createElement("a-sphere");
        base_2_vessel.setAttribute("color","gray");
        base_2.append(base_2_vessel);
        base_2.setAttribute("scale","2 1 2");
        this.obj.append(base_2);


        this.obj.setAttribute("position",{x:x, y:this.y, z:z});


        scene.append(this.obj);
    }

    fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        if(this.y<1.5){
            this.dy=0;
        }


    }
}