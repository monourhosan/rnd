"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".image-hero-content", ".page-intro", ".purpose-banner", ".home-section",
  ".reference-project-grid > article", ".reference-services > article",
  ".insight-grid > article", ".people-grid > article", ".news-list > li",
  ".values-grid > article", ".process > li", ".service-detail", ".sector-detail",
  ".application-detail", ".article-body > section", ".closing", ".section-heading",
].join(",");

export function SiteMotion() {
  const pathname = usePathname();
  const feedback = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let teardown = () => {};

    function setup() {
      teardown();
      if (preference.matches) return;

      const animations = new Set<Animation>();
      const seen = new WeakSet<Element>();
      function animate(element: Element, keyframes: Keyframe[], options: KeyframeAnimationOptions) {
        const animation = element.animate(keyframes, options);
        animations.add(animation);
        animation.onfinish = animation.oncancel = () => animations.delete(animation);
        return animation;
      }

      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          const siblings = entry.target.parentElement?.children;
          const index = siblings ? Array.from(siblings).indexOf(entry.target) : 0;
          animate(entry.target, [
            { opacity: 0, translate: "0 16px" },
            { opacity: 1, translate: "0 0" },
          ], { duration: 550, delay: Math.min(index, 3) * 45, easing: "cubic-bezier(.2,.65,.3,1)" });
        }
      }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

      function register(root: Element) {
        const elements = [...(root.matches(revealSelector) ? [root] : []), ...root.querySelectorAll(revealSelector)];
        for (const element of elements) {
          if (seen.has(element)) continue;
          seen.add(element);
          observer.observe(element);
        }
      }
      const main = document.querySelector("main");
      if (main) register(main);
      // Include asynchronously loaded news cards and streamed page content.
      const mutations = new MutationObserver(records => {
        for (const record of records) for (const node of record.addedNodes) {
          if (node instanceof Element) register(node);
        }
      });
      if (main) mutations.observe(main, { childList: true, subtree: true });

      let clickAnimation: Animation | undefined;
      function onPress(event: PointerEvent) {
        if (event.button !== 0 || !(event.target instanceof Element)) return;
        const control = event.target.closest("a[href],button,input,select,textarea");
        if (!control || control.matches(":disabled,[aria-disabled=true]") || !feedback.current) return;
        clickAnimation?.cancel();
        feedback.current.style.left = `${event.clientX}px`;
        feedback.current.style.top = `${event.clientY}px`;
        clickAnimation = animate(feedback.current, [
          { opacity: .45, transform: "translate(-50%,-50%) scale(.25)" },
          { opacity: 0, transform: "translate(-50%,-50%) scale(1.15)" },
        ], { duration: 420, easing: "ease-out" });
      }
      document.addEventListener("pointerdown", onPress, { passive: true });

      // A few pixels of image movement, without changing text or hit targets.
      const heroCleanups: (() => void)[] = [];
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        document.querySelectorAll<HTMLElement>(".image-hero, .closing-background").forEach(hero => {
          const closing = hero.matches(".closing-background");
          const prefix = closing ? "--closing" : "--hero";
          let frame = 0;
          function move(event: PointerEvent) {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
              const bounds = hero.getBoundingClientRect();
              hero.style.setProperty(`${prefix}-x`, `${(event.clientX - bounds.left - bounds.width / 2) / bounds.width * (closing ? 28 : 16)}px`);
              hero.style.setProperty(`${prefix}-y`, `${(event.clientY - bounds.top - bounds.height / 2) / bounds.height * (closing ? 20 : 12)}px`);
            });
          }
          function reset() {
            cancelAnimationFrame(frame);
            hero.style.removeProperty(`${prefix}-x`);
            hero.style.removeProperty(`${prefix}-y`);
          }
          hero.addEventListener("pointermove", move, { passive: true });
          hero.addEventListener("pointerleave", reset);
          heroCleanups.push(() => {
            hero.removeEventListener("pointermove", move);
            hero.removeEventListener("pointerleave", reset);
            reset();
          });
        });
      }

      const closings = Array.from(document.querySelectorAll<HTMLElement>(".closing-background"));
      let scrollFrame = 0;
      function updateClosingScroll() {
        cancelAnimationFrame(scrollFrame);
        scrollFrame = requestAnimationFrame(() => {
          for (const closing of closings) {
            const bounds = closing.getBoundingClientRect();
            if (bounds.bottom < 0 || bounds.top > window.innerHeight) continue;
            const progress = (window.innerHeight / 2 - bounds.top - bounds.height / 2) / ((window.innerHeight + bounds.height) / 2);
            closing.style.setProperty("--closing-scroll", `${Math.max(-1, Math.min(1, progress)) * 20}px`);
          }
        });
      }
      window.addEventListener("scroll", updateClosingScroll, { passive: true });
      window.addEventListener("resize", updateClosingScroll, { passive: true });
      updateClosingScroll();

      teardown = () => {
        observer.disconnect();
        mutations.disconnect();
        document.removeEventListener("pointerdown", onPress);
        heroCleanups.forEach(cleanup => cleanup());
        window.removeEventListener("scroll", updateClosingScroll);
        window.removeEventListener("resize", updateClosingScroll);
        cancelAnimationFrame(scrollFrame);
        closings.forEach(closing => closing.style.removeProperty("--closing-scroll"));
        animations.forEach(animation => animation.cancel());
        animations.clear();
      };
    }

    setup();
    preference.addEventListener("change", setup);
    return () => { teardown(); preference.removeEventListener("change", setup); };
  }, [pathname]);

  return <div ref={feedback} className="click-feedback" aria-hidden="true" />;
}
