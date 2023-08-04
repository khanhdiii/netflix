import React, { useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { message } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { auth } from '@/firebase';
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import github from '@/public/icon/Github.png';
import google from '@/public/icon/Google.webp';
import facebook from '@/public/icon/Facebook.png';

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
  const providerGoogle = new GoogleAuthProvider();
  providerGoogle.setCustomParameters({
    clientId:
      '966777528859-sk06jcbe5mgd49q7re12np5qehk0ddq7.apps.googleusercontent.com',
  });

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, providerGoogle);
    if (result) {
      message.success('login Successfull');
      router.push('/');
    }
  };

  const providerGithub = new GithubAuthProvider();
  providerGithub.setCustomParameters({
    clientId: '9c25a8a9d50e23899ef0',
  });

  const signInWithGithub = async () => {
    const result = await signInWithPopup(auth, providerGithub);
    if (result) {
      message.success('login Successfull');
      router.push('/');
    }
  };

  const providerFacebook = new FacebookAuthProvider();
  providerFacebook.setCustomParameters({
    clientId: '9c25a8a9d50e23899ef0',
  });

  const signInWithFacebook = async () => {
    const result = await signInWithPopup(auth, providerFacebook);
    if (result) {
      message.success('login Successfull');
      router.push('/');
    }
  };

  // const signInWithFacebook = async () => {
  //   signInWithPopup(auth, providerFacebook)
  //     .then((result: any) => {
  //       setUser(result.user);
  //       const credential: any =
  //         FacebookAuthProvider.credentialFromResult(result);
  //       const accessToken = credential.accessToken;
  //       fetch(
  //         `https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`,
  //       ).then((response) => response.blob());
  //     })
  //     .catch((err) => {
  //       message.error(err);
  //     });
  // };

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
              placeholder="Email"
              className="input"
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
            className="w-full rounded bg-[#e50914] py-3 font-semibold capitalize mb-2"
            onClick={() => setLogin(true)}
          >
            Sign In
          </button>

          <label className="mb-2">
            <input type="checkbox" />
            Remember me
          </label>
          <h3 className="flex justify-center mb-2 text-lg font-medium text-gray-300">
            Or Login With
          </h3>
          <div className="flex justify-center">
            <div className="flex justify-around items-center bg-white w-3/6 rounded-md">
              <Image
                width={30}
                height={30}
                className=" rounded bg-transparent py-3 font-semibold capitalize cursor-pointer border-black"
                onClick={() => signInWithGoogle()}
                src={google}
                alt="google"
              />
              <Image
                width={30}
                height={30}
                className=" rounded bg-white py-3 font-semibold capitalize cursor-pointer"
                onClick={() => signInWithGithub()}
                src={github}
                alt="github"
              />
              <Image
                width={30}
                height={30}
                className=" rounded bg-white py-3 font-semibold capitalize cursor-pointer"
                onClick={() => signInWithFacebook()}
                src={facebook}
                alt="facebook"
              />
            </div>
          </div>
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
