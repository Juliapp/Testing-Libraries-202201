import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Query com o orm puro
// prisma.Pessoa.findMany().then(console.log);

// Query usando Raw Qqueries

async function DB() {
  // Inserção de um dado
  // await prisma.$queryRaw`
  // INSERT INTO Pessoa(nome, idade)
  // VALUES
  // ('Mateus', 18)
  // `;

  prisma.$queryRaw`SELECT * FROM Pessoa`.then(console.log);
}

DB();
