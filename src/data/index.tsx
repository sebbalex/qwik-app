import en_posts_2022 from "./en/2022/posts.json";
import en_posts_2023 from "./en/2023/posts.json";

import it_posts_2022 from "./it/2022/posts.json";
import it_posts_2023 from "./it/2023/posts.json";

import type { Data, IndexData, LocalizedData } from "~/types/post";

export const dataEN: Data = {
  "2022": {
    frontmatter: en_posts_2022.frontmatter,
    posts: en_posts_2022.items,
    slug: "best-bikepacking-gears-2022",
    title: "Best bikepacking gears in 2022",
    publish_date: "November 15, 2022",
    author: "Mario Rossi",
    description:
      "Best bikepacking bags 2022 - top tube, seatpost and much more to enjoy your trip with your bike",
    splash: "/assets/images/bikepacking-2022-splash.webp",
    alt: "Best bikepacking bags 2022",
    splash_credits:
      "Photo by Maarten van den Heuvel: https://www.pexels.com/photo/bikes-in-parking-space-on-street-4254893/",
    tags: ["cool", "fresh"],
  },
  "2023": {
    frontmatter: en_posts_2023.frontmatter,
    posts: en_posts_2023.items,
    slug: "best-bikepacking-gears-2023",
    title: "Best bikepacking gears in 2023",
    publish_date: "February 7, 2023",
    author: "Mario Rossi",
    description:
      "Best bikepacking bags 2023 - top tube, seatpost and much more to enjoy your trip with your bike",
    splash: "/assets/images/bikepacking-2023-splash.webp",
    alt: "Best bikepacking bags 2023 image",
    splash_credits:
      "Photo by Joan Monterde: https://www.pexels.com/photo/a-yellow-dome-tent-under-a-starry-night-7331516/",
  },
};

export const dataIT: Data = {
  "2022": {
    frontmatter: it_posts_2022.frontmatter,
    posts: it_posts_2022.items,
    slug: "best-bikepacking-gears-2022",
    title: "Best bikepacking gears in 2022",
    publish_date: "15 Novembre, 2022",
    author: "Mario Rossi",
    description:
      "Best bikepacking bags 2022 - top tube, seatpost and much more to enjoy your trip with your bike",
    splash: "/assets/images/bikepacking-2022-splash.webp",
    alt: "Best bikepacking bags 2022",
    splash_credits:
      "Photo by Maarten van den Heuvel: https://www.pexels.com/photo/bikes-in-parking-space-on-street-4254893/",
    tags: ["cool", "fresh"],
  },
  "2023": {
    frontmatter: it_posts_2023.frontmatter,
    posts: it_posts_2023.items,
    slug: "best-bikepacking-gears-2023",
    title: "Best bikepacking gears in 2023",
    publish_date: "7 Febbraio, 2023",
    author: "Mario Rossi",
    description:
      "Best bikepacking bags 2023 - top tube, seatpost and much more to enjoy your trip with your bike",
    splash: "/assets/images/bikepacking-2023-splash.webp",
    alt: "Best bikepacking bags 2023 image",
    splash_credits:
      "Photo by Joan Monterde: https://www.pexels.com/photo/a-yellow-dome-tent-under-a-starry-night-7331516/",
  },
};

export const localizedData: LocalizedData = {
  en: dataEN,
  it: dataIT,
};

// TO BE REMOVED
// this is used for meta data in pages for SEO optimizations
// see blog/index
export const indexData: IndexData = {
  title: "Blog for bikepacking",
  description: "Best bikepacking bags ever",
};

export default localizedData;
