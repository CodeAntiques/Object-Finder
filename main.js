video=""
status=""
objects=[];
percentage=0;

function preload(){
}

function draw(){
   image(video,0,0,380,380);

   if(status !=""){
  objectDetector.detect(video,gotResults);
  console.log(objects);

   for ( i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML="Status:Object Detected";
      document.getElementById("numberofobjects").innerHTML= "The Number of Objects Detected:" + objects.length;
      fill(red,green,blue);
      percentage=floor(objects[i].confidence*100)
      text(objects[i].label + " " + percentage + " % ",objects[i].x+30,objects[i].y+30);
      noFill();
      stroke(red,green,blue);
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
      console.log(objects.length);
   }
  }
}

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();                       
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    //objectDetector=ml5.objectDetector("cocossd", modeloaded);
    document.getElementById("status").innerHTML="Status:Detecting Object";
    red=Math.floor(Math.random()*256);
    green=Math.floor(Math.random()*256);
    blue=Math.floor(Math.random()*256);
}

function modeloaded(){
  console.log("Model has been loaded")
  status=true;
}

function gotResults(error,results){
  if (error) {
    console.error(error);
  }  
    console.log(results);
    objects=results;
  
}