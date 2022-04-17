import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions/index.js';
import input from 'input';
import { get } from 'https';
import 'dotenv/config';

// Create a session on telegram
async function gram() {
  // const stringSession = new StringSession(['1', 'telegram/telegram/sessions']);

  const client = new TelegramClient(
    'telegram/telegram/session',
    parseInt(process.env.TELEGRAM_ID),
    process.env.TELEGRAM_HASH,
    {
      connectionRetries: 5,
    }
  );

  await client.start({
    phoneNumber: async () => await input.text('Please enter your number: '),
    password: async () => await input.text('Please enter your password: '),
    phoneCode: async () =>
      await input.text('Please enter the code you received: '),
    onError: (err) => console.log(err),
  });
  console.log(client.session.save());
}

async function gramSendMessage() {
  const client = new TelegramClient(
    'telegram/telegram/session',
    parseInt(process.env.TELEGRAM_ID),
    process.env.TELEGRAM_HASH,
    {
      connectionRetries: 5,
    }
  );

  await client.connect();

  await get(
    `https://api.telegram.org/${process.env.TELEGRAM_TOKEN}/sendContact?chat_id=1&phone_number=${process.env.TEST_NUMBER}&first_name=Dani`,
    (res) => {
      console.log(res.statusCode, res.headers);
    }
  );

  // await client.sendMessage(process.env.TEST_NUMBER, { message: 'eai' });
}

gramSendMessage();

// gram();
