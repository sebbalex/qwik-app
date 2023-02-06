import {
  component$,
  createContext,
  Slot,
  useClientEffect$,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { isBrowser } from "@builder.io/qwik/build";
import Footer from "~/components/footer/footer";
import Header from "../components/header/header";

type Theme = "dark" | "light";
export interface ThemeState {
  theme: Theme;
}

export const ThemeContext = createContext<ThemeState>("theme");
export default component$(() => {
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
    <div data-theme={state.theme} class="min-h-screen">
      <main>
        <Header />
        <section class="container px-4 py-4 min-h-[520px]">
          <Slot />
        </section>
      </main>
      <Footer />
    </div>
  );
});
