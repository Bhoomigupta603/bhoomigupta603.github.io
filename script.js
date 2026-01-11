const text=["AI Engineer","Deep Learning Developer","NLP Specialist","Computer Vision Builder"];
let i=0,j=0,del=false;

function type(){
let t=text[i];
document.getElementById("typing").innerHTML=del?t.substring(0,j--):t.substring(0,j++);

if(!del && j===t.length)del=true;
if(del && j===0){del=false;i=(i+1)%text.length;}

setTimeout(type,150);
}
type();
