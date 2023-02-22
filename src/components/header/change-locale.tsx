import { $, component$, useTask$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

import {
  changeLocale,
  $translate as t,
  useSpeakContext,
  useSpeakLocale,
  useSpeakConfig,
} from "qwik-speak";
import type { LabelLangs, Langs } from "~/types/post";

export const ChangeLocale = component$(() => {
  const loc = useLocation();
  const nav = useNavigate();

  const ctx = useSpeakContext();
  const locale = useSpeakLocale();
  const config = useSpeakConfig();

  const labels: LabelLangs = {
    it: "Italian 🇮🇹",
    en: "English 🇺🇸",
  };

  // Handle localized routing
  useTask$(async ({ track }) => {
    track(() => loc.params.lang);

    const newLocale =
      config.supportedLocales.find((value) => value.lang === loc.params.lang) ||
      config.defaultLocale;
    if (newLocale.lang !== locale.lang) {
      await changeLocale(newLocale, ctx);
    }
  });

  // Replace locale in URL
  const localizeUrl$ = $(async (e: HTMLSelectElement) => {
    const newLocale =
      config.supportedLocales.find((value) => value.lang === e.value) ||
      config.defaultLocale;
    let pathname = loc.pathname;
    if (loc.params.lang) {
      if (newLocale.lang !== config.defaultLocale.lang) {
        pathname = pathname.replace(loc.params.lang, newLocale.lang);
      } else {
        pathname = pathname.replace(
          new RegExp(`(/${loc.params.lang}/)|(/${loc.params.lang}$)`),
          "/"
        );
      }
    } else if (newLocale.lang !== config.defaultLocale.lang) {
      pathname = `/${newLocale.lang}${pathname}`;
    }

    console.log(pathname, newLocale, loc);

    // No full-page reload
    nav(pathname);
  });

  return (
    <div class="change-locale">
      <select
        class="select w-full max-w-xs"
        onChange$={async (v) => await localizeUrl$(v.target)}
      >
        <option disabled selected>
          {t("app.changeLocale")}
        </option>
        {config.supportedLocales.map((value) => {
          const lang: Langs =
            value.lang === "it" ? "it" : value.lang === "en" ? "en" : "en";
          return <option value={value.lang}>{labels[lang]}</option>;
        })}
      </select>
    </div>
  );
});
