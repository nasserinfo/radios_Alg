

var lienRadio=[
    "",
"https://webradio.tda.dz/Coran_64K.mp3",
"https://webradio.tda.dz/Chaine1_64K.mp3",
"https://webradio.tda.dz/Chaine2_64K.mp3",
"https://webradio.tda.dz/Chaine3_64K.mp3",
"https://webradio.tda.dz/Internationale_64K.mp3",
"https://webradio.tda.dz/Culture_64K.mp3",
"https://webradio.tda.dz/Jeunesse_64K.mp3",
"https://webradio.tda.dz/ElBahdja_64K.mp3",
"https://webradio.tda.dz/Adrar_64K.mp3",
"https://webradio.tda.dz/Chlef_64K.mp3",
"https://webradio.tda.dz/Laghouat_64K.mp3",
"https://webradio.tda.dz/OumBouaghi_64K.mp3",
"https://webradio.tda.dz/Batna_64K.mp3",
"https://webradio.tda.dz/Bejaia_64K.mp3",
"https://webradio.tda.dz/Biskra_64K.mp3",
"https://webradio.tda.dz/Bechar_64K.mp3",
"https://webradio.tda.dz/Blida_64K.mp3",
"https://webradio.tda.dz/Bouira_64K.mp3",
"https://webradio.tda.dz/Tamanrasset_64K.mp3",
"https://webradio.tda.dz/Tebessa_64K.mp3",
"https://webradio.tda.dz/Tlemcen_64K.mp3",
"https://webradio.tda.dz/Tiaret_64K.mp3",
"https://webradio.tda.dz/TiziOuzou_64K.mp3",
"https://webradio.tda.dz/ElBahdja_64K.mp3",
"https://webradio.tda.dz/Djelfa_64K.mp3",
"https://webradio.tda.dz/Jijel_64K.mp3",
"https://webradio.tda.dz/Setif_64K.mp3",
"https://webradio.tda.dz/Saida_64K.mp3",
"https://webradio.tda.dz/Skikda_64K.mp3",
"https://webradio.tda.dz/SidiBelabes_64K.mp3",
"https://webradio.tda.dz/Annaba_64K.mp3",
"https://webradio.tda.dz/Guelma_64K.mp3",
"https://webradio.tda.dz/Constantine_64K.mp3",
"https://webradio.tda.dz/Medea_64K.mp3",
"https://webradio.tda.dz/Mostaganem_64K.mp3",
"https://webradio.tda.dz/Msila_64K.mp3",
"https://webradio.tda.dz/Mascara_64K.mp3",
"https://webradio.tda.dz/Ouargla_64K.mp3",
"https://webradio.tda.dz/Oran_64K.mp3",
"https://webradio.tda.dz/ElBayedh_64K.mp3",
"https://webradio.tda.dz/Illizi_64K.mp3",
"https://webradio.tda.dz/BordjBouArreridj_64K.mp3",
"https://webradio.tda.dz/Boumerdes_64K.mp3",
"https://webradio.tda.dz/Taref_64K.mp3",
"https://webradio.tda.dz/Tindouf_64K.mp3",
"https://webradio.tda.dz/Tissemssilt_64K.mp3",
"https://webradio.tda.dz/ouedSouf_64K.mp3",
"https://webradio.tda.dz/Khenchela_64K.mp3",
"https://webradio.tda.dz/SoukAhras_64K.mp3",
"https://webradio.tda.dz/Tipaza_64K.mp3",
"https://webradio.tda.dz/Mila_64K.mp3",
"https://webradio.tda.dz/AinDefla_64K.mp3",
"https://webradio.tda.dz/Naama_64K.mp3",
"https://webradio.tda.dz/AinTimouchent_64K.mp3",
"https://webradio.tda.dz/Ghardaia_64K.mp3",
"https://webradio.tda.dz/Relizan_64K.mp3"
];

var nomRadio=["","Coran","Chaine1","Chaine2","Chaine3","Internationale","Culture","Jeunesse","ElBahdja","1-Adrar","2-Chlef","3-Laghouat","4-OumBouaghi","5-Batna","6-Bejaia","7-Biskra","8-Bechar","09-Blida","10-Bouira","11-Tamanrasset","12-Tebessa","13-Tlemcen","14-Tiaret","15-TiziOuzou","16-ElBahdja","17-Djelfa","18-Jijel","19-Setif","20-Saida","21-Skikda","22-SidiBelabes","23-Annaba","24-Guelma","25-Constantine","26-Médéa","27-Mostaganem","28-Msila","29-Mascara","30-Ouargla","31Oran","32-ElBayedh","33-Illizi","34-BordjBouArreridj","35-Boumerdes","36-Taref","37-Tindouf","38-Tissemssilt","39-ouedSouf","40-Khenchela","41-SoukAhras","42-Tipaza","43-Mila","44-AinDefla","45-Naama","46-AinTimouchent","47-Ghardaia","48-Relizan"];
;
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

  document.getElementById("NVolume").addEventListener("change",()=>{
    Radio.volume=document.getElementById("NVolume").value/100;
  })

onload=   
Radio.src=lienRadio[localStorage.getItem("NumRadio")];
libRadio.innerHTML=nomRadio[localStorage.getItem("NumRadio")];
numRadio.textContent = localStorage.getItem("NumRadio");
Radio.play();






    
