import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
// Importo o componente de link do Next.js e os icones de telefone e email do Lucide.

// ── Links do footer ───────────────────────────────────────
const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Categorias', href: '/categorias' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]
// Array com os links rapidos do footer. Fica fora do componente porque e um valor fixo
// nao precisa ser recriado a cada renderizacao.

export default function Footer() {
  return (
    <footer className="bg-[#F5F0EA] text-[#3D4451] mt-auto border-t border-[#EDE6DC]">
    {/* bg-[#F5F0EA] → fundo bege igual ao header, mantendo coesao visual
    text-[#3D4451] → cor padrao do texto cinza escuro
    mt-auto → empurra o footer pro final da pagina
    border-t border-[#EDE6DC] → linha divisoria sutil no topo do footer */}

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* max-w-7xl mx-auto → limita a largura e centraliza o conteudo
      grid grid-cols-1 md:grid-cols-3 → no mobile fica em coluna unica, no desktop divide em 3 colunas
      gap-10 → espacamento entre as colunas */}

        {/* Coluna 1 - Criatta */}
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-[#3D4451]">Criatta</p>
          {/* Nome da loja em destaque no topo da primeira coluna */}

          <p className="text-sm text-[#3D4451]">
            Pensou, criou, Criatta. Produtos unicos e personalizados feitos com amor e dedicacao.
          </p>
          {/* Descricao curta da loja */}

          <a
            href="https://www.instagram.com/usecriatta"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-sm text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200 w-fit group"
          >
            @usecriatta
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8963E] transition-all duration-300 group-hover:w-full" />
          </a>
          {/* Link do Instagram com animacao de underline dourado igual ao menu do header
          target="_blank" → abre em nova aba
          rel="noopener noreferrer" → seguranca ao abrir links externos
          w-0 → underline comeca invisivel
          group-hover:w-full → expande ao passar o mouse */}
        </div>

        {/* Coluna 2 - Links rapidos */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#3D4451]">
            Links rapidos
          </h3>
          {/* uppercase tracking-widest → titulo em maiusculas com letras espacadas */}

          <ul className="flex flex-col gap-2">
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative inline-block text-sm text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8963E] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          {/* links.map → percorro o array de links e renderizo um item pra cada um
          key={link.href} → identificador unico de cada item pra o React controlar a lista
          group-hover:w-full → underline dourado expande ao passar o mouse no link */}
        </div>

        {/* Coluna 3 - Atendimento */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#3D4451]">
            Atendimento
          </h3>

          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="https://wa.me/5585987342773"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 text-sm text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200 group"
              >
                <Phone size={16} />
                (85) 98734-2773
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8963E] transition-all duration-300 group-hover:w-full" />
              </a>
              {/* wa.me/55... → formato oficial do WhatsApp pra links diretos
              55 = codigo do Brasil, 85 = DDD de Fortaleza */}
            </li>
            <li>
              <a
                href="mailto:usecriatta@proton.me"
                className="relative inline-flex items-center gap-2 text-sm text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200 group"
              >
                <Mail size={16} />
                usecriatta@proton.me
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8963E] transition-all duration-300 group-hover:w-full" />
              </a>
              {/* mailto: → abre o app de email do dispositivo com o destinatario preenchido */}
            </li>
          </ul>
        </div>

      </div>

      {/* Rodape final */}
      <div className="border-t border-[#EDE6DC] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#3D4451]">
          {/* flex-col md:flex-row → no mobile empilhado, no desktop lado a lado
          justify-between → copyright na esquerda e credito na direita */}

          <span>2026 Criatta - Todos os direitos reservados</span>

          <a
            href="https://github.com/LuanVs10"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block hover:text-[#B8963E] transition-colors duration-200 group"
          >
            Desenvolvido por LuanVs10
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8963E] transition-all duration-300 group-hover:w-full" />
          </a>
          {/* Link clicavel pro GitHub com animacao de underline dourado */}
        </div>
      </div>

    </footer>
  )
}