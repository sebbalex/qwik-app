import { $ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import type { LoadTranslationFn, SpeakConfig, TranslationFn } from "qwik-speak";

export const config: SpeakConfig = {
  defaultLocale: {
    lang: "it",
    currency: "EUR",
    timeZone: "Europe/Rome",
    units: { length: "kilometer" },
  },
  supportedLocales: [
    {
      lang: "it",
      currency: "EUR",
      timeZone: "Europe/Rome",
      units: { length: "kilometer" },
    },
    {
      lang: "en",
      currency: "USD",
      timeZone: "America/Los_Angeles",
      units: { length: "mile" },
    },
  ],
  assets: ["app", "blog"],
};

export const loadTranslation2$: LoadTranslationFn = $(
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

export const loadTranslation$: LoadTranslationFn = $(
  async (lang: string, asset: string, origin?: string) => {
    if (import.meta.env.DEV || asset === "runtime") {
      let url = "";
      // Absolute urls on server
      if (isServer && origin) {
        url = origin;
      }
      url += `/i18n/${lang}/${asset}.json`;
      const response = await fetch(url);
      return response.json();
    }
  }
);

export const translationFn: TranslationFn = {
  loadTranslation$: loadTranslation$,
};
