import { useSelector } from 'react-redux';
import './CompletedOrder.css';

function CompletedOrder() {
  const billingInfo = useSelector(state => state.orderInfo.billingInfo);

  const date = new Date();
  date.setDate(date.getDate() + 7);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='completed-order'>
      <h2 className='completed-order__title'>Thank you for your order!</h2>
      <p className='completed-order__number'>{`order number is: ${Math.floor(Math.random() * 100000)}`}</p>
      <p className='completed-order__email'>Your will recieve an email confirmation shortly to <span className='completed-order__email-span'>{billingInfo.email}</span></p>
      <p className='completed-order__delivery'>Estimated delivery Day is</p>
      <p className='completed-order__date'>{date.toLocaleString('en-US', {
        year: 'numeric',
        day: 'numeric',
        month: 'long',
        weekday: 'long',
      })}</p>
      <button className='completed-order__button' onClick={handlePrint}>Print Recipe</button>
    </div>
  );
};

export default CompletedOrder;