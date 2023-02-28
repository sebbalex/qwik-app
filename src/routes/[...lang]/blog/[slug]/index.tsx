import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { loader$ } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Frontmatter from "~/components/blog/frontmatter";
import { Back } from "~/components/icons/back";
import { Cart } from "~/components/icons/cart";
import { Facebook } from "~/components/icons/facebook";
import { Instagram } from "~/components/icons/instagram";
import { Mail } from "~/components/icons/mail";
import { Pinterest } from "~/components/icons/pinterest";
import { Sharing } from "~/components/icons/sharing";
import { Rating } from "~/components/rating";
import type { Langs, Post } from "~/types/post";
import all_data from "../../../../data";

export const getDataFromSlug = loader$(
  ({ params: { slug }, error, locale }) => {
    const lang: Langs =
      locale() === "it" ? "it" : locale() === "en" ? "en" : "en";
    const year = slug.match(/\d{4}$/)
      ? [slug.match(/\d{4}$/)].toString()
      : 2023;
    const data = all_data[lang][year];
    if (!data) throw error(404, "no data found!");
    return data; //this must return serializable data!
  }
);

export default component$(() => {
  const { value: data } = getDataFromSlug.use();

  const posts: Post[] = data.posts;
  return (
    <div class="p-3 lg:p-8 gap-8 w-full max-w-full my-0 mx-auto flex flex-col">
      <a href="/blog">
        <div class="flex flex-row align-middle">
          <Back />
          <div class="flex pl-3" style="height: 64px; align-items: center">
            {"Blog"}
          </div>
        </div>
      </a>
      <Frontmatter {...data.frontmatter} />
      <div id="social" class="flex space-x-1">
        <Facebook />
        <Instagram />
        <Pinterest />
        <Mail />
        <Sharing />
      </div>
      {posts.map((post) => (
        <>
          <div class="card w-full bg-base-100 shadow-xl">
            <figure>
              <Link key={post.id} href={post.slug}>
                <img src={post.image} alt={post.title} />
              </Link>
            </figure>
            <div class="card-body">
              <Link key={post.id} href={post.slug}>
                <h2 class="card-title pb-7">
                  {post.title}
                  {post.isNew && (
                    <div class="badge badge-secondary uppercase">new</div>
                  )}
                </h2>
                <p>{post.description}</p>
                <hr class="pt-5" />
                <h2 class="card-title">Specification</h2>
                <p>{post.specification}</p>
                <hr class="pt-7" />
                <h2 class="card-title justify-center">{post.title}</h2>
                <h3 class="flex font-medium justify-center">{post.motto}</h3>
                <hr class="pt-7" />
                <h2 class="card-title">Reasons</h2>
                <h3 class="pt-2 font-medium">To buy</h3>
                <ul>
                  {post.pros.map((pro) => (
                    <li>✅ {pro}</li>
                  ))}
                </ul>
                <h3 class="pt-2 font-medium">To avoid</h3>
                <ul>
                  {post.cons.map((con) => (
                    <li>⭕️ {con}</li>
                  ))}
                </ul>
                <hr class="pt-5" />
                <h2 class="card-title">Review</h2>
                <Rating count={post.stars} />
                <p>{post.review}</p>
              </Link>
              <div class="flex items-center pt-5">
                <img
                  class="w-10 h-10 rounded-full mr-4"
                  src={post.avatar}
                  alt={`avatar of ${post.title}`}
                />
                <div class="text-sm">
                  <p class="leading-none">{post.author}</p>
                  <p class="">{post.created_at}</p>
                </div>
              </div>
              <div class="card-actions justify-end">
                {post.tags.map((t) => (
                  <div class="badge badge-outline">{t}</div>
                ))}
              </div>
              <div class="card-actions justify-end">
                {post.cta && (
                  <>
                    <img
                      class="w-15 h-7 mt-4"
                      src="/assets/images/amazon.png"
                    />
                    <a href={post.cta} class="btn btn-primary">
                      <Cart />
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

export const head: DocumentHead = ({ getData }) => {
  const data = getData(getDataFromSlug);
  return {
    title: data.title,
    meta: [
      {
        name: "description",
        content: data.description,
      },
    ],
  };
};
