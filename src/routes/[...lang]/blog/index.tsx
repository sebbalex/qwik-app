import type { JSXNode } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { localizedData, indexData } from "../../../data";
import { Speak, $translate as t, useSpeakLocale } from "qwik-speak";
import { Card } from "~/components/blog/card";
import type { HeroCarouselProps } from "~/components/blog/hero-carousel";
import { HeroCarousel } from "~/components/blog/hero-carousel";

export const getPosts = (l: string) => {
  const links: JSXNode[] = [];
  const lang = l === "it" ? l : l === "en" ? "en" : "it";

  for (const [i, v] of Object.entries(localizedData[lang])) {
    links.push(<Card key={i} {...v} />);
  }
  return links;
};
export const getPostsForHero = (l: string) => {
  const slides: HeroCarouselProps = {};
  const lang = l === "it" ? l : l === "en" ? "en" : "it";

  return Object.keys(localizedData[lang]).map((v, i) => {
    const idx = "slide" + i;
    const val = localizedData[lang][v];
    slides[idx] = {
      url: val.splash,
      title: val.title,
      description: val.description,
      cta: val.slug,
    };

    return slides;
  });
};

export default component$(() => {
  const locale = useSpeakLocale();

  return (
    <Speak assets={["blog"]}>
      <HeroCarousel {...getPostsForHero(locale.lang).at(0)} />
      {/* <HeroImage
        title={t("blog.title")}
        description={t("blog.desc")}
        url="/assets/images/blog-hero.webp"
        alt="Photo by Enric Cruz López: https://www.pexels.com/photo/bikes-parked-on-city-embankment-near-canal-and-old-buildings-on-cloudy-day-6039194/"
        ctaText="vai"
      /> */}
      <div class="py-5 text-center">
        <h2 class="prose text-5xl pb-4">{t("blog.recent_text")}</h2>
        <h3 class="min-w-full prose prose-slate prose-md">
          {t("blog.recent_subtext")}
        </h3>
      </div>
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
