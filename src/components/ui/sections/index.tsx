import { FunctionComponent } from 'react';
import Button from '../button';

interface SectionProps {
    children: React.ReactNode;
    heading?: string;
}

const Section: FunctionComponent<SectionProps> = (props) => {
    return (
        <div className="container flex flex-col items-center gap-4 my-8">
            <h1 className="">{props.heading ?? 'Section Heading'}</h1>
            {props.children}
            <Button
                buttonVariant="filled"
                buttonStyled={{
                    color: 'primary',
                    hPadding: 'lg',
                    size: 'md',
                    rounded: 'sm'
                }}
            >
                Xem thêm
            </Button>
        </div>
    );
};

export default Section;
