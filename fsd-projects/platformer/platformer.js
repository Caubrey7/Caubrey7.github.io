$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(255, 180, 242)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    

    // TODO 2 - Create Platforms
    //createPlatform(x, y, width, height, "color")
    createPlatform(300, 700, 100, 10, "white");
    createPlatform(400, 600, 100, 10, "white");
    createPlatform(500, 500, 100, 10, "white");
    createPlatform(300, 400, 100, 10, "white");
    createPlatform(200, 300, 100, 10, "white");
    createPlatform(400, 200, 100, 10, "white");
    createPlatform(600, 200, 100, 10, "white");
    createPlatform(800, 300, 100, 10, "white");
    createPlatform(1000, 400, 100, 10, "white");
    createPlatform(900, 500, 100, 10, "white");
    createPlatform(600, 200, 20, 600, "white");
    createPlatform(800, 600, 100, 10, "white")

    // TODO 3 - Create Collectables
    //createCollectable(x, y, gravity, bounce)
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("max", 800, 200, 0.5, 0.7);
    createCollectable("steve", 700, 500, 0.5, 0.7);

    // TODO 4 - Create Cannons
    //createCannon(side, position, delay)
    createCannon("right", 300, 4000)
    createCannon("right", 500, 5000)
    createCannon("right", 700, 6000)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
