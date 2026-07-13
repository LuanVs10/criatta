import { PrismaClient } from '../../src/generated/prisma'
// Importa o client gerado pelo Prisma com todos os tipos das suas tabelas.

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}
//Cria uma referência ao objeto global da aplicação pra poder guardar a instância do Prisma
//nele. O as unknown as é só pra o TypeScript aceitar sem reclamar.

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient()
// Se já existe uma instância salva no global, usa ela. Se não existe, cria uma nova.
// O ?? significa "se for null ou undefined, usa o lado direito".

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
// Em desenvolvimento salva a instância no global pra reutilizar a cada recarga.
// Em produção não faz isso porque o servidor não recarrega.

//npx prisma generate
// Esse comando lê o schema.prisma e gera o Prisma Client — que é o código
// TypeScript com todos os tipos e métodos baseados nas suas tabelas.
// É ele que permite você escrever prisma.produto.findMany() e o TypeScript já
// saber que produto existe e quais campos ele tem.
// Sempre que você alterar o schema.prisma (adicionar tabela, coluna, etc),
// precisa rodar esse comando de novo pra atualizar o client