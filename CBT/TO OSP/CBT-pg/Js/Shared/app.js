//This is an example of a json data
//NB: The questions are supposed to be served from an api not added in the javascript
var exam = {
    "duration": 90,
    "instruction": "Jawablah dengan menekan tombol opsi jawaban yang tersedia.<br><br>Untuk pengguna komputer/laptop sendiri dapat menekan tombol A, B, C, D, atau E pada keyboard untuk menjawab.",
    "questions":[
        {
            "question": '"Death Star" merupakan sebuah wahana angkasa yang terdapat dalam film "Star Wars". Asumsikan jika jari-jari wahana tersebut adalah 200km, dan diameter sudut yang diamati adalah sama dengan diameter sudut bulan pada jarak rata-rata nya, berapakah jarak dan periode orbit wahana tersebut terhadap Bumi!',
            "options": ["38440 km dan 20,83 jam", "38440 km dan 23,59 jam", "44240 km dan 25,75 jam", "44240 km dan 23,45 jam", "57680 km dan 38,30 jam"],
            "answerPosition": 2
        },
        {
            "question": "Suatu bintang memancarkan cahaya pada panjang gelombang maksimum 4000Å. Berapakah temperatur dari bintang tersebut? <br> <br>(1Å = 10<sup>-10</sup> meter)",
            "options":["6245 K", "7245 K", "8245 K", "9245 K", "10245 K"],
            "answerPosition": 1
        },
        {
            "question": "When will Big Ben tower (51.5°N, 0.1245°W) cast a shadow to the South?",
            "options": ["In March", "In June", "In September", "Always", "Never"],
            "answerPosition": 4
        },
        {
            "question": "Suatu bintang memiliki magnitudo semu visual +6,7 dan magnitudo mutlak visual +0,7. Apabila dalam pengukuran tersebut dipengaruhi oleh absorpsi materi antar bintang dengan nilai absorpsi sebesar 1 mag. Berapakah jarak bintang tersebut dari Bumi?",
            "options": ["40 pc", "50 pc", "70 pc", "90 pc", "100 pc"],
            "answerPosition": 4
        },
        {
           "question": "Sebuah planet akan lebih berpeluang untuk memiliki atmosfer tebal jika ...",
            "options": ["Mengorbit dekan dengan bintang yang panas", "Setengah sumbu panjang orbitnya lebih pendek", "Memiliki massa yang lebih kecil", "Kerapatan planet yang lebih besar", "Memiliki kecepatan lepas yang lebih kecil"],
            "answerPosition": 3
        },
        {
            "question": "Jika rapat fluks matahari yang tiba di Bumi adalah 1370 Watt/m<sup>2</sup>, dan diketahui diameter sudut matahari adalah 32'. Maka berapakah kecerlangan permukaan matahari? <br> <br>Perumusan sudut ruang (Ω) = π sin(δ/2)<sup>2</sup>.",
            "options": ["1,01 × 10<sup>7</sup> Watt m<sup>-2</sup> sterad<sup>-1</sup>", "2,01 × 10<sup>7</sup> Watt m<sup>-2</sup> sterad<sup>-1</sup>", "3,01 × 10<sup>7</sup> Watt m<sup>-2</sup> sterad<sup>-1</sup>", "4,01 × 10<sup>7</sup> Watt m<sup>-2</sup> sterad<sup>-1</sup>", "5,01 × 10<sup>7</sup> Watt m<sup>-2</sup> sterad<sup>-1</sup>"],
            "answerPosition": 1
        },
        {
            "question": "Suatu asteroid terdeteksi pada jarak 1,5 jam cahaya dari Bumi. Berapakah jarak tersebut jika diubah ke dalam satuan Internasional? <br> <br>(kecepatan cahaya = 3 × 10<sup>8</sup> m/s)",
            "options": ["1,62 × 10<sup>11</sup> meter", "1,62 × 10<sup>12</sup> meter", "2,7 × 10<sup>10</sup> meter", "2,7 × 10<sup>11</sup> meter", "1,72 × 10<sup>11</sup> meter"],
            "answerPosition": 1
        },
        {
            "question": "Perhatikan spektrum galaksi di bawah ini! <br> <br> <img src='CBT-pg/Images/grafik1.jpg' class='fotoSoal'/> <br>Perkirakanlah kecepatan radial dari galaksi tersebut jika kecepatan cahaya = 3 × 10<sup>5</sup> km/s.",
            "options": ["5,533 × 10<sup>4</sup> km/s", "2,790 × 10<sup>4</sup> km/s", "6,154 × 10<sup>4</sup> km/s", "3,154 × 10<sup>4</sup> km/s", "2,385 × 10<sup>5</sup> km/s"],
            "answerPosition": 0
        },
        {
            "question": 'Sebuah teleskop yang bekerja pada rentang panjang gelombang inframerah (1,2 mikron) yang panjang fokusnya sama dengan panjang fokus dari teleskop visual (0,55 mikron). Agar citra 2 bintang yang berjarak sejauh 10,1" masih bisa dilihat secara terpisah oleh teleskop inframerah, maka sebaiknya diameter objektif yang digunakan adalah ....',
            "options": ["Sembarang", "1,5 cm", "3,0 cm", "12,5 cm", "25 cm"],
            "answerPosition": 2
        },
        {
            "question": "Diketahui magnitudo semu visual bintang Sirius adalah -1,45 mag. Suatu saat terdapat astronom yang menggunakan instrumen CCD untuk mendapatkan hasil pengukuran magnitudo semu Sirius pada rentang panjang gelombang visual. Apabila cacah foton Sirius yang diterima CCD adalah sekitar 7000 foton/detik. Maka, berapakah magnitudo semu visual sebuah bintang X yang memancarkan foton sehingga instrumen CCD menerima sebanyak 2 kali dari cacah foton Sirius?",
            "options": ["-2,20", "-1,45", "-1,10", "2,20", "1,10"],
            "answerPosition": 0
        },
        {
            "question": "Sebuah bintang neutron memiliki massa 1,44 M⊙ dengan radius 10 km. Berapakah periode rotasi maksimum bintang tersebut agar tidak runtuh akibat rotasinya sendiri?",
            "options": ["0,4453 ms", "0,4545 ms", "0,5856 ms", "0,7713 ms", "0,8222 ms"],
            "answerPosition": 1
        },
        {
            "question": "Sebuah benda luar angkasa sejenis komet baru saja terdeteksi oleh para astronom, benda tersebut mengorbit matahari dengan orbit berbentuk elips. Pada saat perihelium, benda tersebut berada pada jarak 0,22022 SA, dengan kecepatan 87 km/s. Berapakah eksentrisitas orbit benda tersebut?",
            "options": ["0,578", "0,678", "0,778", "0,878", "0,978"],
            "answerPosition": 3
        },
        {
            "question": "Para astronom menemukan sebuah keberadaan awan panas hidrogen antar bintang, dimana kecepatan gas rata-rata pada awan tersebut adalah sekitar 25,6 km/s. Tentukan lah suhu dari awan antar bintang tersebut!",
            "options": ["3,1 K", "26500 K", "31200 K", "39720 K", "79430 K"],
            "answerPosition": 2
        },
        {
            "question": "Suatu bintang teramati memiliki magnitudo semu visual sebesar +5,7 mag dan memiliki magnitudo mutlak sebesar -1,2 mag. Jika dalam pengamatan tersebut absorpsi antar bintang tidak diabaikan, dengan konstanta absorpsi sebesar 1,5 mag/kpc. Estimasikan jarak dari bintang tersebut! ",
            "options": ["208 pc", "30 pc", "240 pc", "5,5 pc", "140 pc"],
            "answerPosition": 0
        },
        {
            "question": "Sebuah teleskop berdiameter 14cm digunakan untuk mengamati benda-benda angkasa pada panjang gelombang visual (5500Å). Dari beberapa benda-benda di bawah ini, manakah yang tidak dapat diamati oleh teleskop tersebut? ",
            "options": ["Bintang dengan diameter sudut 1,2” ", "Galaksi dengan diameter sudut 5” ", "Gugus bintang dengan diameter sudut 2,7” ", "Planet lain dengan diameter sudut 0,8” ", "Supernova dengan diameter sudut 1,3” "],
            "answerPosition": 3
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

const progress = document.getElementById("progressBar");

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

function runTimer() {  
	let progressWidth = detik / (examTime * 60) * 100;
    //let progressWidth = examLength / examTime * 100;
	
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
		detik--;
		progress.style.width = progressWidth + "%";
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


function showQuestion(questionNumber) {
    //questionDiv.innerHTML = exam.questions[questionNumber].question;
	questionDiv.innerHTML = '<b>Soal Nomor '+ (questionNumber + 1).toString() +'.</b><br><br>'+ exam.questions[questionNumber].question ;

    optionDiv.innerHTML = "";
    x = questionNumber;
    hps = x;
	
     for(var i = 0; i < exam.questions[questionNumber].options.length; i++){
		 optionDiv.innerHTML += '<input type="radio" id="opsi'+i.toString()+'" onclick="selectAnswer('+questionNumber+','+i.toString()+')" name="questionOptions"/><label for="opsi'+i.toString()+'" class="opsi'+i.toString()+'"><div class="dot" id="abj'+i.toString()+'"></div> <span class="teks">' + exam.questions[questionNumber].options[i].toString() + '</span> </label>';

        //optionDiv.innerHTML += '<br><input type="radio" id="opsi" onclick="selectAnswer('+questionNumber+','+ i.toString()+')" name="questionOptions"/>' + exam.questions[questionNumber].options[i].toString() + '<br>';		
		
		//optionDiv.innerHTML += '<br><input type="radio" id="opsi['+i.toString()+']" onclick="selectAnswer('+questionNumber+','+i.toString()+')" name="questionOptions" /><label for="opsi['+i.toString()+']" style="font-size: 15px">' + exam.questions[questionNumber].options[i].toString() + '</label><br>';

		//optionDiv.innerHTML += '<br><input type="radio" id="opsi" onclick="selectAnswer('+questionNumber+','+ i.toString()+')" name="questionOptions"/> <label for="opsi">' + exam.questions[questionNumber].options[i].toString() + '</label>';
		
		//optionDiv.innerHTML += `<br><label><input type="radio" name="questionOptions" onclick="selectAnswer('questionNumber', 'i')"> ${exam.questions[questionNumber].options[i].toString()}</label><br>`;
     
	 }
    
    
    
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
    
    sessionStorage.setItem("nilai", score);

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
    document.querySelector(".content > div:last-child > div").innerHTML = "Anda telah selesai mengerjakan, silakan melanjutkan ke soal Isian";
    document.querySelector(".content > div:last-child > div").innerHTML += "<br> <br> <br> <a class='home' href='OSP-isian.html' id='kembali' style='text-decoration: none;'>Lanjut Ke Soal Isian</a> <br> <br>"
    document.querySelector(".total").innerHTML = "Skor PG : " + score.toString();
}

/*function setCookie(cname, value) {
        document.cookie = cname + '=' + value + ';' + ';path=/';
    }*/
