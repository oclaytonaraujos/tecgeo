import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';
import logo from 'figma:asset/915224e264aeedeb56e9fa630ad41e5aeb59ff69.png';
import { useAuth } from '../hooks/useAuth';

interface LoginPageProps {
  onSuccess: () => void;
}

export function LoginPage({ onSuccess }: LoginPageProps) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: authError } = await signIn(email, password);

    if (authError) {
      setError('E-mail ou senha incorretos.');
    } else {
      onSuccess();
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001B80] via-[#002090] to-[#001B80] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#001B80] to-[#003cb3] p-8 text-white text-center">
          <img src={logo} alt="TecGeo" className="h-10 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Painel Administrativo</h1>
          <p className="text-gray-300 text-sm mt-1">Acesso restrito a administradores</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
            >
              <AlertCircle size={16} className="flex-shrink-0" />
              {error}
            </motion.div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
              E-mail
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={18} />
              </div>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1EB53A] focus:ring-2 focus:ring-[#1EB53A]/20 transition-all outline-none"
                placeholder="admin@tecgeo.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 mb-1">
              Senha
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={18} />
              </div>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1EB53A] focus:ring-2 focus:ring-[#1EB53A]/20 transition-all outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#001B80] text-white py-3 rounded-xl hover:bg-[#002bb3] transition-all disabled:opacity-60 disabled:cursor-not-allowed font-medium"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
