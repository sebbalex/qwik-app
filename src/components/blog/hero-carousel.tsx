import { component$ } from "@builder.io/qwik";
import type { HeroProps } from "./hero-image";

export interface HeroCarouselProps {
  [key: string]: HeroProps;
}

export const HeroCarousel = component$((items: HeroCarouselProps) => (
  <div class="carousel w-full">
    {Object.keys(items).map((v, i) => {
      const prev = items["slide" + (i - 1)]
        ? "#slide" + (i - 1)
        : "#slide" + (Object.keys(items).length - 1);
      const next = items["slide" + (i + 1)] ? "#slide" + (i + 1) : "#slide0";
      const { title, url, cta, description } = items[v];
      return (
        <div id={v} class="carousel-item relative w-full">
          <img src={url} class="w-full" />
          <div class="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div class="hero-content text-center text-neutral-content">
              <a href={cta}>
                <div class="max-w-md">
                  <h1 class="mb-5 text-5xl font-bold">{title}</h1>
                  <p class="mb-5">{description}</p>
                </div>
              </a>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={prev} class="btn btn-circle">
              ❮
            </a>
            <a href={next} class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      );
    })}
  </div>
));
