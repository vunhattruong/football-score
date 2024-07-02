let homeScoreEl = document.getElementById("score-home-el")
let plusOneHome = document.getElementById("plus-one-home-btn")
let plusTwoHome = document.getElementById("plus-two-home-btn")
let plusThreeHome = document.getElementById("plus-three-home-btn")
let homeScore = 0
let awayScoreEl = document.getElementById("score-guest-el")
let plusOneAway = document.getElementById("plus-one-guest-btn")
let plusTwoAway = document.getElementById("plus-two-guest-btn")
let plusThreeAway = document.getElementById("plus-three-guest-btn")
let awayScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseAwayScoreOne(){
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

function increaseAwayScoreTwo(){
    awayScore += 2
    awayScoreEl.textContent = awayScore
}

function increaseAwayScoreThree(){
    awayScore += 3
    awayScoreEl.textContent = awayScore
}

function newGame(){
    homeScore = 0
    awayScore = 0
    homeScoreEl.textContent = homeScore
    awayScoreEl.textContent = awayScore
}