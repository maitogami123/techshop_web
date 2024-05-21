import React, { forwardRef, useMemo } from 'react';
import { VariantProps } from 'tailwind-variants';
import { TbLoader } from 'react-icons/tb';
import {
    filledButton,
    outlinedButton,
    textButton,
    ghostButton
} from './ButtonStyled';
type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;
type Ref = HTMLButtonElement;

interface ButtonProps extends BaseButtonAttributes {
    isLoading?: boolean;
    disable?: boolean;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    buttonStyled?: VariantProps<
        | typeof filledButton
        | typeof outlinedButton
        | typeof ghostButton
        | typeof textButton
    >;
    buttonVariant?: 'filled' | 'outlined' | 'text' | 'ghost';
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
    const {
        type,
        children,
        buttonStyled,
        buttonVariant = 'filled',
        disable,
        isLoading,
        leftIcon,
        rightIcon,
        className,
        title,
        onClick,
        ...rest
    } = props;
    const { newIcon: icon, iconPlacement } = useMemo(() => {
        let newIcon = rightIcon || leftIcon;
        if (isLoading) {
            newIcon = <TbLoader className="animate-spin" size={25} />;
        }
        return {
            newIcon,
            iconPlacement: rightIcon ? ('right' as const) : ('left' as const)
        };
    }, [isLoading, leftIcon, rightIcon]);
    const renderButtonVariant = () => {
        switch (buttonVariant) {
            case 'filled':
                return filledButton({ ...buttonStyled, className });
            case 'outlined':
                return outlinedButton({ ...buttonStyled, className });
            case 'text':
                return textButton({ ...buttonStyled, className });
            case 'ghost':
                return ghostButton({ ...buttonStyled, className });
        }
    };
    return (
        <button
            className={renderButtonVariant()}
            {...rest}
            onClick={onClick}
            ref={ref}
            type={type ? 'submit' : 'button'}
            disabled={disable || isLoading}
            title={title}
        >
            {icon && iconPlacement === 'left' ? (
                <span
                    className={`inline-flex shrink-0 self-center ${children && !isLoading && 'mr-2'}`}
                >
                    {icon}
                </span>
            ) : null}
            {!isLoading && children}
            {icon && iconPlacement === 'right' ? (
                <span
                    className={`inline-flex shrink-0 self-center ${children && !isLoading && 'ml-2'}`}
                ></span>
            ) : null}
        </button>
    );
});

export default Button;
