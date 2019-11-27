var imageCount= document.getElementById("carousel-image-wrapper").childElementCount;
var carouselImageWrapper=document.getElementById("carousel-image-wrapper");
carouselImageWrapper.style.width=( (imageCount*400) + imageCount*3)+"px";
carouselImageWrapper.style.height=200+"px";
for(var i=0;i<=imageCount;i++)
{
var span = document.createElement("span");
   span.style.cursor= "pointer";
    span.style.height= "15px";
    span.style.width=" 15px";
    span.style.margin= "0 2px";
    span.style["background-color"]=" #bbb";
    span.style["border-radius"]=" 50%";
    span.style.display=" inline-block";
    span.style.transition=" background-color 0.6s ease";
//document.getElementById("dot-wrapper").appendChild(span);
}

function plusSlides(n) {
    var styleCarouselImageWrapper= getComputedStyle(carouselImageWrapper);
    var posXpx= styleCarouselImageWrapper.getPropertyValue('left');
    var posX = posXpx.slice(0, -2);
    if(n===-1)
    {
       if(posX<=-(imageCount-1)*404)
       {
        carouselImageWrapper.style.left = "0px";
       
       }
       else{
        carouselImageWrapper.style.left = (parseInt(posX)-404)+"px";
       }

       
    }
    if(n===1)
    {
         if(posX>=0)
       {
        carouselImageWrapper.style.left = -(404*(imageCount-1))+"px";
       
       }
       else{
        carouselImageWrapper.style.left = (parseInt(posX)+404)+"px";
       }
    
    }
  }

  function repeat()
  {
     plusSlides(1);
  }

  setInterval( repeat, 3000);