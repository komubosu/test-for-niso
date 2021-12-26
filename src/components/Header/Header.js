import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.css';
import header__logo from '../../images/header__logo.svg';

function Header() {
  const orders = useSelector(state => state.orderInfo.orders);

  return (
    <header className='header'>
      <div className='header__grid-field'>
        <img src={header__logo} alt='Логотип' className='header__logo'></img>
        <h1 className='header__title'>Front-end Developer Test Task</h1>
        <Link to='/shopping-cart/shipping' className='header__link'>
          <button className='header__button'>cart<div className='header__cart-counter'>{orders.length}</div></button>
        </Link>
      </div>
    </header>
  );
};

export default Header;