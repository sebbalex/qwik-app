import { component$, createContext, useClientEffect$, useContextProvider, useStore, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { isBrowser } from '@builder.io/qwik/build';
import { RouterHead } from './components/router-head/router-head';

import globalStyles from './global.css?inline';

type Theme = "dark" | "light";
export interface ThemeState {
  theme: Theme;
}
export const ThemeContext = createContext<ThemeState>("theme");
export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);
  const defaultTheme: Theme = "light";
  const state = useStore<ThemeState>({
    theme: "dark",
  });
  useClientEffect$(() => {
    if (isBrowser) {
      state.theme =
        localStorage.getItem("theme") === "light"
          ? "light"
          : "dark" || defaultTheme;
    }
  });
  useContextProvider(ThemeContext, state);
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body data-theme={state.theme} lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
