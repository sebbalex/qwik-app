import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span class="footer-title">Pages</span>
        <a href="/" class="link link-hover">Home</a>
        <a href="/hello" class="link link-hover">Hello</a>
        <a href="/hellomd" class="link link-hover">Hello md</a>
        <a href="/blog" class="link link-hover">Blog</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
});
