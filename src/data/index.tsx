import posts_2022 from "./2022/posts.json";
import fm_2022 from "./2022/index";
import posts_2023 from "./2023/posts.json";
import fm_2023 from "./2023/index";
import type { Data } from "~/types/post";

const data: Data = {
  "2022": {
    Frontmatter: fm_2022,
    posts: posts_2022,
    slug: "best-bikepacking-gears-2022",
    title: "Best bikepacking gears in 2022",
    description: "Best bikepacking bags 2022 - top tube, seatpost and much more to enjoy your trip with your bike",
  },
  "2023": {
    Frontmatter: fm_2023,
    posts: posts_2023,
    slug: "best-bikepacking-gears-2023",
    title: "Best bikepacking gears in 2023",
    description: "Best bikepacking bags 2023 - top tube, seatpost and much more to enjoy your trip with your bike",
  },
};

export default data;
