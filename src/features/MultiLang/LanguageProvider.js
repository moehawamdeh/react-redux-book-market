import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { dictionaryList } from '../../app/languages';
import { LanguageContext } from './LanguageContext';

export function LanguageProvider ({ children }) {
  const defaultLanguage = window.localStorage.getItem('rcml-lang');
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      // const newLanguage = languageOptions[selected] ? selected : 'en'; multilanguages instead of only two
      const newLanguage = userLanguage === 'en' ? 'ar' : 'en';
      setUserLanguage(newLanguage);
      window.localStorage.setItem('rcml-lang', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired
};
