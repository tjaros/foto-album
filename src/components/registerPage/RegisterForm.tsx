/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

interface IFormInput {
  full_name: string;
  email: string;
  self_description: string;
}

const RecruitForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  // eslint-disable-next-line no-console
  const onSubmit = (data: unknown) => console.log({ data });

  return (
    <div className="flex items-center justify-center h-1/4 w-full md:w-1/2 md:border-y-2 border-black">
      <div className="w-full bg-white shadow-lg p-8 ">
        <h2 className="block w-full text-center text-grey-darkest mb-6">
          Exclusive content is within your reach!
        </h2>
        <span className="block w-full text-center text-grey-darkest mb-6">
          Fill in the form and wait for confirmation email with your credentials
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 text-xs mb-4 md:flex md:flex-wrap md:justify-between"
          action="/"
          method="post">
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
              Purpose
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
            I want it!
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecruitForm;
