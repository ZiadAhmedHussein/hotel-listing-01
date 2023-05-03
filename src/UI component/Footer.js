import styles from './Footer.module.css';

import { FaFacebookF, FaTwitter, FaInstagram, FaCopyright } from "react-icons/fa";
import visa from "../img/857_visa.jpg";
import pay from "../img/pay.png";
import paypal from "../img/paypal.png";
import masterCard from "../img/master-card.jpg";



const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.content} container`}>
        <div className={styles.column}>
          <h2>Tripnas</h2>
          <p className={styles.pfooter}>There are many variation of Lorem um passages of Lorem Ipsom</p>
          <ul className={styles.icons}>
            <li><FaFacebookF className={styles.icon}/></li>
            <li><FaTwitter className={styles.icon}/></li>
            <li><FaInstagram className={styles.icon}/></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Book Now</h3>
          <ul className={styles.catigory}>
            <li>Flights</li>
            <li>Hotels</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Company</h3>
          <ul className={styles.catigory}>
            <li>About</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Support</h3>
          <ul className={styles.catigory}>
            <li>FAQs</li>
            <li>Refund Policy</li>
            <li>Refer n Earn</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Contact Info</h3>
          <ul className={styles.catigory}>
            <li>
              291 South 21th Street,<br/>
              Suite 721 New York NY 10016
            </li>
            <li>+ 1235 2355 98</li>
            <li>info@Tripnas.com</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Payment Methods</h3>
          <ul className={styles.imgs}>
            <li>
              <img src={visa} alt='visa.img' />
            </li>
            <li>
              <img src={masterCard} alt="masterCard.img" />
            </li>
            <li>
              <img src={paypal} alt="paypal.img" />
            </li>
            <li>
              <img src={pay} alt='pay.img' />
            </li>
            
          </ul>
        </div>
      </div>
      <p className={styles.copyRight}>
        Copyright   
        <FaCopyright className={styles.copyrightIcon} />  
        2021 Tripnas
      </p>
    </div>
  );
};

export default Footer;