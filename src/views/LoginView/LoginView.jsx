import Container from '../../components/Container/Container';

import SectionLogin from '../../components/Login/Login';
import LoginForm from '../../components/LoginForm/LoginForm';
import s from '../../views/LoginView/LoginView.module.css';

// import LogFrame from '../../components/LogFrame/LogFrame';
import violetEllipse from '../../img/log&reg/violet_ellipse_full_v.svg';

import loginFrame from '../../img/log&reg/login/frame-log.png';

export default function LoginView() {
  return (
    <SectionLogin>
      <Container>
        <div className={s.commonContainer}>
          <div className={s.leftSide}>
            <img alt="login frame" src={loginFrame} className={s.frameLog} />
            <img
              alt="violet ellipse"
              src={violetEllipse}
              className={s.violetEllipse}
            />
            <h1 className={s.titleLeftSide}>Finance App</h1>
          </div>
          <LoginForm />
        </div>
      </Container>
    </SectionLogin>
  );
}
