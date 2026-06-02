import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // Kiểm tra lại đường dẫn cho đúng folder context của bạn nhé

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900/40 backdrop-blur-md">
      <button
        onClick={() => toggleLanguage('en')}
        className={`text-xs font-semibold px-2 py-0.5 rounded transition-all duration-200 ${
          language === 'en'
            ? 'bg-neutral-800 text-sky-400 shadow-sm'
            : 'text-neutral-500 hover:text-neutral-300'
        }`}
      >
        EN
      </button>
      <span className="text-neutral-700 text-xs">|</span>
      <button
        onClick={() => toggleLanguage('vi')}
        className={`text-xs font-semibold px-2 py-0.5 rounded transition-all duration-200 ${
          language === 'vi'
            ? 'bg-neutral-800 text-sky-400 shadow-sm'
            : 'text-neutral-500 hover:text-neutral-300'
        }`}
      >
        VI
      </button>
    </div>
  );
};