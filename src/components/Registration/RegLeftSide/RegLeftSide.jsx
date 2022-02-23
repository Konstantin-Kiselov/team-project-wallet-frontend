import RegFrameImac from '../RegFrameImac/RegFrameImac';

import violetEllipse from '../../../img/log&reg/violet_ellipse_full_v.svg';

import { motion } from 'framer-motion';

import s from './RegLeftSide.module.css';

export default function RegLeftSide() {
  return (
    <div className={s.RegLeftSide}>
      <RegFrameImac />

      <div className={s.violetEllipse}>
        <motion.img
          src={violetEllipse}
          alt="Violet Ellipse"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 1.5 }}
        />
      </div>

      <h1 className={s.titleLeftSide}>Finance App</h1>
    </div>
  );
}
