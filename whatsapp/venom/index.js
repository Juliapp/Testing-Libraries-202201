import * as venom from 'venom-bot';
import 'dotenv/config'

async function WPP(){
  try {
    const client =  await venom.create({session: 'teste'})
    // Mandando para um contato
    await client.sendText(`${process.env.TEST_NUMBER}@c.us`, 'teste mandar mensagem depois de outra')
    
    // Mandando para vários contatos (É melhor ser trocado para o Promise.All)
    // const numbers = [`${process.env.TEST_NUMBER}@c.us`, `${process.env.TEST_NUMBER2}@c.us`]
    // for(let number of numbers){
    //   await client.sendText(number, 'teste mandar mensagem pra várias pessoas')
    // }

  } catch (error) {
    console.error(error);    
  }
}

WPP()