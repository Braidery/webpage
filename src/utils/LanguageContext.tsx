'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'no' | 'fr';

// Define translation structure
type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

// Create translations object
const translations: Translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.features': 'Features',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.askQuestion': 'Ask a Question',

    // Hero section
    'hero.title': 'Get notified',
    'hero.subtitle': 'When we launch',
    'hero.emailPlaceholder': 'Enter your email to be notified',
    'hero.notifyButton': 'Notify Me',
    'hero.spamMessage': "Don\'t worry, we will not send spam :)",

    // About section
    'about.title': "What\'s",
    'about.titleHighlight': 'BRAIDERY',
    'about.description':
      'BRAIDERY is a comprehensive hair care platform designed to connect individuals with expert braiders and hair care professionals, while also providing personalized hair care recommendations and tools. It is a one-stop solution for everything hair-related.',

    // Features section
    'features.title': 'Amazing',
    'features.titleHighlight': 'Features',
    'features.description':
      'Discover all the powerful tools and features that make Braidery the ultimate hair care companion for everyone.',
    'features.ai.title': 'AI-Powered Recommendations',
    'features.ai.description':
      'Get personalized hair care routines and product recommendations based on your unique hair type and goals.',
    'features.find.title': 'Find Local Professionals',
    'features.find.description':
      'Discover and book appointments with top-rated braiders and stylists in your area with just a few taps.',
    'features.track.title': 'Hair Progress Tracking',
    'features.track.description':
      'Track your hair growth and health over time with our easy-to-use progress monitoring tools.',
    'features.style.title': 'Style Library',
    'features.style.description':
      'Browse through thousands of hairstyles and find inspiration for your next look.',

    // Blog section
    'blog.title': 'Our',
    'blog.titleHighlight': 'Blog',
    'blog.description':
      'Stay updated with the latest hair care tips, trends, and techniques from our experts.',
    'blog.readMore': 'Read More',
    'blog.viewAll': 'View All Posts',
    'blog.post1.title': 'Braidery App Launch',
    'blog.post1.excerpt':
      'Discover how our new app is revolutionizing the hair styling industry',
    'blog.post1.date': 'March 1, 2023',
    'blog.post2.title': 'Top Braiding Styles of 2023',
    'blog.post2.excerpt':
      'Explore the most popular braiding styles that are trending this year',
    'blog.post2.date': 'February 15, 2023',
    'blog.post3.title': 'How to Find the Perfect Stylist',
    'blog.post3.excerpt':
      'Tips and tricks for finding a stylist that matches your needs and style',
    'blog.post3.date': 'January 28, 2023',

    // Why Braidery section
    'why.title': 'Why',
    'why.titleHighlight': 'BRAIDERY',
    'why.description':
      "Braidery helps you build a fun, personalized hair regimen with the power of AI, guiding you step by step to reach your hair goals. Whether it's tracking progress, recommending products, or offering quick style tips, Braidery makes managing your hair enjoyable and easy. Plus, with seamless braider bookings and automatic product refills, your hair routine is always on track and hassle-free!",
    'why.feature1': 'Find professional braiders and salons nearby',
    'why.feature2': 'Try New Styles',
    'why.feature3': 'AI Powered Recommendations',
    'why.feature4': 'Hair Routine Management',
    'why.feature5': 'Showcase for Braiders',
    'why.feature6': 'Small Business Integration',

    // Download section
    'download.title': 'Check',
    'download.titleHighlight': 'BRAIDERY',
    'download.titleEnd': 'ON',
    'download.description':
      "Our app is currently in development, and we're working hard to deliver the best personalized hair care experience. You'll be able to discover professional braiders and salons nearby, receive AI-powered personalized hair care routines, and shop for tailored hair care products all in one place.",
    'download.stayTuned': 'Stay tuned!',
    'download.notification':
      "We'll notify you as soon as the app is ready for download.",

    // FAQ section
    'faq.title': 'Frequently Asked',
    'faq.titleHighlight': 'Questions',
    'faq.description':
      'Find answers to common questions about Braidery and our services.',
    'faq.q1': 'What is Braidery?',
    'faq.a1':
      'Braidery is a comprehensive hair care platform designed to connect individuals with expert braiders and hair care professionals, while also providing personalized hair care recommendations and tools.',
    'faq.q2': 'When will the app be available?',
    'faq.a2':
      'Our app is currently in development. Sign up with your email to be notified as soon as we launch!',
    'faq.q3': 'How does the AI recommendation system work?',
    'faq.a3':
      'Our AI analyzes your hair type, texture, concerns, and goals to provide personalized product recommendations and hair care routines tailored specifically to your needs.',
    'faq.q4': 'Will Braidery be available in my area?',
    'faq.a4':
      'We plan to launch in major cities first and gradually expand our coverage. Sign up to be notified when we launch in your area!',
    'faq.q5': "I\'m a professional braider. How can I join the platform?",
    'faq.a5':
      "We\'ll have a dedicated onboarding process for professional stylists and braiders. Sign up for our waitlist to be among the first to join when we launch!",

    // Contact section
    'contact.title': 'Get In',
    'contact.titleHighlight': 'Touch',
    'contact.description':
      "Have questions or feedback? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.",
    'contact.name': 'Your Name',
    'contact.namePlaceholder': 'Enter your name',
    'contact.email': 'Your Email',
    'contact.emailPlaceholder': 'Enter your email address',
    'contact.message': 'Your Message',
    'contact.messagePlaceholder': 'What would you like to tell us?',
    'contact.sendButton': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.submit': 'Send',
    'contact.subject': 'Subject',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.copyright': '© {year} BRAIDERY. All rights reserved.',
    'footer.email': 'cgamman@braidery.com',
    'footer.orgNumber': 'Organization Number',
    'footer.quickLinks': 'Quick Links',
    'footer.followUs': 'Follow Us',

    // Testimonials section
    'testimonials.title': 'What People Are',
    'testimonials.titleHighlight': 'Saying',
    'testimonials.person1.name': 'Sarah Johnson',
    'testimonials.person1.role': 'Hair Care Enthusiast',
    'testimonials.person1.quote':
      'Braidery has completely transformed my hair care routine. The personalized recommendations are spot on!',
    'testimonials.person2.name': 'Michael Thompson',
    'testimonials.person2.role': 'Professional Stylist',
    'testimonials.person2.quote':
      'As a stylist, I love how Braidery connects me with clients who are specifically looking for my expertise.',
    'testimonials.person3.name': 'Aisha Williams',
    'testimonials.person3.role': 'Salon Owner',
    'testimonials.person3.quote':
      'The platform has helped my small business grow tremendously. The booking system is seamless!'
  },

  no: {
    // Navigation
    'nav.about': 'Om',
    'nav.features': 'Funksjoner',
    'nav.services': 'Tjenester',
    'nav.blog': 'Blogg',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.askQuestion': 'Still et spørsmål',

    // Hero section
    'hero.title': 'Få beskjed',
    'hero.subtitle': 'Når vi lanserer',
    'hero.emailPlaceholder': 'Skriv inn e-posten din for å bli varslet',
    'hero.notifyButton': 'Varsle meg',
    'hero.spamMessage': 'Ikke bekymre deg, vi sender ikke spam :)',

    // About section
    'about.title': 'Hva er',
    'about.titleHighlight': 'BRAIDERY',
    'about.description':
      'BRAIDERY er en omfattende hårpleieplattform designet for å koble enkeltpersoner med ekspertflettere og hårpleiefagfolk, samtidig som den gir personlige hårpleieråd og verktøy. Det er en alt-i-ett-løsning for alt hårrelatert.',

    // Features section
    'features.title': 'Fantastiske',
    'features.titleHighlight': 'Funksjoner',
    'features.description':
      'Oppdag alle de kraftige verktøyene og funksjonene som gjør Braidery til den ultimate hårpleiepartneren for alle.',
    'features.ai.title': 'AI-drevne anbefalinger',
    'features.ai.description':
      'Få personlige hårpleierutiner og produktanbefalinger basert på din unike hårtype og mål.',
    'features.find.title': 'Finn lokale fagfolk',
    'features.find.description':
      'Oppdag og bestill avtaler med høyt rangerte flettere og stylister i ditt område med bare noen få trykk.',
    'features.track.title': 'Sporing av hårfremgang',
    'features.track.description':
      'Spor hårveksten og helsen over tid med våre brukervennlige fremgangsverktøy.',
    'features.style.title': 'Stilbibliotek',
    'features.style.description':
      'Bla gjennom tusenvis av frisyrer og finn inspirasjon til ditt neste utseende.',

    // Blog section
    'blog.title': 'Vår',
    'blog.titleHighlight': 'Blogg',
    'blog.description':
      'Bli oppdatert med de nyeste hårpleietipsene, trendene og teknikkene fra våre eksperter.',
    'blog.readMore': 'Les mer',
    'blog.viewAll': 'Se alle innleggene',
    'blog.post1.title': 'Lansering av Braidery-appen',
    'blog.post1.excerpt':
      'Oppdag hvordan vår nye app revolusjonerer hårfrisyrindustrien',
    'blog.post1.date': '1. mars 2023',
    'blog.post2.title': 'Topp flettefrisyrer i 2023',
    'blog.post2.excerpt':
      'Utforsk de mest populære flettefrisyrene som er trendy i år',
    'blog.post2.date': '15. februar 2023',
    'blog.post3.title': 'Hvordan finne den perfekte stylisten',
    'blog.post3.excerpt':
      'Tips og triks for å finne en stylist som passer dine behov og stil',
    'blog.post3.date': '28. januar 2023',

    // Why Braidery section
    'why.title': 'Hvorfor',
    'why.titleHighlight': 'BRAIDERY',
    'why.description':
      'Braidery hjelper deg med å bygge et morsomt, personlig hårregime med kraften til AI, som veileder deg trinn for trinn for å nå hårmålene dine. Enten det er å spore fremgang, anbefale produkter eller tilby raske stiltips, gjør Braidery håndtering av håret ditt hyggelig og enkelt. I tillegg, med sømløse fletterbookinger og automatiske produktpåfyllinger, er hårrutinen din alltid på sporet og problemfri!',
    'why.feature1': 'Finn profesjonelle flettere og salonger i nærheten',
    'why.feature2': 'Prøv nye stiler',
    'why.feature3': 'AI-drevne anbefalinger',
    'why.feature4': 'Håndtering av hårrutine',
    'why.feature5': 'Utstillingsvindu for flettere',
    'why.feature6': 'Integrasjon for små bedrifter',

    // Download section
    'download.title': 'Sjekk',
    'download.titleHighlight': 'BRAIDERY',
    'download.titleEnd': 'PÅ',
    'download.description':
      'Appen vår er for tiden under utvikling, og vi jobber hardt for å levere den beste personlige hårpleieopplevelsen. Du vil kunne oppdage profesjonelle flettere og salonger i nærheten, motta AI-drevne personlige hårpleierutiner og handle skreddersydde hårpleieprodukter på ett sted.',
    'download.stayTuned': 'Følg med!',
    'download.notification':
      'Vi varsler deg så snart appen er klar for nedlasting.',

    // FAQ section
    'faq.title': 'Ofte stilte',
    'faq.titleHighlight': 'Spørsmål',
    'faq.description':
      'Finn svar på vanlige spørsmål om Braidery og tjenestene våre.',
    'faq.q1': 'Hva er Braidery?',
    'faq.a1':
      'Braidery er en omfattende hårpleieplattform designet for å koble enkeltpersoner med ekspertflettere og hårpleiefagfolk, samtidig som den gir personlige hårpleieråd og verktøy.',
    'faq.q2': 'Når vil appen være tilgjengelig?',
    'faq.a2':
      'Appen vår er for tiden under utvikling. Registrer deg med e-postadressen din for å bli varslet så snart vi lanserer!',
    'faq.q3': 'Hvordan fungerer AI-anbefalingssystemet?',
    'faq.a3':
      'AI-en vår analyserer hårtypen, teksturen, bekymringene og målene dine for å gi personlige produktanbefalinger og hårpleierutiner skreddersydd spesielt for dine behov.',
    'faq.q4': 'Vil Braidery være tilgjengelig i mitt område?',
    'faq.a4':
      'Vi planlegger å lansere i store byer først og gradvis utvide dekningen vår. Registrer deg for å bli varslet når vi lanserer i ditt område!',
    'faq.q5':
      'Jeg er en profesjonell fletter. Hvordan kan jeg bli med på plattformen?',
    'faq.a5':
      'Vi vil ha en dedikert onboarding-prosess for profesjonelle stylister og flettere. Registrer deg på ventelisten vår for å være blant de første som blir med når vi lanserer!',

    // Contact section
    'contact.title': 'Ta',
    'contact.titleHighlight': 'Kontakt',
    'contact.description':
      'Har du spørsmål eller tilbakemeldinger? Vi vil gjerne høre fra deg! Fyll ut skjemaet nedenfor, så kommer vi tilbake til deg så snart som mulig.',
    'contact.name': 'Ditt navn',
    'contact.namePlaceholder': 'Skriv inn navnet ditt',
    'contact.email': 'Din e-post',
    'contact.emailPlaceholder': 'Skriv inn e-postadressen din',
    'contact.message': 'Din melding',
    'contact.messagePlaceholder': 'Hva vil du fortelle oss?',
    'contact.sendButton': 'Send melding',
    'contact.sending': 'Sender...',
    'contact.submit': 'Send',
    'contact.subject': 'Emne',

    // Footer
    'footer.rights': 'Alle rettigheter reservert.',
    'footer.copyright': '© {year} BRAIDERY. Alle rettigheter reservert.',
    'footer.email': 'cgamman@braidery.com',
    'footer.orgNumber': 'Organisasjonsnummer',
    'footer.quickLinks': 'Hurtiglenker',
    'footer.followUs': 'Følg oss',

    // Testimonials section
    'testimonials.title': 'Hva folk',
    'testimonials.titleHighlight': 'sier',
    'testimonials.person1.name': 'Sarah Johnson',
    'testimonials.person1.role': 'Hårpleieentusiast',
    'testimonials.person1.quote':
      'Braidery har fullstendig forvandlet hårpleierutinen min. De personlige anbefalingene er helt perfekte!',
    'testimonials.person2.name': 'Michael Thompson',
    'testimonials.person2.role': 'Profesjonell stylist',
    'testimonials.person2.quote':
      'Som stylist elsker jeg hvordan Braidery kobler meg med kunder som spesifikt leter etter min ekspertise.',
    'testimonials.person3.name': 'Aisha Williams',
    'testimonials.person3.role': 'Salongeier',
    'testimonials.person3.quote':
      'Plattformen har hjulpet min lille bedrift å vokse enormt. Bookingsystemet er sømløst!'
  },

  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.features': 'Fonctionnalités',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.askQuestion': 'Poser une question',

    // Hero section
    'hero.title': 'Soyez informé',
    'hero.subtitle': 'Quand nous lançons',
    'hero.emailPlaceholder': 'Entrez votre email pour être notifié',
    'hero.notifyButton': 'Me notifier',
    'hero.spamMessage':
      "Ne vous inquiétez pas, nous n\'enverrons pas de spam :)",

    // About section
    'about.title': "Qu\'est-ce que",
    'about.titleHighlight': 'BRAIDERY',
    'about.description':
      "BRAIDERY est une plateforme complète de soins capillaires conçue pour connecter les individus avec des tresseurs experts et des professionnels des soins capillaires, tout en fournissant des recommandations et des outils de soins capillaires personnalisés. C'est une solution tout-en-un pour tout ce qui concerne les cheveux.",

    // Features section
    'features.title': 'Fonctionnalités',
    'features.titleHighlight': 'Incroyables',
    'features.description':
      'Découvrez tous les outils et fonctionnalités puissants qui font de Braidery le compagnon ultime de soins capillaires pour tous.',
    'features.ai.title': "Recommandations alimentées par l'IA",
    'features.ai.description':
      'Obtenez des routines de soins capillaires personnalisées et des recommandations de produits basées sur votre type de cheveux unique et vos objectifs.',
    'features.find.title': 'Trouvez des professionnels locaux',
    'features.find.description':
      'Découvrez et réservez des rendez-vous avec des tresseurs et des stylistes bien notés dans votre région en quelques clics.',
    'features.track.title': 'Suivi de la progression des cheveux',
    'features.track.description':
      'Suivez la croissance et la santé de vos cheveux au fil du temps avec nos outils de suivi faciles à utiliser.',
    'features.style.title': 'Bibliothèque de styles',
    'features.style.description':
      "Parcourez des milliers de coiffures et trouvez l'inspiration pour votre prochain look.",

    // Blog section
    'blog.title': 'Notre',
    'blog.titleHighlight': 'Blog',
    'blog.description':
      'Restez à jour avec les derniers conseils pour le soin des cheveux, les tendances et les techniques de nos experts.',
    'blog.readMore': 'Lire plus',
    'blog.viewAll': 'Voir tous les articles',
    'blog.post1.title': "Lancement de l'application Braidery",
    'blog.post1.excerpt':
      "Découvrez comment notre nouvelle application révolutionne l'industrie de la coiffure",
    'blog.post1.date': '1 mars 2023',
    'blog.post2.title': 'Les meilleures coiffures tressées de 2023',
    'blog.post2.excerpt':
      'Explorez les styles de tressage les plus populaires qui sont tendance cette année',
    'blog.post2.date': '15 février 2023',
    'blog.post3.title': 'Comment trouver le coiffeur parfait',
    'blog.post3.excerpt':
      'Conseils et astuces pour trouver un coiffeur qui correspond à vos besoins et à votre style',
    'blog.post3.date': '28 janvier 2023',

    // Why Braidery section
    'why.title': 'Pourquoi',
    'why.titleHighlight': 'BRAIDERY',
    'why.description':
      "Braidery vous aide à construire un régime capillaire amusant et personnalisé avec la puissance de l'IA, vous guidant étape par étape pour atteindre vos objectifs capillaires. Qu'il s'agisse de suivre les progrès, de recommander des produits ou d'offrir des conseils de style rapides, Braidery rend la gestion de vos cheveux agréable et facile. De plus, avec des réservations de tresseurs sans faille et des recharges automatiques de produits, votre routine capillaire est toujours sur la bonne voie et sans tracas!",
    'why.feature1':
      'Trouvez des tresseurs professionnels et des salons à proximité',
    'why.feature2': 'Essayez de nouveaux styles',
    'why.feature3': "Recommandations alimentées par l'IA",
    'why.feature4': 'Gestion de la routine capillaire',
    'why.feature5': 'Vitrine pour les tresseurs',
    'why.feature6': 'Intégration des petites entreprises',

    // Download section
    'download.title': 'Consultez',
    'download.titleHighlight': 'BRAIDERY',
    'download.titleEnd': 'SUR',
    'download.description':
      "Notre application est actuellement en développement, et nous travaillons dur pour offrir la meilleure expérience de soins capillaires personnalisés. Vous pourrez découvrir des tresseurs professionnels et des salons à proximité, recevoir des routines de soins capillaires personnalisées alimentées par l'IA et acheter des produits de soins capillaires adaptés, le tout en un seul endroit.",
    'download.stayTuned': "Restez à l'écoute!",
    'download.notification':
      "Nous vous informerons dès que l'application sera prête à être téléchargée.",

    // FAQ section
    'faq.title': 'Questions',
    'faq.titleHighlight': 'Fréquentes',
    'faq.description':
      'Trouvez des réponses aux questions courantes sur Braidery et nos services.',
    'faq.q1': "Qu\'est-ce que Braidery?",
    'faq.a1':
      'Braidery est une plateforme complète de soins capillaires conçue pour connecter les individus avec des tresseurs experts et des professionnels des soins capillaires, tout en fournissant des recommandations et des outils de soins capillaires personnalisés.',
    'faq.q2': "Quand l\'application sera-t-elle disponible?",
    'faq.a2':
      'Notre application est actuellement en développement. Inscrivez-vous avec votre email pour être notifié dès que nous lançons!',
    'faq.q3': 'Comment fonctionne le système de recommandation AI?',
    'faq.a3':
      'Notre IA analyse votre type de cheveux, texture, préoccupations et objectifs pour fournir des recommandations de produits personnalisées et des routines de soins capillaires adaptées spécifiquement à vos besoins.',
    'faq.q4': 'Braidery sera-t-il disponible dans ma région?',
    'faq.a4':
      "Nous prévoyons de lancer d\'abord dans les grandes villes et d\'étendre progressivement notre couverture. Inscrivez-vous pour être notifié lorsque nous lançons dans votre région!",
    'faq.q5':
      'Je suis un tresseur professionnel. Comment puis-je rejoindre la plateforme?',
    'faq.a5':
      "Nous aurons un processus d\'intégration dédié pour les stylistes professionnels et les tresseurs. Inscrivez-vous sur notre liste d\'attente pour être parmi les premiers à rejoindre lors de notre lancement!",

    // Contact section
    'contact.title': 'Entrer en',
    'contact.titleHighlight': 'Contact',
    'contact.description':
      'Vous avez des questions ou des commentaires? Nous aimerions avoir de vos nouvelles! Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.',
    'contact.name': 'Votre nom',
    'contact.namePlaceholder': 'Entrez votre nom',
    'contact.email': 'Votre email',
    'contact.emailPlaceholder': 'Entrez votre adresse email',
    'contact.message': 'Votre message',
    'contact.messagePlaceholder': 'Que souhaitez-vous nous dire?',
    'contact.sendButton': 'Envoyer le message',
    'contact.sending': 'Envoi en cours...',
    'contact.submit': 'Envoyer',
    'contact.subject': 'Sujet',

    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.copyright': '© {year} BRAIDERY. Tous droits réservés.',
    'footer.email': 'cgamman@braidery.com',
    'footer.orgNumber': "Numéro d'organisation",
    'footer.quickLinks': 'Liens rapides',
    'footer.followUs': 'Suivez-nous',

    // Testimonials section
    'testimonials.title': 'Ce que les gens',
    'testimonials.titleHighlight': 'disent',
    'testimonials.person1.name': 'Sarah Johnson',
    'testimonials.person1.role': 'Passionnée de soins capillaires',
    'testimonials.person1.quote':
      'Braidery a complètement transformé ma routine de soins capillaires. Les recommandations personnalisées sont parfaites!',
    'testimonials.person2.name': 'Michael Thompson',
    'testimonials.person2.role': 'Styliste professionnel',
    'testimonials.person2.quote':
      "En tant que styliste, j'adore comment Braidery me connecte avec des clients qui recherchent spécifiquement mon expertise.",
    'testimonials.person3.name': 'Aisha Williams',
    'testimonials.person3.role': 'Propriétaire de salon',
    'testimonials.person3.quote':
      'La plateforme a aidé ma petite entreprise à se développer énormément. Le système de réservation est parfait!'
  }
};

// Create context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => ''
});

// Create provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = (): LanguageContextType =>
  useContext(LanguageContext);
