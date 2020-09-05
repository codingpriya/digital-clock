function showTime(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var session = document.getElementById("session");

    var date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    // let session = "AM";

    if(h > 12)
        h = h - 12;
        // let session = "PM";

    if(h == 0)
        h = 12;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    // session.innerHTML = session;

    setTimeout(showTime, 1000);
}

showTime();