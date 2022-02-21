import s from './Container.module.css';

import { motion } from 'framer-motion';

function Container({ children }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className={s.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default Container;
