import './OrderInfo.css';
import OrderList from '../OrderList/OrderList';

function OrderInfo() {
  return (
    <div className='order-info'>
      <p className='order-info__title'>Order Summary</p>
      <OrderList />
      <ul className='order-info__prices'>
        <li className='order-info__price'>
          <p className='order-info__price-text'>Subtotal</p>
          <p className='order-info__price-text'>{`${123 ? '$398' : 'Free'}`}</p>
        </li>
        <li className='order-info__price'>
          <p className='order-info__price-text'>Shipping</p>
          <p className='order-info__price-text'>{`${0 ? '$398' : 'Free'}`}</p>
        </li>
        <li className='order-info__price'>
          <p className='order-info__price-text'>Taxes</p>
          <p className='order-info__price-text'>{`${123 ? '$12.12' : 'Free'}`}</p>
        </li>
        <li className='order-info__price'>
          <p className='order-info__price-text order-info__price-text_total'>Total</p>
          <p className='order-info__price-text order-info__price-text_total'>{`$${398 + 12.12}`}</p>
        </li>
      </ul>
    </div>
  );
};

export default OrderInfo;