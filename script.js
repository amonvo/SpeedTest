var sequences = [
    "The quick brown fox jumps over the lazy dog.",
    "Sphinx of black quartz, judge my vow.",
    "How vexingly quick daft zebras jump!",
    "Pack my box with five dozen liquor jugs.",
    "The five boxing wizards jump quickly."
];

var startTime;

function pad(val) {
    return val > 9 ? val : "0" + val;
}

setInterval(function() {
    if (startTime) {
        var now = new Date();
        var timeDiff = now - startTime; //in ms
        timeDiff /= 1000;

        var seconds = Math.round(timeDiff % 60);
        var minutes = Math.round((timeDiff - seconds) / 60);

        document.getElementById("timer").innerHTML = pad(minutes) + ":" + pad(seconds);
    }
}, 1000);

function start() {
    var randomIndex = Math.floor(Math.random() * sequences.length);
    document.getElementById("text").innerHTML = sequences[randomIndex];
    startTime = new Date();
    document.getElementById("timer").innerHTML = "00:00";
    document.getElementById("timer").style.color = "black";
    document.getElementById("input").disabled = false;
    document.getElementById("input").focus();
    document.getElementById("result").innerHTML = "";
}

function check() {
    var input = document.getElementById("input").value;
    var text = document.getElementById("text").textContent;

    if (input == text) {
        var endTime = new Date();
        var timeDiff = endTime - startTime; //in ms
        timeDiff /= 1000;

        var seconds = Math.round(timeDiff % 60);
        var minutes = Math.round((timeDiff - seconds) / 60);

        document.getElementById("result").innerHTML = "Correct! You took " + minutes + ":" + pad(seconds) + " to complete the test.";
        document.getElementById("result").style.color = "green";
        document.getElementById("input").disabled = true;
        document.getElementById("timer").style.color = "green";
        startTime = null; // stop timer
    } else {
        document.getElementById("result").innerHTML = "Incorrect!";
        document.getElementById("result").style.color = "red";
    }
}