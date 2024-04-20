let count=0;
let btn1=document.querySelector(".kam");
let btn2=document.querySelector(".jayda");
let btn3=document.querySelector(".clear");
let ct=document.querySelector(".ct");
let msg=document.querySelector(".msg");




btn1.addEventListener("click", subtract);

function add(){
    count++;
    msg.innerHTML=""
    ct.innerHTML=count;
}

btn2.addEventListener("click",add);

function subtract(){
    if(count===0){
    msg.innerHTML="<p>Error : Cannot go below 0</p>"
    }else{
        count--;
        ct.innerHTML=count;
    }
}

btn3.addEventListener("click" , clear);

function clear(){
    
    count=0;
    ct.innerHTML=count;
    
    

}