
function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
}

function draw()
{
    image(video,0,0,480,380);
    if(status1 !="")
    {
        objectDetector.detect(video,gotResult);
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML = "status:Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number Of Objects Detected: "+objects.length;
            fill("#000000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#000000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecing Objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status1 = true;
}