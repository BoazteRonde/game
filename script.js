document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById('ball');
    const goal = document.getElementById('goal');
    const obstacle = document.getElementById('obstacle');
    const gameContainer = document.getElementById('game-container');

    // Beweging van de bal
    document.addEventListener('keydown', function(event) {
        const key = event.key;
const ballStyle = getComputedStyle(ball);
        const ballLeft = parseInt(ballStyle.left);
        const ballTop = parseInt(ballStyle.top);

        switch (key) {
            case 'ArrowUp':
                ball.style.top = (ballTop - 5) + 'px';
                break;
            case 'ArrowDown':
                ball.style.top = (ballTop + 5) + 'px';
                break;
            case 'ArrowLeft':
                ball.style.left = (ballLeft - 5) + 'px';
                break;
            case 'ArrowRight':
                ball.style.left = (ballLeft + 5) + 'px';
                break;
        }
// Controleer winvoorwaarde
        if (checkCollision(ball, goal)) {
            alert('Gefeliciteerd! Je hebt gewonnen!');
        }
         if (checkCollision(ball, obstacle)) {
            alert('helaas je bent dood!');
        }
    });

    // Controleer of de bal het doel bereikt
    function checkCollision(ball, goal) {
        const ballRect = ball.getBoundingClientRect();
        const goalRect = goal.getBoundingClientRect();
        return !(ballRect.right < goalRect.left || 
                 ballRect.left > goalRect.right || 
                 ballRect.bottom < goalRect.top || 
                 ballRect.top > goalRect.bottom);
    }
});
    function checkCollision(ball, obstacle1) {
        const ballRect = ball.getBoundingClientRect();
        const goalRect = goal.getBoundingClientRect();
        return !(ballRect.right < obstacle1Rect.left || 
                 ballRect.left > obstacle1Rect.right || 
                 ballRect.bottom < obstacle1Rect.top || 
                 ballRect.top > obstacle1Rect.bottom);
    }
});
    function checkCollision(ball, obstacle2) {
        const ballRect = ball.getBoundingClientRect();
        const goalRect = goal.getBoundingClientRect();
        return !(ballRect.right < obstacl2eRect.left || 
                 ballRect.left > obstacle2Rect.right || 
                 ballRect.bottom < obstacle2Rect.top || 
                 ballRect.top > obstacle2Rect.bottom);
    }
});
    function checkCollision(ball, obstacle3) {
        const ballRect = ball.getBoundingClientRect();
        const goalRect = goal.getBoundingClientRect();
        return !(ballRect.right < obstacle3Rect.left || 
                 ballRect.left > obstacle3Rect.right || 
                 ballRect.bottom < obstacle3Rect.top || 
                 ballRect.top > obstacle3Rect.bottom);
    }
});
