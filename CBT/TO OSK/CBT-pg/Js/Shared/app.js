//This is an example of a json data
//NB: The questions are supposed to be served from an api not added in the javascript
var exam = {
    "duration": 90,
    "instruction": "Jawablah dengan menekan tombol opsi jawaban yang tersedia.<br><br>Untuk pengguna kompute/laptop sendiri dappat menekan tombol A, B, C, D, atau E ppada keyboard untuk menjawab.",
    "questions":[
        {
            "question": 'Suatu benda logam dipanaskan hingga memiliki suhu 1000°C. Berapakah panjang gelombang maksimum yang dipancarkan oleh logam tersebut? <br><br>Konstanta Wien = 2,9 × 10<sup>-3</sup> m K',
            "options": ["2278 nm", "2900 nm", "2112 nm", "227,8 nm", "290 nm"],
            "answerPosition": 0
        },
        {
            "question": "Hari tanpa bayangan merupakan suatu fenomena dimana matahari tepat di atas kepala/zenith. Pilihlah salah satu pernyataan berikut yang benar!",
            "options":["Indonesia mengalaminya 2 kali dalam setahun", "Dapat dialami Di Kutub Bumi", "Tidak dapat digunakan sebagai penunjuk arah", "Hari tanpa bayangan dapat terjadi setiap hari", "Tidak Tahu"],
            "answerPosition": 0
        },
        {
            "question": "Suatu bintang teramati memiliki paralaks sebesar 80 mas (mas : milli arcsecond/milidetik busur), berapakah jarak bintang tersebut dari Matahari?",
            "options": ["0,0125 pc", "0,125 pc", "1,25 pc", "12,5 pc", "125 pc"],
            "answerPosition": 3
        },
        {
            "question": "Berapakah perbandingan Luminositas yang dihasilkan oleh suatu bintang terhadap matahari, dengan radius bintang = 5 kali radius matahari, serta temperatur 7 kali temperatur efektif matahari.",
            "options": ["35", "175", "1225", "10025", "60025"],
            "answerPosition": 4
        },
        {
           "question": `Sebuah benda memiliki berat 50N jika berada di Bumi, berapakah berat benda tersebut jika berada di Jupiter?
							<br>
							<br>Massa Bumi = 5,97 × 10<sup>24</sup> kg
							<br>Radius Bumi  = 6,378 × 10<sup>6</sup> m
							<br>Massa Jupiter = 1,898 × 10<sup>28</sup> kg
							<br>Radius Jupiter = 6,99 × 10<sup>7</sup> m
							<br>Konstanta Gravitasi = 6,673 × 10<sup>-11</sup> N kg<sup>-2</sup> m<sup>2</sup>`,
            "options": ["50 N", "100 N", "132 N", "152 N", "173 N"],
            "answerPosition": 2
        },
        {
            "question": `Diberikan beberapa data dan konstanta astronomi sebagai berikut :
								<br>1) Radius matahari = 6,96 × 10<sup>8</sup> meter
								<br>2) Temperatur matahari = 5785 K
								<br>3) Konstanta Stefan-Boltzman = 5,67 × 10<sup>-8</sup> J s<sup>-1</sup> m<sup>-2</sup> K<sup>-4</sup>
								<br>
								<br>Tentukan luminositas matahari (energi yang dipancarkan matahari tiap satuan waktu) `,
            "options": ["5,55 × 10<sup>17</sup> J/s", "1,15 × 10<sup>19</sup> J/s", "1,29 × 10<sup>26</sup> J/s", "3,86 × 10<sup>26</sup> J/s", "9,66 × 10<sup>25</sup> J/s"],
            "answerPosition":3
        },
        {
            "question": "Sebuah bintang di pusat galaksi (d ≈ 8,5kpc) memiliki m = 13 mag dan M = -4 mag. Berapakah ekstingsi yang terdapat selama perjalanan cahaya tersebut?",
            "options": ["3,5", "2,5", "1,5", "2", "17,3"],
            "answerPosition": 1
        },
        {
            "question": "Planet Jupiter merupakan planet gas di sistem Tata Surya kita. Jupiter memiliki massa sebesar 1,898 × 10<sup>27</sup> kg, radius sebesar 6,99 × 10<sup>7</sup> m. Berapakah kecepatan minimum agar sebuah benda dapat lepas dari gravitasi Jupiter?",
            "options": ["42,6 km/s", "52,6 km/s", "60,2 km/s", "70,2 km/s", "Tidak dapat dihitung"],
            "answerPosition": 2
        },
        {
            "question": 'Suatu komet yang mengorbit matahari, memiliki periode orbit selama 16 tahun dan eksentrisitas sebesar 0,7. Berapakah jarak terdekat dari orbit komet tersebut?',
            "options": ["1,9 sa", "4,44 sa", "4,8 sa", "6,35 sa", "11,2 sa"],
            "answerPosition": 3
        },
        {
            "question": "Suatu bintang yang berjarak 64pc, bergerak menjauhi Bumi dengan kecepatan radial 37km/s. Apabila kecepatan ruang bintang tersebut adalah 43km/s, berapa besar gerak diri bintang tersebut?",
            "options": ['0,072"', '0,075"', '0,078"', '0,080"', '0,085"'],
            "answerPosition": 0
        },
        {
            "question": "Terdapat sebuah sistem bintang ganda, di mana kedua bintang tersebut berjarak 0,25 SA. Sistem bintang ganda tersebut berjarak sekitar 7,5 pc dari Bumi. Jika kita memiliki sebuah teleskop dengan diameter 2 meter, berapakah sudut resolusi dari teleskop tersebut dan apakah kedua bintang tersebut dapat dilihat secara terpisah?",
            "options": ['0,0333" dan tidak terpisah', '0,0333" dan terpisah', '0,0692" dan tidak terpisah', '0,0692" dan terpisah', '0,1260" dan terpisah'],
            "answerPosition": 2
        },
        {
            "question": "Sebuah bintang memiliki massa dan radius yang sama besarnya dengan matahari. Bintang tersebut kemudian runtuh menjadi bintang dengan radius 17 km, namun dengan massa yang tetap. Berapakah perbandingan antara periode rotasi bintang tersebut sebelum dan sesudah runtuh?",
            "options": ["1,6762 × 10<sup>9</sup>", "4,094 × 10<sup>4</sup>", "5,966 10<sup>-10</sup>", "2,442 × 10<sup>-5</sup>", "1 (tetap)"],
            "answerPosition": 0
        },
        {
            "question": "Berapakah perbandingan diameter sudut bulan purnama saat <i>perigee</i> dan <i>aphogee</i>?",
            "options": ["0,8", "0,9", "1", "1,1", "1,22"],
            "answerPosition": 1
        },
        {
            "question": "Suatu asteroid menghantam permukaan Bumi, apabila asteroid tersebut memiliki massa sekitar 1 kwintal, radius 26 meter, dan kecepatan 57 km/s. Berapakah energi kinetik dari asteroid tersebut?",
            "options": ["285000 J", "3249000 J", "1624500 J", "324900 J", "162450 J"],
            "answerPosition": 4
        },
        {
            "question": "Suatu ayunan bandul yang berada di Bumi, memiliki periode sebesar 4 detik. Berapakah periode ayunan bandul tersebut jika berada di planet Mars?",
            "options": ["5,5 detik", "6 detik", "6,5 detik", "7 detik", "7,5 detik"],
            "answerPosition": 2
        }
    ]
}

var sec = 0, detik, x, hps;
var timerObject;

var questionDiv = document.getElementById("questionDiv");
var optionDiv = document.getElementById("optionDiv");
var questionsButton = document.getElementById("questionsButton");

var answers = [];
var examLength, examTime;

let progress = document.getElementById("progressBar");

function showCbt(){
    document.getElementById("link-modal").style.display = "none";
    document.querySelector(".navbar").style.backgroundColor="#fff";
    questionsButton.innerHTML = "";
    examLength = exam.duration; //Exam length in minutes
    examTime = exam.duration;
    for(var i = 0; i < exam.questions.length; i++){
        questionsButton.innerHTML += '<button class="qbtn" id="NoSoal" onclick="return showQuestion('+i.toString()+')">'+(i + 1).toString()+'</button>';
        answers[i] = -1;
    }
    showQuestion(0);
    x = 0;
    hps = 0;
	detik = exam.duration * 60;
    timerObject = setInterval(runTimer, 999);
}

var buttonState = 0;
function showNumber() {
    buttonState = 1 - buttonState;
    
    if (buttonState) {
        document.getElementById("menu").style.backgroundColor = "gainsboro"
        document.getElementById("questionsButton").style.display = "block";
        
    }
    else {
        document.getElementById("menu").style.backgroundColor = "white"
        document.getElementById("questionsButton").style.display = "none";
    }
}

function sebelum() {
    x--;
    if (x < 0) {x = 0;}
    else {x = x;}
    showQuestion(x);
	window.scroll({ top: 470, left: 0, behavior: 'smooth'});
}
function setelah() {
    x++;
    if(x > 14) {x = 14;}
    else {x = x;}
    showQuestion(x);
	window.scroll({ top: 470, left: 0, behavior: 'smooth'});
}

function runTimer(){  
	detik--;
	
	let progressWidth = detik / (examTime * 60) * 100;
    //let progressWidth = examLength / examTime * 100;
	progress.style.width = progressWidth + "%";

	
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
    //questionDiv.innerHTML = exam.questions[questionNumber].question;
	questionDiv.innerHTML = '<b>Soal Nomor '+ (questionNumber + 1).toString() +'.</b><br><br>'+ exam.questions[questionNumber].question ;
	
    optionDiv.innerHTML = "";
    x = questionNumber;
    hps = x;
	
     for(var i = 0; i < exam.questions[questionNumber].options.length; i++){
        //optionDiv.innerHTML += '<br><input type="radio" id="opsi" onclick="selectAnswer('+questionNumber+','+ i.toString()+')" name="questionOptions"/>' + exam.questions[questionNumber].options[i].toString() + '<br>';
		
		
		optionDiv.innerHTML += '<input type="radio" id="opsi'+i.toString()+'" onclick="selectAnswer('+questionNumber+','+i.toString()+')" name="questionOptions"/><label for="opsi'+i.toString()+'" class="opsi'+i.toString()+'"><div class="dot" id="abj'+i.toString()+'"></div> <span class="teks">' + exam.questions[questionNumber].options[i].toString() + '</span> </label>';
	 
	 }
    
	/*document.getElementById("abj0").innerHTML = "A";
	document.getElementById("abj1").innerHTML = "B";
	document.getElementById("abj2").innerHTML = "C";
	document.getElementById("abj3").innerHTML = "D";
	document.getElementById("abj4").innerHTML = "E";*/
    
    
    const questionButton = document.querySelectorAll("#questionsButton > button");
    for(let i = 0; i < questionButton.length; i++){
        questionButton[i].classList.remove("currentQuestion");
    }
    
    questionButton[questionNumber].classList.add("currentQuestion");

        
    //Select option state tracking algorithm
    if(answers[questionNumber] != -1){
        var questionOptions = document.querySelectorAll("#optionDiv > input");
        questionOptions[answers[questionNumber]].checked = true;
    }
    
}

document.addEventListener("keydown", function (e) {
	//Memilih jawaban dengan keyboard
	if (e.key === "A" || e.key === "a") {
		document.getElementById("opsi0").checked = "true";
		selectAnswer(x, 0);
	}
	else if (e.key === "B" || e.key === "b") {
		document.getElementById("opsi1").checked = "true";
		selectAnswer(x, 1);
	}
	else if (e.key === "C" || e.key === "c") {
		document.getElementById("opsi2").checked = "true";
		selectAnswer(x, 2);
	}
	else if (e.key === "D" || e.key === "d") {
		document.getElementById("opsi3").checked = "true";
		selectAnswer(x, 3);
	}
	else if (e.key === "E" || e.key === "e") {
		document.getElementById("opsi4").checked = "true";
		selectAnswer(x, 4);
	}
});

function hapus() {
    var questionOptions = document.querySelectorAll("#optionDiv > input");
    //var ele = document.querySelectorAll("input[type=radio]")[hps];
    
    questionOptions[answers[hps]].checked = false;

    //for(var k = 0; k < exam.questions[hps].options.length; k++){
        //answers[k] = -1;
        selectAnswer(hps, -1);
    //}
    answers[x] = -1;
    document.querySelectorAll("#questionsButton > button")[x].classList.remove("greenHightlight");
}

function selectAnswer(questionNumber,optionNumber){
    raguState = 0;
    answers[questionNumber] = optionNumber;
    document.querySelectorAll("#questionsButton > button")[x].classList.remove("orangeHightlight");
    document.querySelectorAll("#questionsButton > button")[questionNumber].classList.add("greenHightlight");
    //document.querySelectorAll("#questionsButton > button")[questionNumber].className += " greenHightlight";
    answers[questionNumber] = optionNumber;
}

var yakinState, raguState;
yakinState = 0, raguState = 0;
function ragu() {
    raguState = 1;
    if (answers[x] != -1) {
        document.querySelectorAll("#questionsButton > button")[x].classList.remove("greenHightlight");
        document.querySelectorAll("#questionsButton > button")[x].classList.add("orangeHightlight");
        yakinState = 1;
    }
    return yakinState;
}

function yakin() {
    raguState = 0;
    if (answers[x] != -1) {
    //if (answers[x] != -1 && yakinState != 0) {
        document.querySelectorAll("#questionsButton > button")[x].classList.add("currentQuestion");
        
        document.querySelectorAll("#questionsButton > button")[x].classList.remove("orangeHightlight");
        document.querySelectorAll("#questionsButton > button")[x].classList.add("greenHightlight");
        yakinState = 0;
    }
    return yakinState;
}

var modal = document.querySelector(".modal");

function showInstruction(){
    document.querySelector("#instructions").innerHTML = exam.instruction;
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

function closeModal(){
    modal.style.display = "none";
}

function promptUser(){
    var instructionPar = document.querySelector("#instructions");
    if (raguState != 0) {
        instructionPar.innerHTML = "<p>Anda masih memiliki jawaban yang ragu-ragu</p>";
        instructionPar.innerHTML += "<p class='kembali-btn'><button onclick='closeModal()'>Kembali</button></p>"

    } else if (raguState == 0) {
        instructionPar.innerHTML = "<p>Apakah Anda yakin ingin mengakhiri ujian?</p>";
        instructionPar.innerHTML += "<div class='btn'> <button type='button' class='Tdk-btn' onclick='closeModal()'>Tidak</button> <button type='button' class='Ya-btn' onclick='submitExam()'>Ya</button> </div>"
    }
    //instructionPar.innerHTML += "<p class='btn'> <button class='Ya-btn' onclick='submitExam()'>Ya</button> <button style='background-color:red; button:hover{background:transparent; border: 2px solid red; color: red;' onclick='closeModal()'>Tidak</button></p>"

    modal.style.display = "block";
}

function submitExam(){
    clearInterval(timerObject);
    modal.style.display = "none";
     var score = 0;
    for(var i = 0; i < exam.questions.length; i++){
        if(answers[i] == exam.questions[i].answerPosition){
            score += 2;
        }    
    }
    
    //sessionStorage.setItem("nilai", score);

    //score = score/0.4;
    /*let nilai = score.toString();
    let users = sessionStorage.getItem("user");
    if(users == 0) {
        //setCookie(nilai0, nilai);
       Cookies.set('data0', 'true');
        sessionStorage.setItem("nilai0", score);
    }
    else if(users == 1) {
        sessionStorage.setItem("nilai1", score);
    }
    else if(users == 2) {
        sessionStorage.setItem("nilai2", score);
    }
    else if(users == 3) {
        sessionStorage.setItem("nilai3", score);
    }
    else if(users == 4) {
        sessionStorage.setItem("nilai4", score);
    }
    else if(users == 5) {
        sessionStorage.setItem("nilai5", score);
    }
    else {
        sessionStorage.setItem("nilai6", "0");
    }*/
    
    document.querySelector(".daftar").style.display = "none";
    document.querySelector(".pSubmit").style.display = "none";
    document.querySelector(".content > div:last-child > div").innerHTML = "Anda telah selesai mengerjakan ujian";
    document.querySelector(".content > div:last-child > div").innerHTML += "<br> <br> <br> <a class='home' href='tes.html' id='kembali' style='text-decoration: none;'>Kembali</a> <br> <br>"
    document.querySelector(".total").innerHTML = "Nilai : " + score.toString();
}

/*function setCookie(cname, value) {
        document.cookie = cname + '=' + value + ';' + ';path=/';
    }*/
