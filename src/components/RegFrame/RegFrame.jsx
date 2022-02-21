import ellipseViolet from '../../img/log&reg/ellipse_violet.svg';

import bigShadow from '../../img/log&reg/registration/frame/big_shadow.svg';
import cellphone from '../../img/log&reg/registration/frame/cellphone.svg';
import dollar from '../../img/log&reg/registration/frame/dollar.svg';
import flowerpot from '../../img/log&reg/registration/frame/flowerpot.svg';
import sheetOfPaper from '../../img/log&reg/registration/frame/sheet_of_paper.svg';
import woman from '../../img/log&reg/registration/frame/woman.svg';

import { motion } from 'framer-motion';

const RegFrame = () => {
  return (
    <div style={{ position: 'relative' }}>
      <motion.img
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0 }}
        src={ellipseViolet}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
          bottom: '-752px',
          right: '86px',
        }}
      />
      <motion.img
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        src={bigShadow}
        alt=""
        style={{ position: 'absolute', maxWidth: 'none', top: '554px' }}
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
          top: '202px',
          left: '96px',
        }}
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
          top: '188px',
          left: '310px',
        }}
      />
      <motion.img
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8 }}
        src={flowerpot}
        alt=""
        style={{ position: 'absolute', maxWidth: 'none', top: '300px' }}
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
          top: '402px',
          left: '2px',
        }}
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
          top: '234px',
          left: '240px',
        }}
      />
    </div>
  );
};

export default RegFrame;
