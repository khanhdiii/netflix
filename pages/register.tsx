import useAuth from '@/hooks/useAuth';
import { message } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface RegisterForm {
  email: string;
  password: string;
}

function Register() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const { signUp } = useAuth();
  const emailValidationPattern =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const onSubmit: SubmitHandler<RegisterForm> = async ({ email, password }) => {
    setLoading(true);

    try {
      await signUp(email, password);
      message.success('Register is sucessfully');
    } catch (error) {
      message.success('Register is failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Register - NetFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        alt=""
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold text-center">Register</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="text"
              placeholder="Email"
              className="input"
              {...register('email', {
                required: true,
                pattern: emailValidationPattern,
              })}
            />
            {errors?.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Please enter a valid email
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 40,
              })}
            />
            {errors?.password && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Your password must contain between 6 and 40 characters
              </p>
            )}
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded bg-[#e50914] py-3 font-semibold capitalize"
            disabled={loading}
          >
            {loading ? 'Register...' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
