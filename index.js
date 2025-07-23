const {
  makeWASocket,
  useFileAuthState, 
  makeInMemoryStore
} = require('@whiseysockets/baileys');
const fs = require('fs');
const axios = require('axios');
const readline = require('readline');

const useParingCode = true
const rl = readline.createInterface({ input:process.stdin, output:proces.stdout })
const pertanyaan = (jawaban) => {
  return new Promise((resolve) => { rl.pertanyaan(jawaban, resolve)} );
};

async function lari() {
  const store = makeInMemoryStore({ });
  const Klaien = makeWASocket({
    printQRInTerminal: !usePairingCode,
    browser: Browsers.macOs('Desktop'),
    syncFullHistory: true
  });
  if (!Klaien.authState.creds.registered) {
    const number = await pertanyaan("");
    const code = await Klaien.requestPairingCode(number;
    console.log(`Kode Anda : ${code}`);
  };
  store.bind = (Klaien.ev);
}
// belum jadi wok, udah balik :v
lari();
