import Link from "next/link";
import { motion } from "framer-motion";

import * as styles from "./styles";

import { ThreeJS } from "./elements";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Hero() {
  const title = "Solving Challenges,\nServing Users";

  return (
    <motion.div
      css={styles.layout}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <ThreeJS />
      </motion.div>

      <motion.div css={styles.content} variants={containerVariants}>
        <motion.h1 css={styles.title} variants={itemVariants}>
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.02,
                  },
                },
              }}
            >
              {char === "\n" ? <br /> : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p css={styles.subText} variants={itemVariants}>
          <span>SeungChan On</span>
          <span css={styles.separator}>|</span>
          <span>Frontend Developer</span>
        </motion.p>

        <motion.div css={styles.buttons} variants={itemVariants}>
          <Link href="/postList">
            <motion.button
              type="button"
              css={styles.primary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span css={styles.buttonIcon}>📚</span>
              Read Posts
            </motion.button>
          </Link>
          <Link href="/about">
            <motion.button
              type="button"
              css={styles.secondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span css={styles.buttonIcon}>👋</span>
              About
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
