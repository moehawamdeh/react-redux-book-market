import { createContext } from 'react';
import { dictionaryList } from '../../app/languages';

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en
});
