import { EnvironmentOutlined, FacebookOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, XOutlined } from '@ant-design/icons';
import styles from './Footer.module.scss';
import Logo from '../../assets/images/logo.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <Image src={Logo} alt="logo" width={50} height={50} />
          <h3 className='font-bold w-[50px] ml-3'>Sport Market</h3>
        </div>
        <div className={styles.footerContacts}>
          <h4>Контакты</h4>
          <p><PhoneOutlined /> +998 (90) 565-85-85</p>
          <p><MailOutlined /> support@fgnma.com</p>
        </div>
        <div className={styles.footerAddress}>
          <p><EnvironmentOutlined /> Tashkent Sh. Chilonzor 9 kvartal 12 uy</p>
        </div>
        <div className={styles.footerSubscribe}>
          <h4>Подписаться</h4>
          <input type="email" placeholder="support@fgnma.com" className={styles.subscribeInput} />
          <button className={styles.subscribeButton}>Отправить</button>
          <div className={styles.footerSocial}>
            <a href="#"><InstagramOutlined className={styles.socialIcon} /></a>
            <a href="#"><FacebookOutlined className={styles.socialIcon} /></a>
            <a href="#"><XOutlined className={styles.socialIcon} /></a>
          </div>
        </div>
      </div>
      <div className={styles.footerLegal}>
        <p>© 2022 All Rights Reserved</p>
        <div className='flex items-center gap-[20px]'>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sales and Refunds</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
