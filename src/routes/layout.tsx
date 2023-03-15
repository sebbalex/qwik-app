import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Footer from "~/components/footer/footer";
import Header from "../components/header/header";
import { config } from "../speak-config";

export default component$(() => {
  return (
    <div class="flex flex-col min-h-screen">
      <main class="flex-1">
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </div>
  );
});

export const onRequest: RequestHandler = ({ params, locale }) => {
  const lang = params.lang;

  // Set Qwik locale
  locale(lang || config.defaultLocale.lang);
};
