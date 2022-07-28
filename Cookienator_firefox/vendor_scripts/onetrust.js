async function onetrust(preferencies) {
    return new Promise(async (resolve) => {
    if(document.cookie.match("PluginTFG")){
        console.log("Cookienator: les cookies d'aquest lloc ja havien estat manegades")
        resolve(0)
    } 
    else{
            if(preferencies==1){
                await waitUntilFoundAndClick("#onetrust-accept-btn-handler");    //acceptem tot
                setCookie("PluginTFG", "1", 365);   //creem cookie propia per saber que s'han manegat les cookies
                console.log("Cookienator: hem acceptat les cookies per tu")
                resolve(1)
            }
            else {  
                //busquem si hi ha socis
                if(document.querySelector('.onetrust-vendors-list-handler')!== null){   //si hi ha socis
                    document.querySelector('.onetrust-vendors-list-handler').click();   //entrem a gestionar
                    await waitUntilNull('#onetrust-pc-sdk.ot-hide').then(async ()=>{
                        if(document.querySelector('#select-all-vendor-leg-handler')!== null){   //si hi ha legitimate interest
                            if(document.querySelector('#select-all-vendor-leg-handler').getAttribute("aria-checked")!== "false"){ //i està activat
                                document.querySelector('#select-all-vendor-leg-handler').click();   //desactivem
                            }
                        }   
                        
                        if(document.querySelector('#select-all-vendor-groups-handler')!== null){   //si hi ha consent
                            if(document.querySelector('#select-all-vendor-groups-handler').getAttribute("aria-checked")!== "false"){ //i està activat
                                document.querySelector('#select-all-vendor-groups-handler').click();   //desactivem
                            }
                        } 
                        document.querySelector('.back-btn-handler').click() //entra a manegar opcions
                    });
                }              
                else await waitUntilFoundAndClick("#onetrust-pc-btn-handler");   //si no hi ha socis, manage options
                await waitUntilNull('#onetrust-pc-sdk.ot-hide').then(async ()=>{ //esperem a que aparegui
                    if(document.querySelector('.ot-tab-list')!==null){  //en cas que les cookies estiguin agrupades en format llista
                        if(preferencies==2){    //rebutjar socis, acceptar la resta  
                            if(document.querySelector('#ot-header-id-C0002')!== null){  //si te cookies de performance
                                document.querySelector('#ot-header-id-C0002').click()
                                if(document.querySelector('#ot-group-id-C0002').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0002').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-header-id-C0003')!== null){  //si te cookies funcionals
                                document.querySelector('#ot-header-id-C0003').click()
                                if(document.querySelector('#ot-group-id-C0003').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0003').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-header-id-C0004')!== null){  //si te cookies targeting
                                document.querySelector('#ot-header-id-C0004').click()
                                if(document.querySelector('#ot-group-id-C0004').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0004').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-header-id-C0005')!== null){  //si te cookies de social media
                                document.querySelector('#ot-header-id-C0005').click()
                                if(document.querySelector('#ot-group-id-C0005').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0005').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-header-id-IABV2_1')!== null){  //si te cookies de desar/accediar info del dispositiu
                                document.querySelector('#ot-header-id-IABV2_1').click()
                                if(document.querySelector('#ot-group-id-IABV2_1').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-IABV2_1').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-header-id-STACK42')!== null){  //si te cookies de anuncis personalitzats
                                document.querySelector('#ot-header-id-STACK42').click()
                                if(document.querySelector('#ot-group-id-STACK42').getAttribute("aria-checked")== "false")  //consent general
                                    document.querySelector('#ot-group-id-STACK42').click()    //si el switch està desactivat, l'activem

                                    if(document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').getAttribute("aria-checked")== "false")  //basic ads
                                        document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').getAttribute("aria-checked")== "false")  //personalised ads profile
                                        document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').getAttribute("aria-checked")== "false")  //personalised ads
                                        document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').getAttribute("aria-checked")== "false")  //personalised content profile
                                        document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').getAttribute("aria-checked")== "false")  //personalised content
                                        document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').getAttribute("aria-checked")== "false")  //ad performance
                                        document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').getAttribute("aria-checked")== "false")  //content performance
                                        document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').getAttribute("aria-checked")== "false")  //generate audience insights
                                        document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').getAttribute("aria-checked")== "false")  //develop and improve products
                                        document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-header-id-ISFV2_1')!== null){  //si te cookies de precise geolocation
                                document.querySelector('#ot-header-id-ISFV2_1').click()
                                if(document.querySelector('#ot-group-id-ISFV2_1').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-ISFV2_1').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-header-id-ISFV2_2')!== null){  //si te cookies de scan device for id
                                document.querySelector('#ot-header-id-ISFV2_2').click()
                                if(document.querySelector('#ot-group-id-ISFV2_2').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-ISFV2_2').click()    //si el switch està desactivat, l'activem
                            }

                            await waitUntilFoundAndClick(".save-preference-btn-handler");   //apliquem la configuracio
                            setCookie("PluginTFG", "1", 365);   //creem cookie propia per saber que s'han manegat les cookies
                            console.log("Cookienator: hem acceptat les cookies però denegat els vendors per tu")
                            resolve(1)
                            
                        }

                        else if(preferencies==3){   //rebutjar socis, rebutjar algunes(perfil i tal)
                            if(document.querySelector('#ot-header-id-C0002')!== null){  //si te cookies de performance
                                document.querySelector('#ot-header-id-C0002').click()
                                if(document.querySelector('#ot-group-id-C0002').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0002').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-header-id-C0003')!== null){  //si te cookies funcionals
                                document.querySelector('#ot-header-id-C0003').click()
                                if(document.querySelector('#ot-group-id-C0003').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0003').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-header-id-C0004')!== null){  //si te cookies targeting
                                document.querySelector('#ot-header-id-C0004').click()
                                if(document.querySelector('#ot-group-id-C0004').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0004').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-C0005')!== null){  //si te cookies de social media
                                document.querySelector('#ot-header-id-C0005').click()
                                if(document.querySelector('#ot-group-id-C0005').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0005').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-IABV2_1')!== null){  //si te cookies de desar/accediar info del dispositiu
                                document.querySelector('#ot-header-id-IABV2_1').click()
                                if(document.querySelector('#ot-group-id-IABV2_1').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-IABV2_1').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-STACK42')!== null){  //si te cookies de anuncis personalitzats
                                document.querySelector('#ot-header-id-STACK42').click()
                                if(document.querySelector('#ot-group-id-STACK42').getAttribute("aria-checked")!== "false")  //consent general
                                    document.querySelector('#ot-group-id-STACK42').click()    //si el switch està activat, desactivem

                                    if(document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').getAttribute("aria-checked")== "false")  //basic ads
                                        document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').getAttribute("aria-checked")!== "false")  //personalised ads profile
                                        document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').getAttribute("aria-checked")!== "false")  //personalised ads
                                        document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').getAttribute("aria-checked")!== "false")  //personalised content profile
                                        document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').getAttribute("aria-checked")!== "false")  //personalised content
                                        document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').getAttribute("aria-checked")!== "false")  //ad performance
                                        document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').getAttribute("aria-checked")!== "false")  //content performance
                                        document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').getAttribute("aria-checked")!== "false")  //generate audience insights
                                        document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').getAttribute("aria-checked")!== "false")  //develop and improve products
                                        document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-ISFV2_1')!== null){  //si te cookies de precise geolocation
                                document.querySelector('#ot-header-id-ISFV2_1').click()
                                if(document.querySelector('#ot-group-id-ISFV2_1').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-ISFV2_1').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-ISFV2_2')!== null){  //si te cookies de scan device for id
                                document.querySelector('#ot-header-id-ISFV2_2').click()
                                if(document.querySelector('#ot-group-id-ISFV2_2').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-ISFV2_2').click()    //si el switch està activat, desactivem
                            }

                            await waitUntilFoundAndClick(".save-preference-btn-handler");   //apliquem la configuracio
                            setCookie("PluginTFG", "1", 365);   //creem cookie propia per saber que s'han manegat les cookies
                            console.log("Cookienator: hem denegat els vendors i les cookies de perfil per tu")
                            resolve(1)            
                        }
                        else{   //preferencies = 4 rebutjar TOT
                            if(document.querySelector('#ot-header-id-C0002')!== null){  //si te cookies de performance
                                document.querySelector('#ot-header-id-C0002').click()
                                if(document.querySelector('#ot-group-id-C0002').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0002').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-C0003')!== null){  //si te cookies funcionals
                                document.querySelector('#ot-header-id-C0003').click()
                                if(document.querySelector('#ot-group-id-C0003').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0003').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-C0004')!== null){  //si te cookies targeting
                                document.querySelector('#ot-header-id-C0004').click()
                                if(document.querySelector('#ot-group-id-C0004').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0004').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-C0005')!== null){  //si te cookies de social media
                                document.querySelector('#ot-header-id-C0005').click()
                                if(document.querySelector('#ot-group-id-C0005').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0005').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-IABV2_1')!== null){  //si te cookies de desar/accediar info del dispositiu
                                document.querySelector('#ot-header-id-IABV2_1').click()
                                if(document.querySelector('#ot-group-id-IABV2_1').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-IABV2_1').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-STACK42')!== null){  //si te cookies de anuncis personalitzats
                                document.querySelector('#ot-header-id-STACK42').click()
                                if(document.querySelector('#ot-group-id-STACK42').getAttribute("aria-checked")!== "false")  //consent general
                                    document.querySelector('#ot-group-id-STACK42').click()    //si el switch està activat, desactivem

                                    if(document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').getAttribute("aria-checked")!== "false")  //basic ads
                                        document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').getAttribute("aria-checked")!== "false")  //personalised ads profile
                                        document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').getAttribute("aria-checked")!== "false")  //personalised ads
                                        document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').getAttribute("aria-checked")!== "false")  //personalised content profile
                                        document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').getAttribute("aria-checked")!== "false")  //personalised content
                                        document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').getAttribute("aria-checked")!== "false")  //ad performance
                                        document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').getAttribute("aria-checked")!== "false")  //content performance
                                        document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').getAttribute("aria-checked")!== "false")  //generate audience insights
                                        document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').getAttribute("aria-checked")!== "false")  //develop and improve products
                                        document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-ISFV2_1')!== null){  //si te cookies de precise geolocation
                                document.querySelector('#ot-header-id-ISFV2_1').click()
                                if(document.querySelector('#ot-group-id-ISFV2_1').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-ISFV2_1').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-header-id-ISFV2_2')!== null){  //si te cookies de scan device for id
                                document.querySelector('#ot-header-id-ISFV2_2').click()
                                if(document.querySelector('#ot-group-id-ISFV2_2').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-ISFV2_2').click()    //si el switch està activat, desactivem
                            }

                            await waitUntilFoundAndClick(".save-preference-btn-handler");   //apliquem la configuracio
                            setCookie("PluginTFG", "1", 365);   //creem cookie propia per saber que s'han manegat les cookies
                            console.log("Cookienator: hem denegat les cookies per tu")
                            resolve(1)
                        }
                    }
                    else{   //en cas que les cookies estiguin totes a la mateixa plana
                        if(preferencies==2){    //rebutjar socis, acceptar la resta  
                            if(document.querySelector('#ot-group-id-C0002')!== null){  //si te cookies de performance
                                if(document.querySelector('#ot-group-id-C0002').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0002').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-group-id-C0003')!== null){  //si te cookies funcionals
                                if(document.querySelector('#ot-group-id-C0003').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0003').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-group-id-C0004')!== null){  //si te cookies targeting
                                if(document.querySelector('#ot-group-id-C0004').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0004').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-group-id-C0005')!== null){  //si te cookies de social media
                                if(document.querySelector('#ot-group-id-C0005').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0005').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-group-id-IABV2_1')!== null){  //si te cookies de desar/accediar info del dispositiu
                                if(document.querySelector('#ot-group-id-IABV2_1').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-IABV2_1').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-group-id-STACK42')!== null){  //si te cookies de anuncis personalitzats
                                if(document.querySelector('#ot-group-id-STACK42').getAttribute("aria-checked")== "false")  //consent general
                                    document.querySelector('#ot-group-id-STACK42').click()    //si el switch està desactivat, l'activem

                                    if(document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').getAttribute("aria-checked")== "false")  //basic ads
                                        document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').getAttribute("aria-checked")== "false")  //personalised ads profile
                                        document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').getAttribute("aria-checked")== "false")  //personalised ads
                                        document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').getAttribute("aria-checked")== "false")  //personalised content profile
                                        document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').getAttribute("aria-checked")== "false")  //personalised content
                                        document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').getAttribute("aria-checked")== "false")  //ad performance
                                        document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').getAttribute("aria-checked")== "false")  //content performance
                                        document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').getAttribute("aria-checked")== "false")  //generate audience insights
                                        document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').getAttribute("aria-checked")== "false")  //develop and improve products
                                        document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-group-id-ISFV2_1')!== null){  //si te cookies de precise geolocation
                                if(document.querySelector('#ot-group-id-ISFV2_1').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-ISFV2_1').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-group-id-ISFV2_2')!== null){  //si te cookies de scan device for id
                                if(document.querySelector('#ot-group-id-ISFV2_2').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-ISFV2_2').click()    //si el switch està desactivat, l'activem
                            }

                            await waitUntilFoundAndClick(".save-preference-btn-handler");   //apliquem la configuracio
                            setCookie("PluginTFG", "1", 365);   //creem cookie propia per saber que s'han manegat les cookies
                            console.log("Cookienator: hem acceptat les cookies però denegat els vendors per tu")
                            resolve(1)
                            
                        }

                        else if(preferencies==3){   //rebutjar socis, rebutjar algunes(perfil i tal)
                            if(document.querySelector('#ot-group-id-C0002')!== null){  //si te cookies de performance
                                if(document.querySelector('#ot-group-id-C0002').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0002').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-group-id-C0003')!== null){  //si te cookies funcionals
                                if(document.querySelector('#ot-group-id-C0003').getAttribute("aria-checked")== "false")
                                    document.querySelector('#ot-group-id-C0003').click()    //si el switch està desactivat, l'activem
                            }
                            if(document.querySelector('#ot-group-id-C0004')!== null){  //si te cookies targeting
                                if(document.querySelector('#ot-group-id-C0004').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0004').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-C0005')!== null){  //si te cookies de social media
                                if(document.querySelector('#ot-group-id-C0005').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0005').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-IABV2_1')!== null){  //si te cookies de desar/accediar info del dispositiu
                                if(document.querySelector('#ot-group-id-IABV2_1').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-IABV2_1').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-STACK42')!== null){  //si te cookies de anuncis personalitzats
                                if(document.querySelector('#ot-group-id-STACK42').getAttribute("aria-checked")!== "false")  //consent general
                                    document.querySelector('#ot-group-id-STACK42').click()    //si el switch està activat, desactivem

                                    if(document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').getAttribute("aria-checked")== "false")  //basic ads
                                        document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').click()    //si el switch està desactivat, l'activem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').getAttribute("aria-checked")!== "false")  //personalised ads profile
                                        document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').getAttribute("aria-checked")!== "false")  //personalised ads
                                        document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').getAttribute("aria-checked")!== "false")  //personalised content profile
                                        document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').getAttribute("aria-checked")!== "false")  //personalised content
                                        document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').getAttribute("aria-checked")!== "false")  //ad performance
                                        document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').getAttribute("aria-checked")!== "false")  //content performance
                                        document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').getAttribute("aria-checked")!== "false")  //generate audience insights
                                        document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').getAttribute("aria-checked")!== "false")  //develop and improve products
                                        document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-ISFV2_1')!== null){  //si te cookies de precise geolocation
                                if(document.querySelector('#ot-group-id-ISFV2_1').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-ISFV2_1').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-ISFV2_2')!== null){  //si te cookies de scan device for id
                                if(document.querySelector('#ot-group-id-ISFV2_2').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-ISFV2_2').click()    //si el switch està activat, desactivem
                            }

                            await waitUntilFoundAndClick(".save-preference-btn-handler");   //apliquem la configuracio
                            setCookie("PluginTFG", "1", 365);   //creem cookie propia per saber que s'han manegat les cookies
                            console.log("Cookienator: hem denegat els vendors i les cookies de perfil per tu")
                            resolve(1)            
                        }
                        else{   //preferencies = 4 rebutjar TOT
                            if(document.querySelector('#ot-group-id-C0002')!== null){  //si te cookies de performance
                                if(document.querySelector('#ot-group-id-C0002').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0002').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-C0003')!== null){  //si te cookies funcionals
                                if(document.querySelector('#ot-group-id-C0003').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0003').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-C0004')!== null){  //si te cookies targeting
                                if(document.querySelector('#ot-group-id-C0004').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0004').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-C0005')!== null){  //si te cookies de social media
                                if(document.querySelector('#ot-group-id-C0005').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-C0005').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-IABV2_1')!== null){  //si te cookies de desar/accediar info del dispositiu
                                if(document.querySelector('#ot-group-id-IABV2_1').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-IABV2_1').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-STACK42')!== null){  //si te cookies de anuncis personalitzats
                                if(document.querySelector('#ot-group-id-STACK42').getAttribute("aria-checked")!== "false")  //consent general
                                    document.querySelector('#ot-group-id-STACK42').click()    //si el switch està activat, desactivem

                                    if(document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').getAttribute("aria-checked")!== "false")  //basic ads
                                        document.querySelector('#ot-sub-group-id-IABV2_2-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').getAttribute("aria-checked")!== "false")  //personalised ads profile
                                        document.querySelector('#ot-sub-group-id-IABV2_3-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').getAttribute("aria-checked")!== "false")  //personalised ads
                                        document.querySelector('#ot-sub-group-id-IABV2_4-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').getAttribute("aria-checked")!== "false")  //personalised content profile
                                        document.querySelector('#ot-sub-group-id-IABV2_5-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').getAttribute("aria-checked")!== "false")  //personalised content
                                        document.querySelector('#ot-sub-group-id-IABV2_6-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').getAttribute("aria-checked")!== "false")  //ad performance
                                        document.querySelector('#ot-sub-group-id-IABV2_7-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').getAttribute("aria-checked")!== "false")  //content performance
                                        document.querySelector('#ot-sub-group-id-IABV2_8-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').getAttribute("aria-checked")!== "false")  //generate audience insights
                                        document.querySelector('#ot-sub-group-id-IABV2_9-leg-out').click()    //si el switch està activat, desactivem
                                    if(document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').getAttribute("aria-checked")!== "false")  //develop and improve products
                                        document.querySelector('#ot-sub-group-id-IABV2_10-leg-out').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-ISFV2_1')!== null){  //si te cookies de precise geolocation
                                if(document.querySelector('#ot-group-id-ISFV2_1').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-ISFV2_1').click()    //si el switch està activat, desactivem
                            }
                            if(document.querySelector('#ot-group-id-ISFV2_2')!== null){  //si te cookies de scan device for id
                                if(document.querySelector('#ot-group-id-ISFV2_2').getAttribute("aria-checked")!== "false")
                                    document.querySelector('#ot-group-id-ISFV2_2').click()    //si el switch està activat, desactivem
                            }

                            await waitUntilFoundAndClick(".save-preference-btn-handler");   //apliquem la configuracio
                            setCookie("PluginTFG", "1", 365);   //creem cookie propia per saber que s'han manegat les cookies
                            console.log("Cookienator: hem denegat les cookies per tu")
                            resolve(1)
                        }
                    }                   
                });                
            }
    } 
})
}