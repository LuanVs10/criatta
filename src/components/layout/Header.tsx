'use client'
// Indica pro Next.js que esse componente roda no navegador do cliente, não no servidor.
// Necessário porque uso useState e useEffect — que só funcionam no lado do cliente.

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'
// Aqui importo os hooks do React, o componente de link e imagem do Next.js e os ícones do
// Lucide que vou usar no header.

// ── Textos da barra superior ──────────────────────────────
const marqueeTexts = [
  'Feito com amor e dedicação 🤍',
  'Pensou, criou, Criatta ✨',
  'Produtos únicos e personalizados',
]
// Array com os textos que vão rodar na barra superior. Fica fora do componente porque é
// um valor fixo — não precisa ser recriado a cada renderização.

// ── Links do menu ─────────────────────────────────────────
const menuLinks = [
  { label: 'Início', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Categorias', href: '/categorias' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]
// Array com os links do menu de navegação. Cada item tem o texto que aparece (label) e
// o caminho da rota (href). Fica fora do componente pelo mesmo motivo acima.

// ── Estados do componente ──────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [marqueeIndex, setMarqueeIndex] = useState(0)
//   Declaro os estados do header:
// scrolled → controla se o header tem sombra ao rolar
// searchOpen → controla se a borda da busca está dourada
// searchQuery → armazena o texto digitado na busca
// menuOpen → controla se o menu mobile está aberto
// marqueeIndex → controla qual texto da barra superior está aparecendo

  // ── Sombra no header ao rolar a página ──────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Escuto o evento de scroll da página. Se o usuário rolou mais de 10px, scrolled vira
  // true e o header ganha sombra. O return remove o listener quando o componente sai da
  // tela, evitando vazamento de memória.

  // ── Troca o texto da barra superior a cada 3 segundos ───────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setMarqueeIndex(prev => (prev + 1) % marqueeTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  // A cada 3 segundos incremento o marqueeIndex pra trocar o texto da barra superior. O
  // % marqueeTexts.length faz o índice voltar pro zero quando chega no último texto — 
  // criando um loop. O return limpa o interval quando o componente sai da tela.

  return (
    <header className={`sticky top-0 z-50 bg-[#F5F0EA] transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
    {/* sticky top-0 → header fica fixo no topo ao rolar
  z-50 → fica na frente de todos os outros elementos
  transition-shadow duration-300 → animação suave na sombra
  scrolled ? 'shadow-md' : '' → adiciona sombra se rolou a página */}

      {/* Barra superior */}
      <div className="bg-[#3D4451] text-[#F5F0EA] text-xs py-2 text-center overflow-hidden">
        <span
          key={marqueeIndex}
          className="inline-block animate-fade-in"
        >
          {marqueeTexts[marqueeIndex]}
        </span>
      </div>
      {/* Exibo o texto atual do array usando o marqueeIndex. O key={marqueeIndex} faz o
       React recriar o elemento a cada troca, disparando a animação de fade. O
      overflow-hidden esconde qualquer conteúdo que saia dos limites da barra. */}

      {/* Header principal */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Criatta"
            width={120}
            height={48}
            className="object-contain"
          />
        </Link>
        {/* Exibo a logo que está em public/images/logo.webp. O shrink-0 impede que a logo
        encolha quando a busca expandir. O object-contain mantém a proporção da imagem. */}

        {/* Busca */}
        <div className="flex-1 relative">
          <div className={`flex items-center border rounded-full overflow-hidden transition-all duration-300 ${searchOpen ? 'border-[#B8963E]' : 'border-[#7A8494]'}`}>
            <input
              type="text"
              placeholder="O que você está buscando?"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
              className="flex-1 px-4 py-2 text-sm bg-transparent outline-none text-[#3D4451] placeholder:text-[#7A8494]"
            />
            <button className="px-4 py-2 text-[#7A8494] hover:text-[#B8963E] transition-colors duration-200">
              <Search size={18} />
            </button>
          </div>
        </div>
{/* flex-1 relative → ocupa todo o espaço disponível entre a logo e os ícones, e permite
posicionamento absoluto de elementos filhos se precisar
border rounded-full → borda arredondada no estilo pill
transition-all duration-300 → qualquer mudança de estilo acontece com animação de 300ms
searchOpen ? 'border-[#B8963E]' : 'border-[#7A8494]' → se o input estiver em foco a borda fica dourada, se não estiver fica cinza
type="text" → campo de texto simples
placeholder → texto que aparece quando o input está vazio
value={searchQuery} → valor controlado pelo estado, o input sempre reflete o que está em searchQuery
onChange={e => setSearchQuery(e.target.value)} → a cada tecla digitada atualiza o estado searchQuery com o valor atual do input
onFocus={() => setSearchOpen(true)} → quando o usuário clica no input, searchOpen vira true e a borda fica dourada
onBlur={() => setSearchOpen(false)} → quando o usuário sai do input, searchOpen vira false e a borda volta a ser cinza
bg-transparent → fundo transparente pra herdar o fundo bege do header
outline-none → remove a borda azul padrão do navegador ao focar no input
placeholder:text-[#7A8494] → cor cinza no texto do placeholder
hover:text-[#B8963E] → ícone da lupa fica dourado ao passar o mouse */}

        {/* Login e Carrinho */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/login"
            className="flex flex-col items-center text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200"
          >
            <User size={22} />
            <span className="text-xs mt-0.5">Login</span>
          </Link>
          {/* Ícone com texto embaixo igual ao site de referência. O hover:text-[#B8963E]
          muda a cor pra dourado ao passar o mouse com animação suave. */}

          <Link
            href="/carrinho"
            className="flex flex-col items-center relative text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200"
          >
            <div className="relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#B8963E] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
              {/* Bolinha dourada posicionada no canto superior direito do ícone do carrinho
              mostrando a quantidade de itens. Por enquanto está fixo em 0 — vai ser
              dinâmico quando implementarmos o carrinho no Sprint 3. */}
            </div>
            <span className="text-xs mt-0.5">Carrinho</span>
          </Link>
          

          {/* Menu mobile */}
          <button
            className="md:hidden text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* md:hidden → botão visível apenas em telas menores que 768px (mobile)
        onClick={() => setMenuOpen(!menuOpen)} → alterna entre abrir e fechar o menu a 
        cada clique
        menuOpen ? X : Menu → se o menu estiver aberto mostra o ícone de X, se estiver
        fechado mostra o ícone de hambúrguer */}

      {/* Menu de navegação — desktop */}
      <nav className="hidden md:block border-t border-[#EDE6DC]">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex gap-8">
            {menuLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative inline-block py-3 text-sm text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-[#B8963E] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* hidden md:block → nav visível apenas em telas maiores que 768px (desktop)
      border-t border-[#EDE6DC] → linha divisória bege escuro separando o header do menu
      menuLinks.map → percorro o array de links e renderizo um item de lista pra cada um
      key={link.href} → identificador único de cada item pra o React controlar a lista
      relative inline-block group → necessário pra o underline animado funcionar 
      corretamente
      w-0 → underline começa invisível com largura zero
      group-hover:w-full → quando passa o mouse no link o underline expande até a 
      largura total com animação de 300ms */}

      {/* Menu mobile — aberto */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[#EDE6DC] bg-[#F5F0EA]">
          <ul className="flex flex-col">
            {menuLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-[#3D4451] hover:text-[#B8963E] hover:bg-[#EDE6DC] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        //menuOpen && → só renderiza o menu mobile se o estado menuOpen for true
        // md:hidden → some em telas maiores que 768px
        // flex flex-col → links empilhados verticalmente
        // onClick={() => setMenuOpen(false)} → fecha o menu ao clicar em qualquer link
        // block px-4 py-3 → cada link ocupa a linha inteira facilitando o clique no mobile
      // hover:bg-[#EDE6DC] → fundo bege escuro ao passar o mouse no link
      )}
    </header>
  )
}