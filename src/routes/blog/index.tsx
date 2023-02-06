import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import posts from "./post.json";

export default component$(() => {
  interface Blogs {
    id: number;
    title: string;
    description: string;
    author: string;
    slug: string;
    image: string;
    avatar: string;
    cta: string;
    created_at: string;
  }

  const blogs: Blogs[] = posts;
  return (
    <div class="p-3 lg:p-8 gap-8 w-full max-w-full my-0 mx-auto flex flex-col justify-center items-center">
      <h1 class="text-3xl">Posts</h1>
      {blogs.map((blog) => (
        <>
          <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <Link key={blog.id} href={blog.slug}>
                <img
                  class="object-cover h-full rounded-t-lg w-96 md:w-96 md:h-full md:rounded-none md:rounded-l-lg"
                  src={blog.image}
                  alt={blog.title}
                />
              </Link>
            </figure>
            <div class="card-body">
              <Link key={blog.id} href={blog.slug}>
                <h2 class="card-title">
                  {blog.title}
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{blog.description}</p>
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
                <a href={blog.cta} class="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>

          {/* <div class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-2xl hover:bg-gray-100">
            <Link key={blog.id} href={blog.slug}>
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-56 md:w-full md:rounded-none md:rounded-l-lg"
                src={blog.image}
                alt={blog.title}
              />
            </Link>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <Link key={blog.id} href={blog.slug}>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {blog.description}
              </p>
              <div class="flex items-center">
                <img
                  class="w-10 h-10 rounded-full mr-4"
                  src={blog.avatar}
                  alt={`avatar of ${blog.title}`}
                />
                <div class="text-sm">
                  <p class="text-gray-900 leading-none">{blog.author}</p>
                  <p class="text-gray-600">{blog.created_at}</p>
                </div>
              </div>
              <div class="flex items-center pt-3 justify-end">
                <a href={blog.cta} class="btn">
                  Buy
                </a>
              </div>
            </div>
          </div> */}
        </>
      ))}
    </div>
  );
});
