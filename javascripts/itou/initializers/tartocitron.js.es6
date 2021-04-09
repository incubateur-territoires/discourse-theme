import { withPluginApi } from "discourse/lib/plugin-api";
import { loadScript, loadCSS } from "discourse/lib/load-script"

function initializeTarteaucitron(api) {
  loadCSS("https://cdn.jsdelivr.net/gh/AmauriC/tarteaucitron.js@1.8.4/css/tarteaucitron.css").then(()=>{
    loadScript("https://cdn.jsdelivr.net/gh/AmauriC/tarteaucitron.js@1.8.4/tarteaucitron.js").then(()=>{
      tarteaucitron.init({
        "bodyPosition": "top",  /* Put the banner at the beginning of the DOM for screen readers */
          "privacyUrl": "",  /* Privacy policy url */
          "hashtag": "#tarteaucitron",  /* Open the panel with this hashtag */
          "cookieName": "tarteaucitron", /* Cookie name */
          "orientation": "top",  /* Put the banner at the top to help visually impaired people */
          "showAlertSmall": false,  /* Show the small banner on bottom right */
          "cookieslist": false,  /* Show the cookie list */
          "adblocker": false,  /* Show a Warning if an adblocker is detected */
          "AcceptAllCta" : true,  /* Show the accept all button when highPrivacy on */
          "highPrivacy": true,  /* Disable auto consent */
          "handleBrowserDNTRequest": false,  /* If Do Not Track == 1, disallow all */
          "removeCredit": true,  /* Remove credit link */
          "moreInfoLink": true,  /* Show more info link */
          "useExternalCss": true,  /* If false, the tarteaucitron.css file will be loaded */
          "readmoreLink": "https://doc.inclusion.beta.gouv.fr/mentions/protection-des-donnees",  /* Change the default readmore link */
          "mandatory": false,  /* Show a message about mandatory cookies */
      });

      (tarteaucitron.job = tarteaucitron.job || []).push('hotjar');
      tarteaucitron.user.hotjarId = `${settings.hotjar_site_id}`;
    })
  })
}

export default {
  name: "run-tartocitron",
  initialize(){
    withPluginApi("0.8.7", api => initializeTarteaucitron(api));
  }
}
