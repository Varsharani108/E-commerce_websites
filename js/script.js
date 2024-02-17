let navbar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})
let dayitem=document.querySelector("#days");
let houritem=document.querySelector("#hours");
let minitem=document.querySelector("#min");
let secitem=document.querySelector("#sec");

let countdown = () => {
    let futuredate =new Date("30 July 2024");
    let curruntDate=new Date();
    let mydate=futuredate-curruntDate;

    let days=Math.floor(mydate/1000/60/60/24);
    let hours=Math.floor(mydate/1000/60/60)%24;
    let min=Math.floor(mydate/1000/60)%60;
    let sec=Math.floor(mydate/1000)%60;

    dayitem.innerHTML=days;
    houritem.innerHTML=hours;
    minitem.innerHTML=min;
    secitem.innerHTML=sec;

}
countdown()

setInterval(countdown, 1000);

//scroll back to top//
function scrollTopBack(){
    let scrollTopButton=document.querySelector("#scrollup");
    window.onscroll=function(){
        var scroll=document.documentElement.scrollTop;
        if(scroll >=250){
            scrollTopButton.classList.add('scrollActive');
        }
        else{
            scrollTopButton.classList.remove('scrollActive');
        }
    }
}
scrollTopBack();