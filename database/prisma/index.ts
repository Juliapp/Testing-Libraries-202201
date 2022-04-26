import { PrismaClient } from '@prisma/client';
import mysqldump from 'mysqldump';
import { Cron } from 'croner';

const prisma = new PrismaClient();

// Query com o orm puro
// prisma.Pessoa.findMany().then(console.log);

// Query usando Raw Queries
async function DB() {
  // Inserção de um dado
  //await prisma.$queryRaw`
  //  INSERT INTO pessoa(nome, idade)
  // VALUES
  //   ('Mateus', 18);
  // `;
  // const pessoas = await prisma.$queryRaw`SELECT * FROM pessoa`;
  // console.log(pessoas);

  //Fazendo o backup do banco
  // QUANDO FOR FAZER O SAVE UTILIZAR O DIA PARA ELE NÃO SOBRESCREVER O ULTIMO BACKUP
  let dumpToFile = `BACKUP-${new Date().getTime()}.sql`; // DEPOIS FORMATAR BONITINHO O NOME DO ARQUIVO
  let save = await mysqldump({
    connection: {
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'teste',
    },
    dumpToFile, //
    // dumpToFile: `BACKUP-${new Date().toISOString()}.sql`, //
    // dumpToFile: './dump.sql', // Sem compressão
    // dumpToFile: './dump.sql.gz', // Com compressão
    // compressFile: true, // Com compressão
  })
    .then(() => console.log('salvou'))
    .catch(console.error);
  return save;
}

// SALVA O BANCO A CADA 5 SEGUNDOS

const job: Cron = new Cron('0/5 * * * * * ', DB);
console.log(job.running());
