// Trigger For Local Storage (link)
GLFLS();
// Selectors
let menuSec = document.querySelector('.menu');
let choseSec = document.querySelector('.chose');
let difficultySec = document.querySelector('.difficulty');
let gameSec = document.querySelector('.game');

let startBtn = document.querySelector('.menu ul li:nth-child(1)');
let LBBtn = document.querySelector('.menu ul li:nth-child(2)');
let abouttBtn = document.querySelector('.menu ul li:nth-child(3)');
let optionsBtn = document.querySelector('.menu ul li:last-of-type img');

let range = document.getElementById('range');
let mainBtn = document.querySelector('.main-btn');

let backgroundSound = document.getElementById('background-sound');
let failSound = document.getElementById('fail');
let successSound = document.getElementById('success'); 
let hoverBtn = document.getElementById("btn-hover");
let clickBtn = document.getElementById('btn-click');
let backBtn = document.getElementById('btn-back');
let wining = document.getElementById("wining");
let gameOverSound = document.getElementById("game-over-sound");
let notiSound = document.getElementById('notification');

let slider = document.getElementById('range');
let selector = document.getElementById('selector');
let selectValue = document.getElementById('selectvalue');
let progressBar = document.getElementById('progress-sound-bar');
let progressCtn = document.querySelector('.progress-bar');
let progressSpan = document.querySelector(".progress-bar span");
let progressInner = document.querySelector('.progress-bar .progress-inner');

let aboutCtn =  document.querySelector('.about');
let optionsCtn =  document.querySelector('.options');
let doneCtn = document.getElementById('done');
let gameOverCtn = document.querySelector('#game_over');

let fails = document.querySelector('.fails');

let backgroundBlack = document.querySelector('.background');

let navGame = document.querySelector('.game nav');

let pauseMenuCtn = document.querySelector('#pause-menu');
let pauseGame = document.querySelector('#pause');
let pauseBtn = document.querySelector('#pause-menu button');
let undoPauseMenu = document.querySelector('#pause-menu .undoToGame');

let failsSpan = document.querySelector('.fails span');

let high = document.getElementById('high');
let muted = document.getElementById('muted');

let animeChose = document.getElementById('anime');
let animalsChose = document.getElementById('animals');
let chibiChose = document.getElementById('chibi');

let LBCtn = document.querySelector('.leaderBoard')

let good = document.querySelector('.cards-container')
let CCSL = document.querySelector(".smallest")
let CCS = document.querySelector('.small');
let CCN = document.querySelector('.normal');
let CCL = document.querySelector('.large');
let CCLS = document.querySelector('.largest');

let giveName = document.querySelector('.giveName');
let gNInput = document.querySelector('.giveName input')
let gNButton = document.querySelector('.giveName button')
let gNSpan = document.querySelector('.giveName span')
let gNImg = document.querySelector('.giveName img')

let Cchose = document.querySelector('.leaderBoard .categorie-chose');
let CchoseChild = Array.from(Cchose.children);

let history = document.querySelector('.leaderBoard .history')
let arrowCtn = document.querySelector('.slider .arrow');

let DU = document.querySelector('.difficulty ul');

let his1 = document.querySelector('.history .his1');
let his2 = document.querySelector('.history .his2');
let his3 = document.querySelector('.history .his3');
let his4 = document.querySelector('.history .his4');
let his5 = document.querySelector('.history .his5');

let dohelp = document.querySelector('.game .doHelp');

let starsCtn = document.querySelector('#done .container .stars');

let inputSpan = document.querySelector('.opt span');

let CCTS = document.querySelector('.test');

let input666 = document.querySelector('.giveName input');

// Global Variables
let CTD;

let cardsCounts;

let bigCtn = false;

let userName;

let currentCursor;

let statusGame = true;

let date;

let AOB = [];

let choosenD;

let current = 2;
//////////////////////////////////////////////////////////////////////////////////// 
// Assign Link From LS To Var
if (localStorage.getItem('laderBoard')) {
    AOB = JSON.parse(localStorage.getItem('laderBoard'))
}

// Sorting Array By Minutes
AOB.sort((a, b) => {
    if (a.yourTime.slice(0, 2) < b.yourTime.slice(0, 2)) return 1;
    if (a.yourTime.slice(0, 2) > b.yourTime.slice(0, 2)) return -1;
    return 0;
})
// Sorting Array By Seconds
AOB.sort((a, b) => {
    if (a.yourTime.slice(3, 5) < b.yourTime.slice(3, 5)) return 1;
    if (a.yourTime.slice(3, 5) > b.yourTime.slice(3, 5)) return -1;
    return 0;
})
// Sorting Array By Fails
AOB.sort((a, b) => a.yourFails - b.yourFails);

// Filter.VeryEasy
let AOVE = AOB.filter(x => x.difficulty === "Very-Easy");
// Filter.Easy
let AOE = AOB.filter(x => x.difficulty === "Easy");
// Filter.Normal
let AON = AOB.filter(x => x.difficulty === "Normal");
// Filter.Hard
let AOH = AOB.filter(x => x.difficulty === "Hard");
// Filter.Professional
let AOPR = AOB.filter(x => x.difficulty === "Professional");

// Trigger Functions
createEl(AOVE);
createEl(AOE);
createEl(AON);
createEl(AOH);
createEl(AOPR);

function createEl(array) {
for (let i = 0; i < array.length; i++) {
    
        let user = document.createElement('div'); 
        user.className = "user";
        let num = document.createElement('div'); 
        num.className = "num"; 
        num.appendChild(document.createTextNode(i + 1)); 
        user.appendChild(num);
        let userInfo = document.createElement('div'); 
        userInfo.className = "user-info"; 
        user.appendChild(userInfo);
        let nameSpan = document.createElement('span');  
        nameSpan.className = "name"; 
        userInfo.appendChild(nameSpan);
        let failsSpan = document.createElement('span'); 
        failsSpan.className = "fails"; 
        userInfo.appendChild(failsSpan);
        let timeSpan = document.createElement('span'); 
        timeSpan.className = "time"; 
        userInfo.appendChild(timeSpan);
        let dateSpan = document.createElement('span'); 
        dateSpan.className = "date"; 
        userInfo.appendChild(dateSpan);
        nameSpan.appendChild(document.createTextNode(array[i].name));
        failsSpan.appendChild(document.createTextNode(array[i].yourFails));
        timeSpan.appendChild(document.createTextNode(array[i].yourTime));
        dateSpan.appendChild(document.createTextNode(array[i].date));   
    
        if (array[i].difficulty === "Very-Easy") { his1.appendChild(user); } 
        else if (array[i].difficulty === "Easy") { his2.appendChild(user); } 
        else if (array[i].difficulty === "Normal") { his3.appendChild(user); } 
        else if (array[i].difficulty === "Hard") { his4.appendChild(user); } 
        else if (array[i].difficulty === "Professional") { his5.appendChild(user); }
    }
}

// Check IF History Is Empty
checkEmpty(his1);
checkEmpty(his2);
checkEmpty(his3);
checkEmpty(his4);
checkEmpty(his5);

//
function checkEmpty(his) {
    if (his.innerHTML === "") {his.innerHTML = `<p>No History</p>`};
}

// Get About
abouttBtn.onclick = function () { anmGet(aboutCtn) };

// Hide About
document.querySelector('.about .undo').onclick = function () { anmHide(aboutCtn) };

// Get LeaderBoeard
LBBtn.onclick = () => { anmGet(LBCtn) };

// Hide LeaderBoeard
document.querySelector('.leaderBoard .close .undo').onclick = () => { anmHide(LBCtn) };
// Animations Get
function anmGet(ctn) {
    ctn.style.display = "flex"; 
    setTimeout(() => { ctn.style.transform = "translate(0%, 0)"; }, 300);
}
// Animations Hide
function anmHide(ctn) {
    ctn.style.transform = "translate(-200%, 0)"; 
    setTimeout(() => { ctn.style.display = "none"; }, 1000);
}
// toggleClass
toggleClass();

// Left and Right Arrows
arrowCtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('left')) {
        if (current > 0 ) {
            current--;
            CchoseChild.forEach((e) => {
                e.classList.remove('show');
            });
            toggleClass();
        }
    }
    if (e.target.classList.contains('right')) {
        if (current < 4) {
            current++;
            CchoseChild.forEach((e) => {
                e.classList.remove('show');
            });
            toggleClass();
        }
    }
})

// Function To toggle class From LeaderBord
function toggleClass() {
    // Loop For Invisible The History child
    for(let i = 0; i < 5; i++) { history.children[i].style.display = "none"; };

    const observer = new ResizeObserver((e) => {
        let fixE = e[0];
        let isBig = fixE.contentRect.width >= 365;
        if (isBig) {
            slide(0, "110px");
            slide(1, "25px");
            slide(2, "-65px");
            slide(3, "-160px");
            slide(4, "-245px");
        } else {
            slide(0, "80px");
            slide(1, "-10px");
            slide(2, "-100px");
            slide(3, "-190px");
            slide(4, "-275px");
        }
    })
    observer.observe(LBCtn);

    //
    function slide(num, location) {
        if (current === num) {
            Cchose.children[num].classList.add('show'); 
            Cchose.style.transform = "translate(" + location + ", 0)" 
            history.children[num].style.display = "block";
        }
    }
}
//
// To Get Options
optionsBtn.onclick = function () { anmGet(optionsCtn) };
// Control volum sound
function vol() {
    let slider = 0 + "." + range.value;
    backgroundSound.volume = slider; failSound.volume = slider; successSound.volume = slider;
}
selectValue.innerHTML = slider.value;

slider.addEventListener('input', function () {
    selector.style.left = parseInt(this.value) + 3.5 + "%";
    progressBar.style.width = this.value + '%'; selectValue.innerHTML = this.value;
})

// To Hide Options
document.querySelector('.options .undo').onclick = function () { anmHide(optionsCtn) };

// Chose Theme
let AFLI = document.querySelectorAll('.options ul li');
AFLI.forEach((li) => { 
    li.onclick = function () { 
    ALTP(li.getAttribute('id')); 
} 
});

function ALTP(GG) {
    let current = GG;
    let link = document.createElement('link');
    link.setAttribute('id', current)
    link.setAttribute('rel', "stylesheet");
    link.setAttribute("href", "style/" + (current) + ".css");
    document.head.appendChild(link)
    localStorage.setItem('link', current);
}
// Add Theme To Local Storage
function GLFLS() { 
    if (localStorage.getItem('link')) { ALTP(localStorage.link); } 
}
// Get Pause-Menu
pauseGame.onclick = function () {
    pauseMenuCtn.style.display = 'flex'; 
    backgroundBlack.style.display = 'block';
    clearInterval(CTD);
    progressInner.style.animationPlayState = "paused";
}
// To Go Back In The Game
undoPauseMenu.onclick = function () {
    pauseMenuCtn.style.display = 'none'; 
    backgroundBlack.style.display = 'none';
}
// To Quite The Game
pauseBtn.onclick = function () { window.location.reload(); }
// Input To Take The Name
startBtn.onclick = () => { giveName.style.display = "flex"; }
// Hide Input
document.querySelector('.menu .giveName .undo').onclick = () => {  giveName.style.display = "none"; }
// Go To Chose Category By Cliking The Ok Button
gNButton.onclick =  (e) => {
    if (gNInput.value !== "") { getCat(); } 
    else {
        gNSpan.style.display = "block"; 
        setTimeout(() => { gNSpan.style.display = "none"; }, 3000);
    }
}
// Go To Chose Category By Cliking Enter
mainBtn.addEventListener('keyup', (e) => {
    if (e.code === "Enter") {
        if (gNInput.value !== "") { getCat(); } 
        else {
            gNSpan.style.display = "block"; 
            setTimeout(() => { gNSpan.style.display = "none"; }, 3000);
        }
    }
})
// function To Create Event To Go In Chose Category
function getCat() {
    userName = gNInput.value; 
    menuSec.style.display = "none"; 
    choseSec.style.display = "flex";
    giveName.style.display = "none"; 
    LBCtn.style.display = "none";  
    gNInput.value = "";
}

// Button To Clear Input
gNImg.onclick = () => { 
    gNInput.value = ""; 
    gNImg.style.display = "none"; 
}

// clear input 
gNInput.addEventListener('input', (e) => {
    if (gNInput.value === "") { gNImg.style.display = "none"; } 
    else { gNImg.style.display = "block"; }
})

// Undo To Menu
document.querySelector('.chose .undo').onclick = function () {
    menuSec.style.display = "flex"; 
    choseSec.style.display = "none"; 
    LBCtn.style.display = "block";
}

// Mute On
high.onclick = function () {
    high.style.display = 'none'; 
    muted.style.display = 'block'; 
    backgroundSound.pause();
}

// Mute Off
muted.onclick = function () {
    muted.style.display = 'none'; 
    high.style.display = 'block'; 
    backgroundSound.play();
}

// Go To Difficulty
let inputCategorie = null;

animeChose.onclick = function () { 
    GTD(); 
    inputCategorie = 'anime'; 
}
animalsChose.onclick = function () { 
    GTD(); 
    inputCategorie = 'cartoon'; 
}
chibiChose.onclick = function () { 
    GTD(); 
    inputCategorie = 'chibi'; 
}

function GTD() { 
    choseSec.style.display = 'none'; 
    difficultySec.style.display = 'flex'; 
}

// Undo To chose
document.querySelector('.difficulty .undo').onclick = function () {
    choseSec.style.display = "flex"; 
    difficultySec.style.display = "none";
}

// Buttons Sounds
hoverBtn.volume = 0.2; 
clickBtn.volume = 0.2; 
backBtn.volume = 0.2;
backgroundSound.volume = 0.2; 
successSound.volume = 0.2; 
failSound.volume = 0.2;

mainBtn.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('soundHover')) { hoverBtn.play(); }
})
mainBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('soundClick')) { clickBtn.play(); }
})
mainBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('undo')) { backBtn.play(); }
})

// Generat cards and Go To Game

let duration = 1000;

for (let i = 0; i <= 50; i++) {
    let img = document.createElement('img'); 
    img.setAttribute('src', "img/cartoon/" + i + '.jpg'); 
    CCTS.appendChild(img);
}

let AFI = Array.from(document.querySelectorAll('.test img'));
let AFN = [...Array(AFI.length).keys()];
let AFNK = [...Array(AFI.length * 2).keys()];

shuffle(AFI); 
shuffle(AFN); 
shuffle(AFNK);

DU.addEventListener('click', (e) => {
    if (e.target.classList.contains('chose1')) { 
        GTG();  
        CCTP(2, CCSL, false); 
        cardsCounts = 4; 
        CCSL.style.display = "flex"; 
        CFG(1); 
        choosenD = "Very-Easy";}
    if (e.target.classList.contains('chose2')) { 
        GTG();  
        CCTP(8, CCS, false); 
        cardsCounts = 16; 
        CCS.style.display = "flex"; 
        FCOM(2); 
        CFG(2); 
        choosenD = "Easy";}
    if (e.target.classList.contains('chose3')) { 
        GTG(); 
        startCod(); 
        CCTP(18, CCN, false); 
        cardsCounts = 36; 
        CCN.style.display = "flex"; 
        FCOM(5); 
        CFG(3); choosenD = "Normal";}
    if (e.target.classList.contains('chose4')) { 
        GTG(); 
        startCod(); 
        CCTP(32, CCL, false); 
        cardsCounts = 64; 
        CCL.style.display = "flex"; 
        FCOM(6); 
        CFG(5); choosenD = "Hard";}
    if (e.target.classList.contains('chose5')) { 
        GTG(); startCod(); CCTP(50, CCLS, true); cardsCounts = 100; 
        CCLS.style.display = "flex"; 
        FCOM(8); 
        CFG(8); choosenD = "Professional";}
})

// Create Cards
function CCTP(num, cardCtn, check) {
    for (let i = 1; i <= num; i++) {

        let GB = document.createElement('div'); 
        GB.className = 'game-block'; 
        GB.setAttribute('numberOf', AFN[i]); 
        cardCtn.appendChild(GB);
        let front = document.createElement('div'); 
        front.className = 'front'; 
        GB.appendChild(front);
        let back = document.createElement('div'); 
        back.className = 'back'; 
        GB.appendChild(back);
        let img = document.createElement('img'); 
        img.setAttribute('src', "img/" + inputCategorie + "/" + AFN[i] + '.jpg'); 
        back.appendChild(img);
        let blur = document.createElement('div'); 
        blur.className = 'blur'; 
        back.appendChild(blur);
        
        let GB1 = document.createElement('div'); 
        GB1.className = 'game-block'; 
        GB1.setAttribute('numberOf', AFN[i]); 
        cardCtn.appendChild(GB1);
        let front1 = document.createElement('div'); 
        front1.className = 'front'; 
        GB1.appendChild(front1);
        let back1 = document.createElement('div'); 
        back1.className = 'back'; 
        GB1.appendChild(back1);
        let img1 = document.createElement('img'); 
        img1.setAttribute('src', "img/" + inputCategorie + "/" + AFN[i] + '.jpg'); 
        back1.appendChild(img1);
        let blur1 = document.createElement('div'); 
        blur1.className = 'blur'; back1.appendChild(blur1);
        
        }
        CAFB(cardCtn, check);
}
// ContDown For Help
function startCod() {
    setTimeout(() => { dohelp.classList.remove('suu'); notiSound.play(); }, 60000);
    visible();
}
// Help By Flip Card
dohelp.onclick = () => {
    FCOM(6);
    dohelp.classList.add('suu');
    startCod();
}

// visible help span
function visible() {
    let doSpan = document.querySelector('.game .doHelp .dh-tool');
    doSpan.style.opacity = "1";
    setTimeout(() => { doSpan.style.opacity = "0"; }, 8000);
}

//
function CAFB(cardCtn, check) { 
    let blocks = Array.from(cardCtn.children); 
    LFAOF(blocks, cardCtn, check); 
}

// Add Order Style In Cards
function LFAOF(blocks, cardCtn, check) {
    blocks.forEach((block, index) => {
        if (check === false) { block.style.order = AFN[index]; }
        if (check === true) { block.style.order = AFNK[index]; }
        block.addEventListener('click', function () { isFlipped(block, blocks, cardCtn); })
    })
}

// To Flip cards and check them
function isFlipped(flippedBlocks, blocks, cardCtn) {
    flippedBlocks.classList.add('is-flipped');
    let AFB = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    if (AFB.length === 2) { stopClicking(cardCtn); CMB(AFB[0], AFB[1]); }
}

// Hide Difficulty and Get Game Section
function GTG() {
    difficultySec.style.display = 'none';
    gameSec.style.display = "block";

    let AFC = Array.from(document.querySelectorAll('.cards-container'))
    AFC.forEach((block) => { 
        block.style.display = 'none'; 
    })
}

// function For Shuffling Array
function shuffle(array) {
    let current = array.length, temp, random;

    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current]; array[current] = array[random]; array[random] = temp;
} 
return array; 
}

// When Two Card Flip Stop Cliking Events
function stopClicking(e) {
    e.classList.add('stop');
    setTimeout(() => { e.classList.remove('stop'); }, duration);
}

// Check If The Flipped Card Is Match
function CMB(FB, SB) {
    if (FB.getAttribute('numberOf') == SB.getAttribute('numberOf')) {
        FB.classList.remove('is-flipped'); SB.classList.remove('is-flipped');
        FB.classList.add('has-match'); SB.classList.add('has-match');
        successSound.play();
        CEG();
    } else {
        failSound.play();
        setTimeout(() => { 
            FB.classList.remove('is-flipped'); 
            SB.classList.remove('is-flipped'); 
        }, duration);
        failsSpan.innerHTML = parseInt(failsSpan.innerHTML) + 1; 
    }
}

// Winning Function.
function CEG() {
    let AAA = Array.from(document.querySelectorAll('.cards-container .has-match'));
    if (AAA.length == cardsCounts) {
        AULB(); 
        document.getElementById('level-game').innerHTML = "You Win!"
        gaga("win");
        setTimeout(() => { backgroundSound.pause(); wining.play(); }, 100);
    }
}
// 
function gaga(status) {
        stars(status); 
        clearInterval(CTD); 
        navGame.remove();
        backgroundBlack.style.display = 'block';
        doneCtn.style.animation = "2s toCenter"; 
        doneCtn.style.display = "flex";
        setTimeout(() => { doneCtn.style.transform = "translate(0, 0)"; }, 2000);
        document.querySelector('#level').innerHTML = choosenD;
        document.querySelector('#time').innerHTML = progressSpan.innerHTML;
        document.querySelector('#fails').innerHTML = failsSpan.innerHTML;
}

// check Star 
function stars(status) {
    let img = document.createElement('img');

    if (status === "win") {
        if (choosenD === "Very-Easy" && failsSpan.innerHTML <= 0) {
            img.setAttribute("src", "style/img/ThreeStar.png");
        } else if (choosenD === "Very-Easy" && failsSpan.innerHTML <= 1) {
            img.setAttribute("src", "style/img/TwoStar.png");
        } else if (choosenD === "Very-Easy" && failsSpan.innerHTML <= 2) {
            img.setAttribute("src", "style/img/OneStar.png");
        } else if (choosenD === "Very-Easy" && failsSpan.innerHTML >= 3) {
            img.setAttribute("src", "style/img/EmptyStars.png");
        }
    
        if (choosenD === "Easy" && failsSpan.innerHTML <= 4) {
            img.setAttribute("src", "style/img/ThreeStar.png");
        } else if (choosenD === "Easy" && failsSpan.innerHTML <= 6) {
            img.setAttribute("src", "style/img/TwoStar.png");
        } else if (choosenD === "Easy" && failsSpan.innerHTML <= 9) {
            img.setAttribute("src", "style/img/OneStar.png");
        } else if (choosenD === "Easy" && failsSpan.innerHTML >= 10) {
            img.setAttribute("src", "style/img/EmptyStars.png");
        }
    
        if (choosenD === "Normal" && failsSpan.innerHTML <= 6) {
            img.setAttribute("src", "style/img/ThreeStar.png");
        } else if (choosenD === "Normal" && failsSpan.innerHTML <= 10) {
            img.setAttribute("src", "style/img/TwoStar.png");
        } else if (choosenD === "Normal" && failsSpan.innerHTML <= 19) {
            img.setAttribute("src", "style/img/OneStar.png");
        } else if (choosenD === "Normal" && failsSpan.innerHTML >= 20) {
            img.setAttribute("src", "style/img/EmptyStars.png");
        }
    
        if (choosenD === "Hard" && failsSpan.innerHTML <= 15) {
            img.setAttribute("src", "style/img/ThreeStar.png");
        } else if (choosenD === "Hard" && failsSpan.innerHTML <= 25) {
            img.setAttribute("src", "style/img/TwoStar.png");
        } else if (choosenD === "Hard" && failsSpan.innerHTML <= 39) {
            img.setAttribute("src", "style/img/OneStar.png");
        } else if (choosenD === "Hard" && failsSpan.innerHTML >= 40) {
            img.setAttribute("src", "style/img/EmptyStars.png");
        }
    
        if (choosenD === "Professional" && failsSpan.innerHTML <= 40) {
            img.setAttribute("src", "style/img/ThreeStar.png");
        } else if (choosenD === "Professional" && failsSpan.innerHTML <= 60) {
            img.setAttribute("src", "style/img/TwoStar.png");
        } else if (choosenD === "Professional" && failsSpan.innerHTML <= 99) {
            img.setAttribute("src", "style/img/OneStar.png");
        } else if (choosenD === "Professional" && failsSpan.innerHTML >= 100) {
            img.setAttribute("src", "style/img/EmptyStars.png");
        }
    } else if (status === "lose") {
        img.setAttribute("src", "style/img/EmptyStars.png");
    }

    starsCtn.appendChild(img);
}
// Button Reload
document.getElementById('reload').onclick = () => { document.location.reload(); };
// Add The Result In LocalStorage
function AULB() {
    // Set Current Date
    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let dateNow = `${year}/${month + 1}/${day}`;

    const user = {
        name: userName,
        difficulty: choosenD,
        yourFails: failsSpan.innerHTML,
        yourTime: progressSpan.innerHTML,
        date: dateNow,
    }
    AOB.push(user);
    localStorage.setItem('laderBoard', JSON.stringify(AOB));
}
//
function addstop(e) {
    gameSec.classList.add('stop');
    setTimeout(() => { gameSec.classList.remove('stop'); }, e);
}

// Flip The Card In The Beginning
function FCOM(time) {
        let cardBlock = Array.from(document.querySelectorAll('.cards-container .game-block'));
        cardBlock.forEach((e) => {
            if (time === 2) { bro(3000, e);
            } else if (time === 5) { bro(5000, e);
            } else if (time === 6) { bro(6000, e);
            } else if (time === 8) { bro(10000, e); 
        }
    })
}
//
function bro(duration, e) {
    addstop(duration);
        setTimeout(() => { e.style.transform = "rotateY(180deg)" }, 500);
        setTimeout(() => { e.style.transform = "rotateY(0deg)"; }, duration); 
}
// Set The CountDown For Progress Bar
function CFG(input) {
    let sMin = input;
    let time = sMin * 60;

    undoPauseMenu.addEventListener('click', (e) => {
        CTD = setInterval(CDS, 1000);
        progressInner.style.animationPlayState = "running";
    })
    
    progressInner.style.animation =  (input * 60) + 's ' + "timeWidth";
    
    CTD = setInterval(CDS, 1000)

        function CDS() {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            
            seconds = seconds < 10 ? '0' + seconds : seconds;
            
            progressSpan.innerHTML = minutes < 10 ? `0${minutes}:${seconds}` : `${minutes}:${seconds}`;

        if (time > 0) { time--; } else {
            document.getElementById('level-game').innerHTML = "You Lose!"
            gaga("lose");
            setTimeout(() => { backgroundSound.pause(); gameOverSound.play(); }, 100);
        }
    }
};
