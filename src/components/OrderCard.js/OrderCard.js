import './OrderCard.css';

function OrderCard({ order }) {

  return (
    <li className='order-card'>
      <img src={order.picture} alt='Покупка' className='order-card__img'></img>
      <div className='order-card__field'>
        <div className='order-card__text-field'>
          <p className='order-card__text order-card__text_title'>{order.name}</p>
          <p className='order-card__text order-card__text_title'>{`$${order.price}`}</p>
        </div>
        <p className='order-card__text'>{order.color}</p>
        <p className='order-card__text'>{order.quantity}</p>
      </div>
    </li>
  )
};

export default OrderCard;