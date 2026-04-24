-- ============================================================
-- TecGeo - Migração inicial do banco de dados Supabase
-- Execute este SQL no editor do Supabase: Database → SQL Editor
-- ============================================================

-- Tabela de notícias
create table if not exists public.news (
  id          text primary key default gen_random_uuid()::text,
  title       text not null,
  excerpt     text not null,
  content     jsonb not null default '[]',
  image       text not null default '',
  date        date not null default current_date,
  category    text not null default 'Institucional',
  featured    boolean not null default false,
  author      text,
  reading_time integer,
  photo_album jsonb,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Tabela de contatos
create table if not exists public.contact_submissions (
  id               text primary key default gen_random_uuid()::text,
  name             text not null,
  phone            text not null,
  whatsapp         text,
  municipality     text not null,
  area_size        text not null,
  property_status  text,
  service          text not null,
  message          text,
  created_at       timestamptz not null default now()
);

-- Row Level Security: notícias são lidas por todos, escritas só por autenticados
alter table public.news enable row level security;

create policy "Notícias visíveis a todos"
  on public.news for select
  using (true);

create policy "Notícias editáveis por admin autenticado"
  on public.news for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Contatos: inseridos por anônimos, lidos/deletados só por autenticados
alter table public.contact_submissions enable row level security;

create policy "Qualquer um pode enviar contato"
  on public.contact_submissions for insert
  with check (true);

create policy "Contatos lidos por admin autenticado"
  on public.contact_submissions for select
  using (auth.role() = 'authenticated');

create policy "Contatos deletados por admin autenticado"
  on public.contact_submissions for delete
  using (auth.role() = 'authenticated');

-- Trigger para atualizar updated_at automaticamente
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger news_updated_at
  before update on public.news
  for each row execute function public.set_updated_at();

-- ============================================================
-- Dados iniciais (as 6 notícias do sistema)
-- ============================================================
insert into public.news (id, title, excerpt, content, image, date, category, featured) values
(
  '1',
  'Nova Legislação: Prazo para Atualização do CAR em Goiás',
  'Proprietários rurais têm até março de 2025 para regularizar o Cadastro Ambiental Rural. Entenda as novas exigências do SigCAR Goiás.',
  '[{"type":"text","content":"A Secretaria de Meio Ambiente de Goiás estabeleceu novas diretrizes para o Cadastro Ambiental Rural (CAR). Todos os proprietários devem atualizar seus cadastros até março de 2025. A TecGeo está preparada para auxiliar no processo de regularização, oferecendo suporte técnico completo e garantindo conformidade com todas as exigências ambientais."}]',
  'https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?w=1080&q=80',
  '2025-01-15', 'Legislação', true
),
(
  '2',
  'TecGeo Adota Tecnologia GNSS de 5ª Geração',
  'Investimento em equipamentos de última geração garante precisão submilimétrica nos levantamentos topográficos.',
  '[{"type":"text","content":"A TecGeo anuncia a aquisição de equipamentos GNSS de quinta geração, que proporcionam precisão submilimétrica em levantamentos topográficos."},{"type":"image","content":"https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1080&q=80","alt":"Equipamento GNSS de 5ª geração","caption":"Novo equipamento GNSS oferece precisão submilimétrica"},{"type":"text","content":"Os novos equipamentos representam um investimento significativo da TecGeo em tecnologia de ponta."}]',
  'https://images.unsplash.com/photo-1580982338091-2e635b5759a5?w=1080&q=80',
  '2025-01-10', 'Tecnologia', true
),
(
  '3',
  'Plano Agro+ Já Regularizou Mais de 50 Mil Hectares',
  'Pacote integrado da TecGeo se consolida como solução preferida para regularização rural em Goiás.',
  '[{"type":"text","content":"Desde seu lançamento, o Plano Agro+ já regularizou mais de 50 mil hectares em todo o estado de Goiás."}]',
  'https://images.unsplash.com/photo-1689428615940-64d549e2231c?w=1080&q=80',
  '2025-01-05', 'Institucional', true
),
(
  '4',
  'INCRA Intensifica Fiscalização de Georreferenciamento',
  'Propriedades acima de 250 hectares devem estar com georreferenciamento regularizado. Entenda os prazos.',
  '[{"type":"text","content":"O INCRA anunciou intensificação na fiscalização de propriedades rurais que ainda não realizaram o georreferenciamento."}]',
  'https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?w=1080&q=80',
  '2024-12-28', 'Legislação', false
),
(
  '5',
  'Outorga de Água: Novas Regras para Irrigação em Goiás',
  'Governo estadual estabelece novas diretrizes para uso de recursos hídricos na agricultura.',
  '[{"type":"text","content":"A Secretaria de Meio Ambiente e Desenvolvimento Sustentável (SEMAD) publicou novas regras para outorga de água destinada à irrigação."}]',
  'https://images.unsplash.com/photo-1692369584496-3216a88f94c1?w=1080&q=80',
  '2024-12-20', 'Meio Ambiente', false
),
(
  '6',
  'Workshop: Regularização Fundiária para Pequenos Produtores',
  'TecGeo promove evento gratuito em Goiânia para esclarecer dúvidas sobre regularização rural.',
  '[{"type":"text","content":"No próximo mês, a TecGeo realizará workshop gratuito voltado para pequenos e médios produtores rurais."}]',
  'https://images.unsplash.com/photo-1600620165877-f69bc8e29fe7?w=1080&q=80',
  '2024-12-15', 'Eventos', false
)
on conflict (id) do nothing;
