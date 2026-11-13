import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Preloader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(() => {
    try { return !sessionStorage.getItem("tg-seen"); } catch { return true; }
  });

  useEffect(() => {
    if (!show) return;
    try { sessionStorage.setItem("tg-seen", "1"); } catch { /* storage unavailable */ }
    const t = window.setTimeout(() => setShow(false), reduce ? 0 : 1300);
    return () => window.clearTimeout(t);
  }, [show, reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="pre"
          role="status"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl bg-gradient-to-br from-violet to-ember p-[2px]"
          >
            <div className="grid h-24 w-24 place-items-center rounded-[22px] bg-ink text-4xl font-bold tracking-tight">TG</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
