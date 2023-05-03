import styles from './PageContent.module.css';
import map from "../img/map.jpg";
import { FaClock, FaStar, FaLaptop } from 'react-icons/fa';
import { GoSearch, GoChevronDown, GoCheck } from "react-icons/go";
import bigImg from "../img/bigImg.jpg";
import smallImg from "../img/smallImg.jpg";

import CardOfHotel from './CardOfHotel';

const PageContent = () => {
  const DATA = [
    {
      bigImg: bigImg,
      smallImg1: smallImg,
      smallImg2: smallImg,
      smallImg3: smallImg,
      smallImg4: smallImg,
      hotelName: "Lotus Grand Hotel",
      location: "Deira, Dubai - City center",
      sold:true,
      soldMessage:"All room are sold out",
      numberOfMoreOption: "+2",
      rateReview:"7.0",
      numberReviews: "484",
      sale: "75% off today",
      saleCode: "save 3586",
      dashedAmount: "$4925",
      newAmount: "$1239",
    },
    {
      bigImg: bigImg,
      smallImg1: smallImg,
      smallImg2: smallImg,
      smallImg3: smallImg,
      smallImg4: smallImg,
      hotelName: "Grand Excelsior Hotel Deira",
      location: "Deira, Dubai - City center",
      sold:true,
      soldMessage:"All room are sold out",
      numberOfMoreOption: "+5",
      rateReview:"7.0",
      numberReviews: "484",
      sale: "Mega Sale",
      saleCode: "80% off today",
      dashedAmount: "$4925",
      newAmount: "$1239",
    },
    {
      bigImg: bigImg,
      smallImg1: smallImg,
      smallImg2: smallImg,
      smallImg3: smallImg,
      smallImg4: smallImg,
      hotelName: "The Leela Hotel",
      location: "Deira, Dubai - City center",
      sold:true,
      soldMessage:"All room are sold out",
      numberOfMoreOption: "+2",
      rateReview:"7.0",
      numberReviews: "484",
      sale: "75% off today",
      saleCode: "save 3586",
      dashedAmount: "$4925",
      newAmount: "$1239",
    },
    {
      bigImg: bigImg,
      smallImg1: smallImg,
      smallImg2: smallImg,
      smallImg3: smallImg,
      smallImg4: smallImg,
      hotelName: "Marco Polo Hotel",
      location: "Deira, Dubai - City center",
      sold:true,
      soldMessage:"All room are sold out",
      numberOfMoreOption: "+2",
      rateReview:"7.0",
      numberReviews: "484",
      sale: "75% off today",
      saleCode: "save 3586",
      dashedAmount: "$4925",
      newAmount: "$1239",
    },
    {
      bigImg: bigImg,
      smallImg1: smallImg,
      smallImg2: smallImg,
      smallImg3: smallImg,
      smallImg4: smallImg,
      hotelName: "OYO 270 Dream Land Hotel",
      location: "Deira, Dubai - City center",
      sold:false,
      soldMessage:"All room are sold out",
      numberOfMoreOption: "+2",
      rateReview:"7.0",
      numberReviews: "484",
      sale: "75% off today",
      saleCode: "save 3586",
      dashedAmount: "$4925",
      newAmount: "$1239",
    },
    {
      bigImg: bigImg,
      smallImg1: smallImg,
      smallImg2: smallImg,
      smallImg3: smallImg,
      smallImg4: smallImg,
      hotelName: "Grand Excelsior Hotel Deira",
      location: "Deira, Dubai - City center",
      sold:true,
      soldMessage:"All room are sold out",
      numberOfMoreOption: "+5",
      rateReview:"7.0",
      numberReviews: "484",
      sale: "Mega Sale",
      saleCode: "80% off today",
      dashedAmount: "$4925",
      newAmount: "$1239",
    },
    
  ]
  return (
    <div className={styles.PageContent}>
      <div className={`${styles.content} container`}>
        <div className={styles.column}>
          <div className={styles.map}>
            <img src={map} alt='map.img' />
          </div>
          <div className={styles.searchRating}>
            <div className={styles.select}>
              <h3>Select Filters</h3>
              <div className={styles.activeFilter}>
                <p className={styles.active}>3 active filter(s)</p>
                <p className={styles.reset}>RESET</p>
              </div>
            </div>
            <div className={styles.search}>
              <div className={styles.searchInput}>
                <GoSearch className={styles.searchIcon} />
                <p>Search for location or property</p>
              </div>
              <p className={styles.budget}>Budget</p>
              <p className={styles.priceNight}>price per night</p>
              <div className={styles.priceLine}>
                <div className={styles.line}>
                  <div className={styles.greenLine}></div>
                </div>
                <div className={styles.price}>
                  <p>$2000</p>
                  <p>$473830</p>
                </div>
              </div>
              <div className={styles.pay}>
                <div className={styles.payCheck}></div>
                <p>Pay at Hotel</p>
              </div>
            </div>
            <div className={styles.rating}>
              <h4>Star Rating</h4>
              <ul className={styles.mainList}>
                <li className={styles.mainCatigory}>
                  <div className={styles.checkBox}></div>
                  <ul className={styles.seconList}>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                  </ul>
                </li>
                <li className={styles.mainCatigory}>
                  <div className={styles.checkBox}>
                    <GoCheck className={styles.choosen} />
                  </div>
                  <ul className={styles.seconList}>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={styles.stars}>
                      <FaStar />
                    </li>
                  </ul>
                </li>
                <li className={styles.mainCatigory}>
                  <div className={styles.checkBox}></div>
                  <ul className={styles.seconList}>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={styles.stars}>
                      <FaStar />
                    </li>
                    <li className={styles.stars}>
                      <FaStar />
                    </li>
                  </ul>
                </li>
                <li className={styles.mainCatigory}>
                  <div className={styles.checkBox}></div>
                  <ul className={styles.seconList}>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={`${styles.stars} ${styles.colored}`}>
                      <FaStar />
                    </li>
                    <li className={styles.stars}>
                      <FaStar />
                    </li>
                    <li className={styles.stars}>
                      <FaStar />
                    </li>
                    <li className={styles.stars}>
                      <FaStar />
                    </li>
                  </ul>
                </li>
                <li className={styles.mainCatigory}>
                  <div className={styles.checkBox}></div>
                  <p>No rating</p>
                </li>
              </ul>
            </div>
            <div className={styles.showMore}>
              <p>Show more filters</p>
              <GoChevronDown className={styles.arrowIcon} />
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.hurry}>
            <FaClock className={styles.clockIcon} />
            <p>Hurry! 5% of properties are fully booked!</p>
          </div>
          <CardOfHotel
            bigImg={DATA[0].bigImg} 
            smallImg1={DATA[0].smallImg1}
            smallImg2={DATA[0].smallImg2}
            smallImg3={DATA[0].smallImg3}
            smallImg4={DATA[0].smallImg4}
            hotelName={DATA[0].hotelName}
            location={DATA[0].location}
            sold={DATA[0].sold}
            soldMessage={DATA[0].soldMessage}
            numberOfMoreOption={DATA[0].numberOfMoreOption}
            rateReview={DATA[0].rateReview}
            numberReviews={DATA[0].numberReviews}
            sale={DATA[0].sale}
            saleCode={DATA[0].saleCode}
            dashedAmount={DATA[0].dashedAmount}
            newAmount={DATA[0].newAmount}
          />
          <CardOfHotel
            bigImg={DATA[1].bigImg} 
            smallImg1={DATA[1].smallImg1}
            smallImg2={DATA[1].smallImg2}
            smallImg3={DATA[1].smallImg3}
            smallImg4={DATA[1].smallImg4}
            hotelName={DATA[1].hotelName}
            location={DATA[1].location}
            sold={DATA[1].sold}
            soldMessage={DATA[1].soldMessage}
            numberOfMoreOption={DATA[1].numberOfMoreOption}
            rateReview={DATA[1].rateReview}
            numberReviews={DATA[1].numberReviews}
            sale={DATA[1].sale}
            saleCode={DATA[1].saleCode}
            dashedAmount={DATA[1].dashedAmount}
            newAmount={DATA[1].newAmount}
          />
          <CardOfHotel
            bigImg={DATA[2].bigImg} 
            smallImg1={DATA[2].smallImg1}
            smallImg2={DATA[2].smallImg2}
            smallImg3={DATA[2].smallImg3}
            smallImg4={DATA[2].smallImg4}
            hotelName={DATA[2].hotelName}
            location={DATA[2].location}
            sold={DATA[2].sold}
            soldMessage={DATA[2].soldMessage}
            numberOfMoreOption={DATA[2].numberOfMoreOption}
            rateReview={DATA[2].rateReview}
            numberReviews={DATA[2].numberReviews}
            sale={DATA[2].sale}
            saleCode={DATA[2].saleCode}
            dashedAmount={DATA[2].dashedAmount}
            newAmount={DATA[2].newAmount}
          />
          <div className={styles.logInForExtra}>
            <div className={styles.logInForExtraColumn}>
              <FaLaptop className={styles.lapIcon} />
              <div className={styles.detailsExtra}>
                <h3>Login for extra 5% off</h3>
                <p>Get additional 5% discount by signing up</p>
              </div>
            </div>
            <p className={styles.loginButton}>Login</p>
          </div>
          <CardOfHotel
            bigImg={DATA[3].bigImg} 
            smallImg1={DATA[3].smallImg1}
            smallImg2={DATA[3].smallImg2}
            smallImg3={DATA[3].smallImg3}
            smallImg4={DATA[3].smallImg4}
            hotelName={DATA[3].hotelName}
            location={DATA[3].location}
            sold={DATA[3].sold}
            soldMessage={DATA[3].soldMessage}
            numberOfMoreOption={DATA[3].numberOfMoreOption}
            rateReview={DATA[3].rateReview}
            numberReviews={DATA[3].numberReviews}
            sale={DATA[3].sale}
            saleCode={DATA[3].saleCode}
            dashedAmount={DATA[3].dashedAmount}
            newAmount={DATA[3].newAmount}
          />
          <CardOfHotel
            bigImg={DATA[4].bigImg} 
            smallImg1={DATA[4].smallImg1}
            smallImg2={DATA[4].smallImg2}
            smallImg3={DATA[4].smallImg3}
            smallImg4={DATA[4].smallImg4}
            hotelName={DATA[4].hotelName}
            location={DATA[4].location}
            sold={DATA[4].sold}
            soldMessage={DATA[4].soldMessage}
            numberOfMoreOption={DATA[4].numberOfMoreOption}
            rateReview={DATA[4].rateReview}
            numberReviews={DATA[4].numberReviews}
            sale={DATA[4].sale}
            saleCode={DATA[4].saleCode}
            dashedAmount={DATA[4].dashedAmount}
            newAmount={DATA[4].newAmount}
          />
          <CardOfHotel
            bigImg={DATA[5].bigImg} 
            smallImg1={DATA[5].smallImg1}
            smallImg2={DATA[5].smallImg2}
            smallImg3={DATA[5].smallImg3}
            smallImg4={DATA[5].smallImg4}
            hotelName={DATA[5].hotelName}
            location={DATA[5].location}
            sold={DATA[5].sold}
            soldMessage={DATA[5].soldMessage}
            numberOfMoreOption={DATA[5].numberOfMoreOption}
            rateReview={DATA[5].rateReview}
            numberReviews={DATA[5].numberReviews}
            sale={DATA[5].sale}
            saleCode={DATA[5].saleCode}
            dashedAmount={DATA[5].dashedAmount}
            newAmount={DATA[5].newAmount}
          />
        </div>
      </div>
    </div>
  );
};

export default PageContent;