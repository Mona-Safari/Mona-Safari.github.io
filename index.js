//JavaScript

.click(function(){
		open_window('http://www.facebook.com/');
	});

.click(function(){
		open_window('https://plus.google.com/');
	});

.click(function(){
		open_window('https://www.linkedin.com/');
	});

function open_window(url, name){
         window.open(url, name, 'height=320, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no');
	}
});
  
  
//image filter
var image = null;

function loadimage(){
  var canvas = document.getElementById("canvas");
  var filename = document.getElementById("image");
  image = new SimpleImage(filename);
  image.drawTo(canvas);
}

function GrayScale(){
  for (var pixel of image.values()){
var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
}
  var canvas = document.getElementById("canvas");
  image.drawTo(canvas);
}

function Red(){
 for (var pixel of image.values()) {
 var avg=(pixel.getGreen()+pixel.getRed()+pixel.getBlue())/3;
    if (avg < 128) {
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
   else {
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
  }              
  image.drawTo(canvas);
}

function Green(){
  for (var pixel of image.values()){
    var avg=(pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(2*avg);
      pixel.setBlue(0);
    }
   else {
      pixel.setRed(2*avg-255);
      pixel.setGreen(255);
      pixel.setBlue(2*avg-255);
    }
  }
  image.drawTo(canvas);
}
function Blue(){
  for (var pixel of image.values()){
    var avg=(pixel.getGreen()+pixel.getRed()+pixel.getBlue())/3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2*avg);
    }
   else {
      pixel.setRed(2*avg-255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(255);
    }
  }
  image.drawTo(canvas);
}

function Rainbow(){}

function BlurFilter(){
    var max = 5;
  for (var pixel of blurimage.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var tempX = -1;
    var tempY = -1;
    if (Math.random()>0.7){
      while (tempX>(image.width-1) || tempX<0 || tempY>(image.height-1) || tempY<0){
      var tempX = x+Math.ceil((0.5-Math.random())*2*max);
      var tempY = y+Math.ceil((0.5-Math.random())*2*max)
      }
     image.setPixel(x,y,image.getPixel(tempX,tempY));
    }
  }
  image.drawTo(canvas);
}

function alienFilter(){

for(var pixel of image.values()){

var tmpRed = pixel.getRed();

pixel.setRed(pixel.getBlue());

pixel.setBlue(tmpRed);
}
 var alien = document.getElementById("canvas");
    image.drawTo(alien);
}

function Invert(){
    for (var pixel of image.values())
      {
        var Redpixel = 255 - pixel.getRed();
        var Greenpixel = 255 - pixel.getGreen();
        var Bluepixel = 255 - pixel.getBlue();
        
        pixel.setRed(Redpixel);
        pixel.setGreen(Greenpixel);
        pixel.setBlue(Bluepixel);
      }
    frame = document.getElementById("canvas");
    image.drawTo(frame);
  }

function ResetFilter(){
   if(image == null || !image.complete()){
    alert ("Image not loaded");
    return;
  }
  var canvas = document.getElementById("canvas");
  var filename = document.getElementById("image");
  image = new SimpleImage(filename);
  
 for (var pixel of image.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
   var resetimg = new simpleImage("image");
    image.setPixel(x, y, resetimg.getPixel(x, y));
  }
  image.drawTo(canvas);
}
