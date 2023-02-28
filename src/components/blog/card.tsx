import { component$ } from "@builder.io/qwik";

export interface CardProps {
  url: string;
  alt?: string;
  title: string;
  description: string;
  ctaText: string;
  cta?: string;
  isNew?: boolean;
  tags?: string[];
}

export const Card = component$(
  ({ title, url, alt, description, ctaText, cta, isNew, tags }: CardProps) => (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={url} alt={alt} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {title}
          {isNew && <div class="badge badge-secondary">NEW</div>}
        </h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          {tags?.map((t) => (
            <div class="badge badge-outline">{t}</div>
          ))}
        </div>
        {cta && ctaText && (
          <div class="card-actions justify-end">
            <a href={cta} class="btn btn-primary">{ctaText}</a>
          </div>
        )}
      </div>
    </div>
  )
);
