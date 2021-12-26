import { useSelector } from 'react-redux';
import OrderCard from '../OrderCard.js/OrderCard';

import './OrderList.css';

function OrderList() {
  const orders = useSelector(state => state.orderInfo.orders);

  return (
    <ul className='order-list'>
      {orders.map(order => (
        <OrderCard order={order} key={order.id} />
      ))}
    </ul>
  );
};

export default OrderList;