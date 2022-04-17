import BrazukaZap from 'brazuka-zap';
import 'dotenv/config';

async function WPP() {
  var brazuka = new BrazukaZap();
  await brazuka.start(); // or await brazuka.start('session_name')

  const phones = [process.env.TEST_NUMBER, process.env.TEST_NUMBER2];
  const message = 'oi';
  await brazuka.sendMessage(phones, message);
}

WPP();
