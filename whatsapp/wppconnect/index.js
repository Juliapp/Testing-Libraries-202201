import * as wppconnect from '@wppconnect-team/wppconnect';
import 'dotenv/config'

async function WPP() {
  try {
    const client = await wppconnect.create();
    await client.sendText(process.env.TEST_NUMBER, '👋 Hello from wppconnect!')
  }catch(err) {console.error(err)}
}

WPP()