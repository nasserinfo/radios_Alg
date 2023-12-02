

var lienRadio=[
    "",
"https://webradio.tda.dz/ElBahdja_64K.mp3",
"https://webradio.tda.dz/Medea_64K.mp3",
"https://webradio.tda.dz/Djelfa_64K.mp3",
"https://webradio.tda.dz/Annaba_64K.mp3",
"https://webradio.tda.dz/Guelma_64K.mp3",
"https://webradio.tda.dz/Oran_64K.mp3",
"https://webradio.tda.dz/Blida_64K.mp3"
];
var nomRadio=["", "Radio El Bahdja","Radio Médéa","Radio Djelfa","Radio Annaba","Radio Guelma","Radio Oran","Radio Blida"];
var next=document.getElementById("btn1");
var avant=document.getElementById("btn2");
var Radio=document.getElementById("Radio");
var libRadio=document.getElementById("texte1");
var numRadio=document.getElementById("texte2");


    next.addEventListener("click",()=>{

      var i = parseInt(numRadio.textContent);
      i++;
      if (i==lienRadio.length) {
        i = 1; 
      }
      Radio.src=lienRadio[i];
      libRadio.innerHTML=nomRadio[i];
      numRadio.textContent = i;
      Radio.play();
      localStorage.setItem("NumRadio",parseInt(numRadio.textContent));
   })
///////////////////////////////////////////////////////////////////


avant.addEventListener("click",()=>{

    var i = parseInt(numRadio.textContent);
    i--;
    if (i==0) {
      i = lienRadio.length-1; 
    }
    Radio.src=lienRadio[i];
    libRadio.innerHTML=nomRadio[i];
    numRadio.textContent = i;
    Radio.play();
    localStorage.setItem("NumRadio",parseInt(numRadio.textContent));
        
 })

 nomRadio.forEach(liste=>{
  document.getElementById("liste").innerHTML+=`<option>${liste}</option>`;
  })
  document.getElementById("liste").addEventListener('change',()=>{
    var myListe=document.getElementById("liste").value;
    Radio.src=lienRadio[nomRadio.indexOf(myListe)];
    libRadio.innerHTML=nomRadio[nomRadio.indexOf(myListe)];
    numRadio.textContent = nomRadio.indexOf(myListe);
    Radio.play();
    localStorage.setItem("NumRadio",parseInt(nomRadio.indexOf(myListe))); 
                                                                     
  })

onload=   
Radio.src=lienRadio[localStorage.getItem("NumRadio")];
libRadio.innerHTML=nomRadio[localStorage.getItem("NumRadio")];
numRadio.textContent = localStorage.getItem("NumRadio");
Radio.play();






    
