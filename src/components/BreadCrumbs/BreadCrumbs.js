import './BreadCrumbs.css';
import breadCrumbsImg from '../../images/bread-crumbs__img.svg';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BreadCrumbs() {
  const location = useLocation()
  const shippingInfo = useSelector(state => state.orderInfo.shippingInfo);
  const billingInfo = useSelector(state => state.orderInfo.billingInfo);
  const paymentInfo = useSelector(state => state.orderInfo.paymentInfo);
  
  return (
    <div className='bread-crumbs'>
      <Link
        className={`
          bread-crumbs__link
          ${location.pathname === '/shopping-cart/shipping' ?
            'bread-crumbs__link_active'
          :
            ''
          }
          ${Object.keys(shippingInfo).length !== 0 ?
            'bread-crumbs__link_complete'
          :
            ''
          }`
        }
        to='shipping'
      >Shipping</Link>
      <img src={breadCrumbsImg} alt='bread crumbs' className='bread-crumbs__img'></img>
      <Link
        className={`
          bread-crumbs__link
          ${location.pathname === '/shopping-cart/billing' ?
            'bread-crumbs__link_active'
          :
            ''
          }
          ${Object.keys(billingInfo).length !== 0 ?
            'bread-crumbs__link_complete'
          :
            ''
          }`
        }
        to='billing'
        >Billing</Link>
      <img src={breadCrumbsImg} alt='bread crumbs' className='bread-crumbs__img'></img>
      <Link
        className={`
        bread-crumbs__link
        ${location.pathname === '/shopping-cart/payment' ?
          'bread-crumbs__link_active'
        :
          ''
        }
        ${Object.keys(paymentInfo).length !== 0 ?
          'bread-crumbs__link_complete'
        :
          ''
        }`
      }
        to='payment'
        >Payment</Link>
    </div>
  )
};

export default BreadCrumbs;