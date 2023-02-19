import { component$ } from "@builder.io/qwik";
import type { Frontmatter } from "~/types/post";

export default component$((props: Frontmatter) => (
  <>
    <h1 class="text-3xl">{props.title}</h1>
    <h2 class="text-sm">
      By <a href="#">{props.username}</a> published {props.published_at}
    </h2>
    <h3 class="text-lg font-light">{props.subtitle}</h3>
  </>
));
