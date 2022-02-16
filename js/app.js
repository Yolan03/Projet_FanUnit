//onst { Circle } = require("pixi.js");

//const { Loader } = require("pixi.js");
const canvas = document.getElementById('mycanvas');
const loader = PIXI.Loader.shared;
const Application = PIXI.Application;
let _w = window.innerWidth;
let _h = window.innerHeight;

const app = new Application({
    width: 1000,
    height: 1000,
    transparent: false,
    antialias: true

});

app.renderer.backgroundColor = 0x0066FF;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = 'absolute';

// let textures = {
//     width: 4,
//     height: 4,
//     // tiles =[
//     //     0, 0, 0, 0,
//     //     0, 0, 0, 0,
//     //     0, 0, 0, 0,
//     //     0, 0, 0, 0,
//     // ]
// }


document.body.appendChild(app.view);


const renderer = new PIXI.Renderer({
    view: canvas,
    width: _w,
    height: _h,
    resolution: window.devicePixelRatio,
    autoDensity: true
});

window.addEventListener('resize', resize);

function resize() {
    _w = window.innerHeight;
    _h = window.innerHeight;

    renderer.resize(_w, _h);
}

const stage = new PIXI.Container();






// app.loader.add('tileset', 'images/ciel.PNG')

// loader.add('tileset', 'images/ciel.PNG')
//     .load(setup);

//le Ciel
// const textureI = new PIXI.Texture.from('images/ciel.PNG');
// const ciel = new PIXI.Sprite(textureI);
// ciel.anchor.x = 0.5;
// ciel.anchor.y = 0.5;
//ciel.position.set(800, 300);
// ciel.width = 5130;
// ciel.height = 500;
// ciel.scale.set(2, 2);
// app.stage.addChild(ciel);

//batiment

const textureIII = PIXI.Texture.from('images/batiment3.PNG');
const batiment = new PIXI.Sprite(textureIII);
batiment.anchor.x = 0;
batiment.anchor.y = - 0;
batiment.width = 3000;
batiment.height = 1200;
app.stage.addChild(batiment);

//bordures

// const textureII = PIXI.Texture.from('images/bordure.PNG');
// const bordure = new PIXI.Sprite(textureII);
// bordure.anchor.x = 0;
// bordure.anchor.y = -2.65;
// bordure.width = 350;
// bordure.height = 350;
// app.stage.addChild(bordure);


for (let i = 0; i < 8; i++) {
    const textureIV = PIXI.Texture.from('images/bordure2.PNG');
    const bordure2 = new PIXI.Sprite(textureIV);
    bordure2.anchor.x = i * (-1);
    bordure2.anchor.y = -1.5;
    bordure2.width = 400;
    bordure2.height = - 500;

    app.stage.addChild(bordure2);
}


// //1er nuage

// const texture1 = PIXI.Texture.from('images/nuage1.png');
// const nuage1 = new PIXI.Sprite(texture1);
// nuage1.anchor.x = -1;
// nuage1.anchor.y = -0.2;
// nuage1.width = 150;
// nuage1.height = 100;
// app.stage.addChild(nuage1);

// //2ieme nuage

// const texture2 = PIXI.Texture.from('images/nuage2.png');
// const nuage2 = new PIXI.Sprite(texture2);
// nuage2.anchor.x = -4;
// nuage2.anchor.y = -0.5;
// nuage2.width = 150;
// nuage2.height = 100;
// app.stage.addChild(nuage2);

// //3ieme nuage

// const texture3 = PIXI.Texture.from('images/nuage1.png');
// const nuage3 = new PIXI.Sprite(texture3);
// nuage3.anchor.x = -8;
// nuage3.anchor.y = -1;
// nuage3.width = 150;
// nuage3.height = 100;
// app.stage.addChild(nuage3);


// //4ieme nuage

// const texture4 = PIXI.Texture.from('images/nuage2.png');
// const nuage4 = new PIXI.Sprite(texture4);
// nuage4.anchor.x = -13;
// nuage4.anchor.y = -0.7;
// nuage4.width = 150;
// nuage4.height = 100;
// app.stage.addChild(nuage4);

// //5ieme nuage

// const texture5 = PIXI.Texture.from('images/nuage1.png');
// const nuage5 = new PIXI.Sprite(texture5);
// nuage5.anchor.x = -16;
// nuage5.anchor.y = -0.9;
// nuage5.width = 150;
// nuage5.height = 100;
// app.stage.addChild(nuage5);


//Affichage du support pour le panier
const texture6 = PIXI.Texture.from('images/colonne.png');
const colonne = new PIXI.Sprite(texture6);
colonne.anchor.x = 0.04;
colonne.anchor.y = -0.24;
colonne.width = 400;
colonne.height = 1000;
app.stage.addChild(colonne);

//filet
const texture7 = PIXI.Texture.from('images/filet.png');
const filet = new PIXI.Sprite(texture7);
filet.anchor.x = -0.93;
filet.anchor.y = -2.2;
filet.width = 200;
filet.height = 200;
app.stage.addChild(filet);




// effet rebond ballon
function setup(loader, resources) {

    //pour 1er ballon
    // const texture3 = resources.tileset.texture1;
    // const tilesetBall1 = new PIXI.Rectangle(0, 0, 50, 50);
    // texture3.frame = tilesetBall1;
    // const spr1 = new PIXI.Sprite(texture3);
    // spr1.scale.set(2, 2);
    // app.stage.addChild(spr1);
    //pour 2eme ballon
    // const texture4 = resources.tileset.texture1;
    // const tilesetBall2 = new PIXI.Rectangle(50, 0, 60, 50);
    // texture4.frame = tilesetBall2;
    // const spr2 = new PIXI.Sprite(texture4);
    // spr2.scale.set(2, 2);
    // app.stage.addChild(spr2);
    // //pour 3eme ballon
    // const texture5 = resources.tileset.texture1;
    // const tilesetBall3 = new PIXI.Rectangle(180, 0, 60, 50);
    // texture5.frame = tilesetBall3;
    // const spr3 = new PIXI.Sprite(texture5);
    // spr3.scale.set(2, 2);
    // app.stage.addChild(spr3);
    // //4eme ballon
    // const texture6 = resources.tileset.texture1;
    // const tilesetBall2 = new PIXI.Rectangle(50, 0, 60, 50);
    // const tilesetBall4 = new PIXI.Rectangle(240, 0, 65, 50);
    // texture6.frame = tilesetBall1;
    // const spr4 = new PIXI.Sprite(texture6);
    // spr4.scale.set(2, 2);
    // app.stage.addChild(spr4);


}


app.ticker.add(delta => gameLoop(delta));


function gameLoop(delta) {
    //ball.x += 1;
    ball.rotation += 0.03;

    // quand la balle touche la colonne ou le panier elle tombe
    if (intersection(ball, colonne)) {
        ball.y = 3;
        ball.x += ball.vx;
        ball.vy += 0.8;
        if (ball.y > 500) {
            ball.vy += -0.8;
            ball.y += ball.vy;
        }
        if (ball.x > 800) {
            ball.vx += -0.8;
            ball.x += ball.vx;
        }
        if (ball.x > 50) {
            ball.vx += -0.8;
            ball.x += ball.vx;
        }
    }
}



const char1Texture = PIXI.Texture.from('images/ball.png');
//const ball = PIXI.Sprite.from('images/ball.png');
const ball = new PIXI.Sprite(char1Texture);
app.stage.addChild(ball);

//taile du ballon
ball.width = 120;
ball.height = 120;

//position du ballon
ball.position.set(800, 400);

ball.anchor.x = 0.5;
ball.anchor.y = 0.5;
ball.anchor.vy = 0;
//CharacterData.anchor.set(0.5, 0.5);

ball.interactive = true;
// permet a l'utilisateur de savoir que cet élément peut être cliquable avec l'îcone de la main
ball.buttonMode = true;

//on peut cliquer dessus et la balle s'agrandit puis se rétrécit
// ball.on('pointerdown', function () {
//     ball.scale.x += 0.1;
//     ball.scale.y += 0.1;
// });
// ball.on('pointerup', function () {
//     ball.scale.x -= 0.1;
//     ball.scale.y -= 0.1;
// });

//Pour déplacer le ballon avec les touches haut, bas, gauche, droite
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight')
        ball.x += 20;
    if (e.key === 'ArrowLeft')
        ball.x -= 20;
    if (e.key === 'ArrowUp')
        ball.y -= 20;
    if (e.key === 'ArrowDown')
        ball.y += 20;
});


function intersection(a, b) {
    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return aBox.x + aBox.width > bBox.x &&
        aBox.x < bBox.x + bBox.width &&
        aBox.y + aBox.height > bBox.y &&
        aBox.y < bBox.y + bBox.height;

}

    // function testerCollision() {
    //     if (!(ball.anchor.x > colonne.anchor.x + colonne.width,
    //         ball.anchor.x < colonne.anchor.x - ball.width,
    //         ball.anchor.y > colonne.anchor.y + colonne.height,
    //         ball.anchor.y < colonne.anchor.y - ball.height)) {
    //         // Collision

    //     }
    // }



