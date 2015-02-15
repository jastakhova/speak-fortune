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

var fortunes = FileHelper.readStringFromFileAtPath("data/fortunes.txt").split("\n")

function playFortune(callback) {
    var index = Math.floor(Math.random() * fortunes.length);
    meSpeak.speak(fortunes[index], {"pitch":20, "wordgap":3, "speed":150, "variant": "klatt2"}, callback);
}

function playThunder(callback) {
    var audio = document.getElementById("thunder_audio");
    audio.load();
    audio.play();
    audio.onended = callback;
}

function speakFortune() {
  playThunder(
    function() {playFortune()});
}
