import Button from '@/components/ui/button';
import Carousel from '@/components/ui/carousel';
import { FunctionComponent } from 'react';
import { TbCpu, TbDeviceDesktop, TbHeadset } from 'react-icons/tb';

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
    return (
        <div className="grid grid-cols-12 gap-4 mb-4">
            <div className="col-span-4 bg-white shadow-lg w-full h-fit flex flex-col items-start rounded-lg p-4 gap-2">
                <Button
                    buttonVariant="ghost"
                    buttonStyled={{ hPadding: 'sm', vPadding: 'sm' }}
                    className="flex w-full justify-start gap-2 hover:bg-blue-500 hover:text-white rounded-lg"
                >
                    <TbDeviceDesktop size={24} /> Computer
                </Button>
                <Button
                    buttonVariant="ghost"
                    buttonStyled={{ hPadding: 'sm', vPadding: 'sm' }}
                    className="flex w-full justify-start gap-2 hover:bg-blue-500 hover:text-white rounded-lg"
                >
                    <TbHeadset size={24} /> Gaming gear
                </Button>
                <Button
                    buttonVariant="ghost"
                    buttonStyled={{ hPadding: 'sm', vPadding: 'sm' }}
                    className="flex w-full justify-start gap-2 hover:bg-blue-500 hover:text-white rounded-lg"
                >
                    <TbCpu size={24} /> CPU
                </Button>
                <Button
                    buttonVariant="ghost"
                    buttonStyled={{ hPadding: 'sm', vPadding: 'sm' }}
                    className="flex w-full justify-start gap-2 hover:bg-blue-500 hover:text-white rounded-lg"
                >
                    <TbDeviceDesktop size={24} /> VGA
                </Button>
            </div>
            <div className="col-span-8 w-full">
                <Carousel
                    slides={[
                        '/assets/img/Carousel_0.png',
                        '/assets/img/Carousel_1.png',
                        '/assets/img/Carousel_2.png'
                    ]}
                />
            </div>
        </div>
    );
};

export default Hero;
