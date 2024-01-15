//This is an example of a json data
//NB: The questions are supposed to be served from an api not added in the javascript
var exam = {
    "duration": 120,
    "instruction": "Jawablah dengan menekan jawaban yang tersedia.<br><br>Untuk perangkat komputer/laptop dapat menekan tombol A, B, C, D, atau E pada keyboard.",
    "questions":[
        {
            "question": "Suatu satelit bermassa 17,8 ton mengitari bumi dengan ketinggian 1945 km. Berapakah gaya gravitasi yang terjadi pada satelit tersebut?",
            "options": ["1,024 × 10<sup>5</sup> N", "1,024 × 10<sup>11</sup> N", "1,874 × 10<sup>6</sup> N", "1,874 × 10<sup>12</sup> N", "1,743 × 10<sup>5</sup> N"],
            "answerPosition": 0
        },
        {
            "question": "Sebuah bintang memiliki paralaks sebesar 5 mas (mas = milli arcsecond = mili detik busur). Berapakah jarak bintang tersebut dari Matahari?",
            "options":["652 ly", "200 ly", "65,2 ly", "20 ly", "20 pc"],
            "answerPosition": 0
        },
        {
            "question": "Suatu ketika terdapat sebuah asteroid yang masuk dan menabrak permukaan bumi, asteroid tersebut memiliki massa 62 kwintal, dan kecepatan 16 km/s. Berapakah energi kinetik dari asteroid tersebut?",
            "options": ["7,936 × 10<sup>3</sup> J", "1,587 × 10<sup>6</sup> J", "7,936 × 10<sup>5</sup> J", "7,936 × 10<sup>11</sup> J", "1,587 × 10<sup>12</sup> J"],
            "answerPosition": 3
        },
        {
            "question": "Kecepatan agar sebuah benda dapat lepas dari pengaruh gravitasi bumi adalah ....",
            "options": ["13,637 km/s", "11,177 km/s", "7,903 km/s", "5,588 km/s", "3,952 km/s"],
            "answerPosition": 1
        },
        {
           "question": "Suatu benda langit mengorbit matahari. Setengah sumbu panjang orbit benda tersebut adalah 26 sa. Apabila setengah sumbu panjang orbit bumi adalah 1 sa dan periode orbit bumi adalah 1 tahun, berapakah periode orbit dari benda tersebut?",
            "options": ["8,78 tahun", "13 tahun", "26 tahun", "52,75 tahun", "132,57 tahun"],
            "answerPosition": 4
        },
        {
            "question": "Tiga buah lampu dengan merek dan daya (watt) yang sama. Daya dari sebuah lampu yakni 15W. Pada jarak berapakah fluks dari ketiga lampu tersebut sama dengan fluks matahari yang diterima oleh bumi? <br> (fluks matahari di bumi = 1372,5 W/m<sup>2</sup>)",
            "options": ["4 cm", "4,1 cm", "5 cm", "5,1 cm", "6 cm"],
            "answerPosition": 3
        },
        {
            "question": "Pada bintang deret utama terdapat sebuah pendekatan kesebandingan, di mana Luminositas bintang akan sebanding dengan Massa bintang pangkat alpha (L ∝ M<sup>α</sup>), dengan α = 3,5. Apabila terdapat sebuah bintang dengan luminositas 10 kali luminositas matahari, berapakah massa bintang tersebut?",
            "options": ["1 M⊙", "1,78 M⊙", "1,93 M⊙", "17,8 M⊙", "19,3 M⊙"],
            "answerPosition": 2
        },
        {
            "question": "Suhu normal tubuh manusia adalah 37°C, asumsikan manusia merupakan benda hitam. Berapakah panjang gelombang maksimum dari tubuh manusia?",
            "options": ["9,34 μm", "78,3 μm", "8,60 μm", "9,34 nm", "78,3 nm"],
            "answerPosition": 0
        },
        {
            "question": "Panjang gelombang garis spektrum suatu galaksi teramati pada λ = 7850 Å, sedangkan panjang gelombang diam adalah λ<sub>0</sub> = 1250 Å. Apabila konstanta Hubble adalah 70 km/s/Mpc, berapakah jarak galaksi tersebut dari Bumi?",
            "options": ["4000 Mpc", "4050 Mpc", "4075 Mpc", "4130 Mpc", "5074 Mpc"],
            "answerPosition": 2
        },
        {
            "question": "Pada suatu malam terlihat dua buah bintang yang diamati memiliki magnitudo semu yang sama yaitu bintang Kaus Australis dan bintang C. Apabila bintang Kaus Australis dan bintang C memiliki nilai magnitudo mutlak sebesar -1.45 dan 4.5, sedangkan fenomena penyerapan oleh materi antar bintang diabaikan, maka...",
            "options": ["Bintang Kaus Australis 3,934 kali lebih jauh dari bintang C.", "Bintang Kaus Australis 3,934 kali lebih dekat dari bintang C.", "Bintang Kaus Australis 15,49 kali lebih jauh dari bintang C.", "Bintang Kaus Australis 15,49 kali lebih dekat dari bintang C.", "Bintang Kaus Australis 23,99 kali lebih jauh dari bintang C."],
            "answerPosition": 2
        },
        {
            "question": "Tiga buah bintang X, Y, dan Z masing-masing menunjukkan pancaran pada panjang gelombang maksimum sebesar 1700Å, 7800Å, dan 4500Å. Dari pernyataan berikut, manakah pernyataan yang benar?",
            "options": ["Bintang X memiliki suhu yang paling tinggi.", "Bintang Y memiliki suhu yang paling tinggi.", "Bintang Z memiliki suhu yang paling tinggi.", "Suhu bintang Y berada di antara bintang X dan Z.", "Suhu bintang X berada di antara bintang Y dan Z."],
            "answerPosition": 0
        },
        {
            "question": "Asumsikan bahwa rotasi Bumi mengalami peningkatan secara linier setiap hari sebesar 0,0015 detik tiap 1 abad. Jika panjang 1 hari pada masa sekarang adalah 24 jam, maka berapakah panjang hari di Bumi pada 1,4 miliar tahun yang lalu?",
            "options": ["24 jam", "23,94 jam", "19 jam", "18,58 jam", "18,16 jam"],
            "answerPosition": 4
        },
        {
            "question": "Jika periode Bumi mengorbit matahari berubah menjadi 1,5 kali lebih lama dari periode sekarang, maka radius orbit Bumi akan menjadi ...",
            "options": ["1,31 kali lebih kecil", "1,31 kali lebih besar", "1,84 kali lebih kecil", "1,84 kali lebih besar", "1,50 kali lebih besar"],
            "answerPosition": 1
        },
        {
            "question": "Sebuah roket satelit mengelilingi suatu planet dalam orbit elips dengan eksentrisitas 0,358 dan memiliki setengah sumbu panjang 244800km. Jika massa planet tersebut adalah 6 × 10<sup>24</sup> kg, berapakah kecepatan paling minim agar roket satelit tersebut lepas dari pengaruh gravitasi planet?",
            "options": ["2257 m/s", "1813 m/s", "1553 m/s", "1537 m/s", "2137 m/s"],
            "answerPosition": 2
        },
        {
            "question": "Sebuah teleskop berdiameter 14cm digunakan untuk mengamati benda-benda angkasa pada panjang gelombang visual (5500Å). Dari beberapa benda-benda di bawah ini, manakah yang tidak dapat diamati oleh teleskop tersebut? ",
            "options": ["Bintang dengan diameter sudut 1,2” ", "Galaksi dengan diameter sudut 5” ", "Gugus bintang dengan diameter sudut 2,7” ", "Planet lain dengan diameter sudut 0,8” ", "Supernova dengan diameter sudut 1,3” "],
            "answerPosition": 3
        },
        {
            "question": "Efek Doppler terjadi pada gelombang elektromagnetik dan suara, dan bergantung pada perubahan jarak antara sumber dan pengamat. Dari pernyataan berikut, manakah yang benar?",
            "options": ["Jika jarak konstan, panjang gelombang berkurang.", "Jika jarak bertambah, panjang gelombang berkurang.", "Jika jarak berkurang, panjang gelombang berkurang.", "Jika jarak berkurang, panjang gelombang bertambah .", "Jika jarak berkurang, panjang gelombang konstan"],
            "answerPosition": 2
        },
        {
            "question": "Observatorium biasanya dibangun di tempat yang tinggi dan jauh dari perkotaan. Di bawah ini yang merupakan alasan dari pemilihan tempat tersebut adalah ?",
            "options": ["Menambah efek dari refraksi atmosfer", "Memperbesar efek seeing", "Memiliki tekanan udara yang lebih rendah", "Meminimalisir polusi cahaya", "Salah semua"],
            "answerPosition": 3
        },
        {
            "question": "Paralaks sebuah bintang yang diamati di Bumi adalah sebesar 0,4”. Berapakah besar patalaks bintang tersebut jika di amati di planet Jupiter? Diketahui radius orbit Jupiter adalah 5,2sa.",
            "options": ["0,4” ", "0,8” ", "1,2” ", "1,6” ", "2,08” "],
            "answerPosition": 4
        },
        {
            "question": "Konstanta Hubble saat ini adalah sebesar 69,3 km/s/Mpc. Konstanta Hubble ini sangat berpengaruh terhadap estimasi umur alam semesta. Apabila umur alam semesta kelak mencapai 15 miliar tahun, berapakah konstanta Hubble saat umur alam semesta tersebut?",
            "options": ["63,756 km/s/Mpc", "65,19 km/s/Mpc", "69,3 km/s/Mpc", "70 km/s/Mpc", "500 km/s/Mpc"],
            "answerPosition": 1
        },
        {
            "question": "Suatu ketika saat matahari terbenam, kedudukan bulan di langit berimpit dengan matahari. Maka 7 hari kemudian kedudukan bulan akan....",
            "options": ["Berada di zenith pengamat saat matahari terbenam", "Berada di nadir pengamat saat matahari terbenam", "Berada berlawanan dengan kedudukan matahari", "Berada di zenith pengamat saat matahari terbit", "Berada di nadir pengamat saat matahari terbit"],
            "answerPosition": 1
        },
        {
            "question": "Bulan mengorbit Bumi pada jarak rata-rata yakni 384400 km dengan periode orbit 27,3 hari. Sebuah satelit mengorbit Bumi pada jarak rata-rata 26780 km, berapakah periode orbit dari satelit tersebut?",
            "options": ["0,13 hari", "0,5 hari", "1,9 hari", "4,6 hari", "9,1 hari"],
            "answerPosition": 1
        },
        {
            "question": "Suatu ayunan bandul sederhana di Bumi memiliki periode sebesar 2,4 detik. Apabila ayunan bandul tersebut diletakkan di permukaan Mars, berapakah periode dari ayunan bandul tersebut? <br>(diketahui massa Mars = 6,42 × 10<sup>23</sup> kg, dan radius Mars = 3397 km) ",
            "options": ["Tetap 2,4 detik", "1,5 detik", "3,9 detik", "5,3 detik", "11,9 detik"],
            "answerPosition": 2
        },
        {
            "question": "Sebuah teleskop direncanakan akan digunakan untuk mengamati sebuah bintang dilangit malam. Magnitudo semu bintang yang tampak pada teleskop tersebut akan mengikuti sebuah persamaan : <br><br> <center style='fontSize: 30px;'>m = -2,5 log⁡(F) + C</center>  <br> <br>   Apabila besar nilai C teleskop yakni -17 dan magnitudo semu bintang yang diamati adalah -1 mag. Berapakah Fluks dari bintang tersebut yang sampai ke teleskop tersebut?",
            "options": ["1,66 × 10<sup>-3</sup> W/m<sup>2</sup>", "6,31 × 10<sup>-8</sup> W/m<sup>2</sup>", "3,98 × 10<sup>-7</sup> W/m<sup>2</sup>", "2,51 × 10<sup>6</sup> W/m<sup>2</sup>", "1,58 × 10<sup>7</sup> W/m<sup>2</sup>"],
            "answerPosition": 2
        },
        {
            "question": "Magnitudo mutlak sebuah bintang yakni ...",
            "options": ["Magnitudo yang diukur di Bumi", "Magnitudo yang diukur pada jarak 1 sa", "Magnitudo yang diukur pada jarak 1 pc", "Magnitudo yang diukur pada jarak 10 pc", "Magnitudo yang diukur pada panjang gelombang visual"],
            "answerPosition": 3
        },
        {
            "question": "Magnitudo bolometrik adalah ...",
            "options": ["Sistem magnitudo yang diukur pada panjang gelombang visual", "Sistem magnitudo yang diukur pada panjang gelombang merah", "Sistem magnitudo yang diukur pada panjang gelombang biru", "Sistem magnitudo yang diukur pada panjang gelombang ultraviolet", "Sistem magnitudo yang diukur pada seluruh panjang gelombang"],
            "answerPosition": 4
        },
        {
            "question": 'Awan Magellan Besar (AMB) adalah galaksi katai dan satelit Galaksi Bima Sakti. Galaksi ini berjarak sekitar 49,97 kiloparsec dari Bima Sakti dan merupakan salah satu galaksi terdekat. Memiliki surface brightness sebesar 23,4 mag/"<sup>2</sup> (mag/arcsecond<sup>2</sup>), dengan ukuran di langit sebesar 322,83’ × 274,76’. Berapakah magnitudo mutlak dari Awan Magellan Besar?',
            "options": ["0,9 mag", "-17,6 mag", "12,6 mag", "-29,1 mag", "-19,1 mag"],
            "answerPosition": 1
        },
        {
            "question": "Suatu ketika saat matahari terbenam, kedudukan bulan berada di nadir pengamat, 6 jam kemudian kedudukan bulan berada di ...",
            "options": ["Bulan sedang terbit", "Bulan sedang terbenam", "Bulan berada di zenith", "Bulan berimpit matahari", "Bulan berseberangan dengan matahari"],
            "answerPosition": 0
        },
        {
            "question": "Terdapat suatu tempat di Bumi, di mana saat matahari berada tepat di zenith pengamat, sehingga tidak terdapat nya bayangan (bayangan tepat di bawah benda), maka pernyataan berikut yang tepat adalah...",
            "options": ["Tempat tersebut berada di khatulistiwa", "Tempat tersebut berada di 23,5° LU", "Tempat tersebut berada di 23,5° LS", "Tempat tersebut berada di antara 23,5° LU dan 23,5° LS", "Tempat tersebut dapat berada di lintang berapa pun di Bumi"],
            "answerPosition": 3
        },
        {
            "question": "Materi Antar Bintang (MAB) merupakan partikel-partikel seperti debu yang terdapat di sebuah tempat di alam semesta ini. Pada pengukuran magnitudo sendiri, koreksi MAB diperlukan, karena ...",
            "options": ["MAB membuat bintang terlihat lebih redup", "MAB membuat bintang terlihat lebih terang", "MAB membuat bintang terlihat lebih jauh", "MAB membuat bintang terlihat lebih dekat", "MAB tidak mempengaruhi apapun"],
            "answerPosition": 0
        },
        {
            "question": "Suatu bintang yang amat panas dengan suhu permukaan yang tinggi, akan memiliki warna yang lebih ...",
            "options": ["Biru", "Merah", "Kuning", "Putih", "Hitam"],
            "answerPosition": 0
        }
    ]
}

var sec = 0, x, hps, score = 0;
var timerObject;

var questionDiv = document.getElementById("questionDiv");
var optionDiv = document.getElementById("optionDiv");
var questionsButton = document.getElementById("questionsButton");

var answers = [];
var examLength, examTime;

const progress = document.getElementById("progressBar");


if (localStorage.getItem('nilai') != null) {
	document.getElementById("tombol-lanjutkan").style.display = "none";
	alert("Anda telah mengerjakan ujian ini dengan nilai : " + localStorage.getItem('nilai'));
		
} else {
	document.getElementById("tombol-lanjutkan").style.display = "block";
}


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
    if(x > 29) {x = 29;}
    else {x = x;}
    showQuestion(x);
	window.scroll({ top: 470, left: 0, behavior: 'smooth'});
}

function runTimer(){  
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
    questionDiv.innerHTML = '<b>Soal Nomor '+ (questionNumber + 1).toString() +'.</b><br><br>'+ exam.questions[questionNumber].question ;
    optionDiv.innerHTML = "";
    x = questionNumber;
    hps = x;
	
     for(var i = 0; i < exam.questions[questionNumber].options.length; i++){
		 optionDiv.innerHTML += '<input type="radio" id="opsi'+i.toString()+'" onclick="selectAnswer('+questionNumber+','+i.toString()+')" name="questionOptions"/><label for="opsi'+i.toString()+'" class="opsi'+i.toString()+'"><div class="dot" id="abj'+i.toString()+'"></div> <span class="teks">' + exam.questions[questionNumber].options[i].toString() + '</span> </label>';

        //optionDiv.innerHTML += '<br><input type="radio" id="opsi" onclick="selectAnswer('+questionNumber+','+ i.toString()+')" name="questionOptions"/>' + exam.questions[questionNumber].options[i].toString() + '<br>';		
		
		//optionDiv.innerHTML += '<br><input type="radio" id="opsi['+i.toString()+']" onclick="selectAnswer('+questionNumber+','+i.toString()+')" name="questionOptions"/><label for="opsi['+i.toString()+']">' + exam.questions[questionNumber].options[i].toString() + '</label><br>';

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
       // answers[k] = -1;
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
        //instructionPar.innerHTML += `<embed src="CBT/tabel/Tabel-OSN-Astronomi.pdf" frameborder="0" width="100%" height="700px" />`;
		instructionPar.innerHTML += `	<img src="CBT/tabel/Tabel-OSN-Astronomi1.png" width="100%"/>
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
    //video.style.display = "none";
    stopWebcam();
    clearInterval(timerObject);
    modal.style.display = "none";
    score = 0;
    for(var i = 0; i < exam.questions.length; i++){
        if(answers[i] == exam.questions[i].answerPosition){
            score++;
        }    
    }

    document.querySelector(".instructionLink").style.display = "none";
    document.querySelector(".daftar").style.display = "none";
    document.querySelector(".pSubmit").style.display = "none";
    document.querySelector(".content > div:last-child > div").innerHTML = `Anda telah selesai mengerjakan ujian <br><br>Silakan mengisi data berikut dengan menggunakan <b>huruf kapital</b>: <br><br>
	
									<form action="https://script.google.com/macros/s/AKfycbyfknnVjdkfS7GUZ5O-Hy8HY4X47DJkHl2i1loDuDNBQx0GE18KCZxbP0NF-41dcuSVkA/exec"  method="POST" autocomplete="on">																			
																				
										<input type="text" id="nama" name="Nama" placeholder="Nama Lengkap" style="width: 100%; height: 50px; font-size: 17px" required> <br><br>
										<input type="text" id="kelas" name="Kelas" placeholder="Kelas" style="width: 100%; height: 50px; font-size: 17px" required> <br><br>
										<input type="text" id="nisn" name="NISN" placeholder="NISN" style="width: 100%; height: 50px; font-size: 17px" required> <br><br>
										<input type="text" id="nilai" name="Nilai" readonly="readonly"> <br>
										<center>
											<button type="submit" class="kirim" onclick="simpanData()" style="display: none">
												<span>Kirim</span>
											</button>
										</center> <br>
																			
									</form>
	`;
   	document.querySelector(".total").innerHTML = "Total Skor: " + score.toString();
    	document.getElementById("nilai").value = score;

	var nama = document.getElementById("nama");
        var kelas = document.getElementById("kelas");
        let btn = document.querySelector(".kirim");
  
        nama.addEventListener('change', () => {
           if (nama.value != "" && kelas.value != "" && nama.value != " " && kelas.value != " ") {
               btn.style.display = "block";
           }
           else btn.style.display = "none";
        });
  
        kelas.addEventListener('change', () => {
           if (kelas.value != "" && kelas.value != " ") {
              btn.style.display = "block";
           }
           else btn.style.display = "none";
        });
    
        if (nama.value != "" && kelas.value != "") {
           btn.style.display = "block";
        }
}

function stopWebcam(e) {
  var stream = video.srcObject;
  var tracks = stream.getTracks();

  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    track.stop();
  }

  video.srcObject = null;
}

function simpanData(){
    localStorage.setItem('nilai', score);
}
