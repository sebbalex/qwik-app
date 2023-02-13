import { component$ } from "@builder.io/qwik";

export const Rating = component$((props: { count: number }) => {
  let s: string = "";
  for (let i = 1; i <= 10; i++) {
    const classes =
      "bg-yellow-300 mask mask-star-2 mask-half-" + ((i % 2 === 0 ? 1 : 0) + 1);
    const checked = i === props.count * 2 ? "checked" : "";
    s += `<input type="radio" class="${classes}" ${checked} />`;
  }
  return (
    <div
      class="rating rating-lg rating-half"
      dangerouslySetInnerHTML={s}
    ></div>
  );
});