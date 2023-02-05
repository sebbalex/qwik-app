import {
  component$,
  createContext,
  Slot,
  useClientEffect$,
  useContextProvider,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { isServer, isBrowser } from "@builder.io/qwik/build";
import { log } from "console";
import Footer from "~/components/footer/footer";
import Header from "../components/header/header";

export interface ThemeState {
  theme: "dark" | "light";
}

export const ThemeContext = createContext<ThemeState>("theme");
export default component$(() => {
  const state = useStore<ThemeState>({
    theme: "dark",
  });
  useClientEffect$(() => {
    if (isBrowser) {
      state.theme =
        localStorage.getItem("theme") === "light" ? "light" : "dark" || "dark";
    }
  });
  useContextProvider(ThemeContext, state);
  return (
    <div data-theme={state.theme}>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </div>
  );
});
