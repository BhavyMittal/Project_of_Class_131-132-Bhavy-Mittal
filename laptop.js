status = "";
laptop_image = "";

function preload()
{
    laptop_image = loadImage("laptop.jpg");
}

function setup()
{

    canvas = createCanvas(640,350);
    canvas.position(315,200);

    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(laptop_image,gotResult);
}

function gotResult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(result);
    }

}

function draw()
{
    image(laptop_image,0,0,640,350);
}