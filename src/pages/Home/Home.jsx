import { FaSearch } from 'react-icons/fa';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={style.homeContainer}>
        <Header transparent={true} />
        <div className='searchBarContainer'>
          <form className={style.formWrapper}>
            <div className={style.formContainer}>
              <input type='text' />
              <input type='datetime-local' name='check-in' id='' />
              <input type='datetime-local' name='check-out' id='' />
              <input type='number' name='' id='' />
              <FaSearch color='grey' className={style.searchIcon} />
            </div>
          </form>
        </div>
      </div>
      <Footer className={style.footerContainer} />
    </>
  );
};

export default Home;
