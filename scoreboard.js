let count = 0
let homeTeam = document.getElementById("home-team")
let awayTeam = document.getElementById("away-team")

function onepointH(){
    count += 1
    homeTeam.textContent = count
}

function twopointH(){
    count += 2
    homeTeam.textContent = count
}

function threepointH(){
    count += 3
    homeTeam.textContent = count
}


/*---------------------------------------AWAY TEAM--------------------------------------------------*/

function onepointA(){
    count += 1
    awayTeam.textContent = count
}

function twopointA(){
    count += 2
    awayTeam.textContent = count
}

function threepointA(){
    count += 3
    awayTeam.textContent = count
}