let header = document.getElementById("navBar");
let lastScrollValue = 0;
let form = document.querySelector(".divForms");
var lastMenu ="";
var lastArrow1 =""; 
var lastArrow2 ="";
var menuOpen = false;
document.addEventListener('scroll',() => {
		let top  = document.documentElement.scrollTop;
    if(lastScrollValue < top) {
    	header.classList.add("hidden");
    } else {
    	header.classList.remove("hidden");
    }
    lastScrollValue = top;
});
function closeMenu(Lastmenu, Lastarrow1, Lastarrow2){
   var menu = document.getElementById(lastMenu);
   var arrow1 = document.querySelector(lastArrow1);
   var arrow2 = document.querySelector(lastArrow2);
   menu.style.height = 0+'vh';   
   menu.style.opacity = 0;
   arrow1.style.transform = 'rotate('+45+'deg)';
   arrow2.style.transform = 'rotate(-45deg)';
   body.style.height = "431vh";
   menuOpen = false;
}

function DropMenu(idMenu, a1, a2, vh){
   var menu = document.getElementById(idMenu);
   var arrow1 = document.querySelector(a1);
   var arrow2 = document.querySelector(a2);
   var body = document.getElementById("body");
   var bodyHeight = parseInt(vh) + 431;

   if(menuOpen == true) {
         closeMenu(lastMenu, lastArrow1, lastArrow2);
      }

   if(getComputedStyle(menu).height > 0+'vh' ){
      menu.style.height = 0+'vh';
      menu.style.opacity = 0;
      arrow1.style.transform = 'rotate('+45+'deg)';
      arrow2.style.transform = 'rotate(-45deg)';
      body.style.height = "431vh";
      menuOpen = false;
   }
   else{
      menu.style.height = vh+'vh';
   menu.style.opacity = 1;
   arrow1.style.transform = 'rotate(-'+45+'deg)';
   arrow2.style.transform = 'rotate(45deg)';
   body.style.height = bodyHeight +"vh";
   menuOpen = true;
   
   }
   
   lastMenu = idMenu;
      lastArrow1 = a1;
      lastArrow2 = a2;

   
}

function GetIdMenu(Menu, A1, A2){
   if(Menu == "containerMenu2"){
      if( window.screen.width > 1200){
         DropMenu(Menu,  A1, A2, vh = 325);
      }
      else if( 1000 < window.screen.width && window.screen.width <= 1200){
         DropMenu(Menu, A1, A2, vh = 255);
      }
      else if( 800 < window.screen.width && window.screen.width <= 1000){
         DropMenu(Menu, A1, A2, vh = 215);
      }
      else if( 600 < window.screen.width && window.screen.width <= 800){
         DropMenu(Menu, A1, A2, vh = 215);
      }
      else if( window.screen.width <= 600){
         DropMenu(Menu, A1, A2, vh = 340);
      }
   }

   else if(Menu == "containerMenu3"){
      if( window.screen.width > 1000){
      DropMenu(Menu,  A1, A2, vh = 280);
      }
      else if( 800 < window.screen.width && window.screen.width <= 1000){
         DropMenu(Menu, A1, A2, vh = 215);
      }
      else if( 600 < window.screen.width && window.screen.width <= 800){
         DropMenu(Menu, A1, A2, vh = 205);
      }
      else if( window.screen.width <= 600){
         DropMenu(Menu, A1, A2, vh = 290);
      }
      
   }
   
   else if(Menu == "containerMenu4"){
      if( window.screen.width > 1000){
         DropMenu(Menu,  A1, A2, vh = 340);
      }
      else if(800 < window.screen.width && window.screen.width <= 1000){
      DropMenu(Menu, A1, A2, vh = 195);
      }
      else if(600 < window.screen.width && window.screen.width <= 800){
         DropMenu(Menu, A1, A2, vh = 245);
         }
      else if(window.screen.width <= 600){
         DropMenu(Menu, A1, A2, vh = 240);
      }
   }
   
   
}
