import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>
        Home <span class="lightning">⚡️</span>
      </h1>

      <div class="flex justify-between max-w-xs pt-5">
        <Link class="btn" href="/hello/">
          Hello mdx
        </Link>
        <Link class="btn" href="/hellomd/">
          Hello md
        </Link>
        <Link class="btn" href="/blog/">
          Blog
        </Link>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
