import styles from "./ListOfListing.module.css";

const ListOfListing = () => {
  return (
    <div className={styles.listOfListing}>
      <div className={styles.row}>
          <div className={`${styles.checksInOut} container`}>
            <ul className={styles.listCheckInOut}>
              <li>
                <h4>Distination/Property</h4>
                <h3>Dubai, United Arab Emirates</h3>
              </li>
              <li>
                <h4>Check In</h4>
                <h3>Tue, 17 Sept 2021</h3>
              </li>
              <li>
                <h4>Check Out</h4>
                <h3>Thu, 19 Sept 2021</h3>
              </li>
              <li>
                <h4>2 Adults</h4>
                <h3>1 Room</h3>
              </li>
            </ul>
            <p className={styles.searchButton}>
              Modify Search
            </p>
          </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.listHotels} container`}>
          <p className={styles.dubaiProperty}>
            Showing 853 properties in Dubai
          </p>
          <div className={styles.sort}>
            <p>Sort by</p>
            <ul>
              <li>Best Match</li>
              <li>Lowest Price first</li>
              <li>Distance</li>
              <li>Top Reviewed</li>
              <li>Secret Deals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfListing;