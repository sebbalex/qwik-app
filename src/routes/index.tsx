import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>

      
      <Link class="btn" href="/hello/">
        Blow my mind 🤯
      </Link>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
