import React, { useState } from 'react';
import '../index.css';
import { ClaimButton, TryButton } from './Buttons';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First Name cannot be empty';
      isValid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last Name cannot be empty';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email cannot be empty';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Looks like this is not an email';
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password cannot be empty';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully');
      // Handle successful form submission (e.g., submit form data)
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <TryButton>Try it free 7 days then $20/mo. thereafter</TryButton>
      <form
        onSubmit={handleSubmit}
        className="flex h-[56.2rem] w-[54rem] flex-col items-center justify-center gap-8 rounded-[1rem] bg-white text-[1.4rem] font-semibold"
      >
        <div className="relative flex h-[7.8rem] w-[46rem] flex-col">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
            onChange={handleChange}
            className={`rounded-[5px] border p-8 text-black placeholder-black opacity-70 focus:opacity-100 focus:outline-none ${errors.firstName ? 'border-red-500' : 'focus:border-purple'}`}
          />
          {errors.firstName && (
            <>
              <i
                className="fa-solid fa-circle-exclamation absolute right-[15px] top-[20px] text-[2.4rem]"
                style={{ color: '#ff0505' }}
              ></i>{' '}
              <p className="mt-2 self-end text-[11px] font-medium italic text-red-500">
                {errors.firstName}
              </p>
            </>
          )}
        </div>
        <div className="relative flex h-[7.8rem] w-[46rem] flex-col">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            onChange={handleChange}
            className={`rounded-[5px] border p-8 text-black placeholder-black opacity-70 focus:opacity-100 focus:outline-none ${errors.lastName ? 'border-red-500' : 'focus:border-purple'}`}
          />
          {errors.lastName && (
            <>
              <i
                className="fa-solid fa-circle-exclamation absolute right-[15px] top-[20px] text-[2.4rem]"
                style={{ color: '#ff0505' }}
              ></i>
              <p className="mt-2 self-end text-[11px] font-medium italic text-red-500">
                {errors.lastName}
              </p>
            </>
          )}
        </div>
        <div className="relative flex h-[7.8rem] w-[46rem] flex-col">
          <input
            name="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
            className={`rounded-[5px] border p-8 text-black placeholder-black opacity-70 focus:opacity-100 focus:outline-none ${errors.email ? 'border-red-500' : 'focus:border-purple'}`}
          />

          {errors.email && (
            <>
              <i
                className="fa-solid fa-circle-exclamation absolute right-[15px] top-[20px] text-[2.4rem]"
                style={{ color: '#ff0505' }}
              ></i>
              <p className="mt-2 self-end text-[11px] font-medium italic text-red-500">
                {errors.email}
              </p>
            </>
          )}
        </div>
        <div className="relative flex h-[7.8rem] w-[46rem] flex-col">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={`rounded-[5px] border p-8 text-black placeholder-black opacity-70 focus:opacity-100 focus:outline-none ${errors.password ? 'border-red-500' : 'focus:border-purple'}`}
          />
          {errors.password && (
            <>
              <i
                className="fa-solid fa-circle-exclamation absolute right-[15px] top-[20px] text-[2.4rem]"
                style={{ color: '#ff0505' }}
              ></i>
              <p className="mt-2 self-end text-[11px] font-medium italic text-red-500">
                {errors.password}
              </p>
            </>
          )}
        </div>

        <ClaimButton type="submit">CLAIM YOUR FREE TRIAL</ClaimButton>
        <p className="text-[1.1rem] text-[#BAB7D4]">
          By clicking the button, you are agreeing to our{' '}
          <span className="text-pink">Terms and Services</span>
        </p>
      </form>
    </div>
  );
}

export default Form;
