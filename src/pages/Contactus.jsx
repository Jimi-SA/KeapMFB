import React from 'react';

const Contactus = () => {
  return (
    <div>
      <div className='grid md:grid-cols-2 md:py-10 pt-16 md:pt-0 md:px-8 md:-ml-20'>
        <div className='md:scale-75 scale-95 -mt-10'>
          <div className='pb-7 md:-ml-5 pl-2'>
          <h1 className='md:text-4xl text-2xl md:pb-2 font-semibold md:font-bold  md:pl-5'>
              Contact Us
          </h1>
          <span className='md:pl-5 text-sm md:text-lg'>Explore what we have prepared for you</span>
          </div>
          <div className='bg-teal-800 space-y-4 md:text-lg py-8 text-white md:p-10 p-4 rounded-sm text-sm'>
            <p className=''>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint, dolore minima nobis nemo quo blanditiis eligendi perspiciatis quisquam perferendis fugit sunt ea, a hic obcaecati, totam provident veritatis. Sapiente?
            </p>
            <p className='border-t-2 pt-4 border-gray-200'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint, dolore minima nobis nemo quo blanditiis eligendi perspiciatis quisquam perferendis fugit sunt ea, a hic obcaecati, totam provident veritatis. Sapiente?
            </p>
            <p className='border-t-2 pt-4 border-gray-200'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint, dolore minima nobis nemo quo blanditiis eligendi perspiciatis quisquam perferendis fugit sunt ea, a hic obcaecati, totam provident veritatis. Sapiente?
            </p>
          </div>
        </div>
        <div>
          <form className='py-4 space-y-4 scale-90'>
            <div className='mb-4 gap-2 md:flex space-y-4 md:space-y-0'>
              <div className='w-full md:w-1/2'>
                <label htmlFor='firstname' className='block pl-1 text-sm font-medium text-black'>
                  First Name
                </label>
                <input
                  type='text'
                  id='firstname'
                  className='mt-1 block w-full px-3 py-2 border bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-800 focus:border-teal-800 sm:text-sm'
                  placeholder='Firstname'
                />
              </div>
              <div className='w-full md:w-1/2'>
                <label htmlFor='lastname' className='block pl-1 text-sm font-medium text-black'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastname'
                  className='mt-1 block w-full px-3 py-2 border bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-800 focus:border-teal-800 sm:text-sm'
                  placeholder='Lastname'
                />
              </div>
            </div>

            <div className='pb-4'>
              <label htmlFor='email' className='block pl-1 text-sm font-medium text-black'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='mt-1 block w-full px-3 py-2 border bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-800 focus:border-teal-800 sm:text-sm'
                placeholder='Email'
              />
            </div>

            <div className='pb-4'>
              <label htmlFor='phone' className='block pl-1 text-sm font-medium text-black'>
                Phone
              </label>
              <input
                type='tel'
                id='phone'
                className='mt-1 block w-full px-3 py-2 border bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-800 focus:border-teal-800 sm:text-sm'
                placeholder='(+234) 232 3244 232'
              />
            </div>

            <div className='pb-4'>
              <label htmlFor='country' className='block pl-1 text-sm font-medium text-black'>
                Country
              </label>
              <input
                type='text'
                id='country'
                className='mt-1 block w-full px-3 py-2 border bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-800 focus:border-teal-800 sm:text-sm'
                placeholder='Country'
              />
            </div>

            <div className='pb-4'>
              <label htmlFor='comment' className='block pl-1 text-sm font-medium text-black'>
                Comment
              </label>
              <textarea
                id='comment'
                className='mt-1 block w-full px-3 py-2 border h-44 bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-800 focus:border-teal-800 sm:text-sm'
                placeholder='Your comment'
              />
            </div>

            <div className='pt-4 pb-6 space-y-2 text-sm px-2'>
              <span>By submitting this form, I acknowledge receipt of the <a href='/docs/legal' className='text-amber-600'>Keap MicroFinance Privacy Policy.</a></span>
            </div>

            <button
              type='submit'
              className='w-1/4 px-4 py-3 bg-teal-700 text-white font-semibold rounded-xl shadow-sm hover:bg-teal-800 focus:outline-none text-sm focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
