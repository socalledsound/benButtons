var image1, image2, image3;
var backgroundImage;
var screenImage1,screenImage2,screenImage3;

var imageXstart = 190;
var imageYstart = 20;
var padding = 30;
var smallImageSize = 300;
var image1Size = 300;

var images = [];
var numImages = 3;
var screenImages = [];



function preload() {
      backgroundImage = loadImage('images/happy_show_background.jpg');

  image1 = loadImage('images/the_cloud.jpg');
    image2 = loadImage('images/blythe_pano.jpg');

    image3 = loadImage('images/funk_one_edit.jpg');


}

function setup() {
    createCanvas(666,1000);
    background(backgroundImage);

    images = [image1,image2,image3];

    for(var i=0;i<numImages;i++) {
        screenImages[i] = new ImageObject(images[i], imageXstart, imageYstart + (padding*i)+ (smallImageSize*i),smallImageSize,smallImageSize);

    }


}

function draw() {
    background(backgroundImage);


    screenImages.forEach(function(image){
        if(!image.big) {
          image.display();
        }
    })

    screenImages.forEach(function(image){
        if(image.big) {
          image.display();
        }
    })
// screenImage2 = image(image2,imageXstart,imageYstart + padding + imageSize,imageSize,imageSize);
// screenImage3 = image(image3,imageXstart,imageYstart + padding + imageSize+ padding + imageSize,imageSize,imageSize);
}


function keyTyped() {

    if(key === 'a') {

        if (!screenImages[0].big) {
                screenImages[0].x = 50;
                screenImages[0].y = 200;
                screenImages[0].wideSize = 550;
               screenImages[0].vertSize = 550;
                screenImages[0].big=true;
        }
        else {
                screenImages[0].x = imageXstart;
               screenImages[0].y = imageYstart;
                screenImages[0].wideSize = smallImageSize;
                screenImages[0].vertSize = smallImageSize;
                screenImages[0].big=false;
        }


    }

        if(key === 's') {

        if (!screenImages[1].big) {
                screenImages[1].x = 50;
                screenImages[1].y = 200;
                screenImages[1].wideSize = 550;
               screenImages[1].vertSize = 550;
                screenImages[1].big=true;
        }
        else {
                screenImages[1].x = imageXstart;
               screenImages[1].y = screenImages[1].yStart;
                screenImages[1].wideSize = smallImageSize;
                screenImages[1].vertSize = smallImageSize;
                screenImages[1].big=false;
        }


    }
        if(key === 'd') {

        if (!screenImages[2].big) {
                screenImages[2].x = 50;
                screenImages[2].y = 200;
                screenImages[2].wideSize = 550;
               screenImages[2].vertSize = 550;
                screenImages[2].big=true;
        }
        else {
                screenImages[2].x = imageXstart;
               screenImages[2].y = screenImages[2].yStart;
                screenImages[2].wideSize = smallImageSize;
                screenImages[2].vertSize = smallImageSize;
                screenImages[2].big=false;
        }


    }

}



var ImageObject = function(img,x,y,wideIn,heightIn) {

    this.img = img;
    this.x = x;
    this.y = y;
    this.yStart = y;
    this.wideSize = wideIn;
    this.vertSize = heightIn;
    this.big = false

    //    console.log(this.img);

    this.display= function() {
         image(this.img,this.x,this.y,this.wideSize,this.vertSize);
    }

}




socket.on("firstButtonPress", function(message){
  console.log(message);
  screenImages[0].x = 50;
  screenImages[0].y = 200;
  screenImages[0].wideSize = 550;
 screenImages[0].vertSize = 550;
  screenImages[0].big=true;
});


socket.on("firstButtonRelease", function(message){
  console.log(message);
  screenImages[0].x = imageXstart;
 screenImages[0].y = imageYstart;
  screenImages[0].wideSize = smallImageSize;
  screenImages[0].vertSize = smallImageSize;
  screenImages[0].big=false;
});


socket.on("secondButtonPress", function(message){
  console.log(message);
  screenImages[1].x = 50;
  screenImages[1].y = 200;
  screenImages[1].wideSize = 550;
 screenImages[1].vertSize = 550;
  screenImages[1].big=true;
});


socket.on("secondButtonRelease", function(message){
  console.log(message);
  screenImages[1].x = imageXstart;
 screenImages[1].y = imageYstart;
  screenImages[1].wideSize = smallImageSize;
  screenImages[1].vertSize = smallImageSize;
  screenImages[1].big=false;
});


socket.on("thirdButtonPress", function(message){
  console.log(message);
  screenImages[2].x = 50;
  screenImages[2].y = 200;
  screenImages[2].wideSize = 550;
 screenImages[2].vertSize = 550;
  screenImages[2].big=true;
});


socket.on("thirdButtonRelease", function(message){
  console.log(message);
  screenImages[2].x = imageXstart;
 screenImages[2].y = imageYstart;
  screenImages[2].wideSize = smallImageSize;
  screenImages[2].vertSize = smallImageSize;
  screenImages[2].big=false;
});
