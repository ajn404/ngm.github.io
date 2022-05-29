---
title: a11
sidebar: false
sidebarDepth: 0
---


## angles
<ClientOnly>
<angels-rotation></angels-rotation>
</ClientOnly>

```js
        main(_p5) {
                let p5 = _p5;
                let angle = 0;
                p5.setup=()=> {
                    p5.createCanvas(p5.windowWidth-30, p5.windowHeight-100);
                    p5.angleMode(p5.RADIANS)
                }
                p5.draw=()=> {
                    p5.background(146,83,161);
                    p5.noStroke();
                    p5.fill(240,99,164);
                    p5.rectMode(p5.CENTER);
                    p5.translate(200,200);
                    p5.rotate(angle);
                    p5.rect(0,0,256,32);
                    angle+=0.05;
                    }
                }
```

## angular motion demo

<ClientOnly>
<angular-motion></angular-motion>
</ClientOnly>


```js
        main( _p5 ) {
                let p5 = _p5 ;
                let angle = 0 ;

                let angleV = 0;
                let angleA = 0.00001;

                let cWidth =  p5.windowWidth/2;
                let cHeight = p5.windowHeight/2;


                p5.setup=()=> {

                    p5.createCanvas(cWidth, cHeight);
                    p5.angleMode(p5.RADIANS);

                }
                p5.draw=()=> {
                    angleA = p5.map(p5.mouseX,0,p5.width,-0.01,0.01)
                    angleV = p5.constrain(angleV,-0.2,0.2)
                    p5.background( 146 , 83 , 161 );
                    p5.noStroke();
                    p5.fill( 240 , 99 , 164 );
                    p5.rectMode( p5.CENTER );
                    p5.translate( cWidth/2 , cHeight/2);
                    p5.rotate( angle );
                    p5.rect( 0 , 0 , 256 , 32 );
                    angle += angleV;
                    angleV+=angleA;

                }
            }
```


## draw function

<ClientOnly>
<draw></draw>
</ClientOnly>


