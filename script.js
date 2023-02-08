let fields = [];
let currentShape = 'circle';
let gameOver = false;

function fillShape(id){
    if (!fields[id] && !gameOver) {        
        fields[id] = currentShape;
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.remove('player-inactive')
            document.getElementById('player-2').classList.add('player-inactive')
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.add('player-inactive')
            document.getElementById('player-2').classList.remove('player-inactive')
        }
        console.log(fields);
        draw();
        checkForWin();
    }
}

function draw(){
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('hidden');
        }else if(fields[i] == 'cross'){
            document.getElementById(`cross-${i}`).classList.remove('hidden');
        }
    }
}

function checkForWin() {
    let winner;
    
    // first row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }

    // second row
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    // third row
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }

    // first column
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // second column
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // third column
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // diagonal top-left to bottom-right
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1.3)';
    }

    // diagonal top-right to bottom-left
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1.3)';
    }

    if (winner) {
        console.log('Gewonnen', winner)
        gameOver = true;
    }
}
