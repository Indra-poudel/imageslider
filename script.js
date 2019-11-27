var imageWidth=400;

var imageCount= document.getElementById("carousel-image-wrapper").childElementCount;
var carouselImageWrapper=document.getElementById("carousel-image-wrapper");
carouselImageWrapper.style.width=( (imageCount*imageWidth))+"px";
carouselImageWrapper.style.height=200+"px";

for(var i=0;i<=imageCount-1;i++)
{
   var span = document.createElement("span");
  
   span.classList.add("dot");
   document.getElementById("dot-wrapper").appendChild(span);
}
  var span= document.getElementById("dot-wrapper").children;
  span[0].style["background-color"]="red";

function plusSlides(n) {
    var styleCarouselImageWrapper= getComputedStyle(carouselImageWrapper);
    var posXpx= styleCarouselImageWrapper.getPropertyValue('left');
    var posX = posXpx.slice(0, -2);
    if(n===-1)
    {
       if(posX<=-(imageCount-1)*imageWidth)
       {
        carouselImageWrapper.style.left = "0px";
       
       }
       else{
        carouselImageWrapper.style.left = (parseInt(posX)-imageWidth)+"px";
       }

       
    }
    if(n===1)
    {
         if(posX>=0)
       {
        carouselImageWrapper.style.left = -(imageWidth*(imageCount-1))+"px";
       
       }
       else{
        carouselImageWrapper.style.left = (parseInt(posX)+imageWidth)+"px";
       }
   
    }
   
  }

  function repeat()
  {
     activedot();
     plusSlides(1);
   
     
  }

function activedot()
{
   var styleCarouselImageWrapper= getComputedStyle(carouselImageWrapper);
   var posXpx= styleCarouselImageWrapper.getPropertyValue('left');
   var posX = posXpx.slice(0, -2);
   console.log("current posx",posX);
   var i= Math.abs(parseInt(parseInt(posX)/404)) ;
   console.log(i);    
}
  
  setInterval( repeat, 3000);