import s from './ModalTeamContainer.module.css';
import Team from '../Team';

export default function ModalTeamContainer() {
  return (
    <div className={s.modalContainer}>
      <Team />
    </div>
  );
}
