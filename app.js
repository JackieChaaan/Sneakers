// Desktop Product Slider
var pOne = document.getElementById("p-one");
var pTwo = document.getElementById("p-two");
var pThree = document.getElementById("p-three");
var pFour = document.getElementById("p-four");
var slider = document.getElementById("slider");
// Light Box Slider
var lightbox = document.getElementById("lightbox");
var close =document.getElementById("close");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var slideIndex = 1;

// Add to Cart
var minus = document.getElementById("minus");
var itemnum = document.getElementById("itemnum");
var item = itemnum;
var plus = document.getElementById("plus");
// Cart msge
var cart = document.querySelector(".cart");
var carticon =document.getElementById("carticon");
var cartmsg = document.querySelector(".cartmsg");
var cartbtn = document.getElementById("cartbtn");
var notify = document.getElementById("badge");

var cartlist = document.getElementById("cartlist");
var ordercount = document.getElementById("ordercount");
var totalamount =document.getElementById("totalamount");
var num_one = item.textContent;
var num_two = fixedprice.textContent;
var emptycart = document.getElementById("emptycart");
var cartdelete = document.getElementById("cartdeleteicon");

// mobile menu
var mobslideIndex =1;
var mobmenu = document.getElementById("mob-menu");
var mbmenu = document.getElementById("mbmenu");
var mobclose = document.getElementById("mob-close");


// Desktop Product Slider
pOne.addEventListener('click',function(){
    slider.style.transform='translateX(0%)';
    pOne.classList.add('active');
    pTwo.classList.remove('active');
    pThree.classList.remove('active');
    pFour.classList.remove('active');
});
pTwo.addEventListener('click',function(){
    slider.style.transform='translateX(-100%)';
    pOne.classList.remove('active');
    pTwo.classList.add('active');
    pThree.classList.remove('active');
    pFour.classList.remove('active');
});
pThree.addEventListener('click',function(){
    slider.style.transform='translateX(-200%)';
    pOne.classList.remove('active');
    pTwo.classList.remove('active');
    pThree.classList.add('active');
    pFour.classList.remove('active');
});
pFour.addEventListener('click',function(){
    slider.style.transform='translateX(-300%)';
    pOne.classList.remove('active');
    pTwo.classList.remove('active');
    pThree.classList.remove('active');
    pFour.classList.add('active');
});

slider.addEventListener('click',function(){
    lightbox.style.display="block";
});
close.addEventListener('click',function(){
    lightbox.style.display="none"
});



// next/previous controller

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var nextCnt = document.getElementsByClassName("light-box-large-img");
    var dots = document.getElementsByClassName("light-box-small-img");
    if (n > nextCnt.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = nextCnt.length;
    }
    for (i = 0; i < nextCnt.length; i++) {
        nextCnt[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    nextCnt[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }


// Add to Cart

plus.addEventListener('click',function(){   
    var item = itemnum.textContent;
        item++;
        itemnum.innerHTML=item;  
})
minus.addEventListener('click',function(){   
    var item = itemnum.textContent;
     if(item!=0){
        item--;
        itemnum.innerHTML=item;  
        
    }
})

// Function for total amount
function productCart(){
    notify.innerHTML=item.textContent;
    ordercount.textContent = item.textContent;
    totalamount.textContent =ordercount.textContent*fixedprice.textContent;
}

// cartdelete
cartdelete.addEventListener('click',function(){
    if(notify.textContent && ordercount.textContent!=0){
    notify.innerHTML=notify.textContent-1;
    ordercount.innerHTML=ordercount.textContent-1;
    totalamount.textContent =ordercount.textContent*fixedprice.textContent;
    if(totalamount.textContent && notify.textContent!=0){
        cartlist.style.display='block'
        emptycart.style.display='none';
    }
    else{
        cartlist.style.display='none';
        emptycart.style.display='block';
    }
    }
});

// Add to   cart & cart msg prompt
cartbtn.addEventListener('click',function(){
    if(item.textContent!=0){
        cartlist.style.display='block';
        productCart();
        emptycart.style.display='none';
    }
    else{
        notify.innerHTML="";
        emptycart.style.display='block';
        cartlist.style.display='none';
    }    
});

//Cart message prompt 
carticon.addEventListener('click',function(){
    if(cartmsg.style.display==='none'){
        cartmsg.style.display='block';
    }
    else{
        cartmsg.style.display='none';
    }
    if(item.textContent!=0){
        cartlist.style.display='block';
    }
    else{
        cartlist.style.display='none';
    }
   if(notify.textContent!=0){
        cartlist.style.display='block';
        emptycart.style.display='none';
   }
   else{
        cartlist.style.display='none';
        emptycart.style.display='block';
   }
});

// mobile-menu event
 mobmenu.addEventListener('click',function(){
    mbmenu.style.display='block';
 });
 mobclose.addEventListener('click',function(){
    mbmenu.style.display='none';
 });

//  mobile slider
function nextSlides(n) {
    mobshowSlides(mobslideIndex += n);
  }
  function mobshowSlides(n) {
    var i;
    var nextSl = document.getElementsByClassName("mob-large-img");
    if (n > nextSl.length) {
        mobslideIndex = 1;
    }
    if (n < 1) {
        mobslideIndex = nextSl.length;
    }
    for (i = 0; i < nextSl.length; i++) {
       
        nextSl[i].style.display = "none";
        
    }
    nextSl[mobslideIndex-1].style.display = "block";
    
  }