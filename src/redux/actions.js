import {
  UPDATE_BILLING_INFO,
  UPDATE_PAYMENT_INFO,
  UPDATE_SHIPPING_INFO
} from "./types";

export function updateShippingInfo(shippingInfo) {
  return {
    type: UPDATE_SHIPPING_INFO,
    payload: shippingInfo,
  };
};

export function updateBillingInfo(billingInfo) {
  return {
    type: UPDATE_BILLING_INFO,
    payload: billingInfo,
  };
};

export function updatePaymentInfo(paymentInfo) {
  return {
    type: UPDATE_PAYMENT_INFO,
    payload: paymentInfo,
  };
};