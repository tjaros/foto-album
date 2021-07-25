/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type UserSubmitForm = {
  full_name: string;
  age: number;
  phone: number;
  email: string;
  self_description: string;
};

const schema = yup.object().shape({
  full_name: yup
    .string()
    .min(6, 'Fullname must be at least 6 characters')
    .required('Fullname is required'),
  age: yup.number().min(18, 'Min age is 18').max(80, 'Max age is 80').required('Age is required'),
  phohe: yup.number().required('Phone is required'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  self_description: yup
    .string()
    .min(3, 'Purpose must be at least 3 characters')
    .required('Purpose is required')
});

interface RegistertFormPros {
  className?: string;
}

const RecruitForm: React.FC<RegistertFormPros> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(schema)
  });

  const onSubmitHandler = (data: UserSubmitForm) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  return (
    <div className={`flex items-center justify-center w-full border-black h-1/4 md:w-1/2 md:border-y-2 md:my-6 ${className}`}>
      <div className="w-full p-8 bg-white shadow-lg">
        <h1 className="block w-full mb-6 text-3xl text-center text-grey-darkest">
          Join us!
        </h1>
        <span className="block w-full mb-6 text-center text-grey-darkest">
          Fill in information about you and have a change to become one of your models.
        </span>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="mb-4 space-y-4 text-xs md:flex md:flex-wrap md:justify-between">
          <div className="md:w-full center">
            <label className="block text-gray-600" htmlFor="full_name">
              Full Name
            </label>
            <input
              className="w-full p-2 mt-1 bg-gray-200 border border-black"
              {...register('full_name')}
            />
            <p>{errors.full_name?.message}</p>
          </div>
          <div className="md:w-full center">
            <label className="block text-gray-600" htmlFor="age">
              Age
            </label>
            <input
              className="w-full p-2 mt-1 bg-gray-200 border border-black"
              {...register('age')}
            />
            <p>{errors.age?.message}</p>
          </div>
          <div className="md:w-full center">
            <label className="block text-gray-600" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full p-2 mt-1 bg-gray-200 border border-black"
              {...register('phone')}
            />
            <p>{errors.phone?.message}</p>
          </div>
          <div className="md:w-full center">
            <label className="block text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 mt-1 bg-gray-200 border border-black"
              {...register('email', {
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
              })}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="md:w-full center">
            <label className="block text-gray-600" htmlFor="self_description">
              Self Description
            </label>
            <textarea
              className="w-full px-3 py-2 bg-gray-200 border border-black focus:outline-none"
              rows={4}
              {...register('self_description')}
            />
            <p>{errors.self_description?.message}</p>
          </div>
          <button
            className="block p-4 mx-auto text-lg text-white uppercase bg-black rounded hover:bg-teal-dark"
            type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecruitForm;
