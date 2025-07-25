import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const IntroText: React.FC = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText(t("home.email")).then(() => {
      setCopied(true);
    });
  };

  const animation = useMemo(
    () => (copied ? "animate-fade-bounce-in" : "scale-0 opacity-0"),
    [copied]
  );
  useEffect(() => {
    if (copied) {
      const timeoutId = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [copied]);

  return (
    <div className="">
      <div className=" flex flex-col justify-center h-full text-gray-500">
        <h1 className="text-8xl font-bold mb-2 text-gray-800 animate-breathe">
          {t("home.heading")}
        </h1>
        <p className="text-lg">{t("home.subheading1")}</p>
        <p className="text-lg">{t("home.subheading2")}</p>
        <div className="text-xs md:text-sm mt-2 flex flex-col md:flex-row items-center hover:cursor-pointer pt-2">
          <div onClick={copyEmail} className="">
            <span className="mr-1">
              <EnvelopeIcon className="h-6 w-6 inline" />
            </span>
            {t("home.email")}
          </div>

          <p
            className={`${animation} md:ml-2 mt-2 md:mt-0 rounded-full bg-teal-700 text-gray-50 dark:text-slate-300 dark:bg-slate-600 px-4 py-0.5`}
          >
            {t("home.copied")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
