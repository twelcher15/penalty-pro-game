
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let streak = 0;
let highScore = 0;
let power = 0;
let powerIncreasing = true;
let gameActive = false;

document.getElementById('startButton').onclick = () => {
    gameActive = true;
    streak = 0;
    power = 0;
    requestAnimationFrame(gameLoop);
};

function gameLoop() {
    if (!gameActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#001f3f";
    ctx.drawImage(currentGoalieImage, 100, 250, 50, 100); // Basic goalie placeholder

    updatePowerBar();
    requestAnimationFrame(gameLoop);
}

function updatePowerBar() {
    if (powerIncreasing) {
        power += 1;
        if (power >= 100) {
            powerIncreasing = false;
        }
    } else {
        power -= 1;
        if (power <= 0) {
            powerIncreasing = true;
        }
    }
    document.getElementById('powerBar').style.width = power + "%";
}



// Sprite switching logic
let currentGoalieImage = new Image();
let currentBallImage = new Image();
currentGoalieImage.src = 'assets/default_goalie.png';
currentBallImage.src = 'assets/default_ball.png';

function updateSprites(streak) {
    // Goalie unlocks
    if (streak >= 100) {
        currentGoalieImage.src = 'assets/burki_goalie.png';
    } else if (streak >= 50) {
        currentGoalieImage.src = 'assets/beast_goalie.png';
    } else if (streak >= 30) {
        currentGoalieImage.src = 'assets/retro_goalie.png';
    } else if (streak >= 20) {
        currentGoalieImage.src = 'assets/robot_goalie.png';
    } else if (streak >= 10) {
        currentGoalieImage.src = 'assets/ninja_goalie.png';
    } else {
        currentGoalieImage.src = 'assets/default_goalie.png';
    }

    // Ball unlocks
    if (streak >= 75) {
        currentBallImage.src = 'assets/lightning_ball.png';
    } else if (streak >= 40) {
        currentBallImage.src = 'assets/galaxy_ball.png';
    } else if (streak >= 25) {
        currentBallImage.src = 'assets/gold_ball.png';
    } else if (streak >= 15) {
        currentBallImage.src = 'assets/flame_ball.png';
    } else if (streak >= 5) {
        currentBallImage.src = 'assets/neon_ball.png';
    } else {
        currentBallImage.src = 'assets/default_ball.png';
    }
}

function checkUnlocks(streak) {
    updateSprites(streak);

    if (streak === 5) console.log("Unlock: Neon Pink Ball");
    if (streak === 10) console.log("Unlock: Ninja Goalie");
    if (streak === 15) console.log("Unlock: Flame Ball");
    if (streak === 20) console.log("Unlock: Robot Goalie");
    if (streak === 25) console.log("Unlock: Gold-Plated Ball");
    if (streak === 30) console.log("Unlock: Retro Goalie");
    if (streak === 40) console.log("Unlock: Galaxy Ball");
    if (streak === 50) console.log("Unlock: Beast Goalie");
    if (streak === 75) console.log("Unlock: Lightning Ball");
    if (streak === 100) console.log("Unlock: Burki Mode Goalie");
}

    updateGoalieSprite(streak);

    if (streak === 5) console.log("Unlock: Neon Pink Ball");
    if (streak === 10) console.log("Unlock: Ninja Goalie");
    if (streak === 20) console.log("Unlock: Gold-Plated Ball");
    if (streak === 30) console.log("Unlock: Robot Goalie");
    if (streak === 50) console.log("Unlock: Galaxy Ball");
    if (streak === 100) console.log("Unlock: Burki Mode Goalie");
}

function checkUnlocks(streak) {
    if (streak === 5) console.log("Unlock: Neon Pink Ball");
    if (streak === 10) console.log("Unlock: Ninja Goalie");
    if (streak === 20) console.log("Unlock: Gold-Plated Ball");
    if (streak === 30) console.log("Unlock: Robot Goalie");
    if (streak === 50) console.log("Unlock: Galaxy Ball");
    if (streak === 100) console.log("Unlock: Burki Mode Goalie");
}
