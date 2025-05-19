import Teninimg from "./menu_tenin_yobu.png";
import {addHome} from "./home.js";
import {addMenu} from "./menu.js";
export {contentDiv,};

const contentDiv = document.querySelector('div#content');

//append image
const myImg = new Image();
myImg.src = Teninimg;

contentDiv.appendChild(myImg);

//append p
const myP = document.createElement('p');
myP.textContent = 'this is a restaurant project. I will be adding restaurant stuff here.';

contentDiv.appendChild(myP);

//append Home tab button
const homeBtn = document.querySelector('button.home');
homeBtn.addEventListener('click',(e)=>{
    hideTabs();
    addHome(contentDiv);
})

//append Menu tab button
const menuBtn = document.querySelector('button.menu');
menuBtn.setAttribute("type", "button");

menuBtn.addEventListener('click',(e)=>{
    hideTabs();
    addMenu(contentDiv);
})


//utility methods
 //hide all tabs
    function hideTabs(){
        const tabs = contentDiv.querySelectorAll('div.tab');
        tabs.forEach((tab, index)=>{
            tab.setAttribute("hidden", "");
        });
    };