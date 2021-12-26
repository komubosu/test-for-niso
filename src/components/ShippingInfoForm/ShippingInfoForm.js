import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../Form/Form';
import { updateShippingInfo } from '../../redux/actions';
import { countryList } from '../../utils/constants';

function ShippingInfoForm() {
  const [ values, setValues ] = useState({});

  const shippingInfo = useSelector(state => state.orderInfo.shippingInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setValues(shippingInfo);
  }, [shippingInfo]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({...values, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(updateShippingInfo(values));

    navigate('/shopping-cart/billing')
  };

  return  (
      <Form
        button='Continue'
        onSubmit={handleSubmit}
      >
        <h2 className='form__title'>Shipping info</h2>
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>Recipient</legend>
          <input
            onChange={handleChange}
            className='form__input'
            placeholder='Full Name'
            name='fullName'
            value={values.fullName || ''}
            pattern='[a-zA-Z -]*'
            required
          />
          <div className='form__field'>
            <input
              onChange={handleChange}
              className='form__input form__input_phone'
              placeholder='Daytime Phone'
              name='phoneNumber'
              value={values.phoneNumber || ''}
              pattern='[+0-9-()]*'
              type='tel'
              required
            />
            <p className='form__input-text'>For delivery questions only</p>
          </div>
        </fieldset>
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>Address</legend>
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

export default ShippingInfoForm;