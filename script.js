window.addEventListener('load', function() {
    // Variables
    var timer = document.getElementById('timer');
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var resetBtn = document.getElementById('resetBtn');

    var startTime;
    var elapsedTime = 0;
    var timerInterval;

    // Format time
    function formatTime(time) {
        var hours = Math.floor(time / 3600000);
        var minutes = Math.floor((time % 3600000) / 60000);
        var seconds = Math.floor((time % 60000) / 1000);
        var milliseconds = Math.floor(time % 1000);

        return (
            (hours > 0 ? (hours < 10 ? '0' : '') + hours + ':' : '') +
            (minutes < 10 ? '0' : '') +
            minutes +
            ':' +
            (seconds < 10 ? '0' : '') +
            seconds +
            '.' +
            (milliseconds < 100 ? '0' : '') +
            (milliseconds < 10 ? '0' : '') +
            milliseconds
        );
    }

    // Update timer
    function updateTimer() {
        var currentTime = Date.now();
        elapsedTime = currentTime - startTime;
        timer.innerHTML = formatTime(elapsedTime);
    }

    // Start timer
    startBtn.addEventListener('click', function() {
        if (!timerInterval) {
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(updateTimer, 10);
        }
    });

    // Stop timer
    stopBtn.addEventListener('click', function() {
        clearInterval(timerInterval);
        timerInterval = null;
    });

    // Reset timer
    resetBtn.addEventListener('click', function() {
        clearInterval(timerInterval);
        timerInterval = null;
        elapsedTime = 0;
        timer.innerHTML = formatTime(elapsedTime);
    });
});
window.addEventListener('load', function() {
    // Variables
    var timer = document.getElementById('timer');
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var resetBtn = document.getElementById('resetBtn');

    var startTime;
    var elapsedTime = 0;
    var timerInterval;

    // Format time
    function formatTime(time) {
        var hours = Math.floor(time / 3600000);
        var minutes = Math.floor((time % 3600000) / 60000);
        var seconds = Math.floor((time % 60000) / 1000);
        var milliseconds = Math.floor(time % 1000);

        return (
            (hours > 0 ? (hours < 10 ? '0' : '') + hours + ':' : '') +
            (minutes < 10 ? '0' : '') +
            minutes +
            ':' +
            (seconds < 10 ? '0' : '') +
            seconds +
            '.' +
            (milliseconds < 100 ? '0' : '') +
            (milliseconds < 10 ? '0' : '') +
            milliseconds
        );
    }

    // Update timer
    function updateTimer() {
        var currentTime = Date.now();
        elapsedTime = currentTime - startTime;
        timer.innerHTML = formatTime(elapsedTime);
    }

    // Start timer
    startBtn.addEventListener('click', function() {
        if (!timerInterval) {
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(updateTimer, 10);
        }
    });

    // Stop timer
    stopBtn.addEventListener('click', function() {
        clearInterval(timerInterval);
        timerInterval = null;
    });

    // Reset timer
    resetBtn.addEventListener('click', function() {
        clearInterval(timerInterval);
        timerInterval = null;
        elapsedTime = 0;
        timer.innerHTML = formatTime(elapsedTime);
    });
});
