import ellipseViolet from '../../img/log&reg/ellipse_violet.svg';

import bigShadow from '../../img/log&reg/login/frame/big_shadow.svg';
import cellphone from '../../img/log&reg/login/frame/cellphone.svg';
import dollar from '../../img/log&reg/login/frame/dollar.svg';
import flowerpot from '../../img/log&reg/login/frame/flowerpot.svg';

import man from '../../img/log&reg/login/frame/man.svg';
import creditCard from '../../img/log&reg/login/frame/credit_card.svg';
import shopping from '../../img/log&reg/login/frame/shopping.svg';
import smallShadow from '../../img/log&reg/login/frame/small_shadow.svg';

import { motion } from 'framer-motion';
import classNames from 'classnames';

const LogFrame = () => {
  return (
    <div style={{ position: 'relative' }}>
      <motion.img
        whileHover={{ scale: 1.3 }}
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0, type: 'string', stiffness: 300 }}
        src={ellipseViolet}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
          bottom: '-745px',
          right: '86px',
        }}
      />
      <motion.img
        whileHover={{ scale: 1.3 }}
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'string', stiffness: 300 }}
        src={bigShadow}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
          top: '554px',
          left: '30px',
        }}
      />
      <motion.img
        whileHover={{ scale: 1.3 }}
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, type: 'string', stiffness: 300 }}
        src={cellphone}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
          top: '202px',
          left: '60px',
          zIndex: 1,
        }}
      />
      <motion.img
        whileHover={{ scale: 1.3 }}
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: 'string', stiffness: 300 }}
        src={dollar}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
          top: '355px',
          left: '340px',
        }}
      />
      <motion.img
        whileHover={{ scale: 1.3 }}
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, type: 'string', stiffness: 300 }}
        src={flowerpot}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
          top: '380px',
          right: '400px',
          zIndex: 10,
        }}
      />
      <motion.img
        whileHover={{ scale: 1.3 }}
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: 'string', stiffness: 300 }}
        src={creditCard}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
          top: '180px',
          left: '245px',
        }}
      />
      <motion.img
        whileHover={{ scale: 1.3 }}
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 1.2, type: 'string', stiffness: 300 }}
        src={man}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
          top: '234px',
          left: '120px',
          zIndex: 5,
        }}
      />

      <motion.img
        whileHover={{ scale: 1.3 }}
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: 'string', stiffness: 300 }}
        src={shopping}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
          top: '290px',
          right: '410px',
        }}
      />

      <motion.img
        whileHover={{ scale: 1.3 }}
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: 'string', stiffness: 300 }}
        src={smallShadow}
        alt=""
        style={{
          position: 'absolute',
          maxWidth: 'none',
          top: '556px',
          left: '',
          right: '390px',
        }}
      />
    </div>
  );
};

export default LogFrame;
