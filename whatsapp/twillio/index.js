import 'dotenv/config';
const accountSid = process.env.TWILLIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILLIO_TOKEN; // Your Auth Token from www.twilio.com/console

import Twillio from 'twilio';
const client = Twillio(accountSid, authToken);

// console.log(client);

client.messages
  .create({
    body: 'Hello from Node',
    to: `whatsapp:${process.env.TEST_NUMBER}`, // Text this number
    from: process.env.TWILLIO_VALID_NUMBER, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
