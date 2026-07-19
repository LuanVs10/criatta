'use client'
// Indica pro Next.js que esse componente roda no navegador do cliente, nao no servidor.
// Necessario porque uso useState e useEffect que so funcionam no lado do cliente.

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'
// Importo os hooks do React, o componente de link e imagem do Next.js e os icones do
// Lucide que uso no header.

// ── Textos da barra superior ──────────────────────────────
const marqueeTexts = [
  'Feito com amor e dedicacao',
  'Pensou, criou, Criatta',
  'Produtos unicos e personalizados',
]
// Array com os textos que vao rodar na barra superior. Fica fora do componente porque e
// um valor fixo nao precisa ser recriado a cada renderizacao.

// ── Links do menu ─────────────────────────────────────────
const menuLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Categorias', href: '/categorias' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]
// Array com os links do menu de navegacao. Cada item tem o texto que aparece (label) e
// o caminho da rota (href). Fica fora do componente pelo mesmo motivo acima.

// ── Estados do componente ──────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [marqueeIndex, setMarqueeIndex] = useState(0)
  // scrolled → controla se o header tem sombra ao rolar
  // searchOpen → controla se a borda da busca esta dourada
  // searchQuery → armazena o texto digitado na busca
  // menuOpen → controla se o menu mobile esta aberto
  // marqueeIndex → controla qual texto da barra superior esta aparecendo

  // ── Sombra no header ao rolar a pagina ───────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Escuto o evento de scroll da pagina. Se o usuario rolou mais de 10px, scrolled vira
  // true e o header ganha sombra. O return remove o listener evitando vazamento de memoria.

  // ── Troca o texto da barra superior a cada 3 segundos ────
  useEffect(() => {
    const interval = setInterval(() => {
      setMarqueeIndex(prev => (prev + 1) % marqueeTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  // A cada 3 segundos incremento o marqueeIndex pra trocar o texto da barra superior.
  // O % marqueeTexts.length faz o indice voltar pro zero criando um loop.
  // O return limpa o interval quando o componente sai da tela.

  return (
    <header className={`sticky top-0 z-50 bg-[#F5F0EA] transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
    {/* sticky top-0 → header fica fixo no topo ao rolar
    z-50 → fica na frente de todos os outros elementos
    transition-shadow duration-300 → animacao suave na sombra
    scrolled ? 'shadow-md' : '' → adiciona sombra se rolou a pagina */}

      {/* Barra superior */}
      <div className="bg-[#3D4451] text-[#F5F0EA] text-xs py-2 text-center overflow-hidden">
        <span key={marqueeIndex} className="inline-block animate-fade-in">
          {marqueeTexts[marqueeIndex]}
        </span>
      </div>
      {/* key={marqueeIndex} → faz o React recriar o elemento a cada troca disparando a animacao
      overflow-hidden → esconde qualquer conteudo que saia dos limites da barra */}

      {/* Header principal */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Criatta"
            width={90}
            height={36}
            className="object-contain w-[90px] md:w-[120px]"
          />
        </Link>
        {/* w-[90px] md:w-[120px] → logo menor no mobile pra nao comprimir a busca
        object-contain → mantem a proporcao da imagem */}

        {/* Busca — escondida no mobile, visivel no desktop */}
        <div className="hidden md:flex flex-1 relative">
          <div className={`flex items-center w-full border rounded-full overflow-hidden transition-all duration-300 ${searchOpen ? 'border-[#B8963E]' : 'border-[#7A8494]'}`}>
            <input
              type="text"
              placeholder="O que voce esta buscando?"
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
        {/* hidden md:flex → busca escondida no mobile, aparece no desktop
        border-[#B8963E] ou border-[#7A8494] → borda dourada quando em foco, cinza quando nao */}

        {/* Login, Carrinho e Menu mobile */}
        <div className="flex items-center gap-3 ml-auto shrink-0">

          {/* Busca no mobile — so icone */}
          <button className="md:hidden text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200">
            <Search size={20} />
          </button>
          {/* md:hidden → aparece so no mobile como icone simples */}

          <Link
            href="/login"
            className="flex flex-col items-center text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200"
          >
            <User size={20} />
            <span className="text-[10px] mt-0.5 hidden md:block">Login</span>
          </Link>
          {/* hidden md:block no span → texto Login aparece so no desktop */}

          <Link
            href="/carrinho"
            className="flex flex-col items-center relative text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200"
          >
            <div className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#B8963E] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
              {/* Badge dourada com quantidade de itens — fixo em 0 ate o Sprint 3 */}
            </div>
            <span className="text-[10px] mt-0.5 hidden md:block">Carrinho</span>
          </Link>

          {/* Menu hamburguer — so no mobile */}
          <button
            className="md:hidden text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          {/* md:hidden → botao visivel apenas no mobile
          menuOpen ? X : Menu → alterna entre icone de fechar e hamburguer */}
        </div>
      </div>

      {/* Menu de navegacao — desktop */}
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
      {/* hidden md:block → nav visivel apenas no desktop
      group-hover:w-full → underline dourado expande ao passar o mouse */}

      {/* Menu mobile — aberto */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[#EDE6DC] bg-[#F5F0EA]">
          {/* Busca no mobile dentro do menu */}
          <div className="px-4 py-3 border-b border-[#EDE6DC]">
            <div className={`flex items-center border rounded-full overflow-hidden transition-all duration-300 ${searchOpen ? 'border-[#B8963E]' : 'border-[#7A8494]'}`}>
              <input
                type="text"
                placeholder="O que voce esta buscando?"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setSearchOpen(false)}
                className="flex-1 px-4 py-2 text-sm bg-transparent outline-none text-[#3D4451] placeholder:text-[#7A8494]"
              />
              <button className="px-3 py-2 text-[#7A8494]">
                <Search size={16} />
              </button>
            </div>
          </div>
          {/* Campo de busca aparece dentro do menu mobile quando aberto */}

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
          {/* onClick={() => setMenuOpen(false)} → fecha o menu ao clicar em qualquer link
          hover:bg-[#EDE6DC] → fundo bege escuro ao passar o mouse */}
        </nav>
      )}
    </header>
  )
}