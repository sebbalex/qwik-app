import { component$ } from "@builder.io/qwik";

export default component$(() => (
  <>
    <h1 class="text-3xl pb-5">blog list</h1>
    <div class="flex flex-col space-y-5 w-96">
      <a href="/blog/best-bikepacking-gears-2022/" class="btn">
        Best bikepacking gears 2022
      </a>
      <a href="/blog/best-bikepacking-gears-2023/" class="btn">
        Best bikepacking gears 2023
      </a>
    </div>
  </>
));
