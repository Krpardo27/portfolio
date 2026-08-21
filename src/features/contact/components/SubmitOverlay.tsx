import { AnimatePresence, motion } from "framer-motion";

type SubmitOverlayProps = {
  show: boolean;
};

export default function SubmitOverlay({ show }: SubmitOverlayProps) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-70"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-white px-8 py-6 rounded-2xl shadow-xl flex flex-col items-center gap-4"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: "linear",
              }}
              className="w-10 h-10 border-4 border-zinc-300 border-t-black rounded-full"
            />

            <p className="text-sm font-medium text-black">
              Enviando mensaje...
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
