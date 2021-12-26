import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../Form/Form';
import { updateBillingInfo } from '../../redux/actions';
import { countryList } from '../../utils/constants';

function BillingInfoForm() {
  const [ values, setValues ] = useState({});

  const billingInfo = useSelector(state => state.orderInfo.billingInfo);
  const shippingInfo = useSelector(state => state.orderInfo.shippingInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(shippingInfo).length === 0) {
      navigate('/shopping-cart/shipping')
    }

    setValues(billingInfo);
  }, [billingInfo, shippingInfo]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({...values, [name]: value});
  };

  const handleClick = () => {
    const {
      fullName,
      streetAddress,
      city,
      zip,
      country,
      bonusAddressInfo,
    } = shippingInfo;

    setValues({
      fullName,
      streetAddress,
      city,
      zip,
      country,
      bonusAddressInfo,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(updateBillingInfo(values));

    navigate('/shopping-cart/payment')
  };

  return  (
      <Form
        button='Continue'
        onSubmit={handleSubmit}
      >
        <div className='form__field'>
          <h2 className='form__title'>Billing Information</h2>
          <p onClick={handleClick} className='form__text form__text_repeat'>Same as shipping</p>
        </div>
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>Billing Contact</legend>
          <input
            onChange={handleChange}
            className='form__input'
            placeholder='Full Name'
            name='fullName'
            value={values.fullName || ''}
            pattern='[a-zA-Z -]*'
            required
          />
          <input
            onChange={handleChange}
            className='form__input'
            placeholder='Email Address'
            name='email'
            value={values.email || ''}
            type='email'
            required
          />
        </fieldset>
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>Billing Address</legend>
          <input
            onChange={handleChange}
            className='form__input'
            placeholder='Street Address'
            name='streetAddress'
            value={values.streetAddress || ''}
            required
          />
          <input
            onChange={handleChange}
            className='form__input'
            placeholder='Apt, Suite, Bldg, Gate Code. (optional)'
            name='bonusAddressInfo'
            value={values.bonusAddressInfo || ''}
          />
          <input
            onChange={handleChange}
            className='form__input form__input_city'
            placeholder='City'
            name='city'
            value={values.city || ''}
            pattern='[a-zA-Z ]*'
            required
          />
          <div className='form__field'>
            <input
              onChange={handleChange}
              className='form__input form__input_country'
              autoComplete='disable'
              placeholder='Country'
              list='countries'
              name='country'
              value={values.country || ''}
              required
            />
            <input
              onChange={handleChange}
              className='form__input form__input_zip'
              placeholder='ZIP'
              name='zip'
              value={values.zip || ''}
              pattern='[0-9]*'
              required
            />
          </div>
        </fieldset>
        <datalist id='countries'>
          {countryList.map(country => <option value={country} key={country}/>)}
        </datalist>
      </Form>
  );
};

export default BillingInfoForm;