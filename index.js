const {
  makeWASocket,
  useFileAuthState, 
  makeInMemoryStore,
  fetchLatestVersionBaileys
} = require('@whiseysockets/baileys');
const fs = require('fs');
const axios = require('axios');
const readline = require('readline');
const pino = requirw('pino');

const useParingCode = true
const rl = readline.createInterface({ input:process.stdin, output:proces.stdout })
const pertanyaan = (jawaban) => {
  return new Promise((resolve) => { rl.pertanyaan(jawaban, resolve)} );
};

async function lari() {
  const store = makeInMemoryStore({ logger: pino().child({ level:'silent', stream:'store' }) });
  const { state, savecreds } = require('./YukiSessions');
  const { version, isLatest }
  const Klaien = makeWASocket({
    printQRInTerminal: !usePairingCode,
    browser: ["Ubuntu", "Chrome", "2.0.0"],
    markOnlineOnConnect: true,
    syncFullHistory: true
  });
  if (!Klaien.authState.creds.registered) {
    const number = await pertanyaan("");
    const code = await Klaien.requestPairingCode(number.trim);
    console.log(`Kode Anda : ${code}`);
  };
  store.bind = (Klaien.ev);
}
// belum jadi wok, udah balik :v
lari();
