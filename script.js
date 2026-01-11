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

function sendImage(){
    const file = document.getElementById("imgInput").files[0];
    if(!file){
        alert("Please select an image");
        return;
    }

    const form = new FormData();
    form.append("image", file);

    fetch("http://127.0.0.1:5000/caption", {
        method: "POST",
        body: form
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("captionResult").innerText = data.caption;
    })
    .catch(err => {
        document.getElementById("captionResult").innerText = "Server not running";
    });
}
