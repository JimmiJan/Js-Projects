function bgColo(){
    let x = document.getElementById("section1") 
    var userColor = prompt("Enter Your Colour")
    x.style.backgroundColor = userColor
}

function textcol(){
 let x = document.getElementById("h1")
 let promp = prompt("Enter Text Colour")
 x.style.color = promp
}



function showImg(){
    var x = document.getElementById("myImg")
    x.style.display= "block"
}
function bigImg(){
    var x = document.getElementById("myImg")
    x.className = "bigImg"
}
function smaImg(){
    var x = document.getElementById("myImg")
    x.className = "smallImg"
}
function hideImg(){
    var x = document.getElementById("myImg")
    x.className = "hide"
    console.log("he;;o")
}


function bulbOn(e){
    e.src ="./bulb-on.jpg"
}
function bulbOf(e){
    e.src = "./bulb-off.jpg"
}


function textClr(){
    var paras = document.getElementById("section33")
    var para = paras.getElementsByTagName("p")
    for(var i=0; i < para.length ; i++){
        let pro = prompt("enter Para Colour")
        para[i].style.color = pro

    }
    console.log("err")
}