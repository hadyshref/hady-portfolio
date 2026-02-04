"use client";

import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { videos } from "../Data/DynamicData";

// Framer Motion variants
const card = { rest: {}, hover: {} };
const rail = { rest: { scaleY: 0 }, hover: { scaleY: 1 } };
const mask = { rest: { clipPath: "inset(100% 0 0 0)" }, hover: { clipPath: "inset(0 0 0 0)" } };
const play = { rest: { opacity: 0, scale: 0.9 }, hover: { opacity: 1, scale: 1 } };
const meta = { rest: { y: 32, opacity: 0 }, hover: { y: 0, opacity: 1 } };

// Properly type VideoCard props
interface VideoCardProps {
  video: {
    id: string | number;
    src: string;
    title: string;
    tag: string;
  };
  index: number;
  activeId: string | number | null;
  setActiveId: React.Dispatch<React.SetStateAction<string | number | null>>;
}

function VideoCard({ video, index, activeId, setActiveId }: VideoCardProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  const isActive = activeId === video.id;

  const togglePlay = () => {
    if (!ref.current) return;

    if (ref.current.paused) {
      setActiveId(video.id);
      ref.current.play();
    } else {
      ref.current.pause();
      setActiveId(null);
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    if (activeId !== video.id && !ref.current.paused) {
      ref.current.pause();
    }
  }, [activeId, video.id]);

  return (
    <motion.article
      variants={card}
      initial="rest"
      animate="rest"
      whileHover="hover"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950"
    >
      {/* Vertical rail */}
      <motion.div
        variants={rail}
        transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
        className="absolute left-0 top-0 bottom-0 z-10 w-[2px] origin-top bg-white/70"
      />

      {/* Preview */}
      <div className="relative aspect-video w-full overflow-hidden">
        {/* Click layer */}
        <button
          type="button"
          aria-label={isActive ? "Pause video" : "Play video"}
          onClick={togglePlay}
          className="absolute inset-0 z-20 cursor-pointer"
        />

        <video
          ref={ref}
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:grayscale-0"
          src={video.src}
          playsInline
          preload="metadata"
          onPlay={() => setActiveId(video.id)}
          onEnded={() => setActiveId(null)}
        />

        {/* Reveal mask */}
        <motion.div
          variants={mask}
          transition={{ duration: 0.45, ease: [0.42, 0, 0.58, 1] }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        />

        {/* Play / Pause icon */}
        <motion.div
          variants={play}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 backdrop-blur-sm">
            {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </div>
        </motion.div>

        {/* Floating meta bar */}
        <motion.div
          variants={meta}
          transition={{ duration: 0.35, ease: [0.42, 0, 0.58, 1] }}
          className="pointer-events-none absolute bottom-4 left-4 right-4 z-30 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-neutral-300">{video.tag}</p>
              <h3 className="mt-1 text-sm font-medium tracking-tight">{video.title}</h3>
            </div>
            <span className="text-xs text-neutral-400">0{video.id}</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        className="origin-left absolute bottom-0 left-0 right-0 h-px bg-white/40"
      />
    </motion.article>
  );
}

export default function FeaturedVideosSection() {
  const [activeId, setActiveId] = useState<string | number | null>(null);

  return (
    <section className="relative w-full bg-black text-white py-28" id="work">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Selected work</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Films & Motion</h2>
          <p className="mt-5 text-neutral-400">
            Long‑form edits and motion pieces crafted with rhythm, structure and visual restraint.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
