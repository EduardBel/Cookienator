async function didomi(preferencies) {
    if(document.cookie.match("euconsent-v2")){
        console.log("Cookienator: les cookies d'aquest lloc ja havien estat manegades")
        return 0
    } 
    else{
        if(preferencies==1){
            await waitUntilFoundAndClick('#didomi-notice-agree-button');  //acceptem tot
            if(document.cookie.match("euconsent-v2")){
                console.log("Cookienator: hem acceptat les cookies per tu")
                return 1
            }
        }
        else {
            await waitUntilFoundAndClick('#didomi-notice-learn-more-button'); //cliquem a configuracio de cookies
            await waitUntilFoundAndClick('.didomi-consent-popup-view-vendors-list-link')  //cliquem els vendors
            await waitUntilFoundAndClick('.didomi-components-radio .didomi-components-radio__option--unselected:first-child') //els bloquejem tots
            await waitUntilFoundAndClick('[aria-describedby="didomi-popup-vendors-title"]') //desem i tornem a la configuracio
            if(preferencies==2){    //rebutjar socis, acceptar la resta
                await waitUntilFoundAndClick('.didomi-components-radio .didomi-components-radio__option--unselected:nth-child(2)');  //fem que si a tot
                await waitUntilFoundAndClick('[aria-describedby="didomi-consent-popup-information-save"]')  //guardem
                
                if(document.cookie.match("euconsent-v2")){
                    console.log("Cookienator: hem acceptat les cookies però denegat els vendors per tu")
                    return 1
                } 
            }
            else if(preferencies==3){   //rebutjar socis, rebutjar algunes(perfil i tal)
                await waitUntilFoundAndClick('.didomi-components-radio .didomi-components-radio__option--unselected:first-child');  //fem que no a tot

                if(document.querySelector('[aria-describedby="didomi-purpose-geolocation_data"]:nth-child(2)')!== null)
                    document.querySelector('[aria-describedby="didomi-purpose-geolocation_data"]:nth-child(2)').click();  // //acceptem les concretes
                if(document.querySelector('[aria-describedby="didomi-purpose-improve_products"]:nth-child(2)')!==null)
                    document.querySelector('[aria-describedby="didomi-purpose-improve_products"]:nth-child(2)').click();
                if(document.querySelector('[aria-describedby="didomi-purpose-market_research"]:nth-child(2)')!==null)
                    document.querySelector('[aria-describedby="didomi-purpose-market_research"]:nth-child(2)').click();
                if(document.querySelector('[aria-describedby="didomi-purpose-measure_content_performance"]:nth-child(2)')!==null)
                    document.querySelector('[aria-describedby="didomi-purpose-measure_content_performance"]:nth-child(2)').click();
                if(document.querySelector('[aria-describedby="didomi-purpose-measure_ad_performance"]:nth-child(2)')!==null)
                    document.querySelector('[aria-describedby="didomi-purpose-measure_ad_performance"]:nth-child(2)').click();
                if(document.querySelector('[aria-describedby="didomi-purpose-select_basic_ads"]:nth-child(2)')!==null)
                    document.querySelector('[aria-describedby="didomi-purpose-select_basic_ads"]:nth-child(2)').click();
                if(document.querySelector('[aria-describedby="didomi-purpose-cookies"]:nth-child(2)')!==null)
                    document.querySelector('[aria-describedby="didomi-purpose-cookies"]:nth-child(2)').click();
                if( document.querySelector('[aria-describedby="didomi-purpose-geo_marketing_studies"]:nth-child(2)')!==null)
                    document.querySelector('[aria-describedby="didomi-purpose-geo_marketing_studies"]:nth-child(2)').click();

                await waitUntilFoundAndClick('[aria-describedby="didomi-consent-popup-information-save"]')  //guardem
                
                if(document.cookie.match("euconsent-v2")){
                    console.log("Cookienator: hem denegat els vendors i les cookies de perfil per tu")
                    return 1
                }                
            }
            else{   //preferencies = 4 rebutjar TOT
                await waitUntilFoundAndClick('.didomi-components-radio .didomi-components-radio__option--unselected:first-child');  //fem que no a tot
                await waitUntilFoundAndClick('[aria-describedby="didomi-consent-popup-information-save"]')  //guardem

                if(document.cookie.match("euconsent-v2")){
                    console.log("Cookienator: hem denegat les cookies per tu")
                    return 1
                } 
            }
        } 
    } 


}