// Using Hardy-Weinberg principle
// homozygotes
var a1a1 = 0.15;
var a2a2 = 0.35;
// heterozygote
var a1a2 = 1 - (a1a1 + a2a2);

// calc allele frequencies
var p = a1a1 + (a1a2 / 2);
var q = 1 - p;

console.log('generation 0:', a1a1, a1a2, a2a2);

function createNextGen() {
    // next generation
    a1a1 = p * p;
    a1a2 = 2 * p * q;
    a2a2 = q * q;

    console.log('next gen', a1a1, a1a2, a2a2);
}

createNextGen();
console.log('generation 1:', a1a1, a1a2, a2a2);

// instantiate parent bugs
// parent bugs are drawn onload screen
// parent bugs are of class Bug
// spots are the allele?
function Bug(xPos, yPos) {
    var bugColorsArr = [ "orchid", "goldenrod", "lightgrey", "thistle", "rosybrown", "mediumorchid", "darkkhaki", "greenyellow", "mediumvioletred","indianred", "peru", "chocolate", "palegreen", "tan", "darkgoldenrod", "palevioletred", "red", "lightcyan" ];
    var bugBack1 = bugColorsArr[Math.floor(bugColorsArr.length * Math.random())];
    var bugBack2 = bugColorsArr[Math.floor(bugColorsArr.length * Math.random())];
    var bugBack3 = bugColorsArr[Math.floor(bugColorsArr.length * Math.random())];
    var bugAccent = bugColorsArr[Math.floor(bugColorsArr.length * Math.random())];
    var bugHead = bugColorsArr[Math.floor(bugColorsArr.length * Math.random())];
    var bugButt = bugColorsArr[Math.floor(bugColorsArr.length * Math.random())];
    var canvas = document.getElementById('the_bugging_canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // BACK
        var gradient = ctx.createLinearGradient(xPos, yPos, (xPos+50), (yPos+75));
        gradient.addColorStop("0", bugBack1);
        gradient.addColorStop("0.5", bugBack2);
        gradient.addColorStop("1.0", bugBack3);

        // Fill with gradient
        ctx.strokeStyle = gradient;
        ctx.fillStyle = gradient;
        ctx.strokeRect(xPos, yPos, 50, yPos-25);
        ctx.fillRect(xPos, yPos, 50, yPos-25);

        // HEAD
        ctx.fillStyle = bugHead;
        ctx.beginPath();
        ctx.arc(xPos + 25, yPos, 25, 0, Math.PI, true);
        ctx.fill();

        // CURVED ANTENNAE
        ctx.strokeStyle = bugAccent;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(xPos+10, yPos-20);
        ctx.quadraticCurveTo(xPos+10, yPos-60, xPos-20, yPos-30);
        ctx.moveTo(xPos+40, yPos-20);
        ctx.quadraticCurveTo(xPos+40, yPos-60, xPos+70, yPos-30);
        ctx.stroke();

        // BUTT
        ctx.fillStyle = bugButt;
        ctx.beginPath();
        ctx.arc(xPos + 25, yPos + 75, 25, 0, Math.PI, false);
        ctx.fill();

        // SPOTS
        ctx.fillStyle = bugAccent;
        ctx.lineWidth = 2
        ctx.beginPath();
        ctx.moveTo(xPos + 20, yPos + 70);
        ctx.arc(xPos + 15, yPos + 70, 5, 0, Math.PI * 2, true);
        // ctx.moveTo(95, 65);
        // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
        ctx.fill();
    }
}


var makeParentBugs = function() {
    var parentBug1 = new Bug(200, 100);
    var parentBug2 = new Bug(500, 100);
    // parentBug1;
}

