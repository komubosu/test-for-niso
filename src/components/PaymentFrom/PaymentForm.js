import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../Form/Form';
import { updatePaymentInfo } from '../../redux/actions';
import form__image from '../../images/form__image.svg';

function PaymentForm() {
  const [ values, setValues ] = useState({});

  const billingInfo = useSelector(state => state.orderInfo.billingInfo);
  const shippingInfo = useSelector(state => state.orderInfo.shippingInfo);
  const paymentInfo = useSelector(state => state.orderInfo.paymentInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(shippingInfo).length === 0) {
      navigate('/shopping-cart/shipping')
    } else if (Object.keys(billingInfo).length === 0) {
      navigate('/shopping-cart/billing')
    }

    setValues(paymentInfo);
  }, [billingInfo, shippingInfo]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({...values, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(updatePaymentInfo(values));

    navigate('/shopping-cart/completed')
  };

  return  (
    <Form
      button='Pay Securely'
      onSubmit={handleSubmit}
    >
      <h2 className='form__title'>Payment</h2>
      <div className='form__field'>
        <img className='form__image' src={form__image} alt='lock'></img><p className='form__text form__text_info'>This is a secure 128-bit SSL encrypted payment</p>
      </div>
      <label className='form__label' htmlFor='cardholderName'>Cardholder Name</label>
      <input
        className='form__input form__input_payment'
        onChange={handleChange}
        value={values.cardholderName || ''}
        placeholder='Name as it appears on your card'
        id='cardholderName'
        name='cardholderName'
        pattern='[a-zA-Z -]*'
        required
      ></input>
      <label className='form__label' htmlFor='cardNumber'>Card Number</label>
      <input
        className='form__input form__input_payment'
        onChange={handleChange}
        value={values.cardNumber || ''}
        placeholder='XXXX XXXX XXXX XXXX XXXX'
        id='cardNumber'
        name='cardNumber'
        pattern='([0-9]{4}){5}'
        required
      ></input>
      <div className='form__field'>
        <label className='form__label form__label_small' htmlFor='expireDate'>Expire Date
          <input
            className='form__input form__input_small'
            onChange={handleChange}
            value={values.expireDate || ''}
            placeholder='MM / YY'
            id='expireDate'
            name='expireDate'
            required
          ></input>
        </label>
        <label className='form__label form__label_small' htmlFor='securityCode'>Security Code
          <input
            className='form__input form__input_small'
            onChange={handleChange}
            value={values.securityCode || ''}
            pattern='[0-9]*'
            id='securityCode'
            name='securityCode'
            required
          ></input>
        </label>
      </div>
    </Form>
  );
};

export default PaymentForm;