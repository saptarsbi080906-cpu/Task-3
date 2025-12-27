    let timer;
    let seconds = 0;

    function updateDisplay() {
      let hrs = Math.floor(seconds / 3600);
      let mins = Math.floor((seconds % 3600) / 60);
      let secs = seconds % 60;

      document.getElementById("display").textContent =
        `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function start() {
      if (!timer) {
        timer = setInterval(() => {
          seconds++;
          updateDisplay();
        }, 1000);
      }
    }

    function stop() {
      clearInterval(timer);
      timer = null;
    }

    function reset() {
      stop();
      seconds = 0;
      updateDisplay();
    }
