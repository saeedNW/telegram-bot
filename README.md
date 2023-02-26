# telegram-bot

***

## Requirements:

+ [Ngrok](https://ngrok.com/)
+ Node.js
+ Telegram bot token

***

## Initialization

After you have ngrok installed and running. Create an env file like ".env.example" and replace the value of "SERVER_URL"
with the URL received from ngrok (note that every time that you rerun ngrok you'll receives a new link)

After that open telegram and search for [BotFather](https://t.me/BotFather) and create a new bot. replace the value of
TOKEN in env file with the token received from [BotFather](https://t.me/BotFather)

***

## run bot

There are two ways to run this bot project, bot before that you need to install application dependencies

```shell
npm install
```

```shell
npm run dev:simpleApp # will run a simple bot which works directly with telegram APIs
```

```shell
npm run dev:telegraf # will run a bot which uses telegraf module to integrate with telegram webhooks
```