import { auth } from '@/firebase';
import useAuth from '@/hooks/useAuth';
import { Form, Input, message, Row, Col, Button, Spin } from 'antd';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface RegisterForm {
  email: string;
  password: string;
  confirm: string;
}

function Register() {
  const [formRegister] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleSignUp = async (values: RegisterForm) => {
    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );

      if (userCredential && auth.currentUser) {
        // Send email verification
        await sendEmailVerification(auth.currentUser);

        message.success(
          'Account registered successfully! Please check your email for verification.',
        );
        router.push('/');
      }
    } catch (error: any) {
      setLoading(false);
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (user && user.emailVerified) {
      router.push('/');
    }
  }, [user, router]);

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
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24}>
          <Spin spinning={loading}>
            <Form
              layout="vertical"
              form={formRegister}
              name="register"
              onFinish={handleSignUp}
              scrollToFirstError
              className="relative mt-24 space-y-4 rounded bg-white/75 py-10 px-6 w-600"
            >
              <h1 className="text-4xl font-semibold text-center">Register</h1>
              <Form.Item
                className="inline-block w-full"
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                  {
                    type: 'email',
                    message: 'Please input a valid email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="inline-block w-full"
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    min: 6,
                    max: 30,
                    message: 'Please input between 6-30 characters',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The passwords that you entered do not match!',
                        ),
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="flex w-full h-10 rounded bg-[#e50914] py-3 font-semibold capitalize justify-center items-center !hover:bg-black"
                  disabled={loading}
                >
                  <p className="justify-center items-center">
                    {loading ? 'Registering...' : 'Register'}
                  </p>
                </Button>
              </div>

              <div className="py-3 font-semibold capitalize justify-center items-center text-red-500">
                <Button
                  color="red"
                  type="link"
                  onClick={() => router.push('/login')}
                >
                  Back to Login
                </Button>
              </div>
            </Form>
          </Spin>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
