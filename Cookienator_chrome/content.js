async function manageCookies(vendor){  //detecció banner cookies
  switch(vendor){
    case "CookieBot": return await cookiebot(preferencies)
    break;
    case "Didomi": return await didomi(preferencies);
    break;
    case "CookieYes": return await cookieyes(preferencies)                 
    break;
    case "CookieNotice": return await cookienotice(preferencies);
    break;
    case "OneTrust": return await onetrust(preferencies);
    break;
    default: console.log("Cookienator: No és cap vendor controlat")
              return 0
    break;
  }
}

const readLocalStorage = async (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], function (result) {
      if (result[key] === undefined) {
        reject();
      } else {
        resolve(result[key]);
      }
    });
  });
};

async function comprovaPrefs(vendor){
  chrome.storage.local.get(['preferencies'], async function (res) { //prenem el valor de preferències introduit per l'user
      preferencies=res.preferencies
        preferencies=parseInt(preferencies, 10);
        if(preferencies>0 && preferencies<5){
          await manageCookies(vendor).then(async ret =>{ //si s'ha pogut dur a terme l'acció, crea un SC
            if(ret==1){
              chrome.storage.local.get(['webPagesTFG'], function (res) {
                                webActual=res.webPagesTFG,
                                webActual.push(window.location.href) 
                                chrome.storage.local.set({"webPagesTFG": webActual})
                        });
                        console.log("Cookienator: tot ha anat bé!")
                      }
          })
        } 
        else console.log("Cookienator: si vols que el plugin gestioni les teves cookies has d'introduïr el nivell de privacitat al pop-up!")                       
      }); 
}


const list = {  //patterns that match cookie vendors network requests
  "CookieBot" : ["#CybotCookiebotDialogBody"],
  "Didomi" : ["#didomi-host"],
  "CookieYes" : ["#cookie-law-info-bar"],
  "CookieNotice" : ["#cookie-notice"],
  "OneTrust" : ["#onetrust-banner-sdk"]
}


async function waitForBanner() {
  await timeoutCall(list).then((successMessage) => {
    if(successMessage!=="not found"){
      console.log("Cookienator: hem trobat un banner de " + successMessage);
      comprovaPrefs(successMessage)
    }
    else console.log("Cookienator: no hem trobat cap banner de cookies controlat pel plug-in")
  });

}
//Inici del "main"
waitForBanner();