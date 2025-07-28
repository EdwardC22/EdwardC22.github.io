import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageMemu: React.FC = () => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  const setLanguage = (lang: string) => {
    const newLocale = lang === "zh" ? "zh" : "en";
    if (lang === locale) {
      return;
    }
    i18n.changeLanguage(newLocale).then(() => setLocale(newLocale));
  };
  const onLangListClick = (lang: "zh" | "en" ) => {
    
    if (lang !== locale) {
      setLanguage(lang);
    }
  };
  return (
    <ul>
      <li
        className={`${
          locale === "zh" ? "font-bold text-sky-900 dark:text-slate-300" : ""
        } hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2`}
        data-value={"zh"}
        onClick={() => onLangListClick("zh")}
      >
        简体中文
      </li>
      <li
        data-value="en"
        className={`${
          locale.startsWith("en-") || locale === "en"
            ? "font-bold text-sky-900 dark:text-slate-200"
            : ""
        } hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2`}
        onClick={() => onLangListClick("en")}
      >
        English
      </li>
    </ul>
  );
};

export default LanguageMemu;
