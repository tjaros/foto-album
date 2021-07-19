/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

// const MAILGUN_API_KEY = '9530129bbd48e13f9f6d8a2f59957ba2-e31dc3cc-efe6709e';

// const mailgun = require('mailgun-js')({
//   apiKey: MAILGUN_API_KEY,
//   domain: 'sandbox9291ca5b58a846e1afef446a86b32ad7.mailgun.org'
// });

const RecruitForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line no-console
  const onSubmit = (data: unknown) => console.log({ data });
  //   const data = {
  //     from: 'Excited User <bulkova.katarina@gmail.com>',
  //     to: 'bulkova.katarina@gmail.com',
  //     subject: 'Hello',
  //     text: 'Testing some Mailgun awesomeness!'
  //   };

  //   const sendData = () => {
  //     mailgun.messages().send(data, ((error, body) => {
  //       if (error) {
  //         console.log(error);
  //       }
  //       console.log(body);
  //     }));
  //   };

  //   const onSubmit = async (event: { preventDefault: () => void; }) => {
  //     event.preventDefault(); // Prevent default submission
  //     try {
  //       await sendData();
  //       alert('Your form was successfully submitted!');
  //       setValues({
  //         full_name: '', age: '', phone: '', email: '', self_description: ''
  //       });
  //     } catch (e) {
  //       alert(`Registration failed! ${e.message}`);
  //     }
  //   };

  return (
    <div className="flex items-center justify-center h-1/4 w-full md:w-1/2 md:border-r-2 md:border-l-2 border-black">
      <div className="w-full bg-white shadow-lg p-8 ">
        <h2 className="block w-full text-center text-grey-darkest mb-6">Join us!</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 text-xs mb-4 md:flex md:flex-wrap md:justify-between"
        //   action="/"
        //   method="post"
          >
          <div className="md:w-full center">
            <label className="block text-gray-600" htmlFor="full_name">
              Full Name
            </label>
            <input
              className="w-full border border-black p-2 bg-gray-200 mt-1"
              type="text"
              {...register('full_name', { required: true })}
              id="full_name"
            />
          </div>
          <div className="md:w-full center">
            <label className="block text-gray-600" htmlFor="age">
              Age
            </label>
            <input
              className="w-full border border-black p-2 bg-gray-200 mt-1"
              type="number"
              {...register('age', { required: true, min: 18, max: 80 })}
              id="age"
            />
          </div>
          <div className="md:w-full center">
            <label className="block text-gray-600" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full border border-black p-2 bg-gray-200 mt-1"
              type="text"
              {...register('phone', { required: true })}
              id="phone"
            />
          </div>
          <div className="md:w-full center">
            <label className="block text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-black p-2 bg-gray-200 mt-1"
              {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
              id="email"
            />
          </div>
          <div className="md:w-full center">
            <label className="block text-gray-600" htmlFor="self_description">
              Self Description
            </label>
            <textarea
              className="w-full px-3 py-2 border border-black focus:outline-none bg-gray-200"
              rows={4}
              {...register('self_description', { required: true })}
              id="self_description"
            />
          </div>
          <button
            className="block bg-black hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded"
            type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecruitForm;
