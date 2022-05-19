var num_measures = 0;

const pitchsubmit = document.getElementById("pitchsubmit");
const choicesubmit = document.getElementById("choicesubmit");
const startpractice = document.getElementById("startpractice");
const div = document.getElementById("pitchchoices");




var audioA = new Audio('A.mp3');
var audioBb = new Audio('Bb.mp3');
var audioB = new Audio('B.mp3');
var audioDb = new Audio('Db.mp3');
var audioC = new Audio('C.mp3');
var audioEb = new Audio('Eb.mp3');
var audioD = new Audio('D.mp3');
var audioE = new Audio('E.mp3');
var audioF = new Audio('F.mp3');
var audioGb = new Audio('Gb.mp3');
var audioAb = new Audio('Ab.mp3');
var audioG = new Audio('G.mp3');

if (startpractice) {
    startpractice.addEventListener('click', () => {

      
        var playbackRate = ((4.0 / (60.0 / (localStorage.getItem("num_BPM")))) / (localStorage.getItem("num_TimeSig")));
        audioA.playbackRate = playbackRate;
        audioBb.playbackRate = playbackRate;
        audioB.playbackRate = playbackRate;
        audioC.playbackRate = playbackRate;
        audioDb.playbackRate = playbackRate;
        audioD.playbackRate = playbackRate;
        audioEb.playbackRate = playbackRate;
        audioE.playbackRate = playbackRate;
        audioF.playbackRate = playbackRate;
        audioGb.playbackRate = playbackRate;
        audioG.playbackRate = playbackRate;
        audioAb.playbackRate = playbackRate;

        // for (let j = 1; j <= num_measures; j++) {
        // 	var variableName = "audio" + localStorage.getItem("measure" + j);
        // 	window[variableName].play();
        // }

        window["audio" + localStorage.getItem("measure1")].play();

        for (let j = 1; j <= num_measures; j++) {
            window["audio" + localStorage.getItem("measure" + j)].onended = function() {
                window["audio" + localStorage.getItem("measure" + (j + 1))].play();
            }
        }
    })
}

function pitchSubmit() {

    localStorage.setItem("pitchsubmit", "done");
}


function getMeasures() {
    num_measures = document.getElementById("numberMeasures").value;
    localStorage.setItem("num_measures", num_measures);
}

function getBPM() {
    num_BPM = document.getElementById("numberBPM").value;
    localStorage.setItem("num_BPM", num_BPM);
}

function getTimeSignature() {
    num_TimeSig = document.getElementById("numTimeSig").value;
    localStorage.setItem("num_TimeSig", num_TimeSig);
}

// function getLoop() {
//     loop = document.getElementById("loop").value;
//     localStorage.setItem("loop", loop);
// }

console.log(localStorage.getItem("num_measures"));

num_measures = localStorage.getItem("num_measures");


function submitChoices() {
    localStorage.setItem("choicesubmit", "done")
}


if (pitchsubmit) {
    if (localStorage.getItem("choicesubmit") == "done") {
        console.log(localStorage);

        for (let k = 1; k <= num_measures; k++) {
            localStorage.setItem("measure" + k, "A")
        }


        for (let i = 1; i <= num_measures; i++) {
            var pitch_title = "Select Pitch For Measure " + i + ":";
            div.innerHTML += `
<h3> ${pitch_title} </h3>
<div class="custom-select">
        <select id="measure${i}" onchange="getPitchValue(${i});">
            <option value="A">A</option>
            <option value="Bb">A#/Bb</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="Db">C#/Db</option>
            <option value="D">D</option>
            <option value="Eb">D#/Eb</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="Gb">F#/Gb</option>
            <option value="G">G</option>
            <option value="Ab">G#/Ab</option>
        </select>
    </div>
    `
        }
    }
}

function getPitchValue(measNum) {
    var pitchVal = document.getElementById("measure" + measNum).value;
    localStorage.setItem("measure" + measNum, pitchVal);

}

function clear() {
    localStorage.clear();

}

console.log(localStorage);
