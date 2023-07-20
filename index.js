let homePoints = 0;
let guestPoints = 0;

let homePointCounterEl = document.getElementById("home-point-counter");
homePointCounterEl.textContent = homePoints
let guestPointCounterEl = document.getElementById("guest-point-counter");
guestPointCounterEl.textContent = guestPoints

let homeTitleEl = document.getElementById("home-title");
let guestTitleEl = document.getElementById("guest-title");

function addHomePoint(point) {
    homePoints += parseInt(point);
    homePointCounterEl.textContent = homePoints;
    showLeader();
}

function addGuestPoint(point) {
    guestPoints += point;
    guestPointCounterEl.textContent = guestPoints;
    showLeader();
}

function resetPoints() {
     homePoints = 0;
     guestPoints = 0;
     homePointCounterEl.textContent = homePoints;
     guestPointCounterEl.textContent = guestPoints;
     clearLeader();
}

function clearLeader() {
    guestPointCounterEl.classList.remove("leader");
    homePointCounterEl.classList.remove("leader");
    guestTitleEl.classList.remove("leader");
    homeTitleEl.classList.remove("leader");
}

function showLeader() {
    clearLeader();
    console.log(homePoints);
    if (homePoints > guestPoints) {
        homePointCounterEl.classList.add("leader");
        homeTitleEl.classList.add("leader");
    } else if (homePoints < guestPoints) {
        guestPointCounterEl.classList.add("leader");
        guestTitleEl.classList.add("leader");
    }
}
