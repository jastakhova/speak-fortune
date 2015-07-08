function FileHelper()
{}
{
    FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }
}

function load(name) {
  return FileHelper.readStringFromFileAtPath("data/" + name + ".txt").split("\n"); 
}

var fortunes = load("fortunes");
var afterwards = load("afterwards");
var prewords = load("prewords");

var alwaysFrequency = 1;
var afterwardsFrequency = 3;
var thunderFrequency = 3;

function speak(text, callback) {
  meSpeak.speak(text, {"pitch":20, "wordgap":3, "speed":150, "variant": "klatt2"}, callback);
}

function getRandom(list, frequency) {
  var index = Math.floor(Math.random() * list.length * frequency);
  return list[index];
}

function playFortune(usePreword, callback) {
    var text = "";
    if (usePreword === true)
      text += getRandom(prewords, alwaysFrequency) + "\n";
    text += getRandom(fortunes, alwaysFrequency);
    var afterword = getRandom(afterwards, afterwardsFrequency);
    if (afterword)
        text += "\n" + afterword;
    console.log(text);
    speak(text, callback);
}

function playThunder(callback) {
    var useThunder = Math.floor(Math.random() * thunderFrequency) != 0;
       
    if (useThunder) {   
        var audio = document.getElementById("thunder_audio");
        audio.load();
        audio.play();
        audio.onended = callback;
    } else
        callback(true);
}

function speakFortune() {
  playThunder(playFortune);
}
