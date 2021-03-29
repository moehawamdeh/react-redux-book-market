import { useContext } from 'react';
import { LanguageContext } from '../features/MultiLang/LanguageContext';
import PropTypes from 'prop-types';

export default function Text ({ tid }) {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[tid] || tid;
}
export function getText (tid) {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[tid] || tid;
}
Text.protoTypes = {
  tid: PropTypes.string.isRequired
};
