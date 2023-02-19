import { $, component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { ThemeContext } from "~/root";
import { QwikLogo } from "../icons/qwik";
import { ChangeLocale } from "./change-locale";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const state = useContext(ThemeContext);

  const handleThemeToggle = $(() => {
    state.theme = state.theme == "dark" ? "light" : "dark";
    localStorage.setItem("theme", state.theme);
  });

  return (
    <header class="navbar flex justify-between bg-base-100 z-10 shadow-md">
      <div class="logo">
        Logo
        <a href="https://qwik.builder.io/" target="_blank" title="qwik">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li><ChangeLocale /></li>
        <li>
          {/* Light and dark theme selection toogle **/}
          <label class="cursor-pointer label">
            <span class="label-text pr-1">🌑</span>
            <input
              type="checkbox"
              class="toggle"
              data-toggle-theme="dark,light"
              data-act-class="ACTIVECLASS"
              onClick$={handleThemeToggle}
              checked={state.theme === "light"}
            />
            <span class="label-text pl-1">☀️ </span>
          </label>
        </li>
      </ul>
    </header>
  );
});
