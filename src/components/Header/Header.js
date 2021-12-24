import { Link } from 'react-router-dom';

import './Header.css';
import header__logo from '../../images/header__logo.svg';

function Header() {
  return (
    <header className='header'>
      <div className='header__grid-field'>
        <img src={header__logo} alt='Логотип' className='header__logo'></img>
        <h1 className='header__title'>Front-end Developer Test Task</h1>
        <Link to='/shopping-cart' className='header__link'>
          <button className='header__button'>cart<div className='header__cart-counter'>3</div></button>
        </Link>
      </div>
    </header>
  );
};

export default Header;