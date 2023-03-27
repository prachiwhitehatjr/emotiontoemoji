//Code for setting webcam
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

//Code for triggering the webcam
camera=document.getElementById("camera");
Webcam.attach('#camera');

//Code for taking snapshot
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}

//Code for importing model
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oyuDFb8NK/model.json',modelLoaded);

//Defining model loaded function
function  modelLoaded(){
    console.log('modelLoaded');
}

//Speak Function
function speak(){
    var synth=Window.speechSynthesis;
    speak_data1="the first prediction is"+prediction1;
    speak_data2="the second prediction is"+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterthis);
}
//Check Function
function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
//This function will show the result after identifying the captured image
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
console.log(results);
document.getElementById("result1").innerHTML=results[0].label;
document.getElementById("result2").innerHTML=results[1].label;
}
}