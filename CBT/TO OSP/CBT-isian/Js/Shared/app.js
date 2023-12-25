//This is an example of a json data
//NB: The questions are supposed to be served from an api not added in the javascript
var exam = {
    "duration": 90,
    "instruction": "Isilah dengan mengetikkan jawaban Anda sesuai dengan petunjuk soal pada kotak yang tersedia."
}

//const durasi = 5400; //90 menit * 60
const jumlahSoal = 5;
var sec = 0, x = 1, hps = 1, detik;
var timerObject;

//var question = document.getElementsByClassName("question");
var questionsButton = document.getElementById("questionsButton");

var examLength, examTime;

let progress = document.getElementById("progressBar");


function showCbt(){
    document.getElementById("link-modal").style.display = "none";
    document.querySelector(".navbar").style.backgroundColor="#fff";
    questionsButton.innerHTML = "";
	//document.getElementById("hapus").disabled = true;

    for(var i = 1; i <= jumlahSoal; i++){
        questionsButton.innerHTML += '<button class="qbtn" onclick="return showQuestion('+i.toString()+')">'+(i).toString()+'</button>';
    }
    showQuestion(1);
    x = 1;
    hps = 1;
	
	examLength = exam.duration; //Exam length in minutes
    examTime = exam.duration;
	detik = exam.duration * 60;
    timerObject = setInterval(runTimer, 999);
}

var buttonState = 0;
/*function showNumber() {
    buttonState = 1 - buttonState;
    
    if (buttonState) {
        document.getElementById("menu").style.backgroundColor = "gainsboro";
        document.getElementById("questionsButton").style.display = "block";
        
    }
    else {
        document.getElementById("menu").style.backgroundColor = "white";
        document.getElementById("questionsButton").style.display = "none";
    }
}*/


function sebelum() {
    x--;
    if (x <= 1) {x = 1;}
    else {x = x;}
    showQuestion(x);
    window.scroll({ top: 470, left: 0, behavior: 'smooth'});
}
function setelah() {
    x++;
    if(x >= 5) {x = 5;}
    else {x = x;}
    showQuestion(x);
    window.scroll({ top: 470, left: 0, behavior: 'smooth'});
}


function runTimer() {  
	let progressWidth = detik / (examTime * 60) * 100;	
	//let progressWidth = (examLength / examTime) * 100;
	progress.style.width = progressWidth + "%";
	detik--;
	
    if (progressWidth > 66) {
        progress.style.backgroundColor = "#22baa0";
    }
    else if (progressWidth <= 66 && progressWidth > 33) {
        progress.style.backgroundColor = "#f6d433";
    }
    else if (progressWidth <= 33 && progressWidth > 0) {
        progress.style.backgroundColor = "#f25656";
    }
	
    if(sec == 0){
        if(examLength > 0){
            examLength--;
            sec = 59;
            //progress.style.width = progressWidth + "%";
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
	
	if(sec <= 9 && min > 9) {
		document.getElementById("timerSpan").innerHTML = "Sisa Waktu = 0" + hour.toString() + " : " + min.toString() + " : 0" + sec.toString();
	}
	else if(min <= 9 && sec > 9) {
		document.getElementById("timerSpan").innerHTML = "Sisa Waktu = 0" + hour.toString() + " : 0" + min.toString() + " : " + sec.toString();
	}
	else if(min <= 9 && sec <= 9) {
		document.getElementById("timerSpan").innerHTML = "Sisa Waktu = 0" + hour.toString() + " : 0" + min.toString() + " : 0" + sec.toString();
	}
	else {
		document.getElementById("timerSpan").innerHTML = "Sisa Waktu = 0" + hour.toString() + " : " + min.toString() + " : " + sec.toString();
	}
	
}



function showQuestion(questionNumber){
    x = questionNumber;
    hps = x;
	
	const questionButton = document.querySelectorAll("#questionsButton > button");
    
    for (let i = 1; i <= jumlahSoal; i++) {
      var question = document.getElementById(`question${i}`);
      question.style.display = i === questionNumber ? "block" : "none";
	  questionButton[i - 1].classList.remove("currentQuestion");
	
    }
 
	questionButton[x - 1].classList.add("currentQuestion");
	  
	for(let i = 1; i <= questionButton.length; i++){
        //questionButton[i].classList.remove("currentQuestion");
		//questionButton[i].style.backgroundColor = "none";
    }

   
   
}


/*
function hapus() {
    var questionOptions = document.querySelectorAll("#optionDiv > input");
    //var ele = document.querySelectorAll("input[type=radio]")[hps];
    

    /*for(var k = 0; k < exam.questions[hps].options.length; k++){
        answers[k] = -1;
        selectAnswer(hps, answers[k]);
    }*
    answers[x] = -1;
    document.querySelectorAll("#questionsButton > button")[x].classList.remove("greenHightlight");
}*/


var yakinState, raguState;
yakinState = 0, raguState = 0;
function ragu() {
    raguState = 1;
        //document.querySelectorAll("#questionsButton > button")[x - 1].classList.remove("greenHightlight");
        document.querySelectorAll("#questionsButton > button")[x - 1].classList.add("orangeHightlight");
}

function yakin() {
    raguState = 0;
        document.querySelectorAll("#questionsButton > button")[x - 1].classList.add("currentQuestion");
        
        document.querySelectorAll("#questionsButton > button")[x - 1].classList.remove("orangeHightlight");
        //document.querySelectorAll("#questionsButton > button")[x - 1].classList.add("greenHightlight");
        yakinState = 0;
}

var modal = document.querySelector(".modal");

function showInstruction(){
    document.querySelector("#instructions").innerHTML = exam.instruction;
    document.getElementById("questionsButton").style.display = "none";
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
	buttonState = 0;
	document.getElementById("menu").style.backgroundColor = "white";
}

function promptUser(){
    var instructionPar = document.querySelector("#instructions");
    if (raguState != 0) {
        instructionPar.innerHTML = `<p>Anda masih memiliki jawaban yang ragu-ragu</p>
									<br><p class='kembali-btn'><button onclick='closeModal()'>Kembali</button></p>`;
		document.getElementById("questionsButton").style.display = "none";

    } else if (raguState == 0) {
        instructionPar.innerHTML = "<p>Apakah Anda yakin ingin mengakhiri ujian?</p>";
        instructionPar.innerHTML += "<div class='btn'><button type='button' class='Tdk-btn' onclick='closeModal()'>Tidak</button> <button type='button' class='Ya-btn' onclick='submitExam()'>Ya</button> </div>";
		document.getElementById("questionsButton").style.display = "none";
    }
    //instructionPar.innerHTML += "<p class='btn'> <button style='background-color:red; button:hover{background:transparent; border: 2px solid red; color: red;' onclick='closeModal()'>Tidak</button>  <button class='Ya-btn' onclick='submitExam()'>Ya</button></p>"

    modal.style.display = "block";
}

function daftar(){
    var instructionPar = document.querySelector("#instructions");
        instructionPar.innerHTML = `<h3 style="color: #3C91E6; fontWeight: 700">Daftar Konstanta Astronomi</h3>`;
        //instructionPar.innerHTML += `<object data="CBT/tabel/Tabel-OSN-Astronomi.pdf" frameborder="0" width="100%" height="700px"> </object>`;
		instructionPar.innerHTML += `<img src="CBT/tabel/Tabel-OSN-Astronomi1.png" width="100%"/>
									 <img src="CBT/tabel/Tabel-OSN-Astronomi2.png" width="100%"/>`;
		
		document.getElementById("questionsButton").style.display = "none";
 
    modal.style.display = "block";
}

function showNumber(){
	buttonState = 1 - buttonState;
	
	if (buttonState) {
		var instructionPar = document.querySelector("#instructions");
        instructionPar.innerHTML = `<h3 style="color: #3C91E6; fontWeight: 700">Daftar Menu Nomor Soal</h3>`;
        document.getElementById("menu").style.backgroundColor = "gainsboro";
        document.getElementById("questionsButton").style.display = "block";
        
    }
    else {
        document.getElementById("menu").style.backgroundColor = "white";
        document.getElementById("questionsButton").style.display = "none";
    }
	
    
        //instructionPar.innerHTML += `<embed src="CBT/tabel/Tabel-OSN-Astronomi.pdf" frameborder="0" width="100%" height="700px" />`;
 
    modal.style.display = "block";
}



function submitExam(){
    clearInterval(timerObject);
    modal.style.display = "none";
    cekJawaban();
	
	document.querySelector(".daftar").style.display = "none";
    document.querySelector(".pSubmit").style.display = "none";
    document.querySelector(".content > div:last-child > div").innerHTML = "Anda telah selesai mengerjakan";
    document.querySelector(".content > div:last-child > div").innerHTML += "<br></br> <a class='home' href='tes.html' id='kembali' style='text-decoration: none'>Kembali</a> <br>"
    //document.querySelector(".total").innerHTML = "Total Skor: " + score.toString();
}

function cekJawaban() {
	//NOMOR 1
    var jawaban1A = document.getElementById("answer1A").value.split(' ').join('').replace(',', '.').toUpperCase();
    var jawaban1B = document.getElementById("answer1B").value.split(' ').join('').replace(',', '.').toUpperCase();
	var jawaban1C = document.getElementById("answer1C").value.split(' ').join('').replace(',', '.').toUpperCase();
	//NOMOR 2
	var jawaban2A = document.getElementById("answer2A").value.split(' ').join('').replace(',', '.').toUpperCase();
	var jawaban2B = document.getElementById("answer2B").value.split(' ').join('').replace(',', '.').toUpperCase();
	var jawaban2C = document.getElementById("answer2C").value.split(' ').join('').replace(',', '.').toUpperCase();
	var jawaban2D = document.getElementById("answer2D").value.split(' ').join('').replace(',', '.').toUpperCase();
	//NOMOR 3
	var jawaban3A = document.getElementById("answer3A").value.split(' ').join('').replace(',', '.').toUpperCase();
    var jawaban3B = document.getElementById("answer3B").value.split(' ').join('').replace(',', '.').toUpperCase();
	//NOMOR 4
	var jawaban4A = document.getElementById("answer4A").value.split(' ').join('').replace(',', '.').toUpperCase();
	var jawaban4B = document.getElementById("answer4B").value.split(' ').join('').replace(',', '.').toUpperCase();
	var jawaban4C = document.getElementById("answer4C").value.split(' ').join('').replace(',', '.').toUpperCase();
	var jawaban4D = document.getElementById("answer4D").value.split(' ').join('').replace(',', '.').toUpperCase();
	//NOMOR 5
	var jawaban5 = document.getElementById("answer5").value.split(' ').join('').replace(',', '.').toUpperCase();

    let score = 0;
	//NOMOR 1
    if(jawaban1A === "3.36") {
      score += 5;
    }
    if(jawaban1B >= 5299 && jawaban1B <= 5300) {
      score += 5;
    }
    if(jawaban1C >= 12700 && jawaban1C <= 12701 || jawaban1C >= 1.27E4 && jawaban1C <= 1.2701E4) {
      score += 5;
    }
	
	//NOMOR 2
	if(jawaban2A >= 2.36E11 && jawaban2A <= 2.38E11) {
      score += 5;
    }
	if(jawaban2B >= 1.46E-15 && jawaban2B <= 1.48E-15) {
      score += 5;
    }
	if(jawaban2C >= 133.570 && jawaban2C <= 133.575) {
      score += 5;
    }
	if(jawaban2D === "2") {
      score += 5;
    }
	
	//NOMOR 3
	if(jawaban3A >= 22785 && jawaban3A <= 22792) {
      score += 5;
    }
	if(jawaban3B >= 74580 && jawaban3B <= 74587) {
      score += 5;
    }
	
	//NOMOR 4
	if(jawaban4A >= 1,27E-2 && jawaban4A <= 1.56E-2) {
      score += 5;
    }
	if(jawaban4B >= 2.54E-2 && jawaban4B <= 3.12E-2) {
      score += 5;
    }
	if(jawaban4C >= 0.646 && jawaban4C <= 0.789) {
      score += 5;
    }
	if(jawaban4D >= 0.323 && jawaban4D <= 0.395) {
      score += 5;
    }
	
	//NOMOR 5
	if(jawaban5 >= -7.30 && jawaban5 <= -7.25) {
      score += 5;
    }
	
	var nilai = score + JSON.parse(sessionStorage.getItem("nilai"));
	document.querySelector(".total").innerHTML = "Skor Isian : " + score.toString();
	document.querySelector(".nilai").innerHTML = "Total Skor : " + nilai.toString();
}