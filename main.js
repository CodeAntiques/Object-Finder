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
      fill(red,green,blue);
      percentage=floor(objects[i].confidence*100)
      text(objects[i].label + " " + percentage + " % ",objects[i].x+30,objects[i].y+30);
      noFill();
      stroke("red");
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
      console.log(objects.length);
      if (input==objects[i].label) {
      video.stop();   
      document.getElementById("object").innerHTML= input + " Has been found ";
      objectDetector.detect(video,gotResults);
      

          }
   }
  
  }
}

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();                       
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function modeloaded(){
  console.log("Model has been loaded")
  status=true;
}

function start(){
  objectDetector=ml5.objectDetector("cocossd", modeloaded);
  document.getElementById("status").innerHTML="Status:Detecting Object";
  input=document.getElementById("text_input").value;
}

function gotResults(error,results){
  if (error) {
    console.error(error);
  }
  else  {
    console.log(results);
    objects=results;
  }
}