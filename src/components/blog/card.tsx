import { component$ } from "@builder.io/qwik";
import type { CardProps } from "~/types/post";
import { Facebook } from "../icons/facebook";
import { Instagram } from "../icons/instagram";
import { Mail } from "../icons/mail";
import { Pinterest } from "../icons/pinterest";
import { Sharing } from "../icons/sharing";

export const Card = component$(
  ({
    title,
    splash,
    alt,
    publish_date,
    author,
    description,
    slug,
    isNew,
    isTrending,
    tags,
  }: CardProps) => (
    <div class="card w-96 bg-base-100 shadow-xl mb-5 md:mb-0">
      <a href={slug}>
        <figure>
          <img src={splash} alt={alt} />
        </figure>
      </a>
      <div class="card-body">
        <h2 class="card-title">
          <a href={slug}>{title}</a>
          {isNew && <div class="badge badge-secondary">NEW</div>}
          {isTrending && <div class="badge badge-secondary">TRENDING</div>}
        </h2>
        <p>{description}</p>
        <div class="mt-3 mb-2 uppercase prose prose-slate prose-sm">
          {author} <span class="text-red-500 text-xl">&nbsp;-&nbsp;</span>{" "}
          {publish_date}
        </div>
        <div class="flex flex-row justify-end">
          <Facebook />
          <span class="mr-2" />
          <Instagram />
          <span class="mr-2" />
          <Pinterest />
          <span class="mr-2" />
          <Sharing />
          <span class="mr-2" />
          <Mail />
        </div>
        <div class="card-actions justify-end mt-3">
          {tags?.map((t) => (
            <div class="badge badge-outline">{t}</div>
          ))}
        </div>
      </div>
    </div>
  )
);
