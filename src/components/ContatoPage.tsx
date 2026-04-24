import { Mail, MapPin, Phone, Clock, Send, User, MessageSquare, MapPinned, Briefcase, Building, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
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

  const [focusedField, setFocusedField] = useState<string | null>(null);
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
    'Georreferenciamento',
    'CAR - Cadastro Ambiental Rural',
    'Licenciamento Ambiental',
    'Loteamento Urbano',
    'Loteamento Rural',
    'Desmembramento',
    'Unificação',
    'Assessoria em Escrituras',
    'Outro',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#001B80] via-[#002bb3] to-[#001B80] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-[#1EB53A] px-5 py-2.5 rounded-full mb-6 shadow-lg">
              <MessageSquare size={20} />
              <span>Fale Conosco</span>
            </div>
            <h1 className="mb-6" style={{ textAlign: 'center' }}>Entre em Contato</h1>
            <p className="text-xl text-gray-100 leading-relaxed" style={{ textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Estamos prontos para atender você. Fale conosco e descubra como podemos ajudar a regularizar sua propriedade
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulário com Design Inovador */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulário - Ocupa 2 colunas */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header do Card */}
                <div className="bg-gradient-to-r from-[#001B80] to-[#003cb3] p-8 text-white">
                  <h2 className="text-2xl mb-2">Receba um diagnóstico inicial gratuito</h2>
                  <p className="text-gray-200">Preencha o formulário e descubra o que sua propriedade precisa para estar 100% regularizada</p>
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  {/* Erro de envio */}
                  {submitError && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      {submitError}
                    </div>
                  )}

                  {/* Nome completo */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                      Nome completo *
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors">
                        <User size={20} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setFieldErrors(prev => ({ ...prev, name: '' })); }}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 ${fieldErrors.name ? 'border-red-400' : 'border-gray-200'}`}
                        placeholder="Digite seu nome completo"
                      />
                    </div>
                    {fieldErrors.name && <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>}
                  </motion.div>

                  {/* Telefone/WhatsApp - Grid 2 colunas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                        Telefone/WhatsApp *
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors">
                          <Phone size={20} />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setFieldErrors(prev => ({ ...prev, phone: '' })); }}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 ${fieldErrors.phone ? 'border-red-400' : 'border-gray-200'}`}
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      {fieldErrors.phone && <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label htmlFor="municipality" className="block text-sm mb-2 text-gray-700">
                        Município da propriedade *
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors">
                          <MapPinned size={20} />
                        </div>
                        <input
                          type="text"
                          id="municipality"
                          value={formData.municipality}
                          onChange={(e) => { setFormData({ ...formData, municipality: e.target.value }); setFieldErrors(prev => ({ ...prev, municipality: '' })); }}
                          onFocus={() => setFocusedField('municipality')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 ${fieldErrors.municipality ? 'border-red-400' : 'border-gray-200'}`}
                          placeholder="Ex: Goiânia"
                        />
                      </div>
                      {fieldErrors.municipality && <p className="mt-1 text-xs text-red-600">{fieldErrors.municipality}</p>}
                    </motion.div>
                  </div>

                  {/* Tamanho da área - Grid 2 colunas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="areaSize" className="block text-sm mb-2 text-gray-700">
                        Tamanho da área (hectares aproximados) *
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors">
                          <Building size={20} />
                        </div>
                        <input
                          type="text"
                          id="areaSize"
                          value={formData.areaSize}
                          onChange={(e) => { setFormData({ ...formData, areaSize: e.target.value }); setFieldErrors(prev => ({ ...prev, areaSize: '' })); }}
                          onFocus={() => setFocusedField('areaSize')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 ${fieldErrors.areaSize ? 'border-red-400' : 'border-gray-200'}`}
                          placeholder="Ex: 50 hectares"
                        />
                      </div>
                      {fieldErrors.areaSize && <p className="mt-1 text-xs text-red-600">{fieldErrors.areaSize}</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <label htmlFor="propertyStatus" className="block text-sm mb-2 text-gray-700">
                        Situação do imóvel
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors z-10">
                          <Briefcase size={20} />
                        </div>
                        <select
                          id="propertyStatus"
                          value={formData.propertyStatus}
                          onChange={(e) => setFormData({ ...formData, propertyStatus: e.target.value })}
                          onFocus={() => setFocusedField('propertyStatus')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 appearance-none cursor-pointer"
                        >
                          <option value="">Selecione</option>
                          <option value="possui-geo">Já possui Georreferenciamento</option>
                          <option value="possui-car">Já possui CAR</option>
                          <option value="possui-licenca">Já possui Licenciamento</option>
                          <option value="nenhum">Não possui nenhum</option>
                        </select>
                      </div>
                    </motion.div>
                  </div>

                  {/* Serviço de interesse */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="service" className="block text-sm mb-2 text-gray-700">
                      Serviço de interesse *
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors z-10">
                        <Briefcase size={20} />
                      </div>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => { setFormData({ ...formData, service: e.target.value }); setFieldErrors(prev => ({ ...prev, service: '' })); }}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 appearance-none cursor-pointer ${fieldErrors.service ? 'border-red-400' : 'border-gray-200'}`}
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    {fieldErrors.service && <p className="mt-1 text-xs text-red-600">{fieldErrors.service}</p>}
                  </motion.div>

                  {/* Situação do imóvel - Textarea */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                      Situação do imóvel
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors">
                        <MessageSquare size={20} />
                      </div>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Descreva brevemente a situação atual do imóvel (se já possui geo, CAR, licenças, etc.)"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 resize-none"
                      />
                    </div>
                  </motion.div>

                  {/* Botão de Envio */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    type="submit"
                    disabled={submitting}
                    className="group w-full bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white py-5 rounded-xl hover:shadow-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3 text-lg shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                        Solicitar diagnóstico gratuito
                      </>
                    )}
                  </motion.button>

                  {/* Nota de privacidade */}
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    Ao enviar este formulário, você concorda com nossa política de privacidade. Seus dados serão utilizados apenas para entrar em contato com você.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-[#001B80] mb-6">Informações de Contato</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="bg-[#1EB53A]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#1EB53A]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#001B80] mb-1">Nossas Unidades</h4>
                    <p className="text-gray-700">
                      <strong>Cachoeira Alta - GO</strong><br />
                      Tel/WhatsApp: (64) 99955-8696<br />
                      <br />
                      <strong>Caçu - GO</strong><br />
                      R. José Reinaldo Viêira, 1223<br />
                      Tel/WhatsApp: (64) 99600-4693
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="bg-[#1EB53A]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#1EB53A]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#001B80] mb-1">WhatsApp Principal</h4>
                    <p className="text-gray-700">
                      (64) 99982-5619
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="bg-[#1EB53A]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#1EB53A]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#001B80] mb-1">E-mail</h4>
                    <p className="text-gray-700">tecgeodepambiental@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="bg-[#1EB53A]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#1EB53A]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#001B80] mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-700">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Destaque */}
              <div className="bg-gradient-to-br from-[#1EB53A] to-[#189c30] p-8 rounded-xl text-white text-center">
                <h3 className="mb-4">Fale conosco pelo WhatsApp</h3>
                <p className="mb-6">
                  Atendimento rápido e direto com nossa equipe
                </p>
                <a
                  href="https://wa.me/5564999825619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#1EB53A] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all mt-[10px] mr-[0px] mb-[0px] ml-[0px]"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Localizações */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#001B80] mb-[25px] text-center mt-[0px] mr-[0px] ml-[0px]">Nossas Localizações</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-[25px] mr-[0px] mb-[0px] ml-[0px]">
            {/* Cachoeira Alta */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <div className="bg-gray-100 p-6 text-center border-b border-gray-200">
                  <div className="inline-flex items-center justify-center gap-2 mb-2">
                    <div className="bg-[#1EB53A] w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                  </div>
                  <h4 className="text-[#001B80] mb-1">Mapa de localização</h4>
                  <p className="text-gray-600">Cachoeira Alta - Goiás</p>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3418.8998028918363!2d-50.946433802032914!3d-18.75321255940048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ1JzE4LjEiUyA1MMKwNTYnMzguMCJX!5e1!3m2!1spt-BR!2sbr!4v1765120456893!5m2!1spt-BR!2sbr" 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1EB53A]/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#1EB53A]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-[#001B80] mb-2">Escritório de Cachoeira Alta, Goiás</h3>
                    <p className="text-gray-600 mt-1">
                      Tel/WhatsApp: (64) 99955-8696
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#1EB53A]/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#1EB53A]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-[#001B80] mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-700 text-lg">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-gray-700 text-lg">
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Caçu */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <div className="bg-gray-100 p-6 text-center border-b border-gray-200">
                  <div className="inline-flex items-center justify-center gap-2 mb-2">
                    <div className="bg-[#1EB53A] w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                  </div>
                  <h4 className="text-[#001B80] mb-1">Mapa de localização</h4>
                  <p className="text-gray-600">Caçu - Goiás</p>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3422.7084534185456!2d-51.1366!3d-18.5643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949e63aa87f9c4c3%3A0x1c465962ac69a40c!2sR.%20Jos%C3%A9%20Reinaldo%20Vi%C3%AAira%2C%201223%20-%20%C3%81gua%20Fria%2C%20Ca%C3%A7u%20-%20GO%2C%2075813-000!5e1!3m2!1spt-BR!2sbr!4v1765121341003!5m2!1spt-BR!2sbr" 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1EB53A]/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#1EB53A]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-[#001B80] mb-2">Escritório de Caçu, Goiás</h3>
                    <p className="text-gray-600 mt-1">
                      R. José Reinaldo Viêira, 1223
                    </p>
                    <p className="text-gray-600">
                      Tel/WhatsApp: (64) 99600-4693
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#1EB53A]/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#1EB53A]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-[#001B80] mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-700 text-lg">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-gray-700 text-lg">
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Sucesso */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
}