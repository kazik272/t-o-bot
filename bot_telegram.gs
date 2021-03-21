// 1. Chat với BotFather để tạo bot mới
// 2. Lưu lại BotSecret
// 3. Vào Telegram add con bot đó vào 1 group
// 4. Chạy lệnh sau đây để kiếm chatId:
// https://api.telegram.org/bot1763975591:AAEKBpzLd1UL7_HujpzmQYLohqsSwakf6QU/getUpdates
// 5. Dùng ChatId cho function như trên hình

function sendTelegramNotification(botSecret, chatId, body) { 
  var response = UrlFetchApp.fetch("https://api.telegram.org/bot" + botSecret + "/sendMessage?text=" + encodeURIComponent(body) + "&chat_id=" + chatId + "&parse_mode=HTML"); 
}
// 1763975591:AAEKBpzLd1UL7_HujpzmQYLohqsSwakf6QU
// -563304708

function mySendMessage() {
  const BOT_SECRET = '1763975591:AAEKBpzLd1UL7_HujpzmQYLohqsSwakf6QU';
  const CHAT_ID = '-563304708';
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const range = ss.getRange(`Sheet1!A${ss.getLastRow()}:B${ss.getLastRow()}`).getValues();

  Logger.log(range);
  sendTelegramNotification(BOT_SECRET, CHAT_ID,
  `Name: ${range[0][0]}
Email: ${range[0][1]}`);
}