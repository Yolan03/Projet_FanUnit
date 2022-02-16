let app;
let text1;
const Graphics = PIXI.Graphics;

function changerDePage() {
    //document.querySelector('.box').style.color = 'blue';
    document.location.href = "index.html";
}

window.onload = function () {
    app = new PIXI.Application(
        {
            width: 1000,
            height: 1000,
            transparent: false,
            antialias: true,
            backgroundColor: 0xAAAAAAA
        }
    );

    app.renderer.backgroundColor = 0xffff4b;
    app.renderer.resize(window.innerWidth, window.innerHeight);
    app.renderer.view.style.position = 'absolute';


    document.body.appendChild(app.view);

    text1 = new PIXI.Text("Click  or  touch  to  play  !");
    text1.x = app.view.width / 2;
    text1.y = app.view.height / 2;
    text1.anchor.set(0.5);
    text1.style = new PIXI.TextStyle({
        fontFamily: "Arcade",
        fontSize: 80,
        fill: 'deepskyblue',
        stroke: '#000000',
        strokeThickness: 8,
        dropShadow: true,
        dropShadowDistance: 10,
        dropShadowAngle: Math.PI / 2,
        dropShadowBlur: 4,
        dropShadowColor: '#4ebaff'
    });
    app.stage.addChild(text1);


    app.ticker.add(delta => loop(delta));

    function loop(delta) {
        const rect = new Graphics();
        rect.beginFill(0x0081a0)
            .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
            .endFill();

        app.stage.addChild(rect);

    }

}