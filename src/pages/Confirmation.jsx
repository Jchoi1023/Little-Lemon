import React from 'react';

export default function Confirmation({ bookingDate, bookingTime, number }) {
  return (
    <div className='text-center'>
      <h1>Your Reservation is Confirmed!</h1>
      {/* <span>{bookingDate}</span> */}
      <h4>A confirmation message has been sent to your email.</h4>
      <h4>Thanks for dining with us!</h4>
    </div>
  );
}
