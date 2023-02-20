import type { JSXNode } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { localizedData, indexData } from "../../../data";
import { Speak, $translate as t, useSpeakLocale } from "qwik-speak";

export const getPosts = (l: string) => {
  const links: JSXNode[] = [];
  const lang = l === "it" ? l : l === "en" ? "en" : "en";

  for (const [, v] of Object.entries(localizedData[lang])) {
    links.push(
      <a href={`${v.slug}/`} class="btn">
        {v.title}
      </a>
    );
  }
  return links;
};

export default component$(() => {
  const locale = useSpeakLocale();
  return (
    <Speak assets={["blog"]}>
      <h1 class="text-3xl pb-5">{t("blog.title")}</h1>
      <div class="flex flex-col space-y-5 w-96">{getPosts(locale.lang)}</div>
    </Speak>
  );
});

export const head = {
  title: indexData.title,
  meta: [
    {
      name: "description",
      content: indexData.description,
    },
  ],
};
