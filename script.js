//your JS code here. If required.
const progress=document.getElementById('progress-bar');
const next=document.getElementById('n-btn');
const previous=document.getElementById('p-btn');
const circle=document.querySelectorAll('.circle');
let currentactive = 1;

next.addEventListener('click',()=>{
    currentactive++;

    if(currentactive > circle.length){
        currentactive = circle.length;
    }
    update();
});

previous.addEventListener('click',()=>{
    currentactive--;

    if(currentactive<1){
        currentactive = 1;
    }
    update();
});
 
function update(){
circle.forEach((circle,index) => {
    if(index<currentactive){
        circle.classList.add('active');
    }
    else{
        circle.classList.remove('active')
    }
});

const active=document.querySelectorAll('.active');

progress.style.width=(active.length-1)/(circle.length-1)*100+'%';


 if(currentactive === 1){
   previous.disabled =true;
 }
 else{
    previous.disabled=false;
 }


 if(currentactive === circle.length){
    next.disabled=true
 }
 else{
    next.disabled=false;
 }
}