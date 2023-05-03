
import styles from './App.module.css';

import Header from './UI component/Header';
import ListOfListing from './component/ListOfListing';
import PageContent from './component/PageContent';
import Footer from './UI component/Footer';


function App() {
  return (
    <div className={styles.App}>
      <Header />
      <ListOfListing />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
