function dateTime(){

    var date = new Date()
    console.log(date)
    
    
    
    var hour = date.getHours()
    var mint = date.getMinutes()
    var sec = date.getSeconds()
    var mili = date.getMilliseconds()
    // var dda = data.dateTime()
    
    
    

    var ampm = (hour < 12) ? "AM" : "PM" 

    hour =(hour > 12) ? hour-12 : hour

    document.getElementById("timer").innerHTML = hour + " : " + mint + " : " + sec +" : " + mili +" : " + ampm 

    console.log(hour, mint , sec, mili, ampm )


}
setInterval(dateTime,500)


function myFunction(){
    var x = document.getElementById("myDiv")

    if(x.className === "mydive"){
        x.style.display = "block"
        x.style.textAlign = "center"
    } else {
        x.style.display = "none ";
      }
}