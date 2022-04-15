import { PrismaClient } from '@prisma/client';
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

  const pessoas = await prisma.$queryRaw`SELECT * FROM pessoa`;
  console.log(pessoas);
}

DB();
