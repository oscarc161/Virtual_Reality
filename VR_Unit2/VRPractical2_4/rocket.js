class Rocket{
    constructor(x,z,dy_change){
        this.obj = document.createElement("a-entity");
        this.x = x;
        this.y = 1;
        this.dy_change = dy_change;
        this.z = z;
        this.dy = 0;
        let base = document.createElement("a-cylinder");
        base.setAttribute("radius","0.5");
        base.setAttribute("height","2");
        base.setAttribute("position","0 1 0");
        base.setAttribute("color","#C0C0C0");
     // base.setAttribute("","");
        this.obj.append(base);

        let bottom = document.createElement("a-cone");
        bottom.setAttribute("color","gray");
        this.obj.append(bottom);

        let tip = document.createElement("a-cone");
        tip.setAttribute("radius-bottom","0.6")
        tip.setAttribute("color","red");
        tip.setAttribute("position","0 2.5 0");
        this.obj.append(tip);

        let wing_1 = document.createElement("a-triangle");
        wing_1.setAttribute("color","red");
        wing_1.setAttribute("position","1 1 0");
        wing_1.setAttribute("rotation","0 0 -90");
        wing_1.setAttribute("side","double");
        this.obj.append(wing_1);

        let wing_2 = document.createElement("a-triangle");
        wing_2.setAttribute("color","red");
        wing_2.setAttribute("position","-1 1 0");
        wing_2.setAttribute("rotation","0 0 90");
        wing_2.setAttribute("side","double");
        this.obj.append(wing_2);


        this.obj.setAttribute("position",{x:x, z:z});
        this.obj.setAttribute("rotation","0 90 0");

        scene.append(this.obj);
    }

    launch(){
        this.dy+=this.dy_change;
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        if(this.y>100){
            this.y = 0;
            this.dy=0;
        }

    }
}