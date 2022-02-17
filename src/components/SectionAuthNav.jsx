import s from './SectionAuthNav.module.css';

export default function SectionAuthNav({ children }) {
  return <section className={s.sectionAuthNav}>{children}</section>;
}
