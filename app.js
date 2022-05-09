const Application = PIXI.Application;

const app = new Application({
  width: 500,
  height: 500,
  transparent: false,
});

app.renderer.backgroundColor = 0x23395d;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;
/*
const troj = new Graphics();
troj.lineStyle(4, 0xffea00, 1);
troj.beginFill(0xaa33bb);
troj.drawRect(200, 200, 100, 120);
troj.endFill();

app.stage.addChild(troj);
*/
const torus = new Graphics();
torus.beginFill(0xfffddd).drawTorus(100, 700, 80, 100).endFill();

app.stage.addChild(torus);

const style = new PIXI.TextStyle({
  fontFamily: "Montserrat",
  fontSize: 48,
  fill: "violet",
  stroke: "#ffffff",
  strokeThickness: 3,
  dropShadow: true,
  dropShadowColor: "#000000",
});

const myText = new PIXI.Text("Hvězdy kam se podíváš!", style);

app.stage.addChild(myText);

app.ticker.add((delta) => loop(delta));

function loop(delta) {
  const tro = new Graphics();
  tro
    .beginFill(0xffffff)
    .drawStar(
      Math.random() * app.screen.width,
      Math.random() * app.screen.height,
      5,
      10
    )
    .endFill();

  app.stage.addChild(tro);
}
