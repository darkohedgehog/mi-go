"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { IoLanguageSharp } from "react-icons/io5";
import { Switch } from "../ui/switch";

const LangSwitch = () => {
  const locale = useLocale(); // Trenutni jezik
  const pathname = usePathname(); // Trenutna ruta
  const router = useRouter(); // Router za navigaciju
  const [isCroatian, setIsCroatian] = useState(locale === "hr");

  const handleLanguageToggle = () => {
    const newLocale = isCroatian ? "hr" : "en"; // Prebaci jezik
    setIsCroatian(!isCroatian);

    // Ukloni trenutni prefiks jezika iz pathname
    const cleanPathname = pathname.replace(/^\/(hr|en)/, "");

    // Dodaj novi prefiks jezika
    router.push(`/${newLocale}${cleanPathname}`);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Switch
        id="language-mode"
        checked={isCroatian}
        onCheckedChange={handleLanguageToggle}
      />
      <IoLanguageSharp className="text-xl text-accent" />
    </div>
  );
};

export default LangSwitch;