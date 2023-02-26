/** initialize .env file */
require("dotenv").config();

/** Add the root project directory to the app module search path */
require('app-module-path').addPath(__dirname);

/**
 * define server port
 * @type {number|number}
 */
const PORT = parseInt(process.env.PORT, 10) || 3000;

/** import express */
const express = require("express");
/** import axios */
const {default: axios} = require("axios");

/** initialize app */
const app = express();

/** get data from env */
const {TELEGRAM_BOT_URL, TOKEN, SERVER_URL} = process.env;

/** initialize express json body parser */
app.use(express.json());
/** initialize express urlencoded body parser */
app.use(express.urlencoded({extended: true}));

/** define telegram bot api */
const telegramApi = TELEGRAM_BOT_URL + TOKEN;
/** define server webhook URI */
const serverWebhookURI = `/webhook/${TOKEN}`;
/** define server webhook URL */
const serverWebhookURL = SERVER_URL + serverWebhookURI;

/** define telegram bot initializer */
const initTelegramBot = async () => {
    const response = await axios.get(`${telegramApi}/setWebhook?url=${serverWebhookURL}`);

    console.log("Telegram bot connection response: " + response.data.description)
}

/**
 * initialize telegram webhook
 */
app.post(serverWebhookURI, async (req, res) => {
    /** get chat id from request */
    const {id: chat_id} = req.body.message.chat;
    /** get chat text from request */
    const {text} = req.body.message;

    /** send response */
    await axios.post(`${telegramApi}/sendMessage`, {
        chat_id,
        text
    })


    return res.send();
});

app.listen(PORT, async () => {
    console.log(`running > http://localhost:${PORT}`, `time: ${new Date()}`);

    /** initialize telegram bot */
    await initTelegramBot();

})