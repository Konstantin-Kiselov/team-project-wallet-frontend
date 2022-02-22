import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';

import pinkEllipse from '../../../img/log&reg/ellipse_pink.svg';

import walletIcon from '../../../img/log&reg/wallet.svg';

import { motion } from 'framer-motion';

import s from './RegRightSide.module.css';

export default function RegRightSide() {
  return (
    <div className={s.RegRightSide}>
      <div className={s.pinkEllipse}>
        <motion.img
          src={pinkEllipse}
          alt="Violet Ellipse"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 1.5 }}
        />
      </div>

      <div className={s.formContainer}>
        <div className={s.titleRightSideContainer}>
          <motion.img
            src={walletIcon}
            alt="wallet icon"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          <h2 className={s.titleRightSide}>Wallet</h2>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}
