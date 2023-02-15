import styles from "./header.module.css";
import { Logo } from "./logo";

interface Link {
  name: string;
  url: string;
}
interface HeaderProps {
  links: Link[];
}
export function Header({ links }: HeaderProps) {
  return (
    <div className={styles.header}>
      <Logo />
      <nav className={styles.menu}>
        {links.map((link) => (
          <div key={link.url + link.name}>
            <a href={link.url}>{link.name}</a>
          </div>
        ))}
      </nav>
    </div>
  );
}
