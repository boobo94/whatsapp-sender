import { Client } from "whatsapp-web.js";
import qrcode  from 'qrcode-terminal';
import sendMessages from "./src/sendMessages.js";
import data from "./data.js";

const client = new Client();

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');

    sendMessages(client, data)
});

client.on('authenticated', (session) => {    
    // Save the session object however you prefer.
    // Convert it to json, save it to a file, store it in a database...
    console.log('Authenticated')
});

client.on('message', message => {
    if (message.body === '!ping') {
        message.reply('pong');
    }
});

client.initialize();
