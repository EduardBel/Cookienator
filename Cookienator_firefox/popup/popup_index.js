function listenForClicks() {
  document.addEventListener("click", (e) => {
    function clica(){
        let preferencies=document.getElementById("preferencies").value;
        if(preferencies!=''){ 
          browser.storage.local.get(['preferencies']).then(
            res =>{ oldPref=res.preferencies
                    if(preferencies!==oldPref){ //si s'ha canviat la privacitat
                      let webPagesTFG = new Array(); // buidem les llistes de consentiment
                      browser.storage.local.set({"webPagesTFG": webPagesTFG})
                      browser.storage.local.set({"preferencies": preferencies})  // actualitzem la privacitat
                    }
            });           
        } 
    }
    function consulta(){
      var x = document.getElementById("contingut"); //amaguem contingut i mostrem la llista de transaccions //FALTA QUE ES PUGUI COPIAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      x.style.display = "none";
      var y = document.getElementById("transaccions");
      y.style.display = "block"; 
      browser.storage.local.get(['webPagesTFG'], function(result) { // mostrem llista
          var llista = document.getElementById("llista_consent")
          for(i in result.webPagesTFG){
            llista.innerHTML=llista.innerHTML + "<li>"+result.webPagesTFG[i]+"</li>"
          }       
      });
    }
    function torna(){ // amaguem transaccions i mostrem contingut principal
      var x = document.getElementById("contingut");
      x.style.display = "block";
      var y = document.getElementById("transaccions");
      y.style.display = "none";
      var llista = document.getElementById("llista_consent")
      llista.innerHTML=""//buidem llista consentiments  
    }
    if (e.target.classList.contains("aplica")) {  //si el que s'ha clicat és el botó d'aplicar cridem la funció
      browser.tabs.query({active: true, currentWindow: true})
        .then(clica)
    }
    if (e.target.classList.contains("consulta")) {  //si el que s'ha clicat és el botó de consultar cridem la funció
      browser.tabs.query({active: true, currentWindow: true})
        .then(consulta)
    }
    if (e.target.classList.contains("torna")) {  //si el que s'ha clicat és el botó de consultar cridem la funció
      browser.tabs.query({active: true, currentWindow: true})
        .then(torna)
    }
  });
}


browser.storage.local.get(['preferencies'], function(result) {
  if (typeof(result.preferencies) != "undefined")document.getElementById("preferencies").value = result.preferencies;
});
  
listenForClicks()
