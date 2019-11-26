var imageCount= document.getElementById("carousel-image-wrapper").childElementCount;
var carouselImageWrapper=document.getElementById("carousel-image-wrapper");
carouselImageWrapper.style.width=( (imageCount*400) + imageCount*3+1)+"px";
carouselImageWrapper.style.height=200+"px";

function plusSlides(n) {
    var styleCarouselImageWrapper= getComputedStyle(carouselImageWrapper);
    var posXpx= styleCarouselImageWrapper.getPropertyValue('left');
    console.log(posXpx);
    var posX = posXpx.slice(0, -2);
    console.log(posX);

    if(n===-1)
    {
       if(posX<=-(imageCount-1)*404)
       {
        carouselImageWrapper.style.left = "0px";
       
       }
       else{
        carouselImageWrapper.style.left = (parseInt(posX)-404)+"px";
        console.log("pre");
        console.log(posX);
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
        console.log("next");
        console.log(posX);
       }
    
    }
  }