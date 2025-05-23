import { motion } from "framer-motion";

function AvatarOverlay() {
  return (
    <div
      className="absolute top-0 left-0 right-0 z-30 flex justify-center items-start pt-2 pointer-events-none"
      style={{ height: "auto" }}
    >
      <Avatar />
      <div
        className="absolute inset-0 flex flex-col items-end justify-center p-4 pointer-events-none"
        style={{ transform: "translateY(-10%)" }}
      >
        <Text />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <motion.img
      src="/avatar.webp"
      alt="Avatar"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-full object-contain"
    />
  );
}

function Text() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        className="font-bold drop-shadow-lg text-right"
        style={{
          color: "#f5f7fa",
          fontSize: "200px",
          fontFamily: "'Cocogoose Pro', sans-serif",
          fontStyle: "italic",
          lineHeight: 1.05,
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "block", marginBottom: "0.05em" }}
        >
          Hi, I'm
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "block", marginTop: "0.05em" }}
        >
          Sebastian
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="italic text-right"
        style={{
          color: "#aab3c5",
          fontSize: "50px",
          fontFamily: "'Cocogoose Pro', sans-serif",
          fontStyle: "italic",
        }}
      >
        Web Developer
      </motion.p>
    </>
  );
}

export default AvatarOverlay;
