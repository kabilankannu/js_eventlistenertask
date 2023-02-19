// let al=document.querySelectorAll("h1");
// console.log(al);

// al[1].setAttribute("id","one");//al[1].id="one"
// al[2].class="hello";
// console.log(al);
// al[2].classList.add("title","header-title");

//   al[1].textContent="not second";

//   al.forEach((a,i)=>{
//     a.fontSize='24px';
//     if(i%2===0){
//         a.style.color="cyan";
//     }
//     else{
//         a.style.color="blue";
//     }
//   })



// var aa=document.createElement("h1");

// let title;
// for(let i=0;i<3;i++){
//     title=document.createElement("h1");
//     title.className="test";
//     title.style.fontSize="30px";
//     document.body.appendChild(title);
// }
// console.log(title);

// const al=document.createElement("div");
// document.body.appendChild(al);
// for(let i=0;i<100;i++){
//     const num=document.createElement("div");
//     num.textContent=i;
//     num.style.fontSize="50px";
//     if (i%2==0){
//     num.style.backgroundColor="lightgreen";
//     }
//     else{
//         num.style.backgroundColor="lightblue";
//     } 
//     console.log(num);
//     al.appendChild(num);
// }

// const buttn=document.querySelector("button");
// buttn.addEventListener("click",e=>{
//     console.log(e.target);
// })

   
//     var letters = "0123456789ABCDEF";
//     function generate(){
//         var color = '#';
//     for (var i = 0; i < 6; i++)
//     color += letters[(Math.floor(Math.random() * 16))];
//     return color;
//     }
    
// document.getElementById("demo").addEventListener("mouseover",mouseOver);
// document.getElementById("demo").addEventListener("mouseout",mouseOut);
// function mouseOver(){
//  document.getElementById("demo").style.color=generate();
// }
// function mouseOut(){
//     document.getElementById("demo").style.color=generate();
//    }


// document.getElementById("demo").addEventListener("mousOver",mouseOver);
// document.getElementById("demo").addEventListener("mouseout",mouseOut)
// function mouseOver(){
//  document.getElementById("demo").setAttribute("src","kun-removebg-preview.png");
// }
// function mouseOut(){
//     document.getElementById("demo").setAttribute("src","fu-removebg-preview.png");
//    }

document.getElementById("demo").addEventListener("mouseover",clickme);
document.getElementById("demo").addEventListener("mouseout",clickme);
document.getElementById("dem").addEventListener("click",clickme1);


let temp=0;
function clickme()
{
   // let num= Math.floor(Math.random()*3);
   if (temp ==2){
    document.getElementById("demo").setAttribute("src","pngegg.png");
    temp=0;
   }
   else if (temp ==1){
    document.getElementById("demo").setAttribute("src","kun-removebg-preview.png");
    temp++;
   }
   else{
    document.getElementById("demo").setAttribute("src","fu-removebg-preview.png");
    temp++;
   }

}
function clickme1()
{
   document.getElementById("dem").setAttribute("width","600px");
}
