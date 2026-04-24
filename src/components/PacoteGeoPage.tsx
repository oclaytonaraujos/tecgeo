import { motion } from 'motion/react';
import { 
  FileText, 
  CheckCircle2, 
  Download, 
  Shield, 
  Clock, 
  ArrowRight, 
  Star,
  Package,
  FileCheck,
  MapPin,
  Sparkles,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

interface PacoteGeoPageProps {
  onNavigate: (page: string) => void;
}

export function PacoteGeoPage({ onNavigate }: PacoteGeoPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const documents = [
    {
      number: '01',
      title: 'Requerimento',
      description: 'Modelo de requerimento oficial para dar entrada no processo de averbação junto ao cartório',
    },
    {
      number: '02',
      title: 'Declaração de Reconhecimento de Limite com Tabela',
      description: 'Documento que formaliza o reconhecimento dos limites da propriedade pelos confrontantes',
    },
    {
      number: '03',
      title: 'Declaração de Responsabilidade',
      description: 'Declaração técnica do profissional responsável pelo georreferenciamento',
    },
    {
      number: '04',
      title: 'Declaração de Provimento',
      description: 'Documento que atesta o provimento dos requisitos técnicos e legais',
    },
    {
      number: '05',
      title: 'Laudo Técnico',
      description: 'Laudo completo com descrição técnica do levantamento topográfico realizado',
    },
    {
      number: '06',
      title: 'Anuência',
      description: 'Modelo de anuência dos confrontantes e partes interessadas',
    },
    {
      number: '07',
      title: 'Modelo de Memorial Técnico',
      description: 'Template completo do memorial descritivo conforme normas do INCRA',
    },
    {
      number: '08',
      title: 'Modelo de Planta Técnica',
      description: 'Modelo em formato editável para elaboração da planta georreferenciada',
    },
    {
      number: '09',
      title: 'Checklist da Documentação',
      description: 'Lista completa de todos os documentos necessários para averbação no cartório',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Economize tempo',
      description: 'Modelos prontos eliminam horas de pesquisa e elaboração',
    },
    {
      icon: Shield,
      title: 'Conformidade garantida',
      description: 'Documentos seguem rigorosamente as normas do INCRA e cartórios',
    },
    {
      icon: FileCheck,
      title: 'Aprovação facilitada',
      description: 'Modelos já testados e aprovados em centenas de processos',
    },
    {
      icon: Download,
      title: 'Acesso imediato',
      description: 'Receba o pacote ZIP completo logo após a confirmação do pagamento',
    },
  ];

  const faqItems = [
    {
      question: 'O que está incluído no Pacote Geo?',
      answer: 'O Pacote Geo inclui 9 documentos essenciais em formato editável (Word/PDF): requerimento, declarações técnicas, laudo, anuência, modelos de memorial e planta técnica, além de um checklist completo. Todos os documentos são templates prontos que você adapta à sua necessidade.',
    },
    {
      question: 'Preciso ser engenheiro ou agrimensor para usar?',
      answer: 'Não necessariamente. Os modelos são úteis tanto para profissionais técnicos quanto para proprietários que já possuem os dados do georreferenciamento e precisam organizar a documentação para o cartório. No entanto, alguns documentos exigem assinatura de profissional habilitado (CREA/CAU).',
    },
    {
      question: 'Como recebo o pacote após o pagamento?',
      answer: 'Após a confirmação do pagamento, você receberá um e-mail com o link para download do arquivo ZIP contendo todos os 9 documentos. O acesso é imediato para pagamentos via PIX e em até 2 dias úteis para boleto bancário.',
    },
    {
      question: 'Os modelos atendem às exigências do INCRA?',
      answer: 'Sim! Todos os modelos foram elaborados seguindo rigorosamente as normas técnicas do INCRA (Lei 10.267/2001 e Decreto 4.449/2002) e já foram utilizados com sucesso em centenas de processos de averbação em todo o estado de Goiás.',
    },
    {
      question: 'Posso usar o pacote para múltiplas propriedades?',
      answer: 'Sim! Após adquirir o Pacote Geo, você pode utilizá-lo quantas vezes precisar em diferentes propriedades. É uma solução econômica para quem trabalha com múltiplos processos de regularização.',
    },
    {
      question: 'Qual formato dos arquivos?',
      answer: 'Os documentos são fornecidos em formatos editáveis (Microsoft Word .docx e/ou PDF editável), permitindo que você personalize com os dados específicos de cada propriedade. A planta técnica vem em formato compatível com AutoCAD (.dwg).',
    },
    {
      question: 'Há suporte caso eu tenha dúvidas?',
      answer: 'Sim! Clientes do Pacote Geo têm acesso a suporte por e-mail para esclarecer dúvidas sobre o preenchimento e uso dos documentos. Nossa equipe técnica responde em até 24 horas úteis.',
    },
    {
      question: 'Existe garantia?',
      answer: 'Oferecemos garantia de 7 dias. Se você não ficar satisfeito com o produto, devolvemos 100% do valor pago, sem burocracias.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001B80] via-[#002bb3] to-[#001B80] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lado Esquerdo - Informações */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#1EB53A] px-4 py-2 rounded-full mb-6">
                <Package size={20} />
                <span className="text-sm">Produto Digital</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
                Pacote Geo Completo
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
                Todos os documentos e modelos que você precisa para finalizar a regularização do georreferenciamento no cartório
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <div>
                  <span className="text-gray-300 text-lg line-through">R$ 450,00</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-bold">R$ 250</span>
                    <span className="text-2xl text-gray-300">,00</span>
                  </div>
                  <p className="text-[#1EB53A] text-sm mt-2">
                    <Sparkles className="inline w-4 h-4 mr-1" />
                    Economia de R$ 200,00
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contato')}
                  className="group bg-[#1EB53A] text-white px-8 py-4 rounded-full hover:bg-[#189c30] transition-all hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Adquirir agora</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <a
                  href="#documentos"
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#001B80] transition-all backdrop-blur-sm text-center"
                >
                  Ver o que está incluso
                </a>
              </div>
            </motion.div>

            {/* Lado Direito - Destaques */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl mb-6 flex items-center gap-2">
                <Star className="text-[#1EB53A]" />
                O que você recebe
              </h3>
              
              <ul className="space-y-4">
                {[
                  '9 documentos profissionais em formato editável',
                  'Modelos aprovados pelo INCRA e cartórios',
                  'Checklist completo de documentação',
                  'Memorial técnico e planta em formato AutoCAD',
                  'Acesso imediato via download ZIP',
                  'Uso ilimitado em múltiplas propriedades',
                  'Suporte técnico por e-mail',
                  'Garantia de 7 dias',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="flex-shrink-0 text-[#1EB53A] mt-0.5" />
                    <span className="text-gray-100">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que é o Pacote Geo */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-[#001B80]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#001B80]">Sobre o produto</span>
            </div>
            <h2 className="text-[#001B80] mb-6 text-3xl sm:text-4xl lg:text-5xl">
              O que é o Pacote Geo?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                O <strong>Pacote Geo Completo</strong> é uma solução prática e econômica para quem precisa finalizar a regularização do georreferenciamento de uma propriedade rural no cartório de registro de imóveis.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Reúne todos os <strong>modelos de documentos técnicos e jurídicos</strong> exigidos pelo INCRA e pelos cartórios de Goiás, prontos para serem preenchidos com os dados específicos da sua propriedade.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ideal para <strong>profissionais</strong> (engenheiros, agrimensores, advogados) que trabalham com regularização fundiária e também para <strong>proprietários rurais</strong> que querem economizar e organizar a documentação por conta própria.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="bg-[#1EB53A]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="text-[#1EB53A]" size={28} />
                  </div>
                  <h4 className="text-[#001B80] mb-2 text-lg">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentos Inclusos */}
      <section id="documentos" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#1EB53A]/10 px-4 py-2 rounded-full mb-4">
              <FileText className="text-[#1EB53A]" size={20} />
              <span className="text-[#1EB53A]">Documentos inclusos</span>
            </div>
            <h2 className="text-[#001B80] mb-6 text-3xl sm:text-4xl lg:text-5xl">
              9 Documentos Essenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tudo que você precisa para dar entrada no processo de averbação do georreferenciamento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all border-2 border-gray-100 hover:border-[#1EB53A]/30 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-[#1EB53A] to-[#189c30] text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-bold group-hover:scale-110 transition-transform">
                    {doc.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#001B80] text-lg mb-2">{doc.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {doc.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-[#1EB53A]/10 to-[#1EB53A]/5 border-2 border-[#1EB53A]/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <FileCheck className="w-16 h-16 text-[#1EB53A] mx-auto mb-4" />
              <h3 className="text-[#001B80] text-2xl mb-3">
                Todos em formato editável
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Receba todos os documentos em formatos Word (.docx) e AutoCAD (.dwg), prontos para você personalizar com os dados da sua propriedade. Não é necessário começar do zero!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Para quem é indicado */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#001B80] mb-6 text-3xl sm:text-4xl lg:text-5xl">
              Para quem é indicado?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Engenheiros e Agrimensores',
                description: 'Profissionais que executam georreferenciamento e precisam agilizar a documentação para os clientes.',
                items: [
                  'Economize horas de trabalho',
                  'Padronize seus processos',
                  'Atenda mais clientes',
                ],
              },
              {
                title: 'Advogados e Despachantes',
                description: 'Profissionais que dão entrada em processos de regularização fundiária nos cartórios.',
                items: [
                  'Documentação completa',
                  'Modelos testados e aprovados',
                  'Reduza retrabalho',
                ],
              },
              {
                title: 'Proprietários Rurais',
                description: 'Produtores que já têm os dados do geo e querem organizar a documentação para economizar.',
                items: [
                  'Organize tudo sozinho',
                  'Economia significativa',
                  'Processo simplificado',
                ],
              },
            ].map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <h3 className="text-[#001B80] text-xl mb-3">{audience.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {audience.description}
                </p>
                <ul className="space-y-3">
                  {audience.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 size={18} className="text-[#1EB53A] flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#001B80] mb-6 text-3xl sm:text-4xl lg:text-5xl">
              Como funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples em 4 passos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                number: '01',
                title: 'Adquira o pacote',
                description: 'Entre em contato e finalize o pagamento via PIX, boleto ou transferência',
              },
              {
                number: '02',
                title: 'Receba o ZIP',
                description: 'Acesso imediato por e-mail com link para download do arquivo completo',
              },
              {
                number: '03',
                title: 'Personalize',
                description: 'Edite os documentos com os dados específicos da sua propriedade',
              },
              {
                number: '04',
                title: 'Protocole',
                description: 'Leve a documentação ao cartório para finalizar a averbação',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="bg-gradient-to-br from-[#1EB53A] to-[#189c30] text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-[#001B80] text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#1EB53A]/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#001B80]/10 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="text-[#001B80]" size={20} />
              <span className="text-[#001B80]">Perguntas frequentes</span>
            </div>
            <h2 className="text-[#001B80] mb-3 text-3xl sm:text-4xl lg:text-5xl">
              Dúvidas sobre o Pacote Geo?
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-[#001B80] pr-6 font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`flex-shrink-0 text-[#001B80] transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-200 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#001B80] via-[#002bb3] to-[#001B80] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Package className="w-20 h-20 mx-auto mb-6 text-[#1EB53A]" />
          
          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl">
            Pronto para economizar tempo e dinheiro?
          </h2>
          
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Adquira agora o Pacote Geo Completo por apenas <strong className="text-[#1EB53A]">R$ 250,00</strong> e receba acesso imediato a todos os documentos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => onNavigate('contato')}
              className="group bg-[#1EB53A] text-white px-10 py-5 rounded-full hover:bg-[#189c30] transition-all hover:shadow-2xl hover:scale-105 flex items-center gap-2 text-lg shadow-xl"
            >
              <span>Adquirir o Pacote Geo</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#1EB53A]" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#1EB53A]" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#1EB53A]" />
              <span>Uso ilimitado</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
