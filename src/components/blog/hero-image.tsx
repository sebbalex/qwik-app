import { component$ } from "@builder.io/qwik";

export interface HeroProps {
  url: string;
  alt?: string;
  title: string;
  description: string;
  ctaText?: string;
  cta?: string;
}

export const HeroImage = component$(
  ({ title, url, description, ctaText, cta }: HeroProps) => (
    <div class="hero h-96" style={`background-image: url(${url});`}>
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">{title}</h1>
          <p class="mb-5">{description}</p>
          {cta && ctaText && (
            <a class="btn btn-primary" href={cta}>
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  )
);
