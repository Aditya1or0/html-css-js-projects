// Module aliases
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

// Create engine
const engine = Engine.create();
const { world } = engine;

// Create renderer
const render = Render.create({
  element: document.body,
  canvas: document.getElementById("world"),
  engine: engine,
  options: {
    width: 800,
    height: 600,
    wireframes: false,
    background: "#fafafa",
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Add ground
const ground = Bodies.rectangle(400, 580, 810, 60, { isStatic: true });
World.add(world, ground);

// Add some bodies
const redCircle = Bodies.circle(200, 200, 40, {
  render: { fillStyle: "red" },
  collisionFilter: { group: 1 },
});
const blueCircle = Bodies.circle(400, 200, 40, {
  render: { fillStyle: "blue" },
  collisionFilter: { group: 2 },
});
const greenCircle = Bodies.circle(600, 200, 40, {
  render: { fillStyle: "green" },
  collisionFilter: { group: 1 },
});

World.add(world, [redCircle, blueCircle, greenCircle]);

// Add collision event
Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((pair) => {
    const { bodyA, bodyB } = pair;
    console.log(
      `Collision between ${bodyA.render.fillStyle} and ${bodyB.render.fillStyle}`
    );
  });
});
