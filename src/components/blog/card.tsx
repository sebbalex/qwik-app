import { component$ } from "@builder.io/qwik";
import { Facebook } from "../icons/facebook";
import { Instagram } from "../icons/instagram";
import { Mail } from "../icons/mail";
import { Pinterest } from "../icons/pinterest";
import { Sharing } from "../icons/sharing";

export interface CardProps {
  url: string;
  alt?: string;
  title: string;
  description: string;
  ctaText: string;
  cta?: string;
  isNew?: boolean;
  isTrending?: boolean;
  tags?: string[];
}

export const Card = component$(
  ({
    title,
    url,
    alt,
    description,
    ctaText,
    cta,
    isNew,
    isTrending,
    tags,
  }: CardProps) => (
    <div class="card w-96 bg-base-100 shadow-xl mb-5 md:mb-0">
      <a href={cta}>
        <figure>
          <img src={url} alt={alt} />
        </figure>
      </a>
      <div class="card-body">
        <h2 class="card-title">
          <a href={cta}>{title}</a>
          {isNew && <div class="badge badge-secondary">NEW</div>}
          {isTrending && <div class="badge badge-secondary">TRENDING</div>}
        </h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          {tags?.map((t) => (
            <div class="badge badge-outline">{t}</div>
          ))}
        </div>
        {cta && ctaText && (
          <div class="card-actions justify-end">
            <a href={cta} class="btn btn-primary">
              {ctaText}
            </a>
          </div>
        )}
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
      </div>
    </div>
  )
);
