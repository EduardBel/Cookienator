async function cookienotice(preferencies) {
    return new Promise(async (resolve) => {
    if(document.cookie.match("PluginTFG")){
        console.log("Cookienator: les cookies d'aquest lloc ja havien estat manegades")
        resolve(0)
    } 
    else{
        await waitUntilFound('.cookie-notice-visible').then(async ()=>{ //mentre no sigui visible esperem
            if(preferencies==1){
                await waitUntilFoundAndClick("#cn-accept-cookie")    //acceptem tot
                setCookie("PluginTFG", "1", 365);   //creem cookie propia per saber que s'han manegat les cookies
                console.log("Cookienator: hem acceptat les cookies per tu")
                resolve(1)
            }  
            else {
                if(document.querySelector('#cn-refuse-cookie')== null){ //si no es pot rebutjar
                        document.querySelector('#cookie-notice').style.position = 'relative'    //fa que s'amagui el banner
                        console.log("Cookienator: com sols es pot acceptar, hem amagat el banner")
                        resolve(0)   
                } 
                else{   //hi ha boto de denegar
                    await waitUntilFoundAndClick("#cn-refuse-cookie");   //rebutjem
                    setCookie("PluginTFG", "1", 365);   //creem cookie propia per saber que s'han manegat les cookies
                    console.log("Cookienator: hem denegat les cookies per tu")
                    resolve(1)                   
                } 
            }
        });
    } 
})
}