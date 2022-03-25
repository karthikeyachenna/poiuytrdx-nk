var SpeechRecogition = window.webkitSpeechRecognition;

var recognition=new SpeechRecogition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);

    var Content= event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML=Content;
}
