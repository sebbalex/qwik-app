import { $, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import posts from "./post.json";

export default component$(() => {
  interface Blogs {
    id: number;
    title: string;
    description: string;
    specification: string;
    author: string;
    slug: string;
    image: string;
    avatar: string;
    cta: string;
    motto: string;
    created_at: string;
    pros: string[];
    cons: string[];
    review: string;
    stars: number;
    tags: string[];
  }
  const stars = $((s: number) => {
    let ss = "";
    for (let i = 0; i < s; i++) {
      ss += "⭐️";
    }
    return ss;
  });

  const blogs: Blogs[] = posts;
  return (
    <div class="p-3 lg:p-8 gap-8 w-full max-w-full my-0 mx-auto flex flex-col justify-center items-center">
      <h1 class="text-3xl">Posts</h1>
      {blogs.map((blog) => (
        <>
          <div class="card w-4/5 bg-base-100 shadow-xl">
            <figure>
              <Link key={blog.id} href={blog.slug}>
                <img src={blog.image} alt={blog.title} />
              </Link>
            </figure>
            <div class="card-body">
              <Link key={blog.id} href={blog.slug}>
                <h2 class="card-title pb-7">
                  {blog.title}
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{blog.description}</p>
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
                {stars(blog.stars)}
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
                <img
                  class="w-15 h-7 mt-4"
                  src="/assets/images/amazon.png"
                />
                <a href={blog.cta} class="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
});