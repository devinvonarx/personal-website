let canvus = document.querySelector('#canvus');
console.log(canvus);
canvus.width = 700;
canvus.height = 700;

var c = canvus.getContext('2d');

/* c.fillStyle = "#EDC7B7";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "#123C69";
c.fillRect(300, 100, 100, 100);
c.fillStyle = "#AC3B61";
c.fillRect(200, 300, 100, 100);
*/

// Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#BAB2B5";
// c.stroke();
// c.beginPath();
// c.lineTo(40, 40);
// c.lineTo(100, 100);
// c.strokeStyle = "#BAB2B5";
// c.stroke();

//Arc / Circle


// for(let i = 0; i < 50; i++){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2);
//     c.strokeStyle ="#EDC7B7";
//     c.stroke();
// }

// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle ="#EDC7B7";
// c.stroke();


class Circle {
    constructor(){
        this.radius = 60;
        this.x = Math.random() * (canvus.width - 60*2);
        this.y = Math.random() * (canvus.height - 60*2);
        this.dx = (Math.random() - 0.5) * 8;
        this.dy = (Math.random() - 0.5) * 8;
        console.log(this);
    }
    animate(){
        //c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle ="#CF9113";
        c.stroke();
        if(this.x+this.radius > canvus.width || this.x-this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y+this.radius > canvus.height || this.y-this.radius < 0){
            this.dy = -this.dy;
        } 
        this.x+=this.dx;
        this.y+=this.dy;
    }
}
let circles = [];
for(let i = 0; i < 12; i++){
    circles.push(new Circle());
}

function animate(){
    c.clearRect(0, 0, canvus.width, canvus.height);
    for(let circle of circles){
        circle.animate();
    }
    c.font = "100px Rum Raisin";
    c.strokeStyle = "#1F54AB";
    c.fillStyle = "#1F54AB";
    c.textAlign = "center";
    c.fillText("Hey,", canvus.width/2, canvus.height/2.3);
    c.fillText("I'm Devin Von Arx", canvus.width/2, canvus.height/1.7);
    //c.strokeText("Devin Von Arx", canvus.width/2, canvus.height/2);
    requestAnimationFrame(animate);
}
animate();
//circleTry.animate();


/*let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;
let radius = 30;
function animate(){
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle ="#EDC7B7";
    c.stroke();
    if(x+radius > innerWidth || x-radius < 0){
        dx = -dx;
    }
    if(y+radius > innerHeight || y-radius < 0){
        dy = -dy;
    } 
    x+=dx;
    y+=dy;
    circleTry.animate();
    requestAnimationFrame(animate);
}

animate();
c.beginPath();
c.arc(100,100,30, 0, Math.PI * 2);
c.fill(); */