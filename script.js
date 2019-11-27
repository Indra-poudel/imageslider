var imageWidth=400;
var imageCount= document.getElementById("carousel-image-wrapper").childElementCount;
var carouselImageWrapperWidth= (imageCount*imageWidth);
var carouselImageWrapper=document.getElementById("carousel-image-wrapper");
carouselImageWrapper.style.width= carouselImageWrapperWidth+"px";
carouselImageWrapper.style.height=200+"px";
var dotpos=0;
var imageindex=0;
for(var i=0;i<=imageCount-1;i++)
{
   var span = document.createElement("span");
  
   span.classList.add("dot");
   document.getElementById("dot-wrapper").appendChild(span);
}
  var span= document.getElementById("dot-wrapper").children;
 // span[0].style["background-color"]="red";
renderDot();
function plusSlides(n ,c) {
   
    var styleCarouselImageWrapper= getComputedStyle(carouselImageWrapper);
    var posXpx= styleCarouselImageWrapper.getPropertyValue('left');
    var posX = posXpx.slice(0, -2);
    console.log(dotpos);
    if(n===-1)
    {
       console.log("left");
       if(posX<=-(imageCount-1)*imageWidth)
       {
         
        carouselImageWrapper.style.left = "0px";
        dotpos=0;
        renderDot();
       
       
       }
       else{
        imageindex++;
        carouselImageWrapper.style.left = (imageindex*imageWidth)+"px";
        dotpos=(parseInt(posX)-imageWidth);
        renderDot();

       }

       
    }
    if(n===1)
    {
         if(posX>=0)
       {
        carouselImageWrapper.style.left = -(imageWidth*(imageCount-1))+"px";
         dotpos=-(imageWidth*(imageCount-1));
         renderDot();
       
       }
       else{
        carouselImageWrapper.style.left = (parseInt(posX)+imageWidth)+"px";
         dotpos=(parseInt(posX)+imageWidth);

         renderDot();
       }
   
    }
  
   console.log(dotpos);
   console.log(activeDot());
  
  }

  function repeat()
  {
     //activedot();
     plusSlides(1);
   
     
  }

function activeDot()
{
   var index= Math.floor(Math.abs((Math.abs(carouselImageWrapperWidth/(Math.abs(dotpos)+imageWidth))-imageCount)));
   return index;
  
}
function renderDot()
{
   console.log("image count",imageCount);
   for(var i=0; i<=imageCount-1;i++)
   {
      if(i===activeDot())
      {
          span[i].style["background-color"]="#717171";
      }
      
      else
      {
          span[i].style["background-color"]="#bbb";
      }
   }

}
  
var myVar = setInterval(repeat, 2000);
