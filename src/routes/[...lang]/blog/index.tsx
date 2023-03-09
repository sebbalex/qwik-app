import type { JSXNode } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { localizedData, indexData } from "../../../data";
import { Speak, $translate as t, useSpeakLocale } from "qwik-speak";
import { HeroImage } from "~/components/blog/hero-image";
import { Card } from "~/components/blog/card";

export const getPosts = (l: string) => {
  const links: JSXNode[] = [];
  const lang = l === "it" ? l : l === "en" ? "en" : "it";

  for (const [, v] of Object.entries(localizedData[lang])) {
    links.push(
      <Card
        title={v.title}
        description={v.description}
        ctaText={"Click"}
        cta={v.slug}
        url={v.splash}
      />
      // <a href={`${v.slug}/`} class="btn">
      //   {v.title}
      // </a>
    );
  }
  return links;
};

export default component$(() => {
  const locale = useSpeakLocale();
  return (
    <Speak assets={["blog"]}>
      <HeroImage
        title={t("blog.title")}
        description="desc"
        url="/assets/images/blog-hero.jpg"
        alt="Photo by Enric Cruz López: https://www.pexels.com/photo/bikes-parked-on-city-embankment-near-canal-and-old-buildings-on-cloudy-day-6039194/"
        ctaText="vai"
      />
      <div class="flex flex-col md:flex-row md:space-x-5 py-5 px-2 md:px-5">
        {getPosts(locale.lang)}
      </div>
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
