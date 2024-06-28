import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
    return (
        <div className="container mx-auto w-full max-w-1/3 bg-white shadow-lg rounded-lg">
            <div className="divide-y divide-gray-300/50 flex flex-col p-8 gap-4">
                <form
                    action=""
                    className="flex flex-col w-full gap-4 items-center"
                >
                    <h2 className="">Register</h2>
                    <Input
                        label={'Username'}
                        id={'username'}
                        placehoder={'Enter your username...'}
                    ></Input>
                    <Input
                        label={'Email'}
                        id={'email'}
                        placehoder={'example@domain.ext'}
                        type="email"
                    ></Input>

                    <Input
                        type="password"
                        label={'Password'}
                        id={'password'}
                        placehoder={'password...'}
                    ></Input>
                    <Input
                        type="password"
                        label={'Confirm password'}
                        id={'re_password'}
                        placehoder={'password...'}
                    ></Input>
                    <Button
                        buttonVariant="filled"
                        buttonStyled={{
                            color: 'primary',
                            hPadding: 'lg',
                            size: 'md',
                            rounded: 'sm',
                            behavior: 'block'
                        }}
                    >
                        Register
                    </Button>
                </form>
                <div className="w-full flex flex-col items-center py-4 gap-4">
                    <p>Already have an account?</p>
                    <Link to={'../login'} className="block w-full">
                        <Button
                            buttonVariant="filled"
                            buttonStyled={{
                                color: 'primary',
                                hPadding: 'lg',
                                size: 'md',
                                rounded: 'sm',
                                behavior: 'block'
                            }}
                        >
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
