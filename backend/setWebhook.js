require('dotenv').config();
const axios = require('axios');

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEB_APP_URL = process.env.WEB_APP_URL;

async function setMenu() {
  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/setMyCommands`;
    await axios.post(url, {
      commands: [
        { command: 'start', description: 'Web App ni ochish' }
      ]
    });

    const menuButtonUrl = `https://api.telegram.org/bot${BOT_TOKEN}/setChatMenuButton`;
    await axios.post(menuButtonUrl, {
      menu_button: {
        type: 'web_app',
        text: 'Buyurtma berish',
        web_app: { url: WEB_APP_URL }
      }
    });

    console.log('Web App tugmasi o‘rnatildi!');
  } catch (error) {
    console.error('Xatolik:', error.response?.data || error.message);
  }
}

setMenu();