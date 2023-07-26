import React from 'react';
import { Link } from "react-router-dom";

export default function BookingForm() {

  return (
    <section className='m-auto w-3/12 p-12 flex flex-col space-between'>
      <span className='text-center p-5 text-5xl font-serif text-[#F4CE14] font-bold'>
        Little Lemon
      </span>
      <span className='text-center pb-10 text-3xl font-serif text-[#EDEFEE] font-bold'>
        FIND A TABLE
      </span>
      <form className=''>
        <fieldset className='flex flex-col italic h-2/4'>
          <label className='text-white pb-2' htmlFor='date'>
            Date:{' '}
          </label>
          <input
            type='date'
            id='date'
            className='bg-slate-200 rounded-lg h-12 p-2'
          />
          <label className='text-white pb-2 pt-5' htmlFor='time'>
            Choose Time:{' '}
          </label>
          <select id='time' className='bg-slate-200 rounded-lg h-12 p-2'>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor='guests' className='text-white pb-2 pt-5'>
            Number of guests
          </label>
          <input
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='guests'
            className='bg-slate-200 rounded-lg h-12 p-2'
          />
          <label for='occasion' className='text-white pb-2 pt-5'>
            Occasion
          </label>
          <select id='occasion' className='bg-slate-200 rounded-lg h-12 p-2'>
            <option>-</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {/* <input
            type='submit'
            value='Make Your reservation'
            className='mt-10 h-12 bg-[#F4CE14] rounded-lg font-bold'
          /> */}
          <Link className="mt-10 h-12 bg-[#F4CE14] rounded-lg font-bold flex items-center justify-center" to="/confirmation">
          Make Your reservation
        </Link>
        </fieldset>
      </form>
    </section>
  );
}
