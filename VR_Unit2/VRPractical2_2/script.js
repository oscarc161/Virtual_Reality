let scene, car, rocket, ball, dude, sun;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    rocket = document.querySelector("#rocket");
    ball = document.querySelector("#pokemonball");
    dude = document.querySelector("#dude");
    sun = document.querySelector("#sun");

    car.x = 0;
    car.dx = 0.01;

    rocket.y = -2;
    rocket.dy = 0.01;

    ball.r = 0;
    ball.dr = 5;

    dude.s = 1;
    dude.sr = 0.001;

    sun.o = 1;
    sun.or = 0.001;





    loop();

    
})

function loop(){

    car.x += car.dx;
    car.setAttribute("position",`${car.x} 0 0`);

    rocket.y += rocket.dy;
    rocket.setAttribute("position",`3 ${rocket.y} -4`);

    ball.r += ball.dr;
    ball.setAttribute("rotation",`${ball.r} 0 0`);

    dude.s += dude.sr;
    dude.setAttribute("scale",`${dude.s} ${dude.s} ${dude.s}`);

    sun.o -= sun.or;
    sun.setAttribute("opacity",`${sun.o}`);

window.requestAnimationFrame(loop);
}