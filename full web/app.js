function reaaltime(){
    var timer = new Date()
    var hou = timer.getHours()
    var min = timer.getMinutes()

    var sec = timer.getSeconds()
    var day = timer.getDay
    console.log(hou,min,sec,day)

    var ampm = (hou < 12) ? "AM": "PM"

    hou = (hou > 12) ? hou-12 :hou

    hou = ("0" + hou).slice(-2)
     min = ("0" + min).slice(-2)
    sec = ("0" + sec).slice(-2)
    document.getElementById("timer").innerHTML = 
    hou + " : " + min + " : " + sec +" : " + ampm ;
    var t = setTimeout(reaaltime,500)
}
