import Button from '@/components/ui/button';
import Carousel from '@/components/ui/carousel';
import Input from '@/components/ui/input';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
    return (
        <div className="container grid grid-cols-12">
            <div className="col-span-6 flex items-center">
                <Carousel
                    autoSlide
                    slides={[
                        '/assets/img/Carousel_0.png',
                        '/assets/img/Carousel_1.png',
                        '/assets/img/Carousel_2.png'
                    ]}
                ></Carousel>
            </div>
            <div className=" col-span-4 col-start-8 p-8 bg-white shadow-lg rounded-lg">
                <h1 className="mb-5">Login</h1>
                <div className="divide-y divide-gray-300/50 flex gap-4 flex-col">
                    <form action="" className="flex gap-4 flex-wrap">
                        {/* move placeholder into constant file */}
                        <Input
                            label={'Email'}
                            placehoder={'example@domain.net'}
                            id={'email'}
                            type="email"
                        />
                        <Input
                            label={'Password'}
                            placehoder={'password'}
                            type="password"
                            id={'password'}
                        />
                        <Button
                            buttonVariant="filled"
                            buttonStyled={{
                                color: 'primary',
                                size: 'md',
                                rounded: 'sm',
                                behavior: 'block'
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            buttonVariant="filled"
                            buttonStyled={{
                                vPadding: 'sm',
                                size: 'md',
                                rounded: 'sm',
                                behavior: 'block'
                            }}
                        >
                            Forget password?
                        </Button>
                    </form>
                    <div className="w-full flex flex-col items-center gap-y-4 pt-4">
                        <h4>Join us NOW ⚡</h4>
                        <Link to={'../register'} className="w-full">
                            <Button
                                buttonVariant="filled"
                                buttonStyled={{
                                    color: 'secondary',
                                    size: 'md',
                                    rounded: 'sm',
                                    behavior: 'block'
                                }}
                                className=""
                            >
                                Register
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
