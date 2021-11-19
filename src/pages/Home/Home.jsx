import { FaSearch } from 'react-icons/fa';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={style.homeContainer}>
        <Header />
        <div className="searchBarContainer">
          <form className={style.formWrapper}>
            <div className={style.formContainer}>
              <input type="text" data-testid="location" />
              <input
                type="datetime-local"
                name="check-in"
                data-testid="checkin"
              />
              <input
                type="datetime-local"
                name="check-out"
                data-testid="checkout"
              />
              <input type="number" name="" data-testid="guests" />
              <FaSearch
                color="grey"
                className={style.searchIcon}
                data-testid="searchbutton"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer className={style.footerContainer} />
    </>
  );
};

export default Home;
