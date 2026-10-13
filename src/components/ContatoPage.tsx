import { Mail, MapPin, Phone, Clock, Send, User, MessageSquare, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { SuccessModal } from './SuccessModal';
import { supabase } from '../lib/supabase';

const PHONE_REGEX = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    municipality: '',
    areaSize: '',
    propertyStatus: '',
    service: '',
    message: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 3)
      errors.name = 'Informe seu nome completo (mín. 3 caracteres).';
    if (!PHONE_REGEX.test(formData.phone.replace(/\s/g, '')))
      errors.phone = 'Telefone inválido. Ex: (64) 99999-9999';
    if (!formData.municipality.trim())
      errors.municipality = 'Informe o município da propriedade.';
    if (!formData.areaSize.trim())
      errors.areaSize = 'Informe o tamanho aproximado da área.';
    if (!formData.service)
      errors.service = 'Selecione o serviço de interesse.';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setSubmitting(true);

    const { error } = await supabase.from('contact_submissions').insert({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      whatsapp: formData.whatsapp.trim() || null,
      municipality: formData.municipality.trim(),
      area_size: formData.areaSize.trim(),
      property_status: formData.propertyStatus || null,
      service: formData.service,
      message: formData.message.trim() || null,
    });

    setSubmitting(false);

    if (error) {
      setSubmitError('Erro ao enviar formulário. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
      return;
    }

    setShowSuccessModal(true);
    setFormData({ name: '', phone: '', whatsapp: '', municipality: '', areaSize: '', propertyStatus: '', service: '', message: '' });
  };

  const services = [
    'Plano Agro+ (Geo + CAR + Licenciamento)',
    'Georreferenciamento de Imóvel Rural',
    'CAR – Cadastro Ambiental Rural (SigCAR)',
    'Licenciamento Ambiental & Outorgas',
    'Loteamento Urbano',
    'Loteamento & Parcelamento Rural',
    'Desmembramento de Matrículas',
    'Unificação Registral',
    'Assessoria em Escrituras & Estremação',
    'TECGEO Consultoria Estratégica',
    'Outro serviço técnico',
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero Institucional */}
      <section className="bg-[#001B80] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-3">
              Canais de Atendimento
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Fale com a TECGEO
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
              Nossa equipe técnica e consultiva está à disposição em Cachoeira Alta, Caçu e em todo o estado de Goiás. Solicite um diagnóstico preliminar do seu imóvel.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Principal: Formulário + Dados de Contato */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Formulário Institucional (7 colunas) */}
            <div className="lg:col-span-7 border border-slate-200 p-8 sm:p-10 bg-slate-50">
              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                  Atendimento Técnico
                </span>
                <h2 className="text-2xl font-bold text-[#001B80] mb-2">
                  Solicitação de Diagnóstico e Orçamento
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Preencha os dados do imóvel. Nossa equipe fará a triagem inicial e retornará com orientações precisas.
                </p>
              </div>

              {submitError && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm mb-6">
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome completo */}
                <div>
                  <label htmlFor="ct-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="ct-name"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setFieldErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    placeholder="Seu nome completo"
                    className={`w-full px-4 py-3 bg-white border rounded text-sm text-slate-900 focus:outline-none ${
                      fieldErrors.name ? 'border-red-400' : 'border-slate-300 focus:border-[#001B80]'
                    }`}
                  />
                  {fieldErrors.name && <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>}
                </div>

                {/* Telefone e WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ct-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Telefone / Celular *
                    </label>
                    <input
                      type="tel"
                      id="ct-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        setFieldErrors((prev) => ({ ...prev, phone: '' }));
                      }}
                      placeholder="(64) 99999-9999"
                      className={`w-full px-4 py-3 bg-white border rounded text-sm text-slate-900 focus:outline-none ${
                        fieldErrors.phone ? 'border-red-400' : 'border-slate-300 focus:border-[#001B80]'
                      }`}
                    />
                    {fieldErrors.phone && <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="ct-whatsapp" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      WhatsApp (se diferente)
                    </label>
                    <input
                      type="tel"
                      id="ct-whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="(64) 99999-9999"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded text-sm text-slate-900 focus:border-[#001B80] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Município e Área */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ct-mun" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Município da propriedade *
                    </label>
                    <input
                      type="text"
                      id="ct-mun"
                      required
                      value={formData.municipality}
                      onChange={(e) => {
                        setFormData({ ...formData, municipality: e.target.value });
                        setFieldErrors((prev) => ({ ...prev, municipality: '' }));
                      }}
                      placeholder="Ex: Cachoeira Alta - GO"
                      className={`w-full px-4 py-3 bg-white border rounded text-sm text-slate-900 focus:outline-none ${
                        fieldErrors.municipality ? 'border-red-400' : 'border-slate-300 focus:border-[#001B80]'
                      }`}
                    />
                    {fieldErrors.municipality && <p className="mt-1 text-xs text-red-600">{fieldErrors.municipality}</p>}
                  </div>

                  <div>
                    <label htmlFor="ct-area" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Tamanho aproximado *
                    </label>
                    <input
                      type="text"
                      id="ct-area"
                      required
                      value={formData.areaSize}
                      onChange={(e) => {
                        setFormData({ ...formData, areaSize: e.target.value });
                        setFieldErrors((prev) => ({ ...prev, areaSize: '' }));
                      }}
                      placeholder="Ex: 85 ha / 18 alqueires / 500 m²"
                      className={`w-full px-4 py-3 bg-white border rounded text-sm text-slate-900 focus:outline-none ${
                        fieldErrors.areaSize ? 'border-red-400' : 'border-slate-300 focus:border-[#001B80]'
                      }`}
                    />
                    {fieldErrors.areaSize && <p className="mt-1 text-xs text-red-600">{fieldErrors.areaSize}</p>}
                  </div>
                </div>

                {/* Serviço de Interesse */}
                <div>
                  <label htmlFor="ct-service" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Serviço de interesse *
                  </label>
                  <select
                    id="ct-service"
                    required
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      setFieldErrors((prev) => ({ ...prev, service: '' }));
                    }}
                    className={`w-full px-4 py-3 bg-white border rounded text-sm text-slate-900 focus:outline-none cursor-pointer ${
                      fieldErrors.service ? 'border-red-400' : 'border-slate-300 focus:border-[#001B80]'
                    }`}
                  >
                    <option value="">Selecione o serviço</option>
                    {services.map((svc, idx) => (
                      <option key={idx} value={svc}>{svc}</option>
                    ))}
                  </select>
                  {fieldErrors.service && <p className="mt-1 text-xs text-red-600">{fieldErrors.service}</p>}
                </div>

                {/* Mensagem / Situação */}
                <div>
                  <label htmlFor="ct-msg" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Situação do imóvel ou detalhes adicionais
                  </label>
                  <textarea
                    id="ct-msg"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva se o imóvel já possui Geo antigo, se há pendências de divisa, notas devolutivas de cartório, etc."
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded text-sm text-slate-900 focus:border-[#001B80] focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#001B80] text-white py-3.5 rounded hover:bg-[#001566] transition-colors text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {submitting ? 'Enviando dados...' : 'Solicitar Diagnóstico Preliminar'}
                    {!submitting && <Send size={16} />}
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-3">
                    Seus dados são protegidos por sigilo profissional e utilizados exclusivamente para contato técnico.
                  </p>
                </div>
              </form>
            </div>

            {/* Informações de Contato (5 colunas) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                  Atendimento Corporativo
                </span>
                <h3 className="text-2xl font-bold text-[#001B80] mb-6">Nossos Canais</h3>

                <div className="space-y-6 divide-y divide-slate-200 border-y border-slate-200 py-6">
                  {/* WhatsApp Direto */}
                  <div className="pt-4 first:pt-0">
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">WhatsApp & Telefone</h4>
                        <p className="text-base font-bold text-slate-900 mt-0.5">(64) 99955-8696</p>
                        <a
                          href="https://wa.me/5564999558696"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#1EB53A] hover:underline font-semibold mt-1 inline-block"
                        >
                          Abrir conversa no WhatsApp →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="pt-4">
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-[#001B80] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">E-mail Institucional</h4>
                        <p className="text-sm font-medium text-slate-900 mt-0.5">tecgeodepambiental@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Horário */}
                  <div className="pt-4">
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Horário de Funcionamento</h4>
                        <p className="text-sm text-slate-700 mt-0.5">
                          Segunda a Sexta: 8h às 18h<br />
                          Sábado: 8h às 12h
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Unidades */}
                  <div className="pt-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-[#001B80] mt-0.5 flex-shrink-0" />
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Unidade Cachoeira Alta (Sede)</h4>
                          <p className="text-xs text-slate-700 mt-0.5">
                            Setor Canaã, Av. A, Qd. 06, Lt. 06 — CEP 75870-000
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Unidade Caçu</h4>
                          <p className="text-xs text-slate-700 mt-0.5">
                            Rua José Reinaldo Viêira, 1223 — CEP 75813-000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box Rápido WhatsApp */}
              <div className="border border-slate-200 bg-slate-50 p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-1">
                  Atendimento Imediato
                </span>
                <h4 className="text-base font-bold text-slate-900 mb-2">Prefere falar pelo WhatsApp?</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Envie sua certidão ou dúvida diretamente para nossa equipe técnica e receba retorno no mesmo dia útil.
                </p>
                <a
                  href="https://wa.me/5564999558696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1EB53A] text-white px-5 py-2.5 rounded hover:bg-[#189c30] transition-colors text-xs font-semibold inline-flex items-center gap-2"
                >
                  Iniciar Conversa no WhatsApp
                  <Send size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapas de Localização - Linhas Limpas */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Endereços Físicos
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Como Chegar às Nossas Unidades</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cachoeira Alta */}
            <div className="border border-slate-200 bg-white p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900">Cachoeira Alta - GO</h3>
                <p className="text-xs text-slate-500 mt-1">Setor Canaã, Av. A, Qd. 06, Lt. 06</p>
              </div>
              <div className="relative w-full aspect-[16/9] border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d533.8085690304921!2d-50.935205299095415!3d-18.75569910715441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ1JzIwLjkiUyA1MMKwNTYnMDUuNSJX!5e1!3m2!1spt-BR!2sbr!4v1791908276525!5m2!1spt-BR!2sbr" 
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>

            {/* Caçu */}
            <div className="border border-slate-200 bg-white p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900">Caçu - GO</h3>
                <p className="text-xs text-slate-500 mt-1">Rua José Reinaldo Viêira, 1223</p>
              </div>
              <div className="relative w-full aspect-[16/9] border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3422.7084534185456!2d-51.1366!3d-18.5643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949e63aa87f9c4c3%3A0x1c465962ac69a40c!2sR.%20Jos%C3%A9%20Reinaldo%20Vi%C3%AAira%2C%201223%20-%20%C3%81gua%20Fria%2C%20Ca%C3%A7u%20-%20GO%2C%2075813-000!5e1!3m2!1spt-BR!2sbr!4v1765121341003!5m2!1spt-BR!2sbr" 
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Sucesso */}
      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
    </div>
  );
}
