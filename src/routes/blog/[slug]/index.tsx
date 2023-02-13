import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Facebook } from "~/components/icons/facebook";
import { Instagram } from "~/components/icons/instagram";
import { Mail } from "~/components/icons/mail";
import { Pinterest } from "~/components/icons/pinterest";
import { Sharing } from "~/components/icons/sharing";
import type { Post } from "~/types/post";
import all_data from "../../../data";

export let year = "2023";
export let slug = "";
interface RequestData {
  slug: string;
}
export const onGet: RequestHandler<RequestData> = async ({ params }) => {
  slug = params.slug;
  year = slug.match(/\d{4}$/) ? [slug.match(/\d{4}$/)].toString() : year;
};

export default component$(() => {
  const data = all_data[year];

  const stars = (s: number) => {
    let ss = "";
    for (let i = 1; i <= 10; i++) {
      ss += `<input type="radio" class="bg-yellow-300 mask mask-star-2 mask-half-${
        (i % 2 === 0 ? 1 : 0) + 1
      }" ${i === s * 2 ? "checked" : ""} />`;
    }
    return ss;
  };

  const blogs: Post[] = data.posts;
  return (
    <div class="p-3 lg:p-8 gap-8 w-full max-w-full my-0 mx-auto flex flex-col">
      <h1 class="text-3xl">
        Best bikepacking bags {year} - top tube, seatpost and much more to enjoy
        your trip with your bike
      </h1>
      <h2 class="text-sm">
        By <a href="#">user</a> published Feb 7, 2023
      </h2>
      <h3 class="text-lg font-light">
        Best bikepacking bags {year} - top tube, seatpost and much more to enjoy
        your trip with your bike
      </h3>
      <div id="social" class="flex space-x-1">
        <Facebook />
        <Instagram />
        <Pinterest />
        <Mail />
        <Sharing />
      </div>
      {blogs.map((blog) => (
        <>
          <div class="card w-full bg-base-100 shadow-xl">
            <figure>
              <Link key={blog.id} href={blog.slug}>
                <img src={blog.image} alt={blog.title} />
              </Link>
            </figure>
            <div class="card-body">
              <Link key={blog.id} href={blog.slug}>
                <h2 class="card-title pb-7">
                  {blog.title}
                  {blog.isNew && <div class="badge badge-secondary uppercase">new</div>}
                </h2>
                <p>{blog.description.it}</p>
                <hr class="pt-5" />
                <h2 class="card-title">Specificaition</h2>
                <p>{blog.specification}</p>
                <hr class="pt-7" />
                <h2 class="card-title justify-center">{blog.title}</h2>
                <h3 class="flex font-medium justify-center">{blog.motto}</h3>
                <hr class="pt-7" />
                <h2 class="card-title">Reasons</h2>
                <h3 class="pt-2 font-medium">To buy</h3>
                <ul>
                  {blog.pros.map((pro) => (
                    <li>✅ {pro}</li>
                  ))}
                </ul>
                <h3 class="pt-2 font-medium">To avoid</h3>
                <ul>
                  {blog.cons.map((con) => (
                    <li>⭕️ {con}</li>
                  ))}
                </ul>
                <hr class="pt-5" />
                <h2 class="card-title">Review</h2>
                <div
                  class="rating rating-md rating-half"
                  dangerouslySetInnerHTML={stars(blog.stars)}
                />
                <p>{blog.review}</p>
              </Link>
              <div class="flex items-center pt-5">
                <img
                  class="w-10 h-10 rounded-full mr-4"
                  src={blog.avatar}
                  alt={`avatar of ${blog.title}`}
                />
                <div class="text-sm">
                  <p class="leading-none">{blog.author}</p>
                  <p class="">{blog.created_at}</p>
                </div>
              </div>
              <div class="card-actions justify-end">
                {blog.tags.map((t) => (
                  <div class="badge badge-outline">{t}</div>
                ))}
              </div>
              <div class="card-actions justify-end">
                {blog.cta && (
                  <>
                    <img
                      class="w-15 h-7 mt-4"
                      src="/assets/images/amazon.png"
                    />
                    <a href={blog.cta} class="btn btn-primary">
                      Buy
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
});

export const head = {
  title: `Best bike packing gears ${year}`,
  meta: [
    {
      name: "description",
      content: `Best bikepacking bags ${year} - top tube, seatpost and much more to enjoy your trip with your bike`,
    },
  ],
};
