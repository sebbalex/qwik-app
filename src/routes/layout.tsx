import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <div class="min-h-screen">
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
