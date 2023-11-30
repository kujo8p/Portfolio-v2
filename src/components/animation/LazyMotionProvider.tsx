"use client";

import { type ReactNode } from "react";
import { domAnimation, LazyMotion } from "framer-motion";

function LazyMotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export default LazyMotionProvider;
