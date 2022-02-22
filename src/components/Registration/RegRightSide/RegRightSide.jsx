import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';

import { motion } from 'framer-motion';

import walletIcon from '../../../img/log&reg/wallet.svg';

import s from './RegRightSide.module.css';

export default function RegRightSide() {
  return (
    <div className={s.RegRightSide}>
      <div className={s.formContainer}>
        <div className={s.titleRightSideContainer}>
          <motion.img
            src={walletIcon}
            alt="wallet icon"
            whileHover={{ scale: 1.1 }}
            transition={{ yoyo: Infinity }}
          />
          <h2 className={s.titleRightSide}>Wallet</h2>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}
