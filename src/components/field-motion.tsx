"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motionScenes, heroMotion, type MotionScene } from "@/content/images";

export function HeroMotionPhoto() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <div className="hero-motion-container" aria-hidden="true">
      {!reducedMotion ? (
        <picture>
          <source srcSet={heroMotion.src} type="image/webp" />
          <source srcSet={heroMotion.gif} type="image/gif" />
          <img
            src={heroMotion.gif}
            alt={heroMotion.alt}
            className="hero-motion-media"
            loading="eager"
            decoding="async"
          />
        </picture>
      ) : (
        <Image
          src={heroMotion.poster}
          alt={heroMotion.alt}
          fill
          priority
          sizes="100vw"
          className="hero-motion-media"
        />
      )}
    </div>
  );
}

export function FieldMotionShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(media.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const activeScene: MotionScene = motionScenes[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % motionScenes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + motionScenes.length) % motionScenes.length);
  };

  return (
    <section className="home-section field-motion-section" id="field-motion" aria-labelledby="field-motion-heading">
      <div className="field-motion-header">
        <div>
          <p className="eyebrow"><span className="tiny-square" />Field Evidence in Motion</p>
          <h2 id="field-motion-heading">Observing lived realities across Bangladesh</h2>
          <p className="field-motion-lead">
            Dependable social and market research begins with attentive observation. Explore live field captures documenting community dynamics, mobility corridors, and micro-commerce.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="field-motion-tabs" role="tablist" aria-label="Field observation scenes">
        {motionScenes.map((scene, index) => {
          const isSelected = index === currentIndex;
          return (
            <button
              key={scene.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`scene-panel-${scene.id}`}
              id={`tab-${scene.id}`}
              className="field-motion-tab"
              onClick={() => setCurrentIndex(index)}
            >
              <span className="field-motion-tab-num">{scene.number}</span>
              <span>{scene.shortTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Main Display Card */}
      <div
        className="field-motion-display"
        role="tabpanel"
        id={`scene-panel-${activeScene.id}`}
        aria-labelledby={`tab-${activeScene.id}`}
      >
        <div className="field-motion-media-wrapper">
          {!prefersReduced ? (
            <picture>
              <source srcSet={activeScene.srcWebp} type="image/webp" />
              <source srcSet={activeScene.srcGif} type="image/gif" />
              <img
                src={activeScene.srcGif}
                alt={activeScene.alt}
                loading="lazy"
                decoding="async"
              />
            </picture>
          ) : (
            <Image
              src={activeScene.poster}
              alt={activeScene.alt}
              fill
              sizes="(max-width: 900px) 100vw, 600px"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>

        <div className="field-motion-info">
          <div className="field-motion-tag-location">
            <span>{activeScene.tag}</span>
            <span aria-hidden="true">•</span>
            <span>{activeScene.location}</span>
          </div>
          <h3>{activeScene.title}</h3>
          <p>{activeScene.summary}</p>

          <div className="field-motion-nav">
            <button
              type="button"
              className="field-motion-nav-btn"
              onClick={handlePrev}
              aria-label="Previous field observation"
              title="Previous scene"
            >
              ←
            </button>
            <button
              type="button"
              className="field-motion-nav-btn"
              onClick={handleNext}
              aria-label="Next field observation"
              title="Next scene"
            >
              →
            </button>
            <span className="field-motion-counter">
              {activeScene.number} / 0{motionScenes.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
