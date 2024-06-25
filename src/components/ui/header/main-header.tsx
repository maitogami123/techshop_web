import { FunctionComponent } from 'react';
import { TbSearch } from 'react-icons/tb';
import Button from '../button';
import { Link } from 'react-router-dom';

interface MainHeaderProps {}

const MainHeader: FunctionComponent<MainHeaderProps> = () => {
    return (
        <div className="w-full shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4">
                <Link to={'/'}>
                    <img src="/public/assets/svg/logo.svg" alt="" />
                </Link>
                <div
                    className="flex flex-1 max-w-lg min-w-fit gap-x-2 items-center border border-solid border-gray-300 p-2
                rounded-md scale-90 focus-within:scale-100 focus-within:border-primary-400 transition-all"
                >
                    <TbSearch />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="outline-none w-full"
                    />
                </div>
                <Button
                    buttonVariant="filled"
                    buttonStyled={{
                        color: 'primary',
                        hPadding: 'lg',
                        size: 'md',
                        rounded: 'sm'
                    }}
                >
                    Login
                </Button>
            </div>
        </div>
    );
};

export default MainHeader;
