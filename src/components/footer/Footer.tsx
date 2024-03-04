import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <Link to="/home"><HomeIcon /></Link>
      <Link to="/users"><PersonIcon /></Link>
    </div>
  );
}

export default Footer;
