import React from 'react'
import Spline from '@splinetool/react-spline'
import { CheckCircle2, Shield, LineChart, Calendar, Quote, ArrowRight } from 'lucide-react'

const BG = '#042938'
const ACCENT = '#96D4FF'

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {kicker && (
        <div className="text-sm tracking-widest uppercase text-white/60 mb-2">
          {kicker}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/70 leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-center">
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className="text-white/60 mt-1 text-sm">{label}</div>
    </div>
  )
}

export default function App() {
  return (
    <div id="home" className="min-h-screen" style={{ backgroundColor: BG }}>
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg" style={{ backgroundColor: ACCENT + '22', border: `1px solid ${ACCENT}55` }}>
                <div className="h-full w-full grid place-items-center">
                  <span className="font-extrabold" style={{ color: ACCENT }}>M</span>
                </div>
              </div>
              <span className="text-white/90 font-semibold tracking-wide">Medup</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {[
                ['Início', '#home'],
                ['Sobre', '#sobre'],
                ['Soluções', '#servicos'],
                ['Como Funciona', '#como-funciona'],
                ['Clientes', '#depoimentos'],
                ['Contato', '#contato'],
              ].map(([label, href]) => (
                <a key={href} href={href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
              <a href="#contato" className="inline-flex items-center justify-center rounded-md font-semibold px-4 py-2 transition-colors" style={{ backgroundColor: ACCENT, color: BG }}>
                Agende Consulta
              </a>
              <a href="#" className="text-sm text-white/60 hover:text-white/90">Acessar Plataforma</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20" style={{ background: ACCENT }} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs" style={{ backgroundColor: ACCENT + '22', border: `1px solid ${ACCENT}55`, color: ACCENT }}>
                Premium • Medicina + Finanças
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
                Contabilidade Premium para Médicos Exigentes
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-xl">
                Maximizando seus ganhos e sua tranquilidade — você cuida dos pacientes, nós cuidamos do resto.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contato" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold" style={{ backgroundColor: ACCENT, color: BG }}>
                  Agende seu Diagnóstico Financeiro
                  <ArrowRight size={18} />
                </a>
                <a href="#sobre" className="text-white/80 hover:text-white">Saiba mais</a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
                <Stat label="Economia Média em Impostos" value="até 20%" />
                <Stat label="Satisfação de Clientes" value="4.9/5" />
                <Stat label="Tempo Gasto com Burocracia" value="-70%" />
              </div>
            </div>
            <div className="h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre / Diferencial */}
      <section id="sobre" className="py-20 sm:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Sobre a Medup"
            title="Valor que se paga com economia e tranquilidade"
            subtitle="Nascemos para resolver uma lacuna: médicos perdem dinheiro por falta de orientação financeira. Ser premium não é cobrar caro — é entregar inteligência que se traduz em paz de espírito e economia real. Somos especialistas em atender médicos em início de carreira, evitando erros custosos desde o primeiro passo."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <LineChart className="text-white" size={22} />,
                title: 'Planejamento que gera retorno',
                text: 'Estratégias tributárias que colocam mais do seu dinheiro onde ele deve estar: com você.'
              },
              {
                icon: <Shield className="text-white" size={22} />,
                title: 'Proteção e segurança',
                text: 'Monitoramos prazos, impostos e documentos proativamente — problemas resolvidos antes de virarem dor de cabeça.'
              },
              {
                icon: <Calendar className="text-white" size={22} />,
                title: 'Tempo é seu ativo mais valioso',
                text: 'Você foca na medicina enquanto nossa equipe cuida do resto com padrão de excelência.'
              },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <div className="h-10 w-10 rounded-lg grid place-items-center mb-4" style={{ backgroundColor: ACCENT + '22', border: `1px solid ${ACCENT}55` }}>
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços 360 */}
      <section id="servicos" className="py-20 sm:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Soluções 360°"
            title="Cuidamos de todas as frentes financeiras do médico"
            subtitle="Tudo integrado e de alto padrão: menos fricção, mais resultado."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['Contabilidade & Planejamento Tributário', 'Abertura de CNPJ, enquadramento e gestão fiscal com foco em economia.'],
              ['Consultoria Financeira Personalizada', 'Organização de ganhos, despesas e fluxo de caixa do médico.'],
              ['Planejamento de Aposentadoria', 'Estratégia entre INSS e previdência privada para longo prazo.'],
              ['Seguro de Vida Profissional', 'Proteção sob medida para a realidade da medicina.'],
              ['Assessoria Jurídica', 'Suporte legal alinhado às necessidades da profissão.'],
              ['Integração de Fontes de Renda', 'Plantões, consultório, procedimentos — tudo em um único panorama.'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-white" size={20} />
                  <div>
                    <div className="text-white font-medium">{title}</div>
                    <div className="text-white/70 text-sm mt-1">{desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 sm:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Diagnóstico Inicial"
            title="Primeira conversa que já entrega clareza e oportunidades"
            subtitle="Mostramos onde você está, o que está pagando e quanto pode economizar com planejamento certo."
          />
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              ['Entendimento', 'Situação atual, fontes de renda (CLT vs PJ), objetivos.'],
              ['Esclarecimento', 'Explicamos impostos de forma didática e transparente.'],
              ['Projeção de Economia', 'Estimativa realista de economia tributária potencial.'],
              ['Plano de Ação', 'Rotina mensal em que você foca na medicina e nós no financeiro.'],
            ].map(([title, desc], i) => (
              <div key={title} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <div className="h-8 w-8 rounded-lg grid place-items-center text-sm font-semibold mb-4" style={{ backgroundColor: ACCENT + '22', border: `1px solid ${ACCENT}55`, color: ACCENT }}>{i + 1}</div>
                <div className="text-white font-medium">{title}</div>
                <div className="text-white/70 text-sm mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tranquilidade / Proatividade */}
      <section className="py-20 sm:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Tranquilidade e proatividade em ação</h3>
              <p className="text-white/70 mt-3 max-w-xl">
                Enquanto você atende um paciente, nossa equipe já resolveu a pendência fiscal. Monitoramos tudo — prazos, impostos, documentos — e avisamos antes de qualquer problema aparecer.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Monitoramento ativo', 'Checklist de conformidade', 'Alertas antecipados'].map((chip) => (
                  <span key={chip} className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/80 bg-white/5">{chip}</span>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-3 w-full">
              {['- Burocracia', '+ Clareza', '+ Tempo Livre'].map((k, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-6 text-center">
                  <div className="text-2xl font-semibold text-white">{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologia / Dashboard */}
      <section className="py-20 sm:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Tecnologia"
            title="Dashboard exclusivo com transparência total"
            subtitle="Acompanhe ganhos, impostos e economia em um só lugar, em tempo real."
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <ul className="space-y-4">
                {[
                  'Panorama consolidado de múltiplas fontes de renda',
                  'Estimativas de economia tributária e projeções',
                  'Relatórios elegantes no mesmo padrão premium do serviço',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-white" size={20} />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 sm:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Prova Social"
            title="Médicos que escolheram tranquilidade"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              ['Dr. João, Cardiologista', 'No começo da carreira eu estava perdido com finanças. A Medup me ajudou a economizar e hoje durmo tranquilo.'],
              ['Dra. Ana, Dermatologista', 'Transparência e proatividade. Consigo focar 100% nos pacientes sabendo que está tudo em dia.'],
              ['Dr. Pedro, Ortopedista', 'O planejamento tributário certo fez toda a diferença no meu fluxo de caixa. Vale cada centavo.'],
            ].map(([author, text]) => (
              <figure key={author} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <Quote className="text-white/60" size={20} />
                <blockquote className="text-white/80 mt-3">“{text}”</blockquote>
                <figcaption className="text-white/60 text-sm mt-3">{author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Palavra do Fundador */}
      <section className="py-20 sm:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-12 grid lg:grid-cols-[1fr_320px] gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Palavra do Fundador</h3>
              <p className="text-white/80 mt-4 max-w-2xl">
                “Após anos vendo colegas médicos perdendo dinheiro por falta de orientação, decidi criar a Medup para ser o anjo da guarda financeiro do médico. Enquanto você salva vidas, nós salvamos seu tempo e dinheiro.”
              </p>
              <div className="mt-4 text-white/60">Tiago — Fundador</div>
            </div>
            <div className="h-48 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-white/60">
              Foto profissional do fundador
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 sm:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Próximo passo"
            title="Pronto para ter tranquilidade financeira?"
            subtitle="Fale conosco e agende seu diagnóstico gratuito."
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <form className="rounded-2xl bg-white/5 border border-white/10 p-6 grid grid-cols-1 gap-4" action="https://formspree.io/f/xknldqpk" method="POST">
              <input required name="nome" placeholder="Seu nome" className="w-full rounded-md bg-transparent border border-white/15 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2" style={{ borderColor: ACCENT + '55' }} />
              <input required type="email" name="email" placeholder="Seu e-mail" className="w-full rounded-md bg-transparent border border-white/15 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2" style={{ borderColor: ACCENT + '55' }} />
              <input name="telefone" placeholder="Seu telefone (opcional)" className="w-full rounded-md bg-transparent border border-white/15 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2" style={{ borderColor: ACCENT + '55' }} />
              <textarea required name="mensagem" placeholder="Conte rapidamente sua situação (CLT, PJ, ganhos, dúvidas)" rows={4} className="w-full rounded-md bg-transparent border border-white/15 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2" style={{ borderColor: ACCENT + '55' }} />
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold justify-center" style={{ backgroundColor: ACCENT, color: BG }}>
                Enviar mensagem
              </button>
            </form>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/80">
              <div className="text-white font-medium">Contato</div>
              <div className="mt-3 space-y-2">
                <div>Email: contato@medup.com.br</div>
                <div>Telefone: (11) 0000-0000</div>
                <div>Endereço: São Paulo — SP</div>
              </div>
              <a href="https://wa.me/5500000000000" className="mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold" style={{ backgroundColor: ACCENT, color: BG }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} Medup. Todos os direitos reservados.</div>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <a href="#home" className="hover:text-white">Início</a>
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#servicos" className="hover:text-white">Soluções</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
