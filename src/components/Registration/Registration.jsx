import Container from '../Container/Container';

import RegLeftSide from './RegLeftSide/RegLeftSide';
import RegRightSide from './RegRightSide/RegRightSide';

import s from './Registration.module.css';

export default function Registration() {
  return (
    <section className={s.sectionRegistration}>
      <Container>
        <RegLeftSide />
        <RegRightSide />
      </Container>
    </section>
  );
}
