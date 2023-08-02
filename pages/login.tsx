import useAuth from '@/hooks/useAuth';
import { message } from 'antd';
import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Inputs {
  email: string;
  password: string;
}

function Login() {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { signIn } = useAuth();
  const emailValidationPattern =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    password,
  }: Inputs) => {
    if (login) {
      await signIn(email, password);
    } else {
      return;
    }
  };

  const signInWithGithub = async () => {
    try {
      const auth = getAuth();
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (error) {
      message.error('GitHub login is failed!');
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Home - NetFlix</title>
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
        <h1 className="text-4xl font-semibold">Sign in</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="text"
              placeholder="email"
              className="input"
              defaultValue="khanh@gmail.com"
              {...register('email', {
                required: true,
                pattern: emailValidationPattern,
              })}
            />
            {errors?.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Please enter valid email
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="password"
              className="input"
              defaultValue="123123"
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
            className="w-full rounded bg-[#e50914] py-3 font-semibold capitalize"
            onClick={() => setLogin(true)}
          >
            Sign In
          </button>

          <button onClick={() => signInWithGithub()}>
            Sign in with GitHub
          </button>

          <label>
            <input type="checkbox" />
            Remember me
          </label>
        </div>

        <div className="text-[gray]">
          New to Netflix?{' '}
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={() => router.push('/register')}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
