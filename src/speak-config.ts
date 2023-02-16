import { $ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import type { LoadTranslationFn, SpeakConfig, TranslationFn } from "qwik-speak";

export const config: SpeakConfig = {
  defaultLocale: {
    lang: "en-US",
    currency: "USD",
    timeZone: "America/Los_Angeles",
  },
  supportedLocales: [
    { lang: "it-IT", currency: "EUR", timeZone: "Europe/Rome" },
    { lang: "en-US", currency: "USD", timeZone: "America/Los_Angeles" },
  ],
  assets: ["app"],
};

export const loadTranslation$: LoadTranslationFn = $(
  async (lang: string, asset: string, origin?: string) => {
    let url = "";
    // Absolute urls on server
    if (isServer && origin) {
      url = origin;
    }
    url += `/i18n/${lang}/${asset}.json`;

    let data: any = null;
    try {
      const response = await fetch(url);
      data = await response.json();
    } catch (error) {
      // Implement error handling here
      console.log("loadTranslation$ error: ", error);
    }
    return data;
  }
);

export const translationFn: TranslationFn = {
  loadTranslation$: loadTranslation$,
};
