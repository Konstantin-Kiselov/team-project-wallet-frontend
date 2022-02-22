import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';

import s from './RegRightSide.module.css';

export default function RegRightSide() {
  return (
    <div className={s.RegRightSide}>
      <div className={s.formContainer}>
        <RegistrationForm />
      </div>
    </div>
  );
}
