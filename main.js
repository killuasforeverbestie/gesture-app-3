var prediction = "";

webcam.set({
width: 350,
heught: 300,
image_format: 'png',
png_quality: 90
})

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<image id="image_captured' src="'+data_uri+'"/>'
});
}
console.log("ml5 Version", ml5.version);

console.log('https://teachablemachine.withgoogle.com/models/nGWsnVNDb/',modelLoaded);

function modelloaded(){
console.log("Model Loaded");
speak();
}

function speak(){
var synth = window.speechSynthesis;
var speek_data = "The prediction is"+prediction;
var utterThis = new Speak(speak_data);
synth.speak (utterThis); 
}

function check(){
    img = document.getElementById("image_captured");
    classifier.classify(img, gotResult);
}

function gotResults(error, results){
if(error){
console.error(error);
}
else{
    document.getElementById("").innerHTML = results[0].label;
    prediction  = results[0].label;
    speak();
    if(result[0].label =="Amazing"){
document.getElementById("result_emoji").innerHTML = "&#128076;";
document.getElementById("quote").innerHTML = "";
    }
    else if(result[0].label =="best"){
        document.getElementById("result_emoji").innerHTML = "";
}
else{
    document.getElementById("result_emoji").innerHTML = "";
}