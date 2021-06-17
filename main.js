Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");
roverx = 18;
rovery = 21;
roverh = 100;
roverl = 100;
backpic = "lane.jpg";
rvrpic = "carred.png";
car2 = "carblue.png"
function add() {
    backimg = new Image();
    backimg.onload = fn_upload;
    backimg.src = backpic;
    roverimg = new Image();
    roverimg.onload = fn_rover;
    roverimg.src = rvrpic;
}
function fn_upload() {
    ctx.drawImage(backimg, 0, 0, Canvas.width, Canvas.height);
}
function fn_rover() {
    ctx.drawImage(roverimg, roverx, rovery, roverh, roverl);
}
window.addEventListener("keydown",fn_keydown);
function fn_keydown(e){
keypress=e.keyCode;
console.log(keypress);
if(keypress=="37"){
    Left();
}
if(keypress=="38"){
    up();
}
if(keypress=="39"){
   Right();
}
if(keypress=="40"){
    bottom();
}

}
function Left(){
    if(roverx >=90){
roverx=roverx-100;
fn_upload();
fn_rover();
    }
}
function Right(){
    if(roverx <=620){
roverx=roverx+100;
fn_upload();
fn_rover();
    }
}
function bottom(){
    if(rovery <=500){
rovery=rovery+100;
fn_upload();
fn_rover();
    }
}
function up(){
    if(rovery >=100){
rovery=rovery-100;
fn_upload();
fn_rover();
    }
}