import { FaRegCopyright } from 'react-icons/fa';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <h2>ASKBNB</h2>
      <div>
        <FaRegCopyright /> {new Date().getFullYear()}
      </div>
      <div>Privacy - Terms</div>
      <div>About</div>
    </div>
  );
};

export default Footer;
