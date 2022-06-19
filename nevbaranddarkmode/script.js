
// User count 
const userCounter=document.querySelectorAll(".project-complete-counter");
const obj = document.querySelector(".project-counter");

const workObserver = new IntersectionObserver((entries, observe)=>{
    const firstEnt = entries[0];
    if(!firstEnt.isIntersecting)
    {
        return;
    }
    userCounter.forEach((element)=>{
        element.innerText=0;
    
        const counter=()=>{
            const maxValue=+element.getAttribute("data-target");
            let startVal=Number(element.innerText);
            let incVal=Number(maxValue/40);
    
            if(startVal<maxValue){
                startVal=startVal+incVal;
                element.innerText=Math.ceil(startVal);
                setTimeout(counter,30);
            }
        }
        counter();
    });
    observe.unobserve(obj);
}, {
    root:null,
    threshold:0,
});
workObserver.observe(obj);



//Up page scroll 
const scrollTop=document.querySelector(".scroll-to-top");

scrollTop.addEventListener("click",()=>{
   const scr = document.querySelector(".introduction");
//    scr.scrollIntoView({behavior:"smooth"});
    scr.scrollIntoView({behavior:"smooth"})
});




//Responsive nevbar

const ham = document.querySelector(".hamburger");
ham.addEventListener("click",()=>{
    document.querySelector(".top-part").classList.toggle("activated");
});



//Dark mode
let darkValue = localStorage.getItem("mode");
const dark = document.querySelector(".bg");
const d=document.getElementById("moon");
function addDarkmode(){
    document.body.classList.add("dark-body");
    d.className="fa-solid fa-sun";
    d.style.color="white";
    localStorage.setItem("mode","dark");
}

function removeDarkMode(){
    document.body.classList.remove("dark-body");
    d.className="fa-solid fa-moon";
    d.style.color="black";
    localStorage.setItem("mode",null);
}

if(darkValue=="dark"){
    addDarkmode();
}
dark.addEventListener("click", ()=>{
    darkValue = localStorage.getItem("mode");
    if(darkValue!="dark")
    {
        addDarkmode();
    }
    else{
        removeDarkMode(); 
    }
});