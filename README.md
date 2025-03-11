# Braidery Website

A modern, responsive website for Braidery - The Ultimate Hair Care Companion.

## Features

- Responsive design for all devices
- Modern UI with animations
- Multilingual support (English, Norwegian, French)
- Contact form
- Back to top button
- Scroll-aware header

## Multilingual Support

The website supports multiple languages through a language context provider. Currently, the following languages are supported:

- English (en)
- Norwegian (no)
- French (fr)

### How to Use

1. The language switcher is located in the navigation bar.
2. Click on the language switcher to see available languages.
3. Select your preferred language to change the website content.

### How to Add a New Language

To add a new language:

1. Open `src/utils/LanguageContext.tsx`
2. Add the new language code to the `Language` type:
   ```typescript
   export type Language = 'en' | 'no' | 'fr' | 'your-language-code';
   ```
3. Add translations for the new language in the `translations` object:
   ```typescript
   'your-language-code': {
     'nav.about': 'Your translation',
     // Add all other translations
   }
   ```

### How to Add New Translation Keys

To add new translation keys:

1. Open `src/utils/LanguageContext.tsx`
2. Add the new key and its translations to each language section:
   ```typescript
   en: {
     'your.new.key': 'English translation',
     // existing translations
   },
   no: {
     'your.new.key': 'Norwegian translation',
     // existing translations
   },
   fr: {
     'your.new.key': 'French translation',
     // existing translations
   }
   ```
3. Use the new key in your components with the `t` function:
   ```typescript
   const { t } = useLanguage();
   // ...
   <p>{t('your.new.key')}</p>
   ```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/braidery-website.git
   cd braidery-website
   ```

2. Install dependencies

   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building for Production

```
npm run build
# or
yarn build
```

## Deployment

The website can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Firebase (for contact form)
