# Sprint 1 — Estrutura base

**Início:** 28/06/2026  
**Conclusão:** 28/06/2026  
**Status:** ✅ Concluído

---

## O que foi feito

Nesse sprint configurei o Prisma ORM no projeto e conectei com o banco MySQL local. Criei o banco `criatta` pelo MySQL Workbench e defini todas as tabelas necessárias pro e-commerce no `schema.prisma`. Depois rodei a primeira migration pra criar tudo no banco.

---

## Tabelas criadas

| Tabela | Descrição |
|---|---|
| `admin` | Administradora da loja |
| `usuario` | Clientes da loja |
| `endereco` | Endereços de entrega |
| `categoria` | Categorias dos produtos |
| `produto` | Produtos da loja |
| `fotoproduto` | URLs das fotos no Cloudinary |
| `pedido` | Compras realizadas |
| `itempedido` | Itens de cada pedido |
| `pagamento` | Transações do Mercado Pago |
| `banner` | Imagens do banner da home |
| `newsletter` | Emails cadastrados |

---

## Comandos utilizados

```bash
# Instalar o Prisma
npm install prisma @prisma/client

# Inicializar com MySQL
npx prisma init --datasource-provider mysql

# Criar as tabelas no banco
npx prisma migrate dev --name init
```

---

## Decisões técnicas

- MySQL local para desenvolvimento, Clever Cloud em produção
- Prisma escolhido pela integração com TypeScript e facilidade de migrations
- Extensão do Prisma instalada no VS Code

---

## Próximo sprint

Sprint 2 — Páginas públicas (home, listagem e página de produto)