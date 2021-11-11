import { FaSearch } from 'react-icons/fa';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <Header transparent={true} />
        <div className='searchBarContainer'>
          <form className={styles.formWrapper}>
            <div className={styles.formContainer}>
              <input
                type='text'
                className={styles.locationInput}
                placeholder='Where are you going?'
              />
              <input type='datetime-local' name='check-in' id='' />
              <input type='datetime-local' name='check-out' id='' />
              <input type='number' name='' id='' />
              <FaSearch color='grey' className={styles.searchIcon} />
            </div>
          </form>
        </div>
      </div>
      <Footer className={styles.footerContainer} />
    </>
  );
};

export default Home;
