import { UPDATE_BILLING_INFO, UPDATE_PAYMENT_INFO, UPDATE_SHIPPING_INFO } from "./types";

const initialState = {
  orders: [
    {
      name: 'The Chelsea Boot',
      color: 'Black',
      quantity: 1,
      picture: 'https://i.pinimg.com/originals/95/d7/6a/95d76a37c5e469f10b2a0bc0bbc62aa2.jpg',
      price: 235,
      id: 1,
    },
    {
      name: 'The Twill Snap Backpack',
      color: 'Reverse Denim + Brown leather',
      quantity: 1,
      picture: 'https://res.cloudinary.com/everlane/image/upload/c_fill%2Cdpr_1.5%2Cf_auto%2Ch_1200%2Cq_85%2Cw_1200/v1/i/68e13cd4_0a52.jpg',
      price: 65,
      id: 2,
    },
    {
      name: 'The Twill Zip Tote',
      color: 'Reverse Denim + Black leather',
      quantity: 1,
      picture: 'https://i.pinimg.com/originals/71/d9/a7/71d9a7fcb57136f97d1bdfeea6c9ba6c.jpg',
      price: 48,
      id: 3,
    },
  ],
  shipping: 0,
  taxes: 12.12,
  shippingInfo: {},
  billingInfo: {},
  paymentInfo: {},
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHIPPING_INFO:
      return {...state, shippingInfo: action.payload};
    case UPDATE_BILLING_INFO:
      return {...state, billingInfo: action.payload};
    case UPDATE_PAYMENT_INFO:
      return {...state, billingInfo: action.payload};
    default: return state;
  };
};