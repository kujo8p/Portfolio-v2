"use client";

import { type ReactNode } from "react";
import { AnimatePresence, type AnimatePresenceProps } from "framer-motion";

type AniamtePresenceProviderProps = {
  children: ReactNode;
} & AnimatePresenceProps;
function AnimatePresenceProvider({ children, initial, mode = "wait", ...props }: AniamtePresenceProviderProps) {
  return (
    <AnimatePresence initial={initial} mode={mode} {...props}>
      {children}
    </AnimatePresence>
  );
}

export default AnimatePresenceProvider;
