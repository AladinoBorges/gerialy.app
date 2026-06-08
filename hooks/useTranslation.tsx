import { getCookie, setCookie } from 'cookies-next';
import React, { createContext, useContext, useEffect, useState } from 'react';

export type LocaleType = 'pt-BR' | 'pt-PT' | 'en-UK';

interface LanguageContextProps {
  locale: LocaleType;
  setLocale: (locale: LocaleType) => void;
  t: (key: string) => string;
}

const translations = {
  'pt-BR': {
    // Nav
    'nav.home': 'Início',
    'nav.about': 'Time',
    'nav.projects': 'Projetos',
    'nav.contacts': 'Contatos',
    'nav.legal': 'Termos',
    'nav.privacy': 'Privacidade',
    // Footer
    'footer.copyright': `© ${new Date().getFullYear()} gerialy. Licença GNU GPL V3.0.`,
    'footer.description': 'gerialy é um projeto de tecnologia desenvolvido por FALBOR, uma empresa brasileira registrada sob o CNPJ nº 49.454.159/0001-75. Sede localizada na Avenida Imperatriz Leopoldina 1900, APT 154, Bloco 1, Pinheiro, na cidade de São Leopoldo/RS, CEP 93042-082.',
    // Home
    'home.titlePrefix': 'imagine',
    'home.titleHighlight': 'o que você pode construir',
    'home.titleSuffix': 'com uma equipe que ousa sonhar.',
    'home.description': 'somos uma software house que vê o mundo sob uma lente única. fundada por aladino borges, nossa missão é transformar suas ideias em realidade usando tecnologia de ponta, inteligência artificial e paixão pela inovação.',
    'home.btnProjects': 'nossos projetos',
    'home.btnRoadmap': 'roteiro',
    // About
    'about.title': 'Sobre Nós',
    'about.subtitle': 'Conheça a equipe fundadora da gerialy. Somos movidos por inovação, tecnologia de ponta e design focado no usuário.',
    'about.aladino.role': 'Fundador & Chief Technology Officer (CTO)',
    'about.aladino.bio': 'Engenheiro de Software Sênior com mais de 5 anos de experiência em liderança técnica. Especialista em construir soluções escaláveis em Python e TypeScript, unindo inteligência artificial, automação e visão de negócios.',
    'about.eulalio.role': 'Chief Design Officer (CDO)',
    'about.eulalio.bio': 'Vencedor do prêmio Designer Gráfico do Ano nos Prêmios Nova Geração 2024. Mais de 8 anos de experiência em direção criativa, branding e design gráfico para grandes marcas globais, traduzindo conceitos complexos em arte.',
    'about.skills': 'Competências',
    'about.tools': 'Ferramentas',
    // Projects
    'projects.title': 'Nossos Projetos',
    'projects.subtitle': 'Conheça os projetos criados e desenvolvidos por nossa equipe.',
    'projects.visit': 'Visitar site',
    'projects.huntly.desc': 'Como parte do time fundador, a gerialy desenvolveu a Huntly do MVP à versão atual: do website e APIs ao motor logístico (HLE), automações com IA e as webapps para empresas, candidatos e recrutadores.',
    'projects.prolicitante.desc': 'A gerialy desenvolveu o ecossistema e ferramentas com IA para extração e análise de editais, alcançando assertividade superior a 99% e processamento massivo de minutos para menos de 15 segundos.',
    'projects.winddigital.desc': 'Liderou o desenvolvimento técnico em projetos de RPA, Big Data e IA. Projetou pipelines de dados massivos (Pandas/Dask) e integrou APIs de IA generativa para automação de tarefas e relatórios analíticos.',
    'projects.devopness.desc': 'Colaborou na modernização da webapp do Devopness, migrando o repositório legado de parcel + react + reach router para vite + react + tanstack router (baseado em arquivos), além de realizar melhorias arquiteturais.',
    // Contacts
    'contacts.title': 'Contatos',
    'contacts.subtitle': 'Fale conosco! Estamos sempre abertos a novas ideias, parcerias e projetos desafiadores.',
    'contacts.email': 'E-mail comercial',
    'contacts.location': 'Localização',
    'contacts.address': 'São Leopoldo, RS - Brasil',
    'contacts.role.cto': 'Falar com o CTO',
    'contacts.role.cdo': 'Falar com o CDO',
    // Tooltips
    'tooltip.contacts': 'contatos',
    'tooltip.legal': 'termos e condições',
    'tooltip.privacy': 'política de privacidade',
    'tooltip.about': 'sobre nós',
  },
  'pt-PT': {
    // Nav
    'nav.home': 'Início',
    'nav.about': 'Time',
    'nav.projects': 'Projetos',
    'nav.contacts': 'Contactos',
    'nav.legal': 'Termos',
    'nav.privacy': 'Privacidade',
    // Footer
    'footer.copyright': `© ${new Date().getFullYear()} gerialy. Licença GNU GPL V3.0.`,
    'footer.description': 'gerialy é um projeto de tecnologia desenvolvido por FALBOR, uma empresa brasileira registada sob o CNPJ nº 49.454.159/0001-75. Sede localizada na Avenida Imperatriz Leopoldina 1900, APT 154, Bloco 1, Pinheiro, na cidade de São Leopoldo/RS, CEP 93042-082.',
    // Home
    'home.titlePrefix': 'imagine',
    'home.titleHighlight': 'o que pode construir',
    'home.titleSuffix': 'com uma equipa que ousa sonhar.',
    'home.description': 'somos uma software house que vê o mundo através de uma lente única. fundada por aladino borges, a nossa missão é transformar as suas ideias em realidade utilizando tecnologia de ponta, inteligência artificial e paixão pela inovação.',
    'home.btnProjects': 'nossos projetos',
    'home.btnRoadmap': 'roteiro',
    // About
    'about.title': 'Sobre Nós',
    'about.subtitle': 'Conheça a equipa fundadora da gerialy. Somos movidos pela inovação, tecnologia de ponta e design focado no utilizador.',
    'about.aladino.role': 'Fundador & Chief Technology Officer (CTO)',
    'about.aladino.bio': 'Engenheiro de Software Sénior com mais de 5 anos de experiência em liderança técnica. Especialista em construir soluções escaláveis em Python e TypeScript, unindo inteligência artificial, automação e visão de negócios.',
    'about.eulalio.role': 'Chief Design Officer (CDO)',
    'about.eulalio.bio': 'Vencedor do prémio Designer Gráfico do Ano nos Prémios Nova Geração 2024. Mais de 8 anos de experiência em direção criativa, branding e design gráfico para grandes marcas globais, traduzindo conceitos complexos em arte.',
    'about.skills': 'Competências',
    'about.tools': 'Ferramentas',
    // Projects
    'projects.title': 'Nossos Projetos',
    'projects.subtitle': 'Conheça os projetos criados e desenvolvidos pela nossa equipa.',
    'projects.visit': 'Visitar site',
    'projects.huntly.desc': 'Como parte da equipa fundadora, a gerialy desenvolveu a Huntly do MVP à versão atual: do website e APIs ao motor logístico (HLE), automações com IA e as webapps para empresas, candidatos e recrutadores.',
    'projects.prolicitante.desc': 'A gerialy desenvolveu o ecossistema e ferramentas com IA para extração e análise de editais, alcançando assertividade superior a 99% e processamento massivo de minutos para menos de 15 segundos.',
    'projects.winddigital.desc': 'Liderou o desenvolvimento técnico em projetos de RPA, Big Data e IA. Projetou pipelines de dados massivos (Pandas/Dask) e integrou APIs de IA generativa para automação de tarefas e relatórios analíticos.',
    'projects.devopness.desc': 'Colaborou na modernização da webapp do Devopness, migrando o repositório legado de parcel + react + reach router para vite + react + tanstack router (baseado em ficheiros), além de realizar melhorias arquiteturais.',
    // Contacts
    'contacts.title': 'Contactos',
    'contacts.subtitle': 'Fale connosco! Estamos sempre abertos a novas ideias, parcerias e projetos desafiadores.',
    'contacts.email': 'E-mail comercial',
    'contacts.location': 'Localização',
    'contacts.address': 'São Leopoldo, RS - Brasil',
    'contacts.role.cto': 'Falar com o CTO',
    'contacts.role.cdo': 'Falar com o CDO',
    // Tooltips
    'tooltip.contacts': 'contactos',
    'tooltip.legal': 'termos e condições',
    'tooltip.privacy': 'política de privacidade',
    'tooltip.about': 'sobre nós',
  },
  'en-UK': {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.projects': 'Projects',
    'nav.contacts': 'Contacts',
    'nav.legal': 'Terms',
    'nav.privacy': 'Privacy',
    // Footer
    'footer.copyright': `© ${new Date().getFullYear()} gerialy. GNU GPL V3.0 License.`,
    'footer.description': 'gerialy is a technology project developed by FALBOR, a brazilian company registered under CNPJ nº 49.454.159/0001-75. Its headquarters are located at Avenida Imperatriz Leopoldina 1900, APT 154, Bloco 1, Pinheiro, in the city of São Leopoldo/RS, with the postal code 93042-082.',
    // Home
    'home.titlePrefix': 'imagine',
    'home.titleHighlight': 'what you can build',
    'home.titleSuffix': 'with a team that dares to dream.',
    'home.description': 'we are a software house that sees the world through a unique lens. founded by aladino borges, our mission is to transform your ideas into reality using cutting-edge technology, artificial intelligence, and a passion for innovation.',
    'home.btnProjects': 'our projects',
    'home.btnRoadmap': 'roadmap',
    // About
    'about.title': 'About Us',
    'about.subtitle': "Meet gerialy's founding team. We are driven by innovation, cutting-edge technology, and user-centric design.",
    'about.aladino.role': 'Founder & Chief Technology Officer (CTO)',
    'about.aladino.bio': 'Senior Software Engineer with 5+ years of experience in technical leadership. Specialist in building scalable solutions in Python and TypeScript, combining AI, automation, and business vision.',
    'about.eulalio.role': 'Chief Design Officer (CDO)',
    'about.eulalio.bio': 'Winner of Graphic Designer of the Year at the New Generation Awards 2024. Over 8 years of experience in creative direction, branding, and graphic design for major global brands, translating complex concepts into art.',
    'about.skills': 'Skills',
    'about.tools': 'Tools',
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Explore the projects created and developed by our team.',
    'projects.visit': 'Visit website',
    'projects.huntly.desc': 'As part of the founding team, gerialy developed Huntly from MVP to the latest version: from the website and APIs to the logistics engine (HLE), AI automations, and webapps for companies, candidates, and recruiters.',
    'projects.prolicitante.desc': 'gerialy developed the AI-powered ecosystem and tools for public bidding documents analysis, achieving over 99% data extraction accuracy and reducing processing times from minutes to under 15 seconds.',
    'projects.winddigital.desc': 'gerialy led the technical development for RPA, Big Data, and AI projects. Designed massive data pipelines using Pandas and Dask, and integrated generative AI APIs for task and report automation.',
    'projects.devopness.desc': 'Collaborated on modernising the Devopness webapp, migrating the legacy parcel + react + reach router repository to vite + react + tanstack router (file-based), alongside core architectural improvements.',
    // Contacts
    'contacts.title': 'Contacts',
    'contacts.subtitle': 'Get in touch! We are always open to new ideas, partnerships, and challenging projects.',
    'contacts.email': 'Business email',
    'contacts.location': 'Location',
    'contacts.address': 'São Leopoldo, RS - Brazil',
    'contacts.role.cto': 'Talk to the CTO',
    'contacts.role.cdo': 'Talk to the CDO',
    // Tooltips
    'tooltip.contacts': 'contacts',
    'tooltip.legal': 'terms and conditions',
    'tooltip.privacy': 'privacy policy',
    'tooltip.about': 'about us',
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<LocaleType>('pt-BR');

  useEffect(() => {
    const savedLocale = getCookie('gerialy_locale') as LocaleType;
  
    if (savedLocale && ['pt-BR', 'pt-PT', 'en-UK'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    } else {
      const browserLanguage = navigator.language;

      if (browserLanguage.startsWith('pt')) {
        if (browserLanguage === 'pt-PT') {
          setLocaleState('pt-PT');
        } else {
          setLocaleState('pt-BR');
        }
      } else {
        setLocaleState('en-UK');
      }
    }
  }, []);

  const setLocale = (newLocale: LocaleType) => {
    setLocaleState(newLocale);
    setCookie('gerialy_locale', newLocale, { maxAge: 30 * 24 * 60 * 60 }); // 30 days
  };

  const t = (key: string): string => {
    const activeDict = translations[locale] as Record<string, string>;
    return activeDict[key] || translations['pt-BR'][key as keyof typeof translations['pt-BR']] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  return context;
};
