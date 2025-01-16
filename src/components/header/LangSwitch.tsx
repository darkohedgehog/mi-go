"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { PiGlobeHemisphereWestThin } from "react-icons/pi";
import { Switch } from "../ui/switch";

const LangSwitch = () => {
  const locale = useLocale(); // Trenutni jezik
  const pathname = usePathname(); // Trenutna ruta
  const router = useRouter(); // Router za navigaciju

  const handleLanguageToggle = () => {
    // Novi jezik (prebacuje se na osnovu trenutnog jezika)
    const newLocale = locale === "en" ? "hr" : "en";

    // Ukloni trenutni prefiks jezika iz pathname
    const cleanPathname = pathname.replace(/^\/(en|hr)/, "");

    // Dodaj novi prefiks jezika i navigiraj
    router.push(`/${newLocale}${cleanPathname}`);
  };

  return (
    <div className="flex items-center justify-center space-x-3 mr-4">
      <Switch
        id="language-mode"
        checked={locale === "en"} // Proverava trenutni jezik
        onCheckedChange={handleLanguageToggle}
      />
      <PiGlobeHemisphereWestThin className="text-accent w-6 h-6" />
    </div>
  );
};

export default LangSwitch;
