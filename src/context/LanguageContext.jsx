import React, { createContext, useContext, useState } from "react";
import en from "../translations/en";
import hi from "../translations/hi";

const translations = { en, hi };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = translations[language]; // Current language translations

  const changeLanguage = (lang) => {
    if (translations[lang]) setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
