import type { JSXNode } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import {data, indexData} from "../../data";

export const getPages = () => {
  const links: JSXNode[] = [];
  for (const [, v] of Object.entries(data)) {
    links.push(
      <a href={`/blog/${v.slug}/`} class="btn">
        {v.title}
      </a>
    );
  }
  return links;
};

export default component$(() => (
  <>
    <h1 class="text-3xl pb-5">blog list</h1>
    <div class="flex flex-col space-y-5 w-96">{getPages()}</div>
  </>
));

export const head = {
  title: indexData.title,
  meta: [
    {
      name: "description",
      content: indexData.description,
    },
  ],
};
