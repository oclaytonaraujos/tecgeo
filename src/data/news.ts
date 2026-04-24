export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string | ContentBlock[];
  image: string;
  date: string;
  category: string;
  featured?: boolean;
  author?: string;
  readingTime?: number; // em minutos
  photoAlbum?: string[]; // URLs das fotos do álbum
}

export interface ContentBlock {
  type: 'text' | 'image';
  content: string;
  alt?: string; // Para imagens
  caption?: string; // Para legendas de imagens
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Nova Legislação: Prazo para Atualização do CAR em Goiás',
    excerpt: 'Proprietários rurais têm até março de 2025 para regularizar o Cadastro Ambiental Rural. Entenda as novas exigências do SigCAR Goiás.',
    content: [
      {
        type: 'text',
        content: 'A Secretaria de Meio Ambiente de Goiás estabeleceu novas diretrizes para o Cadastro Ambiental Rural (CAR). Todos os proprietários devem atualizar seus cadastros até março de 2025. A TecGeo está preparada para auxiliar no processo de regularização, oferecendo suporte técnico completo e garantindo conformidade com todas as exigências ambientais.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2NTAwMjA5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2025-01-15',
    category: 'Legislação',
    featured: true,
  },
  {
    id: '2',
    title: 'TecGeo Adota Tecnologia GNSS de 5ª Geração',
    excerpt: 'Investimento em equipamentos de última geração garante precisão submilimétrica nos levantamentos topográficos.',
    content: [
      {
        type: 'text',
        content: 'A TecGeo anuncia a aquisição de equipamentos GNSS de quinta geração, que proporcionam precisão submilimétrica em levantamentos topográficos. Esta tecnologia revolucionária reduz significativamente o tempo de campo e aumenta a confiabilidade dos dados coletados.',
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncHMlMjBzdXJ2ZXl8ZW58MXx8fHwxNzY1MDA0OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Equipamento GNSS de 5ª geração',
        caption: 'Novo equipamento GNSS oferece precisão submilimétrica',
      },
      {
        type: 'text',
        content: 'Os novos equipamentos representam um investimento significativo da TecGeo em tecnologia de ponta. Com eles, conseguimos reduzir o tempo de campo em até 40% e aumentar a precisão dos levantamentos topográficos, beneficiando diretamente nossos clientes com entregas mais rápidas e precisas. A tecnologia GNSS de quinta geração utiliza múltiplas constelações de satélites simultaneamente, garantindo resultados confiáveis mesmo em condições adversas.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1580982338091-2e635b5759a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwZmFybXxlbnwxfHx8fDE3NjUwNjU0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2025-01-10',
    category: 'Tecnologia',
    featured: true,
  },
  {
    id: '3',
    title: 'Plano Agro+ Já Regularizou Mais de 50 Mil Hectares',
    excerpt: 'Pacote integrado da TecGeo se consolida como solução preferida para regularização rural em Goiás.',
    content: [
      {
        type: 'text',
        content: 'Desde seu lançamento, o Plano Agro+ já regularizou mais de 50 mil hectares em todo o estado de Goiás. O pacote integrado que une Georreferenciamento, CAR e Licenciamento Ambiental tem se mostrado a escolha ideal para produtores que buscam praticidade e economia. Com condições especiais de pagamento, o plano facilita a regularização sem comprometer o capital de giro.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1689428615940-64d549e2231c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2NTAwOTM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2025-01-05',
    category: 'Institucional',
    featured: true,
  },
  {
    id: '4',
    title: 'INCRA Intensifica Fiscalização de Georreferenciamento',
    excerpt: 'Propriedades acima de 250 hectares devem estar com georreferenciamento regularizado. Entenda os prazos.',
    content: [
      {
        type: 'text',
        content: 'O INCRA anunciou intensificação na fiscalização de propriedades rurais que ainda não realizaram o georreferenciamento. Imóveis acima de 250 hectares têm prazo estabelecido para regularização. A TecGeo oferece todo o suporte necessário para adequação às normas, com equipe técnica especializada e equipamentos certificados.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwc3VydmV5aW5nfGVufDF8fHx8MTc2NTA2NTQ3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-12-28',
    category: 'Legislação',
  },
  {
    id: '5',
    title: 'Outorga de Água: Novas Regras para Irrigação em Goiás',
    excerpt: 'Governo estadual estabelece novas diretrizes para uso de recursos hídricos na agricultura.',
    content: [
      {
        type: 'text',
        content: 'A Secretaria de Meio Ambiente e Desenvolvimento Sustentável (SEMAD) publicou novas regras para outorga de água destinada à irriga��ão. As mudanças visam garantir o uso sustentável dos recursos hídricos. A TecGeo auxilia produtores no processo de obtenção de outorga ou dispensa, conforme cada caso.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1692369584496-3216a88f94c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTAwNDk3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-12-20',
    category: 'Meio Ambiente',
  },
  {
    id: '6',
    title: 'Workshop: Regularização Fundiária para Pequenos Produtores',
    excerpt: 'TecGeo promove evento gratuito em Goiânia para esclarecer dúvidas sobre regularização rural.',
    content: [
      {
        type: 'text',
        content: 'No próximo mês, a TecGeo realizará workshop gratuito voltado para pequenos e médios produtores rurais. O evento abordará temas como georreferenciamento, CAR, licenciamento ambiental e escrituração de imóveis. Inscrições abertas em nosso site.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1600620165877-f69bc8e29fe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwbGF3fGVufDF8fHx8MTc2NTA2NTQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-12-15',
    category: 'Eventos',
  },
];