var durasi = 120; 
var sec = 0;
var timerObject;

var examLength = 120, examTime;

let progress = document.getElementById("progressBar");


function pewaktu() {  
	
    if(sec == 0){
        if(examLength > 0){
            examLength--;
            sec = 59;
            progress.style.width = progressWidth + "%";
        }
        else{
            progress.style.width = "0%";
            submitExam();
        }
    }
    else{
        sec--;
    }
	
    var hour = Math.floor(examLength / 60);
    var min = examLength % 60;
    document.getElementById("timerSpan").innerHTML = "Sisa Waktu = 0" + hour.toString() + " : " + min.toString() + " : " + sec.toString();


let progressWidth = examLength / examTime * 100;
    if (progressWidth > 66) {
        progress.style.backgroundColor = "#22baa0";
    }
    else if (progressWidth <= 66 && progressWidth > 33) {
        progress.style.backgroundColor = "#f6d433";
    }
    else if (progressWidth <= 33 && progressWidth > 0) {
        progress.style.backgroundColor = "#f25656";
    }
    else {
        progress.style.backgroundColor = "#22baa0";
    }

}

function startTimer() {
    timerInterval = setInterval(function() {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      document.getElementById("time").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      timeRemaining--;

      if (timeRemaining < 0) {
        clearInterval(timerInterval);
        alert("Waktu ujian telah habis!");
        submitExam();
      }
    }, 1000);
  }