import wbm from 'wbm';
import 'dotenv/config';
async function WPP() {
  const session = await wbm.start();
  await wbm.send([process.env.TEST_NUMBER, process.env.TEST_NUMBER2], 'roi');
  await wbm.end();
}

WPP();
