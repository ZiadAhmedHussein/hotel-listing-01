import styles from "./CardOfHotel.module.css";
import { FaStar, FaMugHot, FaWifi, FaWineGlass, FaClock, FaHeart } from "react-icons/fa";
import { BsGeoAltFill, BsBookmarkX } from "react-icons/bs";

const CardOfHotel = (props) => {
  return (
    <div className={`${props.className} ${styles.CardOfHotel}`}>
      <div className={styles.imgsColumn}>
        <div className={styles.bigImg}>
          <img src={props.bigImg} alt="img"/>
        </div>
        <div className={styles.smallImgs}>
          <img src={props.smallImg1} alt="img" />
          <img src={props.smallImg2} alt="img" />
          <img src={props.smallImg3} alt="img" />
          <img src={props.smallImg4} alt="img" />
        </div>
      </div>
      <div className={styles.detailsColumn}>
        <div className={styles.mainDetails}>
          <h3>{props.hotelName}</h3>
          {!props.sold? "" : 
            <ul className={styles.stars}>
            <li><FaStar /></li>
            <li><FaStar /></li>
            <li><FaStar /></li>
            <li><FaStar /></li>
          </ul>
          }
          <div className={styles.location}>
            <BsGeoAltFill />
            <p>{props.location}</p>
          </div>
          {!props.sold?
            <p className={styles.allAreSold}>
              All rooms are sold out!
              <span>Try changing your dates</span>
            </p>
            :
            <>
              <div className={styles.bookingWay}>
                <p>Free Cancellation</p>
                <p>Pay at Hotel</p>
              </div>
              <div className={styles.options}>
                <div className={styles.breakfast}>
                  <FaMugHot />
                  <p>Breakfast Included</p>
                </div>
                <div className={styles.wifi}>
                  <FaWifi />
                  <p>Free Wifi</p>
                </div>
                <div className={styles.bar}>
                  <FaWineGlass />
                  <p>Bar</p>
                </div>
                <p className={styles.moreOption}>{props.numberOfMoreOption} more amenities</p>
              </div>
              <div className={styles.lastBooked}>
                <FaClock />
                <p>Last booked 2 hours ago</p>
              </div>
            </>
          }
        </div>
        {!props.sold? "" : 
          <div className={styles.reviews}>
            <p className={styles.rateReview}>{props.rateReview}</p>
            <p className={styles.numbersReview}>{props.numberReviews} reviews</p>
          </div>
        }
      </div>
      {!props.sold?
        <div className={styles.missedMessage}>
          <BsBookmarkX />
          <p>You just <br/> Missed it</p>
        </div> 
        :
        <div className={styles.pricingColumn}>
          <FaHeart className={styles.heartIcon} />
          <div className={styles.offerSale}>
            <p className={styles.sale}>{props.sale}</p>
            <p className={styles.saleCode}>{props.saleCode}</p>
          </div>
          <div className={styles.amountOfSale}>
            <p className={styles.dashedAmount}>{props.dashedAmount}</p>
            <p className={styles.newAmount}>{props.newAmount}</p>
            <p className={styles.detailesOfPay}>
              +taxes & fees <span>Price per night</span>
            </p>
          </div>
        </div>
      }
    </div>
  );
};

export default CardOfHotel;