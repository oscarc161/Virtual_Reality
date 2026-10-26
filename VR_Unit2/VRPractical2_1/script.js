let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,-0.5,z);
  }

  createCloud(0,7,0,45)

   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
  for(let i = 0; i < 150; i++){
    let x = rnd(-20,20);
    let y = rnd(5,9);
    let z = rnd(-20,20);
    let r = rnd(0,45);
    createCloud(x,y,z,r);
  }
   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
for(let i=0;i<50;i++){
let x = rnd(-20,20);
let y = 0;
let z = rnd(-20,20);
let scale = rnd(1,2);
createHouse(x,y,z,scale)
}







})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x,y,z,r){
  let cloud = document.createElement("a-entity");

  let s1 = document.createElement("a-sphere");
  s1.setAttribute("opacity","0.6");
  s1.setAttribute("position","-1 0 0");
  cloud.append(s1);

  let s2 = document.createElement("a-sphere");
  s2.setAttribute("opacity","0.6");
  s2.setAttribute("position","1 0 0");
  cloud.append(s2);

  let s3 = document.createElement("a-sphere");
  s3.setAttribute("opacity","0.6");
  s3.setAttribute("position","0 1 0");
  cloud.append(s3);

  cloud.setAttribute("position",`${x} ${y} ${z}`);
  cloud.setAttribute("rotation",`90 ${r} 0`);

  scene.append(cloud)




}
/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x,y,z,scale){
  let house = document.createElement("a-entity");

  let box = document.createElement("a-box");
  // use height width length not scale
  box.setAttribute("width", "3");
  box.setAttribute("height", "5");
  box.setAttribute("depth", "3");
  box.setAttribute("position","0 0.5 0");
  box.setAttribute("color","#BC4A3C"); 
  house.append(box);

  let roof = document.createElement("a-cone");
  roof.setAttribute("segments-radial","4");
  roof.setAttribute("radius-bottom","3");
  roof.setAttribute("position","0 3.75 0");
  roof.setAttribute("rotation", "0 45 0");
  roof.setAttribute("height","3");
  roof.setAttribute("color","pink");
  house.append(roof);

  house.setAttribute("position", `${x} ${y} ${z}`);
  house.setAttribute("scale",`${scale} ${scale} ${scale}`);
  scene.append(house);


}






function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



