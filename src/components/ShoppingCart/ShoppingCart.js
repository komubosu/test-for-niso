import './ShoppingCart.css';
import OrderInfo from '../OrderInfo/OrderInfo';

function ShoppingCart() {
  return (
    <div className='shopping-cart'>
      <div className='shopping-cart__form'>
        
      </div>
      <div className='shopping-cart__order-info'>
        <OrderInfo />
      </div>
    </div>
  );
};

export default ShoppingCart;