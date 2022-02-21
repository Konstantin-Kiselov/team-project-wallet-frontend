import ellipseViolet from '../../img/log&reg/ellipse_violet.svg';

import bigShadow from '../../img/log&reg/registration/frame/big_shadow.svg';
import cellphone from '../../img/log&reg/registration/frame/cellphone.svg';
import dollar from '../../img/log&reg/registration/frame/dollar.svg';
import flowerpot from '../../img/log&reg/registration/frame/flowerpot.svg';
import sheetOfPaper from '../../img/log&reg/registration/frame/sheet_of_paper.svg';
import woman from '../../img/log&reg/registration/frame/woman.svg';

import { motion } from 'framer-motion';

import s from './RegFrame.module.css';

const RegFrame = () => {
  return (
    <div style={{ position: 'relative' }}>
      <motion.img
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, duration: 1.5 }}
        src={ellipseViolet}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
        }}
        className={s.ellipseViolet}
      />
      <motion.img
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        src={bigShadow}
        alt=""
        style={{ position: 'absolute', maxWidth: 'none' }}
        className={s.bigShadow}
      />
      <motion.img
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4 }}
        src={cellphone}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
        }}
        className={s.cellphone}
      />
      <motion.img
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6 }}
        src={dollar}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
        }}
        className={s.dollar}
      />
      <motion.img
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8 }}
        src={flowerpot}
        alt=""
        style={{ position: 'absolute', maxWidth: 'none' }}
        className={s.flowerpot}
      />
      <motion.img
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        src={sheetOfPaper}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
        }}
        className={s.sheetOfPaper}
      />
      <motion.img
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 1.2 }}
        src={woman}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
        }}
        className={s.woman}
      />
    </div>
  );
};

export default RegFrame;
