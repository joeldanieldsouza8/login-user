import { Link } from "react-router-dom";

import styles from "./Header.module.css";

interface HeaderProps {
  logo: string;
}

function Header({ logo }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link to="/home">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
