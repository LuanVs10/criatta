import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Categorias', href: '/categorias' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]

export default function Footer() {
  return (
    <footer className="bg-[#F5F0EA] text-[#3D4451] mt-auto border-t border-[#EDE6DC]">

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-[#3D4451]">Criatta</p>
          <p className="text-sm text-[#3D4451]">
            Pensou, criou, Criatta. Produtos unicos e personalizados feitos com amor e dedicacao.
          </p>
          <a
            href="https://www.instagram.com/usecriatta"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-sm text-[#3D4451] hover:text-[#B8963E] transition-colors duration-200 w-fit group"
          >
            @usecriatta
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8963E] transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#3D4451]">
            Links rapidos
          </h3>
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
        </div>

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
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-[#EDE6DC] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#3D4451]">
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
        </div>
      </div>

    </footer>
  )
}