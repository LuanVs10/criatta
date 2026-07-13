import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
// Aqui importo os pesos da fonte Inter que vou usar no projeto. Cada número representa um
// peso diferente:
// 400 → normal
// 500 → medium
// 600 → semibold
// 700 → bold

import "./globals.css";
// Importo o CSS global que configurei com as cores e reset da Criatta.

import Header from "@/components/layout/Header";
// Importo o componente Header pra ele aparecer em todas as páginas da aplicação.
// O @/ é o alias configurado no tsconfig que aponta pra pasta src/.

export const metadata: Metadata = {
  title: "Criatta — Produtos Personalizados",
  description: "Loja de produtos personalizados. Pensou, criou, Criatta.",
};
// Define as informações que aparecem na aba do navegador e no Google. O title é o nome da
// aba e o description é o texto que aparece nos resultados de busca — importante pro SEO.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
// Aqui defino o layout raiz da aplicação — tudo que estiver dentro do RootLayout aparece
// em todas as páginas.

// export default → exporta o componente pra poder ser importado em outros arquivos
// function RootLayout → declaro a função que representa o layout raiz
// children → parâmetro que recebe o conteúdo de cada página
// Readonly<{}> → garante que as props não sejam modificadas dentro do componente
// React.ReactNode → tipo do TypeScript que aceita qualquer coisa renderizável

// <html lang="pt-BR"> → define o idioma como português brasileiro, importante pra
// acessibilidade e SEO
// h-full → html ocupa a altura total da tela
// min-h-full flex flex-col → body ocupa a altura total e empilha os elementos em coluna,
// garantindo que o footer fique sempre no rodapé
// <Header /> → renderizo o header antes do conteúdo de cada página
// {children} → onde cada página é renderizada dentro do layout