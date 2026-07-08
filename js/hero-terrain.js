(function () {
  var canvas = document.getElementById("heroTerrain");

  if (!canvas || !canvas.getContext) {
    return;
  }

  var ctx = canvas.getContext("2d");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var COLS = 46;
  var ROWS = 18;
  var width = 0;
  var height = 0;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var rafId = null;

  function resize() {
    var rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function wave(colT, rowT, t) {
    var ridge = Math.sin(colT * 3.1 + 1.4) * 0.6 + Math.sin(colT * 1.3 + 0.6) * 0.4;

    return (
      ridge * 0.55 +
      Math.sin(colT * 6.1 + t) * 0.26 +
      Math.sin(colT * 2.4 - t * 0.6 + rowT * 3.2) * 0.22 +
      Math.sin(rowT * 5.4 + t * 0.35) * 0.14
    );
  }

  function draw(t) {
    if (!width || !height) {
      return;
    }

    ctx.clearRect(0, 0, width, height);

    for (var row = 0; row < ROWS; row++) {
      var rowT = row / (ROWS - 1);
      var y0 = height * (0.04 + rowT * 0.96);
      var amp = 18 + rowT * 78;
      var alpha = 0.07 + rowT * 0.46;
      var size = 0.9 + rowT * 1.8;

      for (var col = 0; col <= COLS; col++) {
        var colT = col / COLS;
        var x = colT * width;
        var n = wave(colT, rowT, t);
        var y = y0 + n * amp;

        ctx.beginPath();
        ctx.fillStyle = "rgba(108, 99, 255, " + alpha + ")";
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function loop(ts) {
    draw(ts * 0.00055);
    rafId = window.requestAnimationFrame(loop);
  }

  function start() {
    resize();

    if (reduceMotion) {
      draw(0);
      return;
    }

    rafId = window.requestAnimationFrame(loop);
  }

  window.addEventListener("resize", function () {
    resize();

    if (reduceMotion) {
      draw(0);
    }
  });

  if (document.readyState === "complete" || document.readyState === "interactive") {
    start();
  } else {
    document.addEventListener("DOMContentLoaded", start);
  }
})();
